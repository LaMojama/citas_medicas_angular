import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.css']
})
export class CancelarCitaComponent implements OnInit {


  cita_id:number;
  medico_id:number;
  paciente:Paciente;

  constructor(private pacienteService:PacienteService, private activatedRoute:ActivatedRoute, private router:Router) { }

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

  deleteCita():void{
    this.pacienteService.deleteCita(this.cita_id,this.medico_id,this.paciente).subscribe(
      res=>this.router.navigate(['/citasPaciente',this.paciente.id])
    );
  }

}
