import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbar,
    MatIcon,
    MatButton,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  authService = inject(AuthService);
  router = inject(Router);
  title = 'Users App';
  username = '';
  ngOnInit(): void {
    //TODO: Queria haber hecho el autologueo cuando detectara el navegador un token valido pero no tenia hecho el back
    // this.checkAuthentication();
    this.authService.username$.subscribe((username) => {
      console.log('aqui paso ' + username);
      this.username = username || '';
    });
  }

  // checkAuthentication(): void {
  //   if (this.isLogged()) {
  //     this.router.navigate(['/admin']);
  //   } else {
  //     this.router.navigate(['/login']);
  //   }
  // }

  // isLogged(): boolean {
  //   return this.authService.getToken() !== null;
  // }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
