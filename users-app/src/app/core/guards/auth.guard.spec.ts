import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth.guard';
import { AuthService } from '../../services/auth/auth.service';

describe('authGuard', () => {

  const mockAuthService = {
    getToken: jasmine.createSpy('getToken'),
  };

  const mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    });
  });

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));


  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });


  it('should allow navigation if there is a session token', () => {
    mockAuthService.getToken.and.returnValue('exampleToken');

    const dummyRoute = {} as ActivatedRouteSnapshot;
    const dummyState = {} as RouterStateSnapshot;

    const result = executeGuard(dummyRoute, dummyState);

    expect(result).toBe(true);
    expect(mockAuthService.getToken).toHaveBeenCalled();
  });

  it('should navigate to /login if there is no session token', () => {
    mockAuthService.getToken.and.returnValue(null);

    const dummyRoute = {} as ActivatedRouteSnapshot;
    const dummyState = {} as RouterStateSnapshot;

    const result = executeGuard(dummyRoute, dummyState);

    expect(result).toBe(false);
    expect(mockAuthService.getToken).toHaveBeenCalled();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/login');
  });

});
