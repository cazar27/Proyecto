import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth/auth.service';
import { DataLoginForm } from '../../core/models/login.model';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  alertService = inject(AlertService);
  router = inject(Router);
  fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['carloszr27@gmail.com', [Validators.required, Validators.email]],
    password: ['1234@Test', [Validators.required, Validators.minLength(8)]],
  });

  onSubmitLogin(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const LoginCredentials: DataLoginForm = this.loginForm.value;
      this.authService.login(LoginCredentials).subscribe({
        next: (data) => {
          if (data.ok && data.token) {
            this.alertService.openAlert(
              'Inicio de sesion exitoso',
              'El usuario: ' + data.username + ', se ha iniciado sesion correctamente',
              'check_circle',
              'alert_success',
              4
            );
            this.authService.setToken(data.token);
            this.authService.setUsername(data.username);
            this.authService.setIdUser(data.uid);
            this.router.navigateByUrl('/admin');
          }
        },
        error: (error) => {
          this.alertService.openAlert(
            'Error de autentificación',
            error.error.msg,
            'dangerous',
            'alert_error'
          );
        },
      });
    } else {
      this.alertService.openAlertErrorValidation();
    }
  }


}
