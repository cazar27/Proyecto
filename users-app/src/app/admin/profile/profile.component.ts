import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, MatLabel, MatError, MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AlertService } from '../../services/alert/alert.service';
import { UsersService } from '../../services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatError,
    MatIcon,
    MatFormField,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  usersService = inject(UsersService);
  authService = inject(AuthService);
  alertService = inject(AlertService);
  fb = inject(FormBuilder);

  private _idUser: string = '';

  myProfileForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    surnames: ['', [Validators.required, Validators.minLength(8)]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    age: ['', [Validators.required]],
  });

  ngOnInit() {
    this._idUser = this.authService.getIdUser();
    this.usersService.getUserById(this._idUser).subscribe((data) => {
      if(data.ok) {
        this.myProfileForm.controls['name'].setValue(data.user?.name);
        this.myProfileForm.controls['surnames'].setValue(data.user?.surnames);
        this.myProfileForm.controls['username'].setValue(data.user?.username);
        this.myProfileForm.controls['age'].setValue(data.user?.age);
        this.alertService.openAlert(
          'Se cargaron los datos',
          'La carga se realizo con exito',
          'info_outline',
          'alert_info',
          4
        )
      }
    });
  }

  onSubmitChangeData() {
    if (this.myProfileForm.valid) {
      this.usersService.updateUser(this._idUser, this.myProfileForm.value).subscribe((data) => {
        if (data.ok) {
          this.alertService.openAlert(
            'Actualizacion exitosa',
            'Los datos se han actualizado correctamente',
            'check_circle',
            'alert_success',
            4
          )
        }
      })
    } else {
     this.alertService.openAlertErrorValidation();
    }
  }

}
