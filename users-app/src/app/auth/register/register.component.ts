import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  authService = inject(AuthService);
  alertService = inject(AlertService);
  router = inject(Router);
  fb = inject(FormBuilder);

  myRegisterForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    surnames: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    age: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rptpassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmitRegister() {
    if (this.myRegisterForm.valid) {
      this.authService.register(this.myRegisterForm.value).subscribe((data) => {
        if (data.ok) {
          this.alertService.openAlert(
            'Registro exitoso',
            'El usuario ' + data.user.name + ' se ha registrado correctamente',
            'check_circle',
            'alert_success'
          )
          this.router.navigateByUrl('/login');
        }
      })
    } else {
      this.alertService.openAlertErrorValidation();
    }
  }

}
