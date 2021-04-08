import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';

@Component({
  selector: 'app-form-paciente-medico',
  templateUrl: './form-paciente-medico.component.html',
  styleUrls: ['./form-paciente-medico.component.css']
})



export class FormPacienteMedicoComponent implements OnInit {

  id_paciente:number;
  medico:Medico

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

  addPaciente():void{
    this.medicoService.addPaciente(this.medico,this.id_paciente,this.medico.id).subscribe(
      res=>this.router.navigate(['/pacientesMedico',this.medico.id])
    );
  }


}
