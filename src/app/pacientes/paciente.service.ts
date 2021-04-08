import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../citas/cita';
import { Medico } from '../medicos/medico';
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

  findByUsuario(name:string):Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url+'/usuario/'+name);
  }

  deletePaciente(idMedico:number,paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(this.url+'/deletePaciente/'+idMedico, paciente);
  }

  addCita(pacienteId:number,medicoId:number,cita:Cita){
    return this.http.post<Cita>(this.url+'/'+pacienteId+'/addCita/'+medicoId,cita);
  }

  updateCita(pacienteId:number,citaId:number,cita:Cita){
    return this.http.post<Cita>(this.url+'/'+pacienteId+'/updateCita/'+citaId,cita);
  }

  deleteCita(citaId:number,medicoId:number,paciente:Paciente){
    return this.http.post<Paciente>(this.url+'/'+paciente.id+'/deleteCita/'+citaId+'/medico/'+medicoId,paciente);
  }

}