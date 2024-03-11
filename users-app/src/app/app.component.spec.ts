import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgIf } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule,
        MatToolbar,
        MatIcon,
        MatButton,
        MatButtonModule,
        NgIf,
        HttpClientModule
      ],
      providers: [
        AuthService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    component.ngOnInit();
  });

  it('should call logout', () => {
    component.logout();
  });

});
