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
  prueba:string="Esto es una prueba";

 // medicos:Medico[];

  constructor() { }

  ngOnInit(): void {
  }

}
