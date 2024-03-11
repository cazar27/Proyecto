import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [ MatButton ],
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() titleBtn = 'Aceptar';
}
