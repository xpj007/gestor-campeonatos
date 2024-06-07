import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atleta,AtletaConsul } from '../models/atleta.model';

const baseUrl = 'http://localhost:8080/api/atletas';
const baseQry = 'http://localhost:8080/api/atletas/consulta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Atleta[]> {
    return this.http.get<Atleta[]>(baseUrl);
  }

  getCon(): Observable<AtletaConsul> {
    return this.http.get<AtletaConsul>(baseUrl);
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
    return this.http.get<Atleta[]>(`${baseUrl}?at_nome=${atleta}`);
  }

  GerarElenco(atleta: any , qtd: any ): Observable<any> {
    return this.http.get<Atleta[]>(`${baseQry}?at_nota=${atleta}`, qtd);
  }
}
