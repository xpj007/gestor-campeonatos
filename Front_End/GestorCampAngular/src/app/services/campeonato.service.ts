import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campeonato } from '../models/campeonato.model';

const baseUrl = 'http://localhost:8080/api/campeonatos';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Campeonato[]> {
    return this.http.get<Campeonato[]>(baseUrl);
  }

  get(id: any): Observable<Campeonato> {
    return this.http.get<Campeonato>(`${baseUrl}/${id}`);
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

  AcharPorCampeonato(campeonato: any): Observable<Campeonato[]> {
    return this.http.get<Campeonato[]>(`${baseUrl}?campeonato=${campeonato}`);
  }
}
