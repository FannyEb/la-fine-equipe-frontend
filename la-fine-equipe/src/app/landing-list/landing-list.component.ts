import { Component, OnInit } from '@angular/core';
import { Intervention } from '../model/intervention';
import { InterventionService } from '../service/intervention.service';

@Component({
  selector: 'app-landing-list',
  templateUrl: './landing-list.component.html',
  styleUrls: ['./landing-list.component.scss'],
})
export class LandingListComponent implements OnInit {
  passedInterventions: Intervention[];
  futureInterventions: Intervention[];

  constructor(private interventionService: InterventionService) {}

  ngOnInit(): void {
    this.interventionService.getFutureInterventions().subscribe((next) => {
      this.futureInterventions = next;
    });

    this.interventionService.getPassedInterventions().subscribe((next) => {
      this.passedInterventions = next;
    });
  }

  confirmIntervention(interventionId: string) {
    var intervention = this.futureInterventions.find(
      (x) => x.id === interventionId
    );
    if (intervention) {
      intervention.isConfirmed = true;
      this.interventionService.confirmIntervention(intervention);
    }
  }

  payIntervention(interventionId: string) {
    var intervention = this.passedInterventions.find(
      (x) => x.id === interventionId
    );
    if (intervention) {
      intervention.isPayed = true;
      this.interventionService.payIntervention(intervention);
    }
  }
}
