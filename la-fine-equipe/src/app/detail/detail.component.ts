import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/intervention';
import { AppointmentService } from '../service/appointment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  appointment: Appointment

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.appointmentService.getAppointment(params['id']).subscribe(appoint =>{
        this.appointmentService.getIntervention(appoint.invoice.interventionId).subscribe(inter =>{
          appoint.invoice.intervention = inter
          console.log(appoint)
          this.appointment = appoint
        })

      })
    })
  }


  confirmIntervention() {
    this.appointment.confirmed = true;
    this.appointmentService.confirmAppointment(this.appointment).subscribe((next)=>{
      console.log('response', next)
    });

  }

  payIntervention() {
    this.appointment.invoice.paid = true;
    this.appointmentService.payAppointment(this.appointment.invoice, this.appointment.invoiceId).subscribe((next)=>{
      console.log('response', next)
    })

  }


}
