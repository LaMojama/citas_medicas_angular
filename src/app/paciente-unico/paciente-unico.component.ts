import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-paciente-unico',
  templateUrl: './paciente-unico.component.html',
  styleUrls: ['./paciente-unico.component.css']
})
export class PacienteUnicoComponent implements OnInit {

  paciente:Paciente = new Paciente();
  titulo:string="Bienvenido Paciente";

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

  async verCitas(){
    this.router.navigate(["/citasPaciente",this.paciente.id]);
  }

  async verMedicos(){
    this.router.navigate(["/medicosPaciente",this.paciente.id]);
  }

}
