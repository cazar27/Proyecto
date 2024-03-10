import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideUpAnimation } from '../../animations/slidein-animation';

@Component({
  selector: 'app-prelogin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './prelogin.component.html',
  styleUrl: './prelogin.component.scss',
  animations: [ slideUpAnimation ]
})
export class PreloginComponent {

  contexts = inject(ChildrenOutletContexts);

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
