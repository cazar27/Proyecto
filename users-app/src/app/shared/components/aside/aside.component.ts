import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  showFiller = false;

  toggleFiller() {
    this.showFiller = !this.showFiller;
  }
}
