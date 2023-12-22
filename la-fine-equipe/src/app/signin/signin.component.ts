import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, CommonModule],
  template: `
  <div class="form-container">
    <form
      (ngSubmit)="onSubmit()"
      #utilisateurForm="ngForm"
      class="form"
      [formGroup]="signinForm"
    >
      <h1 class="form__heading">Inscription</h1>

      <div class="form__group">
        <div class="alert" *ngIf="securityNumberControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="securityNumber"
          id="securityNumber"
          [(ngModel)]="user.securityNumber"
          name="email"
          class="form__input"
          placeholder="Numéro de Sécurité Sociale"
          required
          formControlName="securityNumber"
        />
      </div>

      <div class="form__group">
        <div class="alert" *ngIf="passwordControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="password"
          id="password"
          [(ngModel)]="user.password"
          name="password"
          class="form__input"
          placeholder="Mot de Passe"
          required
          formControlName="password"
        />
      </div>

      <div class="form__group">
        <div class="alert" *ngIf="lastnameControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="text"
          [(ngModel)]="user.lastName"
          required
          class="form__input"
          placeholder="Nom de famille"
          name="lastname"
          formControlName="lastname"
        />
      </div>

      <div class="form__group">
        <div class="alert" *ngIf="firstnameControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="text"
          [(ngModel)]="user.firstName"
          class="form__input"
          placeholder="Prénom"
          required
          name="firstname"
          formControlName="firstname"
        />
      </div>
      <button type="submit" class="btn btn--large btn--color submit-button">
        Soumettre
      </button>
      <div class="form__group form__footer">
        <p>Vous avez déjà un compte :</p>
        <a [routerLink]="['/login']"> Connectez-vous </a>
      </div>
    </form>
  </div>
  `,
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user: User = new User();

  signinForm: FormGroup;
  securityNumberControl = new FormControl(Validators.required);
  passwordControl = new FormControl(Validators.required);
  lastnameControl = new FormControl(Validators.required);
  firstnameControl = new FormControl(Validators.required);
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      securityNumber: this.securityNumberControl,
      password: this.passwordControl,
      lastname: this.lastnameControl,
      firstname: this.firstnameControl,
    });
  }

  onSubmit() {
    if (!this.signinForm.invalid) {
      this.userService.signup(this.user).subscribe((data) => {
        this.userService.signin(this.user).subscribe((data) => {
          localStorage.setItem(
            'userName',
            `${data.user.firstName} ${data.user.lastName}`
          );
          localStorage.setItem('secNumber', data.user.securityNumber);
          this.router.navigate(['/', 'landing']);
        });
      });
    }
  }
}
