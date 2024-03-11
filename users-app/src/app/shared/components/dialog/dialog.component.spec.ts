import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  const dialogRefMock = {
    close: jasmine.createSpy('close')
  };

  const dialogDataMock = {
    title: 'Mock Title',
    desc: 'Mock Description'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [

      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: dialogDataMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onAccept', () => {
    component.onAccept(true);
    expect(dialogRefMock.close).toHaveBeenCalledWith(true);
  });
});
