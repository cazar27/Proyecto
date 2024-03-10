import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  snackBar = inject(MatSnackBar);

  openAlert(title: string, message: string, type: string, className: string, duration?: number): void {
    const verticalPosition = type=='dangerous'||type=='warning'?'bottom':'top';
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: duration? duration*1000:0,
      panelClass: className,
      horizontalPosition: 'end',
      verticalPosition: verticalPosition,
      data: {
        title: title,
        message: message,
        type: type,
      },
    });
  }

  openAlertErrorValidation() {
    this.openAlert('Error de validación', 'Debe rellenar los campos correctamente antes de continuar', 'dangerous', 'alert_error');
  }
}
