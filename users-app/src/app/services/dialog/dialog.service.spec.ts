import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DialogComponent,
      ]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open a dialog', () => {
    expect(service.openConfirmDialog('title','des')).toBeTruthy();
  })
});
