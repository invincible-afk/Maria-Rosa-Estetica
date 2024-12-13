export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}