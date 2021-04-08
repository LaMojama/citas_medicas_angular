import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../citas/cita';
import { CitaService } from '../citas/cita.service';
import { Medico } from '../medicos/medico';
import { MedicoService } from '../medicos/medico.service';

@Component({
  selector: 'app-cita-medico',
  templateUrl: './cita-medico.component.html',
  styleUrls: ['./cita-medico.component.css']
})
export class CitaMedicoComponent implements OnInit {

  medico:Medico
  titulo:"Lista de Citas"
  citas:Cita[]

  constructor(private medicoService:MedicoService, private router:Router, private activatedRoute:ActivatedRoute, private citaService:CitaService) { }

  ngOnInit(): void {
    this.cargar();
    this.citaService.getAll().subscribe(
      d =>this.citas=d
    );
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

  delete(cita:Cita):void{
    this.citaService.deleteCitaFromMedico(this.medico.id,cita).subscribe(
      res=>this.citaService.getAll().subscribe(
        response=>this.citas=response
      )
    );
    this.router.navigate(["/citasMedico",this.medico.id]);
  }

  deleteDiagnostico(cita:Cita):void{
    this.citaService.deleteDiagnosticoFromCita(cita.cita_id,cita).subscribe(
      res=>this.citaService.getAll().subscribe(
        response=>this.citas=response
      )
    );
    this.router.navigate(["/citasMedico",this.medico.id]);
  }

}
