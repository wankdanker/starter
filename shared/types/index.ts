// Shared types between frontend and backend

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}
