<template>
  <section class="pt-5">
    <b-container>
      <b-row class="mb-4 align-items-center">
        <!-- Поиск по тексту -->
        <b-col sm="6" xl="4">
          <b-form class="border rounded p-2" @submit.prevent="searchCourses">
            <b-input-group class="input-borderless">
              <b-form-input 
                class="me-1" 
                type="search" 
                placeholder="Найти курс" 
                v-model="searchParams.query"
                @input="debouncedSearch"
              />
              <b-button type="submit" variant="primary" class="mb-0 rounded" :disabled="isLoading">
                <font-awesome-icon :icon="isLoading ? faSpinner : faSearch" :spin="isLoading" />
              </b-button>
            </b-input-group>
          </b-form>
        </b-col>

        <!-- Фильтр по категории -->
        <b-col sm="6" xl="3" class="mt-3 mt-lg-0">
          <b-form class="border rounded p-2 input-borderless">
            <ChoicesSelect 
              id="list-mini-category" 
              class="form-select-sm"
              v-model="searchParams.category"
              @change="searchCourses"
            >
              <option value="">Категория</option>
              <option value="">Все</option>
              <option value="programming">Разработка</option>
              <option value="design">Дизайн</option>
              <option value="business">Бизнес</option>
              <option value="marketing">Маркетинг</option>
              <option value="photography">Фотосъемка</option>
              <option value="languages">Языки</option>
              <option value="mathematics">Математика</option>
              <option value="physics">Физика</option>
            </ChoicesSelect>
          </b-form>
        </b-col>

        <!-- Сортировка -->
        <b-col sm="6" xl="3" class="mt-3 mt-xl-0">
          <b-form class="border rounded p-2 input-borderless">
            <ChoicesSelect 
              id="list-mini-sort" 
              v-model="searchParams.sorting"
              @change="searchCourses"
            >
              <option value="">Сортировка</option>
              <option value="-activity">По активности</option>
              <option value="-rating">По рейтингу</option>
              <option value="-enrolled">По популярности</option>
              <option value="title">По названию (А-Я)</option>
              <option value="-title">По названию (Я-А)</option>
            </ChoicesSelect>
          </b-form>
        </b-col>

        <!-- Кнопка расширенного фильтра -->
        <b-col sm="6" xl="2" class="mt-3 mt-xl-0 d-grid">
          <b-button variant="primary" class="btn-lg mb-0" @click="showFilterModal = true">
            Фильтр
          </b-button>
        </b-col>
      </b-row>

      <!-- Индикатор загрузки -->
      <div v-if="isLoading && !productList.length" class="text-center py-5">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
          <span class="visually-hidden">Загрузка...</span>
        </div>
        <p class="mt-3">Загрузка курсов...</p>
      </div>

      <!-- Сообщение о ошибке -->
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>

      <!-- Список курсов -->
      <b-row class="g-4 justify-content-center" v-if="!isLoading || productList.length">
        <b-col v-if="productList.length === 0 && !isLoading" cols="12" class="text-center py-5">
          <div>
            <font-awesome-icon :icon="faSearch" size="3x" class="text-muted mb-3" />
            <h4>Курсы не найдены</h4>
            <p class="text-muted">Попробуйте изменить параметры поиска</p>
          </div>
        </b-col>
        <b-col lg="10" xxl="6" v-for="(item, idx) in productList" :key="idx">
          <CourseCard :item="item" />
        </b-col>
      </b-row>

      <!-- Пагинация -->
      <b-col cols="12" v-if="pagination.totalPages > 1">
        <nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
          <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
            <li class="page-item mb-0" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="changePage(1)">
                <font-awesome-icon :icon="faAngleDoubleLeft" />
              </a>
            </li>
            <li class="page-item mb-0" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">
                <font-awesome-icon :icon="faAngleLeft" />
              </a>
            </li>
            
            <li 
              v-for="page in displayedPages" 
              :key="page" 
              class="page-item mb-0" 
              :class="{ active: currentPage === page }"
            >
              <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
            
            <li class="page-item mb-0" :class="{ disabled: currentPage === pagination.totalPages }">
              <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">
                <font-awesome-icon :icon="faAngleRight" />
              </a>
            </li>
            <li class="page-item mb-0" :class="{ disabled: currentPage === pagination.totalPages }">
              <a class="page-link" href="#" @click.prevent="changePage(pagination.totalPages)">
                <font-awesome-icon :icon="faAngleDoubleRight" />
              </a>
            </li>
          </ul>
        </nav>
      </b-col>
    </b-container>

    <!-- Модальное окно с расширенным фильтром -->
    <b-modal v-model="showFilterModal" title="Расширенные фильтры" size="lg" hide-footer>
      <b-form @submit.prevent="applyAdvancedFilters">
        <b-row>
          <b-col md="6">
            <b-form-group label="Язык">
              <b-form-select v-model="advancedFilters.language">
                <option value="">Любой язык</option>
                <option value="ru">Русский</option>
                <option value="en">Английский</option>
              </b-form-select>
            </b-form-group>
          </b-col>
          
          <b-col md="6">
            <b-form-group label="Тип курса">
              <b-form-select v-model="advancedFilters.isPaid">
                <option :value="undefined">Все курсы</option>
                <option :value="false">Бесплатные</option>
                <option :value="true">Платные</option>
              </b-form-select>
            </b-form-group>
          </b-col>
          
          <b-col md="6">
            <b-form-group label="Сертификат">
              <b-form-select v-model="advancedFilters.certificate">
                <option :value="undefined">Любой</option>
                <option :value="true">С сертификатом</option>
                <option :value="false">Без сертификата</option>
              </b-form-select>
            </b-form-group>
          </b-col>
          
          <b-col md="6">
            <b-form-group label="Сложность">
              <b-form-select v-model="advancedFilters.level">
                <option value="">Любая сложность</option>
                <option value="beginner">Новичок</option>
                <option value="intermediate">Средний</option>
                <option value="advanced">Продвинутый</option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        
        <div class="d-flex justify-content-end mt-3">
          <b-button variant="secondary" class="me-2" @click="resetFilters">Сбросить</b-button>
          <b-button variant="primary" type="submit">Применить</b-button>
        </div>
      </b-form>
    </b-modal>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { stepikApi, type CourseSearchParams, type ProductType } from '@/services/stepikApi';
import CourseCard from '@/views/pages/course/list-minimal/components/CourseCard.vue';
import { 
  faSearch, 
  faAngleDoubleLeft, 
  faAngleDoubleRight, 
  faAngleLeft,
  faAngleRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import ChoicesSelect from '@/components/ChoicesSelect.vue';
import { debounce } from 'lodash';

// Состояние
const productList = ref<ProductType[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);
const currentPage = ref(1);
const showFilterModal = ref(false);

// Параметры пагинации
const pagination = ref({
  totalItems: 0,
  totalPages: 0,
  pageSize: 20
});

// Параметры поиска
const searchParams = ref<CourseSearchParams>({
  query: '',
  category: '',
  sorting: '',
  page: 1,
  pageSize: 20
});

// Расширенные фильтры
const advancedFilters = ref({
  language: '',
  isPaid: undefined as boolean | undefined,
  certificate: undefined as boolean | undefined,
  level: ''
});

// Отображаемые страницы пагинации
const displayedPages = computed(() => {
  const total = pagination.value.totalPages;
  const current = currentPage.value;
  
  // Если 7 или меньше страниц, показываем все
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  
  // Если мы рядом с началом
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  
  // Если мы рядом с концом
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  
  // Мы посередине
  return [1, '...', current - 1, current, current + 1, '...', total];
});

// Отложенный поиск при вводе в поле поиска
const debouncedSearch = debounce(() => {
  currentPage.value = 1; // Сбрасываем на первую страницу при новом поиске
  searchCourses();
}, 500);

// Загрузка курсов с API Stepik
async function searchCourses() {
  isLoading.value = true;
  error.value = null;
  
  try {
    // Объединяем базовые параметры поиска с расширенными фильтрами
    const params: CourseSearchParams = {
      ...searchParams.value,
      page: currentPage.value,
      // Добавляем расширенные фильтры
      language: advancedFilters.value.language || undefined,
      isPaid: advancedFilters.value.isPaid
    };
    
    const result = await stepikApi.searchCourses(params);
    
    productList.value = result.courses;
    pagination.value = result.pagination;
    
  } catch (err) {
    console.error('Ошибка при поиске курсов:', err);
    error.value = 'Не удалось загрузить курсы. Пожалуйста, попробуйте позже.';
    productList.value = [];
  } finally {
    isLoading.value = false;
  }
}

// Изменение страницы
function changePage(page: number) {
  if (typeof page === 'number' && page !== currentPage.value && page > 0 && page <= pagination.value.totalPages) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Применение расширенных фильтров
function applyAdvancedFilters() {
  currentPage.value = 1; // Сбрасываем на первую страницу
  searchCourses();
  showFilterModal.value = false;
}

// Сброс всех фильтров
function resetFilters() {
  searchParams.value = {
    query: '',
    category: '',
    sorting: '',
    page: 1,
    pageSize: 20
  };
  
  advancedFilters.value = {
    language: '',
    isPaid: undefined,
    certificate: undefined,
    level: ''
  };
  
  currentPage.value = 1;
}

// Следим за изменением страницы для загрузки новых данных
watch(currentPage, () => {
  searchCourses();
});

// Загружаем курсы при монтировании компонента
onMounted(() => {
  searchCourses();
});
</script>

<style scoped>
.page-link {
  cursor: pointer;
}
.input-borderless input,
.input-borderless select {
  border: none;
  box-shadow: none;
}
</style>