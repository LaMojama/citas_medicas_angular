import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MedicosComponent } from './medicos/medicos.component';
import { DiagnosticosComponent } from './diagnosticos/diagnosticos.component';
import { FormDiagnosticoComponent } from './diagnosticos/form-diagnostico.component';
import { CitasComponent } from './citas/citas.component';
import { FormCitaComponent } from './citas/form-cita.component';
import { FormMedicoComponent } from './medicos/form-medico.component';
import { FormPacienteComponent } from './pacientes/form-paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';

const routes:Routes=[
  { path:'', redirectTo:'/diagnosticos', pathMatch:'full'},
  { path:'diagnosticos', component:DiagnosticosComponent},
  { path:'diagnosticos/form', component:FormDiagnosticoComponent},
  { path:'diagnosticos/form/:diagnostico_id', component:FormDiagnosticoComponent},
  { path:'citas', component:CitasComponent},
  { path:'citas/form', component:FormCitaComponent},
  { path:'citas/form/:cita_id', component:FormCitaComponent},
  { path:'medicos', component:MedicosComponent},
  { path:'pacientes', component:PacientesComponent},
  { path:'medicos/form', component:FormMedicoComponent},
  { path:'pacientes/form', component:FormPacienteComponent},
  { path:'medicos/form/:id', component:FormMedicoComponent},
  { path:'pacientes/form/:id', component:FormPacienteComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    DiagnosticosComponent,
    FormDiagnosticoComponent,
    CitasComponent,
    FormCitaComponent,
    FormMedicoComponent,
    FormPacienteComponent
  ],
  imports: [
     BrowserModule, HttpClientModule,  FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
