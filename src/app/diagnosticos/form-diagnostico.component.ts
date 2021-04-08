import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';
import { Diagnostico } from './diagnostico';
import { DiagnosticoService } from './diagnostico.service';

@Component({
  selector: 'app-form-diagnostico',
  templateUrl: './form-diagnostico.component.html',
  styleUrls: ['./form-diagnostico.component.css']
})
export class FormDiagnosticoComponent implements OnInit {
  diagnostico:Diagnostico = new Diagnostico();
  titulo:string="Registro de Diagnostico";
  medico:Medico
  constructor(private diagnosticoService:DiagnosticoService, private router:Router, private activatedRoute:ActivatedRoute, private medicoService:MedicoService) { }

  ngOnInit(): void {
    this.cargar();
    this.cargar2();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['diagnostico_id'];
        if(id){
          this.diagnosticoService.get(id).subscribe(
            es=>{
              return this.diagnostico = es;
            }
          );
        }
      }
    );
    
  }

  cargar2():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['medico_id'];
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

  create():void{
    console.log(this.diagnostico);
    this.diagnosticoService.create(this.diagnostico).subscribe(
      res=>this.router.navigate(['/diagnosticos'])
    );
  }

  update():void{
    this.diagnosticoService.update(this.diagnostico).subscribe(
      res=>this.router.navigate(['/citasMedico',this.medico.id])
    );
  }



}
