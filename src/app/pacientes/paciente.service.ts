import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private url:string="http://localhost:8080/api/pacientes";

  constructor( private http:HttpClient ) { }

  // lista de pacientes
  getAll():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url+'/lista');
  }

  // crear paciente
  create(paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(this.url, paciente);
  }

  // obtener un paciente
  get(id:number):Observable<Paciente>{
    return this.http.get<Paciente>(this.url+'/'+id);
  }

  // actualizar un paciente
  update(paciente:Paciente):Observable<Paciente>{
    return this.http.put<Paciente>(this.url, paciente);
  }

  // eliminar un paciente
  delete(id:number):Observable<Paciente>{
    return this.http.delete<Paciente>(this.url+'/'+id);
  }

}