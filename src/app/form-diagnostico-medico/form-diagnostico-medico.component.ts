import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnostico } from '../diagnosticos/diagnostico';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';

@Component({
  selector: 'app-form-diagnostico-medico',
  templateUrl: './form-diagnostico-medico.component.html',
  styleUrls: ['./form-diagnostico-medico.component.css']
})
export class FormDiagnosticoMedicoComponent implements OnInit {

  diagnostico:Diagnostico = new Diagnostico();
  cita_id:number
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

  addDiagnosticoToCita():void{
    this.medicoService.addDiagnosticoToCita(this.medico.id,this.cita_id,this.diagnostico).subscribe(
      res=>this.router.navigate(['/citasMedico',this.medico.id])
    );
  }
}
