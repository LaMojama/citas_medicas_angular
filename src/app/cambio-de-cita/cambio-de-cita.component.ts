import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../citas/cita';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-cambio-de-cita',
  templateUrl: './cambio-de-cita.component.html',
  styleUrls: ['./cambio-de-cita.component.css']
})
export class CambioDeCitaComponent implements OnInit {


 paciente_id:number
  paciente:Paciente;
  cita = new Cita();

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

  updateCita():void{
    this.pacienteService.updateCita(this.paciente.id,this.cita.cita_id,this.cita).subscribe(
      res=>this.router.navigate(['/citasPaciente',this.paciente.id])
    );
  }

}