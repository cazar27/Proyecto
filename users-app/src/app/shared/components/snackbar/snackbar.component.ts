import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarLabel, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatSnackBarLabel
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {

  data = inject(MAT_SNACK_BAR_DATA);
  snackBarRef = inject(MatSnackBarRef);
  typeIcon = this.data.type;
}
