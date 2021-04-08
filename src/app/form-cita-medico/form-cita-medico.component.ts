import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../citas/cita';
import { Diagnostico } from '../diagnosticos/diagnostico';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';
import { Paciente } from '../pacientes/paciente';

@Component({
  selector: 'app-form-cita-medico',
  templateUrl: './form-cita-medico.component.html',
  styleUrls: ['./form-cita-medico.component.css']
})
export class FormCitaMedicoComponent implements OnInit {

  paciente_id:number
  medico:Medico
  cita = new Cita();

  constructor(private medicoService:MedicoService, private activatedRoute:ActivatedRoute, private router:Router) { }

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

  addCita():void{
    this.medicoService.addCita(this.medico.id,this.paciente_id,this.cita).subscribe(
      res=>this.router.navigate(['/citasMedico',this.medico.id])
    );
  }

}
