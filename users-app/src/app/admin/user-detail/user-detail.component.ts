import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData, apiResponse } from '../../core/interfaces/user.interface';
import { UsersService } from '../../services/users/users.service';
import { switchMap } from 'rxjs';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    MatButton
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  data$!: Observable<apiResponse<UserData>>;

  route = inject(ActivatedRoute);
  router = inject(Router);
  usersService = inject(UsersService);

  ngOnInit(): void {
    this.data$ = this.route.paramMap.pipe(
      switchMap(params => this.usersService.getUserById(''+params.get('id')!))
    )
  }

  gotoBack(): void {
    this.router.navigate(['/admin/user-list']);
  }

}
