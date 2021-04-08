import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-cita-paciente',
  templateUrl: './cita-paciente.component.html',
  styleUrls: ['./cita-paciente.component.css']
})
export class CitaPacienteComponent implements OnInit {

  paciente:Paciente
  titulo:"Lista de Citas"

  constructor(private pacienteService:PacienteService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.pacienteService.get(id).subscribe(
            es=>{
              return this.paciente = es;
            }
          );
        }
      }
    );
    
  }

}
