import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  user: User;

  constructor(private router: Router) {}

  onSubmit() {
    //TODO : appeler la route signin du back
    //si success => appeler la route login du back
    //si success => rediriger vers /landing
    console.log('Données soumises:', this.user);
    this.router.navigate(['/', 'landing']);
  }
}
