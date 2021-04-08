import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from './medico';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrls: ['./form-medico.component.css']
})
export class FormMedicoComponent implements OnInit {
  medico:Medico = new Medico();
  titulo:string="Registro de Medico";

  constructor(private medicoService:MedicoService, private router:Router, private activatedRoute:ActivatedRoute) { }

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

  create():void{
    console.log(this.medico);
    this.medicoService.create(this.medico).subscribe(
      res=>this.router.navigate(['/home'])
    );
  }

  update():void{
    this.medicoService.update(this.medico).subscribe(
      res=>this.router.navigate(['/medicos',this.medico.id])
    );
  }

}
