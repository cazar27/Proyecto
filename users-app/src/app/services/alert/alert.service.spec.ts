import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule
      ],
    });
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call openAlertErrorValidation', () => {
    const openAlertSpy = spyOn(service, 'openAlert');
    service.openAlertErrorValidation();

    expect(openAlertSpy).toHaveBeenCalledWith(
      'Error de validación',
      'Debe rellenar los campos correctamente antes de continuar',
      'dangerous',
      'alert_error'
    );
  });

  it('should call openAlert', () => {
    const openFromComponentSpy = spyOn(TestBed.inject(MatSnackBar), 'openFromComponent');
    const result = service.openAlert('warning', 'warning', 'warning', 'warning', 5);

    expect(openFromComponentSpy).toHaveBeenCalled();
    expect(result).toBe();
  });

  it('should call openAlert wihtout duration', () => {
    const openFromComponentSpy = spyOn(TestBed.inject(MatSnackBar), 'openFromComponent');
    const result = service.openAlert('', '', '', '');

    expect(openFromComponentSpy).toHaveBeenCalled();
    expect(result).toBe();
  });
});
