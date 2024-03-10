import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../core/interfaces/data-dialog.interface';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButton],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  title = 'title';
  description = 'description';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.desc;
  }

  onAccept(accept: boolean) {
    this.dialogRef.close(accept);
  }

}
