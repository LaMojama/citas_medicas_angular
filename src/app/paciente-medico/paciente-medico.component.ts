import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-paciente-medico',
  templateUrl: './paciente-medico.component.html',
  styleUrls: ['./paciente-medico.component.css']
})
export class PacienteMedicoComponent implements OnInit {

  medico:Medico
  titulo:"Lista de Pacientes"
  paciente:Paciente

  constructor(private medicoService:MedicoService, private router:Router, private activatedRoute:ActivatedRoute, private pacienteService:PacienteService) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.medicoService.get(id).subscribe(
            es=>{
              return this.medico = es;
            }
          );
        }
      }
    );
    
  }

  delete(medicoId:number,paciente:Paciente):void{
    this.pacienteService.deletePaciente(medicoId,paciente).subscribe(
      res=>this.pacienteService.get(paciente.id).subscribe(
        response=>this.paciente=response
      )
    );
    this.router.navigate(["/medicos",medicoId]);

  }

}
