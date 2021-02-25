import { Cita } from "../citas/cita";
import { Paciente } from "../pacientes/paciente";

export class Medico {
    id: number;
    nombre: string;
    apellidos: string;
    usuario: string;
    clave: string;
    numColegiado: string;
    citas: Cita[];
    pacientes: Paciente[];
}
