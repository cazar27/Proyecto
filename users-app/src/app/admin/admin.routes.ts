import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

export const admin_routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
    data: {
      title: 'user list', animation: 1
    }
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    data: {
      title: 'user detail', animation: 2
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'edit profile', animation: 3
    }
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    data: {
      title: 'edit profile', animation: 4
    }
  },
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
];
