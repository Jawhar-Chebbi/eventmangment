import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:2222/Emanage/api/event';
  constructor(private http: HttpClient) {

   }
   getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }


  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }


  reserve(): Observable<any> {
    var json2 = {
      "nbrPlace": "100",
      "paymentStatus": false,
      "frais": 0.0,
      "fraisDetails": 0.0,
      "userReservation": null,
      "event": null,
      "reservationDetails": [],
      "billing": null
    }
    var json3={}
    
    return this.http.post<any>("http://localhost:2222/Emanage/api/reservation", JSON.stringify(json2));
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getById(id:number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }


  getEventByStatus(status:any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/byStatus/${status}`);
  }
  getEventByCategory(category:any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/byCategory/${category}`);
  }


  topEvents(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/topevents`);
  }

}
