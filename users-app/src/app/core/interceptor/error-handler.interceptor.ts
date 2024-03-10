import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AlertService } from '../../services/alert/alert.service';

export const errorHandlerInterceptor: HttpInterceptorFn = (request, next) => {

  const alertService = inject(AlertService);

  return next(request).pipe(
    catchError(error => {
      const CODES = [400,404,];
      if (CODES.includes(error.status)) {
        console.log(error);
        let errorMessage = error.error.messge ?
         error.error.messge : 'Error interno del servidor';
        errorMessage = error.error.msg ?
        error.error.msg : 'Error interno del servidor';
        alertService.openAlert(
          'Fallo en la llamada',
          errorMessage,
          'dangerous',
          'alert_error'
        )
        // authService.logout();
      }
      return throwError(() => error);
    })
  )
};
