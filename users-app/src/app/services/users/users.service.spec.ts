import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of users', () => {
    expect(service.getUsers(1,2)).toBeTruthy();
  });

  it('should return a list of users', () => {
    expect(service.getUsers(1,2)).toBeTruthy();
  });

  it('should update a user', () => {
    expect(service.updateUser(
      '65e7c1a7643ecdd2f879bd83',
      {
        name: 'Juan Miguel',
        username: 'Juanillo',
        surnames: 'Perez Gutierrez',
        age: 28,
        active: true
      }
    )).toBeTruthy();
  })

  it('should delete a user', () => {
    expect(service.deleteUser('65e7c1a7643ecdd2f879bd83')).toBeTruthy();
  })

});
