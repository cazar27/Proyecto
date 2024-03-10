import { Routes } from '@angular/router';
import { PreloginComponent } from './auth/prelogin/prelogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { auth_routes } from './auth/auth.routes';
import { admin_routes } from './admin/admin.routes';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    component: PreloginComponent,
    children: auth_routes
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: admin_routes
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];
