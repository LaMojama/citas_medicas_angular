import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from './cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private url:string="http://localhost:8080/api/citas";

  constructor(private http:HttpClient) { }

  // lista de citas
  getAll():Observable<Cita[]>{
    return this.http.get<Cita[]>(this.url+'/lista');
  }

  // crear cita
  create(cita:Cita):Observable<Cita>{
    return this.http.post<Cita>(this.url, cita);
  }

  // obtener una cita
  get(id:number):Observable<Cita>{
    return this.http.get<Cita>(this.url+'/'+id);
  }

  // actualizar una cita
  update(cita:Cita):Observable<Cita>{
    return this.http.put<Cita>(this.url, cita);
  }

  // eliminar una cita
  delete(id:number):Observable<Cita>{
    return this.http.delete<Cita>(this.url+'/'+id);
  }
}
