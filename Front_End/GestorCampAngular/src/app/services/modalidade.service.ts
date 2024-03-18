import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modalidade } from '../models/modalidade.model';

const baseUrl = 'http://localhost:8080/api/modalidades';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Modalidade[]> {
    return this.http.get<Modalidade[]>(baseUrl);
  }

  get(id: any): Observable<Modalidade> {
    return this.http.get<Modalidade>(`${baseUrl}/${id}`);
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

  AcharPorModalidade(modalidade: any): Observable<Modalidade[]> {
    return this.http.get<Modalidade[]>(`${baseUrl}?modalidade=${modalidade}`);
  }
}