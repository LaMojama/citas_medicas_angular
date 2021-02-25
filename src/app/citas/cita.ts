import { Diagnostico } from "../diagnosticos/diagnostico";

export class Cita {
    cita_id:number;
    fechaHora:String;
    motivoCita:String;
    diagnostico:Diagnostico;
}
