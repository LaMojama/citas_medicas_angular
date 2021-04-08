import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-medico-paciente',
  templateUrl: './medico-paciente.component.html',
  styleUrls: ['./medico-paciente.component.css']
})
export class MedicoPacienteComponent implements OnInit {

  paciente:Paciente
  titulo:"Lista de Medicos"

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
