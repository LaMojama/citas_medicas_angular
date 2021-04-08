import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';
import { Cita } from './cita';
import { CitaService } from './cita.service';

@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.css']
})
export class FormCitaComponent implements OnInit {
  cita:Cita = new Cita();
  titulo:String="Registro de Cita"
  medico:Medico
  constructor(private citaService:CitaService, private router:Router, private activatedRoute:ActivatedRoute, private medicoService:MedicoService) { }

  ngOnInit(): void {
    this.cargar();
    this.cargar2();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id2'];
        if(id){
          this.citaService.get(id).subscribe(
            es=>{
              return this.cita = es;
            }
          );
        }
      }
    );
    
  }

  cargar2():void{
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
    console.log(this.cita);
    this.citaService.create(this.cita).subscribe(
      res=>this.router.navigate(['/citas'])
    );
  }

  update():void{
    this.citaService.update(this.cita).subscribe(
      res=>this.router.navigate(['/citasMedico',this.medico.id])
    );
  }

}
