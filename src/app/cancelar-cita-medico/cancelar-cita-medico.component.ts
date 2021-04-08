import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../citas/cita';
import { CitaService } from '../citas/cita.service';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';

@Component({
  selector: 'app-cancelar-cita-medico',
  templateUrl: './cancelar-cita-medico.component.html',
  styleUrls: ['./cancelar-cita-medico.component.css']
})
export class CancelarCitaMedicoComponent implements OnInit {

  cita:Cita
  paciente_id:number;
  medico:Medico;

  constructor(private medicoService:MedicoService, private citaService:CitaService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cargar();
    this.cargar2();
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

  cargar2():void{
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

  deleteCita():void{
    this.medicoService.deleteCita(this.cita.cita_id,this.paciente_id,this.medico).subscribe(
      res=>this.router.navigate(['/citasMedico',this.medico.id])
    );
  }

}
