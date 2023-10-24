import { Component, OnInit } from '@angular/core';
import { Intervention } from '../model/intervention';

@Component({
  selector: 'app-landing-list',
  templateUrl: './landing-list.component.html',
  styleUrls: ['./landing-list.component.scss'],
})
export class LandingListComponent implements OnInit {
  passedInterventions: Intervention[];
  futureInterventions: Intervention[];

  ngOnInit(): void {
    //TODO récupérer les interventions passé et à venir
    var intervention = new Intervention();
    intervention.date = new Date();
    intervention.id = '1';
    intervention.intervention = 'scanner';
    intervention.isConfirmed = true;
    intervention.isPayed = false;
    intervention.place = '3 rue ALice Guy';
    this.passedInterventions = [intervention, intervention];
    this.futureInterventions = [intervention];
  }

  confirmIntervention(interventionId: string) {
    //TODO confirmer l'intervention à venir (identificable par interventionId)
  }

  payIntervention(interventionId: string) {
    //TODO payer l'intervention passé (identificable par interventionId)
  }
}
