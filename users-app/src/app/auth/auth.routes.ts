import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const auth_routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login', animation: 1
    }
  },
  {
    path: 'singup',
    component: RegisterComponent,
    data: {
      title: 'register', animation: 2
    }
  }
];
