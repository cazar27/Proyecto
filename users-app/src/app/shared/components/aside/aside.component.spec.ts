import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AsideComponent,
        BrowserAnimationsModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showFiller property', () => {
    // Initial value of showFiller should be false
    expect(component.showFiller).toBeFalsy();
    // Call the toggleFiller function
    component.toggleFiller();
    // After calling toggleFiller, showFiller should be true
    expect(component.showFiller).toBeTruthy();
    // Call the toggleFiller function again
    component.toggleFiller();
    // After calling toggleFiller again, showFiller should be false
    expect(component.showFiller).toBeFalsy();
  });

});
