import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '../../services/alert/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jasmine.createSpy('login').and.returnValue(of({ ok: true })),
          },
        },
        {
          provide: AlertService,
          useValue: {
            openAlert: jasmine.createSpy('openAlert'),
            // openAlertErrorValidation: jasmine.createSpy('openAlertErrorValidation'),
          },
        },
        FormBuilder
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    alertService = TestBed.inject(AlertService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.loginForm.value).toEqual({
      email: 'carloszr27@gmail.com',
      password: '1234@Test'
    });
  });


  xit('should call AuthService.changePassword and openAlert on valid form submission', () => {
    const spyAuthServiceChangePassword = authService.changePassword as jasmine.Spy;
    const spyAlertServiceOpenAlert = alertService.openAlert as jasmine.Spy;

    component.loginForm.setValue({
      email: 'carloszr27@gmail.com',
      password: '1234@Test',
    });

    component.onSubmitLogin();

    expect(spyAuthServiceChangePassword).toHaveBeenCalledWith('exampleUserId', {
      email: 'carloszr27@gmail.com',
      password: '1234@Test',
    });

    expect(spyAlertServiceOpenAlert).toHaveBeenCalledWith(
      'Inicio de sesion exitoso',
      'El usuario: cazar, se ha iniciado sesion correctamente',
      'check_circle',
      'alert_success',
      4
    );
  });

  xit('should call AuthService.login and openAlertErrorValidation on invalid form submission', () => {
    const spyAlertServiceOpenAlertErrorValidation = spyOn(alertService, 'openAlertErrorValidation');
    const spyAlertServiceOpenAlert = spyOn(alertService, 'openAlert');

    component.loginForm.setValue({
      email: '',
      password: '',
    });
    component.loginForm.markAllAsTouched();

    expect(authService.login).toHaveBeenCalledWith({ email: '', password: '' });

    component.onSubmitLogin();

    expect(spyAlertServiceOpenAlertErrorValidation).toHaveBeenCalled();
    expect(spyAlertServiceOpenAlert).toHaveBeenCalledWith(
      'Error de validación',
      'Debe rellenar los campos correctamente antes de continuar',
      'dangerous',
      'alert_error'
    );
  });
});
