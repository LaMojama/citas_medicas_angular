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
import { HomeComponent } from './home/home.component';
import { MedicoUnicoComponent } from './medico-unico/medico-unico.component';
import { CitaMedicoComponent } from './cita-medico/cita-medico.component';
import { PacienteMedicoComponent } from './paciente-medico/paciente-medico.component';
import { PacienteUnicoComponent } from './paciente-unico/paciente-unico.component';
import { CitaPacienteComponent } from './cita-paciente/cita-paciente.component';
import { MedicoPacienteComponent } from './medico-paciente/medico-paciente.component';
import { FormCitaMedicoComponent } from './form-cita-medico/form-cita-medico.component';
import { FormDiagnosticoMedicoComponent } from './form-diagnostico-medico/form-diagnostico-medico.component';
import { FormPacienteMedicoComponent } from './form-paciente-medico/form-paciente-medico.component';
import { FormPacientePacienteComponent } from './form-paciente-paciente/form-paciente-paciente.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';
import { CambioDeCitaComponent } from './cambio-de-cita/cambio-de-cita.component';
import { CancelarCitaComponent } from './cancelar-cita/cancelar-cita.component';
import { CancelarCitaMedicoComponent } from './cancelar-cita-medico/cancelar-cita-medico.component';

const routes:Routes=[
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'pacientes/form', component:FormPacienteComponent},
  { path:'diagnosticos', component:DiagnosticosComponent},
  { path:'diagnosticos/form', component:FormDiagnosticoComponent},
  { path:'diagnosticos/form/:diagnostico_id', component:FormDiagnosticoComponent},
  { path:'diagnosticos/:diagnostico_id/form/:medico_id', component:FormDiagnosticoComponent},
  { path:'citas', component:CitasComponent},
  { path:'citas/form', component:FormCitaComponent},
  { path:'citas/form/:cita_id', component:FormCitaComponent},
  { path:'citasMedico/:id', component:CitaMedicoComponent},
  { path:'citasMedico/addCita/:id', component:FormCitaMedicoComponent},
  { path:'citasMedico/addDiagnostico/:id', component:FormDiagnosticoMedicoComponent},
  { path:'citasMedico/:id/form/:id2', component:FormCitaComponent},
  { path:'citasMedico/:id/cancelarCita/:id2', component:CancelarCitaMedicoComponent},
  { path:'citasPaciente/:id', component:CitaPacienteComponent},
  { path:'citasPaciente/pedirCita/:id', component:PedirCitaComponent},
  { path:'citasPaciente/cambioCita/:id', component:CambioDeCitaComponent},
  { path:'citasPaciente/cancelarCita/:id', component:CancelarCitaComponent},
  { path:'medicos', component:MedicosComponent},
  {path:'medicos/form', component:FormMedicoComponent},
  { path:'medicos/:id', component:MedicoUnicoComponent},
  { path:'medicosPaciente/:id', component:MedicoPacienteComponent},
  { path:'pacientes', component:PacientesComponent},
  { path:'pacientesForm/:id', component:FormPacientePacienteComponent},
  { path:'pacientes/:id', component:PacienteUnicoComponent},
  { path:'pacientesMedico/:id', component:PacienteMedicoComponent},
  { path:'pacientesMedico/:id/form/:id2', component:FormPacienteComponent},
  { path:'pacientesMedico/addPaciente/:id', component:FormPacienteMedicoComponent},
  { path:'medicos/form/:id', component:FormMedicoComponent},
  { path:'pacientes/form/:id', component:FormPacienteComponent},
  { path:'home', component:HomeComponent},
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
    PacientesComponent,
    FormPacienteComponent,
    HomeComponent,
    MedicoUnicoComponent,
    CitaMedicoComponent,
    PacienteMedicoComponent,
    PacienteUnicoComponent,
    CitaPacienteComponent,
    MedicoPacienteComponent,
    FormCitaMedicoComponent,
    FormDiagnosticoMedicoComponent,
    FormPacienteMedicoComponent,
    FormPacientePacienteComponent,
    PedirCitaComponent,
    CambioDeCitaComponent,
    CancelarCitaComponent,
    CancelarCitaMedicoComponent
  ],
  imports: [
     BrowserModule, HttpClientModule,  FormsModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
