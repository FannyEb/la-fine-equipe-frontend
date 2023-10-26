import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User = {
    socialSecurityNumber: '',
    password: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Logique pour la connexion par la suite
    this.router.navigate(['/', 'landing']);
  }
}
