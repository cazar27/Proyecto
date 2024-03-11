import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should call setUsername', () => {
    const spy = spyOn(authService['usernameSubject'], 'next');
    authService.setUsername('John');
    expect(spy).toHaveBeenCalledWith('John');
  })

  it('should call setIdUser', () => {
    authService.setIdUser('0');
    expect(authService.getIdUser()).toBe('0');
  })

  it('should call setToken', () => {
    spyOn(sessionStorage, 'setItem');
    authService.setToken('token');
    expect(sessionStorage.setItem).toHaveBeenCalledWith('token', 'token');
  })

  it('should call register', () => {
    const userMock = {
      username: 'string',
      name: 'string',
      surnames: 'string',
      email: 'string',
      password: 'string',
      age: 20,
      active: true
    }
    expect(authService.register(userMock)).toBeTruthy();
  })

  it('should call login', () => {
    const userMock = {
      email: 'string',
      password: 'string',
    }
    expect(authService.login(userMock)).toBeTruthy();
  })

  it('should call setPassword', () => {
    const credential = {
      oldPassword: 'string',
      password: 'string',
    }
    expect(authService.changePassword('0', credential)).toBeTruthy();
  })

});
