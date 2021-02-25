import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  titulo:string="Lista de Pacientes";

  pacientes:Paciente[];

  constructor(private pacienteService:PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.getAll().subscribe(
      e =>this.pacientes=e
    );
  }

  delete(paciente:Paciente):void{
    this.pacienteService.delete(paciente.id).subscribe(
      res=>this.pacienteService.getAll().subscribe(
        response=>this.pacientes=response
      )
    );
  }

}