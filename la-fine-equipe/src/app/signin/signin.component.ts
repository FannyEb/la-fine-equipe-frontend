import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  // public clientForm: FormGroup = this.fb.group({
  //   civility: ['', Validators.required],
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   email: ['', [Validators.required, Validators.email]],
  //   zipCode: ['', [Validators.required, Validators.pattern(/(?:0[1-9]|[13-8][0-9]|2[ab1-9]|9[0-5])(?:[0-9]{3})?|9[78][1-9](?:[0-9]{2})?/)]],
  //   login: ['', [Validators.required, Validators.pattern('')]], // mettre une regex pour le login
  //   password: ['', Validators.required],
  //   confirmPassword: ['', Validators.required],
  // });

  constructor(private fb: FormBuilder) {}

  public utilisateurForm: FormGroup = this.fb.group({
    numeroSecuriteSociale: new FormControl(''),
    password: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
  });

  onSubmit() {
    const formData = this.utilisateurForm.value;
    console.log(formData); //log pour voir en console
  }
}
