import { Component, OnChanges, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'la-fine-equipe';
}
