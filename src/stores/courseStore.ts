// src/stores/courseStore.ts

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { stepikApi } from '@/services/stepikApi';
import type { 
  ProductType, 
  CourseSearchRequest, 
  CourseSearchResponse,
  CourseSearchState 
} from '@/types';

/**
 * Хранилище состояния для поиска и фильтрации курсов
 */
export const useCourseStore = defineStore('courses', () => {
  // Состояние
  const state = ref<CourseSearchState>({
    query: '',
    filters: {
      category: '',
      isPaid: undefined,
      language: '',
      level: '',
      certificate: undefined
    },
    sort: '',
    pagination: {
      currentPage: 1,
      pageSize: 20,
      totalPages: 0,
      totalItems: 0
    },
    loading: false,
    error: null,
    courses: []
  });

  // Геттеры
  const isLoading = computed(() => state.value.loading);
  const errorMessage = computed(() => state.value.error);
  const courseList = computed(() => state.value.courses);
  const totalItems = computed(() => state.value.pagination.totalItems);
  const totalPages = computed(() => state.value.pagination.totalPages);
  const currentPage = computed(() => state.value.pagination.currentPage);
  const searchQuery = computed(() => state.value.query);
  const activeFilters = computed(() => {
    const filters = state.value.filters;
    return Object.entries(filters)
      .filter(([_, value]) => value !== undefined && value !== '')
      .map(([key, value]) => ({ key, value }));
  });

  // Действия
  /**
   * Поиск курсов с применением текущих фильтров
   */
  const searchCourses = async (resetPage = true) => {
    try {
      // При новом поиске сбрасываем страницу на первую
      if (resetPage) {
        state.value.pagination.currentPage = 1;
      }
      
      state.value.loading = true;
      state.value.error = null;
      
      // Формируем параметры запроса
      const params: CourseSearchRequest = {
        query: state.value.query,
        category: state.value.filters.category,
        isPaid: state.value.filters.isPaid,
        language: state.value.filters.language,
        level: state.value.filters.level,
        certificate: state.value.filters.certificate,
        sorting: state.value.sort,
        page: state.value.pagination.currentPage,
        pageSize: state.value.pagination.pageSize
      };
      
      // Делаем запрос к API
      const result = await stepikApi.searchCourses(params);
      
      // Обновляем состояние
      state.value.courses = result.courses;
      state.value.pagination.totalItems = result.pagination.totalItems;
      state.value.pagination.totalPages = result.pagination.totalPages;
      
      return result;
    } catch (error: any) {
      console.error('Ошибка при поиске курсов:', error);
      state.value.error = error.message || 'Не удалось загрузить курсы';
      state.value.courses = [];
      throw error;
    } finally {
      state.value.loading = false;
    }
  };

  /**
   * Установка поискового запроса
   */
  const setQuery = (query: string) => {
    state.value.query = query;
  };

  /**
   * Установка фильтра
   */
  const setFilter = (key: string, value: any) => {
    // @ts-ignore - динамический доступ к свойствам
    state.value.filters[key] = value;
  };

  /**
   * Установка сортировки
   */
  const setSort = (sort: string) => {
    state.value.sort = sort;
  };

  /**
   * Переход на указанную страницу
   */
  const goToPage = (page: number) => {
    if (page > 0 && page <= state.value.pagination.totalPages) {
      state.value.pagination.currentPage = page;
    }
  };

  /**
   * Сброс всех фильтров и поисковых параметров
   */
  const resetFilters = () => {
    state.value.query = '';
    state.value.filters = {
      category: '',
      isPaid: undefined,
      language: '',
      level: '',
      certificate: undefined
    };
    state.value.sort = '';
    state.value.pagination.currentPage = 1;
  };

  /**
   * Получение детальной информации о курсе по ID
   */
  const getCourseById = async (id: number) => {
    try {
      state.value.loading = true;
      state.value.error = null;
      
      const course = await stepikApi.getCourseById(id);
      return course;
    } catch (error: any) {
      console.error('Ошибка при получении курса:', error);
      state.value.error = error.message || 'Не удалось загрузить информацию о курсе';
      throw error;
    } finally {
      state.value.loading = false;
    }
  };

  /**
   * Добавление/удаление курса из избранного
   */
  const toggleFavorite = (courseId: number) => {
    const index = state.value.courses.findIndex(course => course.id === courseId);
    
    if (index !== -1) {
      state.value.courses[index].isLike = !state.value.courses[index].isLike;
      
      // Здесь можно добавить логику для сохранения избранных курсов
      // например, в localStorage или на сервере через API
      const favorites = getFavorites();
      
      if (state.value.courses[index].isLike) {
        // Добавляем в избранное
        favorites.push(courseId);
      } else {
        // Удаляем из избранного
        const favIndex = favorites.indexOf(courseId);
        if (favIndex !== -1) {
          favorites.splice(favIndex, 1);
        }
      }
      
      // Сохраняем обновленный список избранного
      localStorage.setItem('favorite-courses', JSON.stringify(favorites));
    }
  };

  /**
   * Получение списка ID избранных курсов
   */
  const getFavorites = (): number[] => {
    const storedFavorites = localStorage.getItem('favorite-courses');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  /**
   * Проверка избранных курсов при загрузке
   */
  const checkFavorites = () => {
    const favorites = getFavorites();
    
    state.value.courses.forEach((course, index) => {
      if (course.id && favorites.includes(course.id)) {
        state.value.courses[index].isLike = true;
      }
    });
  };

  // Возвращаем доступные методы и свойства
  return {
    // Состояние
    state,
    
    // Геттеры
    isLoading,
    errorMessage,
    courseList,
    totalItems,
    totalPages,
    currentPage,
    searchQuery,
    activeFilters,
    
    // Действия
    searchCourses,
    setQuery,
    setFilter,
    setSort,
    goToPage,
    resetFilters,
    getCourseById,
    toggleFavorite,
    getFavorites,
    checkFavorites
  };
});