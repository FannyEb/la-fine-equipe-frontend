import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment, Intervention, Invoice } from '../model/intervention';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiUrl = 'http://middle.mikl.fr/api/module/hopital/Appointment';
  apiInvoiceUrl = 'http://middle.mikl.fr/api/module/hopital/Invoice';
  apiInterventionUrl = 'http://middle.mikl.fr/api/module/hopital/Intervention';
  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }

  getAppointment(id: string): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiUrl}/detailed/${id}`);
  }

  confirmAppointment(Appointment: Appointment): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${Appointment.id}/validate`, Appointment);
  }

  payAppointment(invoice: Invoice, invoiceId: number): Observable<any> {
    return this.http.patch(`${this.apiInvoiceUrl}/${invoiceId}/paid`, invoice);
  }

  getIntervention(interventionId: number): Observable<Intervention>{
    return this.http.get<Intervention>(`${this.apiInterventionUrl}/${interventionId}`)
  }
}
