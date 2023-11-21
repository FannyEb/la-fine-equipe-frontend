import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../model/intervention';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiUrl = 'http://middle.mikl.fr/api/module/hopital/Appointment';
  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }

  getAppointment(id: string): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiUrl}/${id}`);
  }

  confirmAppointment(Appointment: Appointment) {
    this.http.patch(`${this.apiUrl}/${Appointment.id}/validate`, Appointment);
  }

  payAppointment(Appointment: Appointment) {
    this.http.put(`${this.apiUrl}/${Appointment.id}/pay`, Appointment);
  }
}
