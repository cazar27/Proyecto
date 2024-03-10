import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { AsideComponent } from '../../shared/components/aside/aside.component';
import { slideInAnimation } from '../../animations/slidein-animation';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    AsideComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [ slideInAnimation ]
})
export class DashboardComponent {

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
