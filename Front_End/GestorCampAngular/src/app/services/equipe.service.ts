import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe} from '../models/equipe.model';

const baseUrl = 'http://localhost:8080/api/equipes';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(baseUrl);
  }

  get(id: any): Observable<Equipe> {
    return this.http.get<Equipe>(`${baseUrl}/${id}`);
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

  AcharPorEquipe(equipe: any): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${baseUrl}?equipe=${equipe}`);
  }
}
