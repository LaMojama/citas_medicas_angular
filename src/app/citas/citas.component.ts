import { Component, OnInit } from '@angular/core';
import { Cita } from './cita';
import { CitaService } from './cita.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  titulo:string="Lista de citas";

  citas:Cita[];

  constructor(private citaService:CitaService) { }

  ngOnInit(): void {
    this.citaService.getAll().subscribe(
      d =>this.citas=d
    );
  }

  delete(cita:Cita):void{
    this.citaService.delete(cita.cita_id).subscribe(
      res=>this.citaService.getAll().subscribe(
        response=>this.citas=response
      )
    );
  }

}
