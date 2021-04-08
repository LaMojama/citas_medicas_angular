import { Diagnostico } from "../diagnosticos/diagnostico";

export class Cita {
    cita_id:number;
    fechaHora:Date;
    motivoCita:String;
    diagnostico:Diagnostico;
}
