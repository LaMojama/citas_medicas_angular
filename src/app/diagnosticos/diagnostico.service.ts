import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from './diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {

  private url:string="http://localhost:8080/api/diagnosticos";

  constructor( private http:HttpClient ) { }

  // lista de diagnosticos
  getAll():Observable<Diagnostico[]>{
    return this.http.get<Diagnostico[]>(this.url+'/lista');
  }

  // crear diagnostico
  create(diagnostico:Diagnostico):Observable<Diagnostico>{
    return this.http.post<Diagnostico>(this.url, diagnostico);
  }

  // obtener un diagnostico
  get(id:number):Observable<Diagnostico>{
    return this.http.get<Diagnostico>(this.url+'/'+id);
  }

  // actualizar un diagnostico
  update(diagnostico:Diagnostico):Observable<Diagnostico>{
    return this.http.put<Diagnostico>(this.url, diagnostico);
  }

  // eliminar un diagnostico
  delete(id:number):Observable<Diagnostico>{
    return this.http.delete<Diagnostico>(this.url+'/'+id);
  }

}
