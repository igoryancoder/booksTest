export type EndpointsList = {
  itemsList: string;
  item: string;
};

export type ID = {id: number};

export type bookListT = {
  book_author: string[];
  book_publication_city: string;
  book_publication_country: string;
  book_publication_year: number;
  book_pages: number;
  book_title: string;
  id: number;
};

export type bookT = {
  id: number;
  book_author: string[];
  book_title: string;
  book_parallel_title: string;
  book_sub_title: string;
  book_publisher: string;
  book_printer: string;
  book_publication_country: string;
  book_publication_city: string;
  book_publication_year: number;
  book_publication_number: number;
  book_shape: string;
  book_height: number;
  book_volumes: number;
  book_pages: number;
  book_pagination: string;
  book_illustration: string;
  book_publication_type: string;
  book_bibliography: string;
  book_subject: string[];
  included_book_author: string;
  included_book_title: string;
  series_title: string;
  volume_number: number;
  magazine_title: string;
  magazine_opuscule: number;
  magazine_volume: number;
  newspaper_title: string;
  newspaper_volume: number;
  idological_classification: string;
  cronological_classification: string;
  thematical_classification: string[];
  tekmirio_language: string[];
  prototype: string;
  original_language: string;
  original_translated_language: string;
  libraries: string[];
  url: string[];
  contributors: string[];
  funding: string;
  copublished_book_author: string | null;
  copublished_book_title: string | null;
  other_publication: string;
  other_publication_type: string;
  republication_title: string;
  republication_publisher: string;
  republication_instructor: string;
  republication_place: string;
  republication_year: number;
  title_page_text: string;
  kolofonas_text: string;
  description: string;
  prototype_author: string[];
  prototype_title: string;
  prototype_parallel_title: string;
  prototype_subtitle: string;
  prototype_publisher: string;
  prototype_printer: string;
  prototype_publication_country: string;
  prototype_publication_city: string;
  prototype_publication_year: number;
  prototype_shape: string;
  prototype_volumes: number;
  prototype_pages: number;
  prototype_pagination: string;
  prototype_illustration: string;
  prototype_publication_type: string;
  prototype_original_prototype: string;
  prototype_original_language: string;
  translated_prototype_original_language: string;
  prototype_description: string;
  prototype_url: string;
};

export type bookReducerT = {
  page: number;
  itemsPerPage: number;
  filters: string[];
  initialBooksList: bookListT[];
  filteredBooksList: bookListT[];
  bookData: bookT;
  booksSearchText: string;
  isLoading: boolean;
};

export type reducerT = {
  books: bookReducerT;
};

export type actionT = {
  type: string;
  payload: bookReducerT | undefined;
};

export type defaultThemeT = {
  primary: string;
  secondary: string;
  textDark: string;
  textLight: string;
};

export type postValuesT = {
  page: number;
  itemsPerPage: number;
  filters: string[];
};

export type requestParamsT = {
  url: string;
  method: string;
  body?: postValuesT;
};
export type postParamsT = {url: string; body: postValuesT};
export type getParamsT = {url: string};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  books: bookListT[];
  book: bookT;
}

export type RootStackParamList = {
  BooksListScreen: undefined;
  ItemScreen: undefined;
};
