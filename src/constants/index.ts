import {EndpointsList, defaultThemeT} from '../types';
export const BASE_URL: string = 'http://nyx.vima.ekt.gr:3000/api/';
export const ENDPOINTS_LIST: EndpointsList = {
  itemsList: 'books',
  item: 'book',
};

export const defaultTheme: defaultThemeT = {
  primary: '#1D7874',
  secondary: '#a4c9c7',
  textDark: '#fff',
  textLight: '#000',
};

export const DEEP_LINKING_URL: string = 'books://book/';
