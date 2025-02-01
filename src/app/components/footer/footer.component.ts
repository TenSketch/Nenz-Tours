import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status; // ✅ Automatically update on login/logout
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }
}
