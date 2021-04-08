import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  paciente: Paciente = new Paciente();
  titulo:string="Registro de Paciente";
  medico: Medico = new Medico();

  constructor(private pacienteService:PacienteService, private router:Router, private activatedRoute:ActivatedRoute, private medicoService:MedicoService) { }

  ngOnInit(): void {
    this.cargar();
    this.cargar2();
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

  cargar2():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id2'];
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

  create():void{
    console.log(this.paciente);
    this.pacienteService.create(this.paciente).subscribe(
      res=>this.router.navigate(['/home'])
    );
  }

  update():void{
    this.pacienteService.update(this.paciente).subscribe(
      res=>this.router.navigate(['/pacientesMedico',this.medico.id])
    );
  }

}

