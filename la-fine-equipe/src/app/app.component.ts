import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'la-fine-equipe';
  user: User; //TODO : récuperer l'utilisateur quand il est connecté et le passer au header

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = {
      socialSecurityNumber: 'utcvjhblnk,',
      password: 'utcvukbj',
      lastName: 'eber',
      firstName: 'Fanny',
    };
    if (this.user) {
      this.router.navigate(['/', 'landing']);
    }
  }
}
