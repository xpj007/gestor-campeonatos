import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogo } from '../models/jogo.model';

const baseUrl = 'http://localhost:8080/api/jogos';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(baseUrl);
  }

  get(id: any): Observable<Jogo> {
    return this.http.get<Jogo>(`${baseUrl}/${id}`);
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

  AcharPorJogo(jogo: any): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(`${baseUrl}?jogo_camp_nome=${jogo}`);
  }
}
