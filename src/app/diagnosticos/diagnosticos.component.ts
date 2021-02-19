import { Component, OnInit } from '@angular/core';
import { Diagnostico } from './diagnostico';
import { DiagnosticoService } from './diagnostico.service';

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.component.html',
  styleUrls: ['./diagnosticos.component.css']
})
export class DiagnosticosComponent implements OnInit {
  titulo:string="Lista de diagnosticos";

  diagnosticos:Diagnostico[];
  
  constructor(private diagnosticoService:DiagnosticoService) { }

  ngOnInit(): void {
    this.diagnosticoService.getAll().subscribe(
      d => this.diagnosticos=d
    );
  }

}
