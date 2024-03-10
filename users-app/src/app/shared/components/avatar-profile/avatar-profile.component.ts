import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-profile',
  standalone: true,
  imports: [],
  templateUrl: './avatar-profile.component.html',
  styleUrls: ['./avatar-profile.component.scss']
})
export class AvatarProfileComponent {

  @Input() img = '';
  style = '';

}
