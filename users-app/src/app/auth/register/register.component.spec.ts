import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '../../services/alert/alert.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [
        AuthService,
        AlertService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    alertService = TestBed.inject(AlertService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call onSubmitRegister', () => {
    component.myRegisterForm.setValue({
      name: 'John',
      surnames: 'Doe',
      email: 'john@example.com',
      username: 'johndoe',
      age: 25,
      password: 'password123',
      rptpassword: 'password123'
    });

    spyOn(authService, 'register').and.returnValue(of({ ok: true, user: { name: 'John' } }));
    const navigateByUrlSpy = spyOn(component.router, 'navigateByUrl');
    component.onSubmitRegister();

    expect(authService.register).toHaveBeenCalledWith(component.myRegisterForm.value);
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/login');
  });

  it('should handle form validation', () => {
    expect(component.myRegisterForm.valid).toBeFalsy();
    component.myRegisterForm.patchValue({
      name: 'John',
    });
    expect(component.myRegisterForm.valid).toBeFalsy();
  });

});
