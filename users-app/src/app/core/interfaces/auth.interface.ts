export interface UserRegistration {
  username: string;
  name: string;
  surnames: string;
  email: string;
  password: string;
  age: number;
  active: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  password: string;
}
