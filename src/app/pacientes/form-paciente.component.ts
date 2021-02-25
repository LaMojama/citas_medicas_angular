import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  paciente:Paciente = new Paciente();
  titulo:string="Registro de Paciente";

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

  create():void{
    console.log(this.paciente);
    this.pacienteService.create(this.paciente).subscribe(
      res=>this.router.navigate(['/pacientes'])
    );
  }

  update():void{
    this.pacienteService.update(this.paciente).subscribe(
      res=>this.router.navigate(['/pacientes'])
    );
  }

}

