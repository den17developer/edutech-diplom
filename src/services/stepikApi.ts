/**
 * Сервис для взаимодействия с API Stepik
 */
export class StepikApiService {
  private baseUrl = '/stepik-api';
  private clientId = '30JSUc0E72foDGGWgwH1r4ilsWzlaZG9Vu2VTBvV';
  private clientSecret = 'tpQSanwpvg5DffXYFZBlbMIe09KdVgvG6vi5jwiQzuxYOp8ODbdysd2SPVfNFcZjXLUf3fCC7HbqEwU2EesAOYp9w5wTSkSlbOJ0w7BeuaCfJyMiHF84D6JXvv9t4eTR'; 
  private accessToken: string | null = null;
  private tokenExpiration: number = 0;

  /**
   * Получение токена доступа для API Stepik
   */
  private async getAccessToken(): Promise<string> {
    // Проверка, есть ли действующий токен
    if (this.accessToken && Date.now() < this.tokenExpiration) {
      return this.accessToken;
    }

    try {
      const response = await fetch(`${this.baseUrl}/oauth2/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: this.clientId,
          client_secret: this.clientSecret,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка авторизации: ${response.status}`);
      }

      const data = await response.json();
      this.accessToken = data.access_token;
      // Устанавливаем срок действия токена (обычно 1 час для Stepik)
      this.tokenExpiration = Date.now() + (data.expires_in * 1000);

      console.log('Токен успешно получен:', this.accessToken);

      return this.accessToken;
    } catch (error) {
      console.error('Ошибка получения токена:', error);
      throw error;
    }

    
  }

  /**
   * Поиск курсов по параметрам
   * @param params Параметры поиска
   */
  public async searchCourses(params: CourseSearchParams): Promise<CourseSearchResult> {
    try {
      const token = await this.getAccessToken();
      
      // Формируем параметры запроса
      const queryParams = new URLSearchParams();
      
      // Добавляем поисковый запрос, если он есть
      if (params.query) {
        queryParams.append('search', params.query);
      }
      
      // Добавляем фильтры
      if (params.category) {
        queryParams.append('category', params.category);
      }
      
      if (params.isPaid !== undefined) {
        queryParams.append('is_paid', params.isPaid ? 'true' : 'false');
      }
      
      if (params.language) {
        queryParams.append('language', params.language);
      }
      
      // Добавляем сортировку 
      if (params.sorting) {
        queryParams.append('order', params.sorting);
      }
      
      // Добавляем пагинацию
      queryParams.append('page', params.page?.toString() || '1');
      queryParams.append('page_size', params.pageSize?.toString() || '20');

      console.log('Использую токен для запроса:', token);
      console.log('URL запроса курсов:', `${this.baseUrl}/api/courses?${queryParams.toString()}`);
      
      const response = await fetch(`${this.baseUrl}/api/courses?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Ошибка получения курсов: ${response.status}`);
      }

      const data = await response.json();
      
      // Трансформируем данные в формат, используемый в вашем приложении
      return this.transformCourseData(data);
    } catch (error) {
      console.error('Ошибка поиска курсов:', error);
      throw error;
    }
  }

  /**
   * Преобразование данных из API Stepik в формат, используемый в приложении
   */
  private transformCourseData(apiData: any): CourseSearchResult {
    const courses = apiData.courses.map((course: any) => {
      // Определяем уровень сложности
      let level = 'Любой уровень';
      if (course.difficulty === 'easy') {
        level = 'Новичок';
      } else if (course.difficulty === 'medium') {
        level = 'Средний';
      } else if (course.difficulty === 'hard') {
        level = 'Продвинутый';
      }
      
      // Форматируем продолжительность
      const duration = this.formatDuration(course.duration);
      
      return {
        id: course.id,
        title: course.title,
        image: course.cover || 'https://placehold.co/400x300', // Используем заглушку, если нет изображения
        isLike: false, // По умолчанию курс не в избранном
        duration: duration,
        lectures: course.lessons_count || 0,
        level: level,
        rating: course.rating || 0,
        description: course.description || '',
        isPaid: course.is_paid,
        price: course.price || 0,
        instructors: course.instructors || [],
        language: course.language || 'ru',
        beginDate: course.begin_date || null,
        endDate: course.end_date || null,
        certificate: course.certificate || false,
        enrolled: course.enrolled || 0
      };
    });

    return {
      courses,
      pagination: {
        page: apiData.meta.page,
        pageSize: apiData.meta.page_size,
        totalPages: apiData.meta.has_next ? apiData.meta.page + 1 : apiData.meta.page,
        totalItems: apiData.meta.total
      }
    };
  }

  /**
   * Форматирование длительности курса
   */
  private formatDuration(seconds?: number): string {
    if (!seconds) return '0h 0m';
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    return `${hours}h ${minutes}m`;
  }

  /**
   * Получение подробной информации о курсе по ID
   */
  public async getCourseById(courseId: number): Promise<CourseDetail> {
    try {
      const token = await this.getAccessToken();
      
      const response = await fetch(`${this.baseUrl}/courses/${courseId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Ошибка получения курса: ${response.status}`);
      }

      const data = await response.json();
      return this.transformCourseDetail(data.courses[0]);
    } catch (error) {
      console.error('Ошибка получения курса:', error);
      throw error;
    }
  }

  /**
   * Преобразование подробных данных о курсе
   */
  private transformCourseDetail(course: any): CourseDetail {
    // Базовая трансформация как в searchCourses
    const baseCourse = this.transformCourseData({ 
      courses: [course], 
      meta: { page: 1, page_size: 1, has_next: false, total: 1 } 
    }).courses[0];
    
    // Добавляем дополнительные поля для детальной информации
    return {
      ...baseCourse,
      syllabus: course.syllabus || [],
      requirements: course.requirements || [],
      targetAudience: course.target_audience || [],
      certificateDetails: course.certificate_details || null,
      introVideo: course.intro_video || null,
      sections: course.sections || []
    };
  }
}

/**
 * Интерфейсы для типизации
 */
export interface CourseSearchParams {
  query?: string;
  category?: string;
  isPaid?: boolean;
  language?: string;
  sorting?: string;
  page?: number;
  pageSize?: number;
}

export interface CourseSearchResult {
  courses: ProductType[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}

export interface CourseDetail extends ProductType {
  syllabus: string[];
  requirements: string[];
  targetAudience: string[];
  certificateDetails: any;
  introVideo: string | null;
  sections: any[];
}

// Расширяем интерфейс ProductType из вашего приложения
export interface ProductType {
  id?: number;
  title: string;
  image: string;
  isLike: boolean;
  duration: string;
  lectures: number;
  level: string;
  rating: number;
  description?: string;
  isPaid?: boolean;
  price?: number;
  instructors?: any[];
  language?: string;
  beginDate?: string | null;
  endDate?: string | null;
  certificate?: boolean;
  enrolled?: number;
}

// Создаем и экспортируем единственный экземпляр сервиса
export const stepikApi = new StepikApiService();
