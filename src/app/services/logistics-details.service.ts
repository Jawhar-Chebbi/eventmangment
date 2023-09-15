import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogisticsDetailsService {
  private baseUrl = 'http://192.168.56.1:2222/Emanage/api/logisticdetails';

  constructor(private http: HttpClient) { 

  }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  } 

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  updateLogisticsDetails(details: any[]): Observable<any> {
    const requests = details.map(detail => this.update(detail.id, detail));
    return forkJoin(requests);
  }

}
