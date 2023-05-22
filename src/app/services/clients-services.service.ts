import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { clientsInterface } from '../clients/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientsServicesService {
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }


  readClients():Observable<any>{
    return this.http.get<clientsInterface>(`${this.apiUrl}/readAllClients`);
  }

  createClient(body:any):Observable<any>{
    return this.http.post<clientsInterface>(`${this.apiUrl}/saveClient`,body);
  }

  updateClient(body:any):Observable<any>{
    return this.http.put<clientsInterface>(`${this.apiUrl}/updateClient`,body);
  }

  deleteClient(sharedKey:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteClient?sharedKey=${sharedKey}`)
  }
}
