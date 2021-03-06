import { Component, OnInit } from '@angular/core';
import { Medico } from './medico';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  titulo:string="Lista de Medicos";

 medicos:Medico[];

  constructor(private medicoService:MedicoService) { }

  ngOnInit(): void {
    this.medicoService.getAll().subscribe(
      e =>this.medicos=e
    );
  }

  delete(medico:Medico):void{
    this.medicoService.delete(medico.id).subscribe(
      res=>this.medicoService.getAll().subscribe(
        response=>this.medicos=response
      )
    );
  }

}
