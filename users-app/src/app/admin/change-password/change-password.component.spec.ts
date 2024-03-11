import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthService } from '../../services/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from '../../services/alert/alert.service';
import { of } from 'rxjs';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;
  let authService: AuthService;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChangePasswordComponent,
        ButtonComponent,
        HttpClientModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            getIdUser: jasmine.createSpy('getIdUser').and.returnValue('exampleUserId'),
            changePassword: jasmine.createSpy('changePassword').and.returnValue(of({ ok: true })),
          },
        },
        {
          provide: AlertService,
          useValue: {
            openAlert: jasmine.createSpy('openAlert'),
            openAlertErrorValidation: jasmine.createSpy('openAlertErrorValidation'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    alertService = TestBed.inject(AlertService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.changePasswordForm.value).toEqual({
      currentpassword: '',
      password: '',
      rptpassword: '',
    });
  });

  it('should call AuthService.getIdUser on initialization', () => {
    expect(authService.getIdUser).toHaveBeenCalled();
    expect(component.idUser).toBe('exampleUserId');
  });

  it('should call AuthService.changePassword and openAlert on valid form submission', () => {
    const spyAuthServiceChangePassword = authService.changePassword as jasmine.Spy;
    const spyAlertServiceOpenAlert = alertService.openAlert as jasmine.Spy;

    component.changePasswordForm.setValue({
      currentpassword: 'oldPassword',
      password: 'newPassword',
      rptpassword: 'newPassword',
    });

    component.onSubmitChangePassword();

    expect(spyAuthServiceChangePassword).toHaveBeenCalledWith('exampleUserId', {
      oldPassword: 'oldPassword',
      password: 'newPassword',
    });
    expect(spyAlertServiceOpenAlert).toHaveBeenCalledWith(
      'Contraseña cambiada',
      'La contraseña ha sido cambiada correctamente',
      'check_circle',
      'alert_success',
      4
    );
    expect(component.changePasswordForm.value).toEqual({
      currentpassword: null,
      password: null,
      rptpassword: null,
    });
  });


  it('should call AuthService.changePassword and openAlert on invalid form submission', () => {
    const spyAlertServiceOpenAlert = alertService.openAlertErrorValidation as jasmine.Spy;

    component.changePasswordForm.setValue({
      currentpassword: '',
      password: '',
      rptpassword: '',
    });

    component.onSubmitChangePassword();

    expect(spyAlertServiceOpenAlert).toHaveBeenCalledWith();
    expect(component.changePasswordForm.value).toEqual({
      currentpassword: '',
      password: '',
      rptpassword: '',
    });
  });
});
