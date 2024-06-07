import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elenco} from '../models/elenco.model';

const baseUrl = 'http://localhost:8080/api/elencos';


@Injectable({
  providedIn: 'root'
})
export class ElencoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Elenco[]> {
    return this.http.get<Elenco[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  AcharPorElenco(elenco: any): Observable<Elenco[]> {
    return this.http.get<Elenco[]>(`${baseUrl}?elenco=${elenco}`);
  }
}
