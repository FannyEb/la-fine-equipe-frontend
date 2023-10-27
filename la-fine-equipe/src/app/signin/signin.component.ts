import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  user: User = new User();

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    console.log('Données soumises:', this.user);

    this.userService.signup(this.user).subscribe((data) => {
      this.userService.signin(this.user).subscribe((data) => {
        console.log('signin data', data);
        localStorage.setItem(
          'userName',
          `${data.user.firstName} ${data.user.lastName}`
        );
        this.router.navigate(['/', 'landing']);
      });
    });
  }
}
