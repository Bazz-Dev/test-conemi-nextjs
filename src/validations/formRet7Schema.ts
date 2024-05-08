import { z } from "zod";
// export const formRet7Schema = z.object({
//     empresa: z.string().min(2, "Empresa debe tener al menos 2 caracteres"),
//     direccionCiudad: z.string().min(2, "Dirección/ciudad debe tener al menos 2 caracteres"),
//     comuna: z.string().min(2, "Comuna debe tener al menos 2 caracteres"),
//     fuenteEmisora: z.string().min(2, "Fuente emisora debe tener al menos 2 caracteres"),
//     puntoMuestreo: z.string().min(2, "punto de muestreo debe tener al menos 2 caracteres"),
//     planilla: z.string().min(2, "N° de planilla debe tener al menos 2 caracteres"),
//   });

export const formRet7Schema = z.object({
  // Datos Empresa
  empresa: z.string().min(2, "Empresa debe tener al menos 2 caracteres"),
  direccionCiudad: z.string().min(2, "Dirección/ciudad debe tener al menos 2 caracteres"),
  comuna: z.string().min(2, "Comuna debe tener al menos 2 caracteres"),
  region: z.string().min(2, "region debe tener al menos 2 caracteres"),
  observador: z.string().min(2, "observador debe tener al menos 2 caracteres"),

  fuenteEmisora: z.string().min(2, "Fuente emisora debe tener al menos 2 caracteres"),
  puntoMuestreo: z.string().min(2, "Punto de muestreo debe tener al menos 2 caracteres"),
  planilla: z.string().min(2, "N° de planilla debe tener al menos 2 caracteres"),

  // Antecedentes de Monitoreo:
  tipoDescarga: z.enum(["Continua", "Discontinua","Esporadica","Batch"]),
  tipoMuestreo: z.enum(["Automatico", "Manual"]),
  tipoMuestreoCompuesto:z.enum(["Funcion del Caudal", "Funcion del Tiempo"]),
  ElaboracionMuestra: z.enum(["Terreno", "Laboratorio"]),
  horaTomaMuestra: z.string().min(2, "Hora toma muestra debe tener al menos 2 caracteres"),

  // Medición Parámetros de Terreno												
  temp: z.boolean(),
  pH: z.boolean(),
  caudal: z.boolean(),
  cloroResidual: z.boolean(),
  clorado : z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),
  declorado: z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),
  horasClorado: z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),
  horasDeclorado: z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),

  // Equipos Utilizados
  equipoPhTemp: z.enum(["Portátil N°"]),
  equipoPhTemp2: z.enum(["Portátil", "Línea"]),
  equipoMuestreo: z.enum(["Automático", "Manual"]),
  equipoCaudal: z.enum(["Automático", "Manual"]),

  codigoEquipoPhTemp: z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),
  codigoEquipoPhTemp2: z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),
  codigoEquipoMuestreo: z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),
  codigoEquipoCaudal: z.string().min(2, "Código de equipo debe tener al menos 2 caracteres"),

  dimensionesCaracteristicasCanal: z.string().min(2, "Dimensiones y características del canal debe tener al menos 2 caracteres"),
  metodosMedicionCaudal: z.string().min(2, "Métodos de medición de caudal debe tener al menos 2 caracteres"),
  condicionPuntoMuestreo: z.string().min(2, "Condición de punto de muestreo debe tener al menos 2 caracteres"),
  controlVerificacionSondaPh: z.string().min(2, "Control verificación sonda pH debe tener al menos 2 caracteres"),
  
  //  Calibracion y verificacion

  // agregar tabla....

  // Verificacion Equipo Muestreador Automatico
  controlador: z.boolean(),
  sistemaBombeo: z.boolean(),
  sistemaDistribuidor: z.boolean(),
  refrigeracionMuestras: z.boolean(),
  calibracionVolumen: z.boolean(),
  tomaMuestra: z.boolean(),
  lineaSuccion: z.boolean(),
  cierreEquipo: z.boolean(),
  limpiezaEquipo: z.boolean(),
  voltaje: z.string().min(2, "Control verificación sonda pH debe tener al menos 2 caracteres"),
  
  observaciones: z.string().min(2, "Observaciones debe tener al menos 2 caracteres"),
  responsableInstalacionEquipo: z.enum(["Sergio Herrera", "Juan Mattus"]), // Ajustar según los nombres de los técnicos disponibles
  responsableDesinstalacionEquipo: z.enum(["Sergio Herrera", "Juan Mattus"]), // Ajustar según los nombres de los técnicos disponibles
  nombreFirma: z.string().min(2, "Nombre y firma debe tener al menos 2 caracteres"),
});