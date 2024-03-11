import { TestBed } from '@angular/core/testing';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { authInterceptorProvider } from './token.interceptor';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';

class MockAuthService {
  getToken() {
    return 'mockedToken';
  }

  logout() {
    // Mock logout
  }
}

class MockRouter {
  navigate() {
    // Mock navigate
  }
}

class MockAlertService {
  openAlert() {
    // Mock openAlert
  }
}

describe('authInterceptorProvider', () => {
  let interceptor: (req: HttpRequest<any>, next: HttpHandler) => Observable<HttpEvent<any>>;
  let authService: MockAuthService;
  let router: MockRouter;
  let alertService: MockAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useClass: MockRouter },
        { provide: AlertService, useClass: MockAlertService },
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: authInterceptorProvider,
          multi: true,
        },
      ],
    });

    // interceptor = TestBed.inject(HTTP_INTERCEPTORS)[0];
    // authService = TestBed.inject(AuthService) as MockAuthService;
    // router = TestBed.inject(Router) as MockRouter;
    // alertService = TestBed.inject(AlertService) as MockAlertService;
  });

  xit('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  xit('should add Authorization header when session token exists', () => {
    const request = new HttpRequest('GET', 'api/data');
    const modifiedRequest = interceptor(request, null!);

    // expect(modifiedRequest.headers.get('Authorization')).toEqual('Bearer mockedToken');
  });

  xit('should not modify request when session token is not available', () => {
    authService.getToken = () => 'null';
    const request = new HttpRequest('GET', 'api/data');
    const modifiedRequest = interceptor(request, null!);

    // expect(modifiedRequest.headers.has('Authorization')).toBeFalsy();
  });

  xit('should handle request using next function', () => {
    const request = new HttpRequest('GET', 'api/data');
    const handlerSpy = jasmine.createSpyObj<HttpHandler>('HttpHandler', ['handle']);
    interceptor(request, handlerSpy);

    expect(handlerSpy.handle).toHaveBeenCalledWith(request);
  });

  xit('should handle error response - Unauthorized (401)', () => {
    const errorResponse = new HttpErrorResponse({ status: 401 });
    const handlerSpy = jasmine.createSpyObj<HttpHandler>('HttpHandler', ['handle']);
    handlerSpy.handle.and.returnValue(throwError(errorResponse));

    spyOn(alertService, 'openAlert');
    spyOn(authService, 'logout');
    spyOn(router, 'navigate');

    interceptor(new HttpRequest('GET', 'api/data'), handlerSpy).subscribe({
      error: () => {
        expect(alertService.openAlert).toHaveBeenCalled();
        expect(authService.logout).toHaveBeenCalled();
        // expect(router.navigate).toHaveBeenCalledWith(['/login']);
      },
    });
  });

});
