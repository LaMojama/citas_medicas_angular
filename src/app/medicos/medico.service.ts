import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from './medico';
import { Observable } from 'rxjs';
import { Cita } from '../citas/cita';
import { Diagnostico } from '../diagnosticos/diagnostico';
import { Paciente } from '../pacientes/paciente';

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

  findByUsuario(name:string):Observable<Medico[]>{
    return this.http.get<Medico[]>(this.url+'/usuario/'+name);
  }

  addCita(medicoId:number,pacienteId:number,cita:Cita){
    return this.http.post<Cita>(this.url+'/'+medicoId+'/addCita/'+pacienteId,cita);
  }

  addDiagnosticoToCita(medicoId:number,citaId:number,diagnostico:Diagnostico){
    return this.http.post<Cita>(this.url+'/'+medicoId+'/addDiagnostico/'+citaId,diagnostico);
  }

  addPaciente(medico:Medico,pacienteId:number,medicoId:number){
    return this.http.post<Paciente>(this.url+'/'+medicoId+'/addPaciente/'+pacienteId,medico);
  }

  deleteCita(citaId:number,pacienteId:number,medico:Medico){
    return this.http.post<Paciente>(this.url+'/'+medico.id+'/deleteCita/'+citaId+'/paciente/'+pacienteId,medico);
  }
}
