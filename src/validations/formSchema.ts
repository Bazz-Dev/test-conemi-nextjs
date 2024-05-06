import { z } from "zod";
export const formSchema = z.object({
    empresa: z.string().min(2, "Empresa debe tener al menos 2 caracteres"),
    direccionCiudad: z.string().min(2, "Dirección/ciudad debe tener al menos 2 caracteres"),
    comuna: z.string().min(2, "Comuna debe tener al menos 2 caracteres"),
    fuenteEmisora: z.string().min(2, "Fuente emisora debe tener al menos 2 caracteres"),
    puntoMuestreo: z.string().min(2, "punto de muestreo debe tener al menos 2 caracteres"),
    planilla: z.string().min(2, "N° de planilla debe tener al menos 2 caracteres"),
  });