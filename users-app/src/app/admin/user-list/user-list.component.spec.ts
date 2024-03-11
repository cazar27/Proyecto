import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UserListComponent } from './user-list.component';
import { UsersService } from '../../services/users/users.service';
import { DialogService } from '../../services/dialog/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let dialogService: DialogService;
  let usersService: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserListComponent,
        RouterTestingModule,
        HttpClientModule,
        NgFor,
      ],
      providers: [
        {
          provide: DialogService,
          useValue: {
            openConfirmDialog: jasmine.createSpy('openConfirmDialog').and.returnValue({
              afterClosed: () => of(true), // Mock the result of the dialog
            }),
          },
        },
        {
          provide: UsersService,
          useValue: {
            getUsers: jasmine.createSpy('getUsers').and.returnValue(of({})),
            deleteUser: jasmine.createSpy('deleteUser').and.returnValue(of({})),
          },
        },
        MatDialog,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goToDetail',() => {
    component.goToDetail('1');
    expect(component.goToDetail).toBeDefined();
  });

  it('should call deleteUser',() => {
    component.deleteUser('1');
    expect(component.deleteUser).toBeDefined();
  });

  it('should call router.navigate when goToDetail is called', () => {
    spyOn(component.router, 'navigate');
    const userId = 'exampleId';
    component.goToDetail(userId);
    expect(component.router.navigate).toHaveBeenCalledWith(['/admin/user/', userId]);
  });

});
