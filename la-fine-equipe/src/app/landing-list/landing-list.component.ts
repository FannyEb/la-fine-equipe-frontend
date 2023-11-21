import { Component, OnInit } from '@angular/core';
import { Appointment, Intervention } from '../model/intervention';
import { AppointmentService } from '../service/appointment.service';
import * as AppointmentJson from '../../assets/appointment.json';

@Component({
  selector: 'app-landing-list',
  templateUrl: './landing-list.component.html',
  styleUrls: ['./landing-list.component.scss'],
})
export class LandingListComponent implements OnInit {
  passedInterventions: Appointment[] = [];
  futureInterventions: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    var appointmentMock: Appointment[] = AppointmentJson;
    var appointments = [
      appointmentMock[0],
      appointmentMock[1],
      appointmentMock[2],
      appointmentMock[3],
    ];

    appointments.forEach((intervention) => {
      if (intervention.patient.secNumber == localStorage.getItem('secNumber')) {
        if (new Date(intervention.date) > new Date()) {
          this.futureInterventions.push(intervention);
        } else {
          if (intervention.confirmed) {
            this.passedInterventions.push(intervention);
          }
        }
      }
    });

    this.appointmentService.getAppointments().subscribe((next) => {});
  }

  confirmIntervention(interventionId: string) {
    var intervention = this.futureInterventions.find(
      (x) => x.id === interventionId
    );

    if (intervention) {
      intervention.confirmed = true;
      this.appointmentService.confirmAppointment(intervention);
    }
  }

  payIntervention(interventionId: string) {
    var intervention = this.passedInterventions.find(
      (x) => x.id === interventionId
    );

    if (intervention) {
      intervention.invoice.paid = true;
      this.appointmentService.payAppointment(intervention);
    }
  }
}
