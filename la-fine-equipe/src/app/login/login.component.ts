import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User = new User();

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    this.userService.signin(this.user).subscribe(
      (data) => {
        console.log('signin data', data);
        localStorage.setItem(
          'userName',
          `${data.user.firstName} ${data.user.lastName}`
        );
        this.router.navigate(['/', 'landing']);
      },
      (error) => {
        console.log('signin error', error);
      }
    );
  }
}
