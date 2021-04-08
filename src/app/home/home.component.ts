import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';
import { Paciente } from '../pacientes/paciente';
import { PacienteService } from '../pacientes/paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario:string;
  clave:string;
  medicos:Medico[] = [];
  pacientes: Paciente[] = [];
  constructor(private app: AppService, private router:Router, private medicoService:MedicoService, private pacienteService:PacienteService) { }

  authenticated() { return this.app.authenticated; }

  ngOnInit(): void {
  }

  async loginMedico(){
    if(this.usuario == null)
      return
    this.medicoService.findByUsuario(this.usuario).subscribe(e =>this.medicos=e);
    this.router.navigate(["/medicos",this.medicos[0].id]);
  }
  async loginPaciente(){
    if(this.usuario == null)
      return
    this.pacienteService.findByUsuario(this.usuario).subscribe(e =>this.pacientes=e);
    this.router.navigate(["/pacientes",this.pacientes[0].id]);
  }

}
