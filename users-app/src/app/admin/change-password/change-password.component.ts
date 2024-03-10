import { Component, inject } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';

import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-change-password',
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
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  authService = inject(AuthService);
  alertService = inject(AlertService);
  fb = inject(FormBuilder);
  idUser = this.authService.getIdUser();

  changePasswordForm: FormGroup = this.fb.group({
    currentpassword: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rptpassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmitChangePassword() {
    const credential = {
      oldPassword: this.changePasswordForm.value.currentpassword,
      password: this.changePasswordForm.value.password,
    };
    if (this.changePasswordForm.valid) {
      this.authService.changePassword(this.idUser, credential).subscribe((data)=> {
        if (data.ok) {
          this.alertService.openAlert(
            'Contraseña cambiada',
            'La contraseña ha sido cambiada correctamente',
            'check_circle',
            'alert_success',
            4
          )
          this.changePasswordForm.reset();
        } else {
          this.alertService.openAlert(
            'Error de servidor',
            'La contraseña no ha sido cambiada',
            'dangerous',
            'alert_error'
          )
        }
      })
    } else {
      this.alertService.openAlertErrorValidation();
    }
  }
}
