import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from './medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private url:string="http://localhost:8080/api/medicos";

  constructor( private http:HttpClient ) { }

  // lista de medicos
  getAll():Observable<Medico[]>{
    return this.http.get<Medico[]>(this.url+'/lista');
  }

  // crear medico
  create(medico:Medico):Observable<Medico>{
    return this.http.post<Medico>(this.url, medico);
  }

  // obtener un medico
  get(id:number):Observable<Medico>{
    return this.http.get<Medico>(this.url+'/'+id);
  }

  // actualizar un medico
  update(medico:Medico):Observable<Medico>{
    return this.http.put<Medico>(this.url, medico);
  }

  // eliminar un medico
  delete(id:number):Observable<Medico>{
    return this.http.delete<Medico>(this.url+'/'+id);
  }

}
