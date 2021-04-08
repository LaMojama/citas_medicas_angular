import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';

@Component({
  selector: 'app-medico-unico',
  templateUrl: './medico-unico.component.html',
  styleUrls: ['./medico-unico.component.css']
})
export class MedicoUnicoComponent implements OnInit {

  medico:Medico = new Medico();
  titulo:string="Bienvenido Médico";

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

  async verCitas(){
    this.router.navigate(["/citasMedico",this.medico.id]);
  }

  async verPacientes(){
    this.router.navigate(["/pacientesMedico",this.medico.id]);
  }
}
