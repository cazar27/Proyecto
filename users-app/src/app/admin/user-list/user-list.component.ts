import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData, apiResponse } from '../../core/interfaces/user.interface';
import { UsersService } from '../../services/users/users.service';
import { DialogService } from '../../services/dialog/dialog.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    MatCardModule,
    MatButton
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  router = inject(Router);
  usersService = inject(UsersService);
  dialogService = inject(DialogService);
  userList$: Observable<apiResponse<UserData>> = this.usersService.getUsers();

  goToDetail(id: string): void {
    this.router.navigate(['/admin/user/', id]);
  }

  deleteUser(userId: string): void {
    const dialogRef = this.dialogService.openConfirmDialog('Eliminación de usuario','¿Esta seguro que quiere elimnar el usuario?');
    dialogRef.afterClosed().subscribe(
      (result: boolean) => {
        if (result) {
          this.usersService.deleteUser(userId).subscribe(
            () => this.userList$ = this.usersService.getUsers()
          )
        }
      }
    )
  }
}
