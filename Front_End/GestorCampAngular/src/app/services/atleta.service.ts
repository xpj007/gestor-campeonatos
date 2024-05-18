import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atleta } from '../models/atleta.model';

const baseUrl = 'http://localhost:8080/api/atletas';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Atleta[]> {
    return this.http.get<Atleta[]>(baseUrl);
  }

  get(id: any): Observable<Atleta> {
    return this.http.get<Atleta>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  AcharPorAtleta(atleta: any): Observable<Atleta[]> {
    return this.http.get<Atleta[]>(`${baseUrl}?atleta=${atleta}`);
  }
}
