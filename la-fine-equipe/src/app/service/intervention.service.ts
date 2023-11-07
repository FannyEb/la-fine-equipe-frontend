import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intervention } from '../model/intervention';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterventionService {
  apiUrl = 'apiUrl';
  constructor(private http: HttpClient) {}

  getPassedInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(`${this.apiUrl}/passed`);
  }

  getFutureInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(`${this.apiUrl}/future`);
  }

  getIntervention(id: string): Observable<Intervention> {
    return this.http.get<Intervention>(`${this.apiUrl}/${id}`);
  }

  confirmIntervention(intervention: Intervention) {
    this.http.put(`${this.apiUrl}/confirm/${intervention.id}`, intervention);
  }

  payIntervention(intervention: Intervention) {
    this.http.put(`${this.apiUrl}/pay/${intervention.id}`, intervention);
  }
}
