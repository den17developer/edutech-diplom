import type { ApexOptions } from 'apexcharts';
import type { ComponentOptionsBase, CreateComponentPublicInstance } from 'vue';
import type { RouteParamsRaw } from 'vue-router';

export type IconType = BSIconType | string;

export type BSIconType = ComponentOptionsBase<{}, any, any, any, any, any, any, any, string, any> &
  ThisType<CreateComponentPublicInstance<{}, any, any, any, any, any, any, any, Readonly<{}>>>;

export type RouteType = {
  name: string;
  params?: RouteParamsRaw;
};

export type IdType = string | number;

export type CompanyType = {
  icon?: string;
  image?: string;
  name?: string;
  externalLink?: string;
  route?: RouteType;
};

export type UserType = {
  id?: IdType;
  avatar?: string;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  role?: string;
  token?: string;
  company?: CompanyType;
};

export type FAQType = {
  question: string;
  answer: string;
  route?: RouteType;
};

export type ApexChartType = {
  height: number;
  type?: string;
  series: any[];
  options: ApexOptions;
};

export type BadgeType = {
  text: string;
  class: string;
};

export type CourseType = {
  image: string;
  title: string;
  status?: string;
  lectures?: number;
  completed?: number;
  selling?: number;
  price?: number;
  rating?: number;
  reviews?: number;
  date?: string;
  type?: string;
  instructor?: UserType;
  badges?: BadgeType[];
  description?: string;
  duration?: string;
  isLike?: boolean;
  name?: string;
  students?: string[];
  avatar?: string;
  category?: string;
  courses?: number;
  student?: number;
  progress?: number;
  video_link?: string;
};

export type StudentType = {
  image: string;
  name?: string;
  location?: string;
  date?: string;
  progress?: number;
  tasks?: number;
  payments?: number;
  courses?: number;
  students?: number;
  category?: string;
  features?: string[];
};

export type InstructorType = {
  image: string;
  name?: string;
  title?: string;
  description?: string;
  position?: string;
  courses?: number;
  rating?: number;
  projects?: number;
  score?: number;
  clipboard?: number;
  students?: number;
  lecture?: number;
  badge?: BadgeType;
  verified?: boolean;
  favorite?: boolean;
  duration?: string;
};

export type ReviewType = {
  id?: number;
  name: string;
  image: string;
  course?: string;
  date?: string;
  title?: string;
  content?: string;
  rating?: number;
  isCollapse?: boolean;
};

export type ProductType = {
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
};

// Модель для курса со Stepik API с расширенной информацией
export interface StepikCourse extends ProductType {
  summary?: string;
  syllabus?: string[];
  requirements?: string[];
  targetAudience?: string[];
  certificateDetails?: any;
  introVideo?: string | null;
  sections?: any[];
  publicAccess?: boolean;
  categoryText?: string;
}

// Настройки для конфигурации Stepik API
export interface StepikApiConfig {
  clientId: string;
  clientSecret: string;
  redirectUri?: string;
}

// Интерфейс для запроса поиска курсов
export interface CourseSearchRequest {
  query?: string;
  category?: string;
  isPaid?: boolean;
  language?: string;
  level?: string;
  certificate?: boolean;
  sorting?: string;
  page?: number;
  pageSize?: number;
}

export interface CourseSearchResponse {
  courses: ProductType[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}

// Интерфейс для хранения состояния поиска курсов
export interface CourseSearchState {
  query: string;
  filters: {
    category: string;
    isPaid?: boolean;
    language?: string;
    level?: string;
    certificate?: boolean;
  };
  sort: string;
  pagination: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
  loading: boolean;
  error: string | null;
  courses: ProductType[];
}