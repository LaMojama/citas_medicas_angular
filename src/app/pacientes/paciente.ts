import { Cita } from "../citas/cita";
import { Medico } from "../medicos/medico";

export class Paciente {
    id: number;
    nombre: string;
    apellidos: string;
    usuario: string;
    NSS: string;
    clave: string;
    numTarjeta: string;
    telefono: string;
    direccion: string;
    citas: Cita[];
    medicos: Medico[];
}
