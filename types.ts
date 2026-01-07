
export type Category = 'NON-PROD' | 'PROD' | 'COMMON' | 'ALL';

export interface AppDefinition {
  id: string;
  category: Exclude<Category, 'ALL'>;
  name: string;
  logo?: string;
  url: string;
  description?: string;
}

export interface AppState {
  favorites: string[];
  searchQuery: string;
  isDarkMode: boolean;
  activeCategory: Category;
}
