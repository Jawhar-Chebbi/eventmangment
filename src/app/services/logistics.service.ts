import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Logistics {
  id: number;
  totalCost: number;
  commentaire: string;
  datelogistic: Date;
  details: LogisticDetail[]; // Ajoutez cette ligne pour définir la propriété details

}
interface LogisticDetail {
  id: number;
  libele: string;
  cost: number;
}

@Injectable({
  providedIn: 'root'
})
export class LogisticsService {
  private baseUrl = 'http://192.168.56.1:2222/Emanage/api/logistic';

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
  getLogistics(id: number): Observable<Logistics[]> {
    return this.http.get<Logistics[]>(`${this.baseUrl}/${id}`);
  }

  // affectLogisticDetails(id: number, logisticDetailsList: LogisticDetail[]): Observable<any> {
  //   const url = `${this.baseUrl}/${id}/affectLogisticDetails`;
  //   return this.http.put(url, logisticDetailsList);
  // }

  affecterLogisticdetailsLogistique(logistics: any, logisticDetailsList: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/affecter-logistic-details-logistique`, { logistics, logisticDetailsList });
  }
  affecterEvent(idEvent: number,id: number): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/affectationEvent/${idEvent}/${id}`,{});
  }

  searchByDateRange(lists: Logistics[], startDate: Date | null, endDate: Date | null): Logistics[] {
    const filteredLists = lists.filter((item) => {
      const listItemDate = new Date(item.datelogistic);
      if (startDate && endDate) {
        return listItemDate >= startDate && listItemDate <= endDate;
      } else if (startDate) {
        return listItemDate >= startDate;
      } else if (endDate) {
        return listItemDate <= endDate;
      }
      return false;
    });

    return filteredLists.sort((a, b) => {
      return new Date(a.datelogistic).getTime() - new Date(b.datelogistic).getTime();
    });
  }

  getById(id: number): Observable<Logistics> {
    return this.http.get<Logistics>(`${this.baseUrl}/${id}`);
  }
}
