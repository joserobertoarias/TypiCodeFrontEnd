import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl = environment.url;

  constructor(private httpCliente: HttpClient) { }

  getLogs():Observable<any[]>{
    return this.httpCliente.get<any[]>(this.apiUrl + "/logs")
  }

  getLines(fileName: string):Observable<any[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.httpCliente.post<any[]>(this.apiUrl + "/logs/file", JSON.stringify(fileName), { headers});
  }

}
