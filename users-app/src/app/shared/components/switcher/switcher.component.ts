import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  @Input() textSlide = 'Recuerde';
  @Input() checked = false;
  @Input() disabled = false;
  color: ThemePalette = 'primary';

}
