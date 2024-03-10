export interface UserUpdate {
  username: string;
  name: string;
  surnames: string;
  age: number;
  active: boolean;
}

export interface UserData {
  _id: string;
  username: string;
  name: string;
  surnames: string;
  email: string;
  password: string;
  age: number;
  active: boolean;
  lastLogging: Date | null;
  creationDate: Date | null;
  __v: number;
}

export interface apiResponse<T> {
  ok?: boolean;
  msg?: string;
  err_msg?: any;
  results?: T[];
  user?: T;
  message?: string;
  next?: PaginationData;
}

interface PaginationData {
  page: number;
  limit: number;
  count: number;
}
