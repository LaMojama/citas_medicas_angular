import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private citaService:CitaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['cita_id'];
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

  create():void{
    console.log(this.cita);
    this.citaService.create(this.cita).subscribe(
      res=>this.router.navigate(['/citas'])
    );
  }

  update():void{
    this.citaService.update(this.cita).subscribe(
      res=>this.router.navigate(['/citas'])
    );
  }

}
