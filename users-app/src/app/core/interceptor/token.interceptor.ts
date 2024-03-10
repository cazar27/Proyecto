import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';

export const authInterceptorProvider: HttpInterceptorFn = (
  request: HttpRequest<any>, next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const alertService = inject(AlertService);
  const sessionToken = authService.getToken();

  if (sessionToken) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
  }

  return next(request).pipe(
    catchError(error => {
      const CODES = [401, 403, 500];
      if (CODES.includes(error.status)) {
        console.log(error);
        let errorMessage = error.error.messge ?
         error.error.messge : 'Error interno del servidor';
        alertService.openAlert(
          'Fallo en la llamada',
          errorMessage + ', probablemente no se asigno token',
          'dangerous',
          'alert_error'
        )
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  )
}
