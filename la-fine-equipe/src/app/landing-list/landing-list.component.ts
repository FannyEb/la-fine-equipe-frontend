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
  elementActif: string = 'venir';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments =>{
      appointments.forEach((intervention) => {
        if (intervention.patient != null && intervention.patient.secNumber == localStorage.getItem('secNumber')) {
          if (new Date(intervention.date) > new Date()) {
            this.futureInterventions.push(intervention);
          } else {
            if (intervention.confirmed) {
              this.passedInterventions.push(intervention);
            }
          }
        }
      });

      this.passedInterventions.sort((a,b) => this.compareDates(a.date,b.date));
      this.futureInterventions.sort((a,b) =>this.compareDates(a.date,b.date));
    })
  }

  compareDates(a: string |Date , b: string | Date): number {
    const dateA = typeof a === 'string' ? new Date(a) : a;
    const dateB = typeof b === 'string' ? new Date(b) : b;

    return dateA.getTime() - dateB.getTime();
  }

  confirmIntervention(interventionId: string) {
    console.log(interventionId)

    var intervention = this.futureInterventions.find(
      (x) => x.id === interventionId
    );

    console.log(intervention)

    if (intervention) {
      intervention.confirmed = true;
      this.appointmentService.confirmAppointment(intervention).subscribe((next)=>{
        console.log('response', next)
      });
    }
  }

  payIntervention(interventionId: string) {
    console.log(interventionId)
    var intervention = this.passedInterventions.find(
      (x) => x.id === interventionId
    );

    console.log(intervention)


    if (intervention) {
      intervention.invoice.paid = true;
      this.appointmentService.payAppointment(intervention.invoice, intervention.invoiceId).subscribe((next)=>{
        console.log('response', next)
      })
    }
  }

  activer(element: string) {
    this.elementActif = element;
  }
}
