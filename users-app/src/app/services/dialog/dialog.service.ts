import { Injectable, inject } from '@angular/core';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef = inject(MatDialog);
  response = false;

  openConfirmDialog(title: string, desc: string): any {
    return this.dialogRef.open(DialogComponent, {
      width: '26rem',
      data: { title, desc },
    })
  }
}
