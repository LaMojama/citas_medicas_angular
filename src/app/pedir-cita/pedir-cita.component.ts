import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../citas/cita';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.css']
})
export class PedirCitaComponent implements OnInit {

  medico_id:number
  paciente:Paciente
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

  addCita():void{
    this.pacienteService.addCita(this.paciente.id,this.medico_id,this.cita).subscribe(
      res=>this.router.navigate(['/citasPaciente',this.paciente.id])
    );
  }

}
