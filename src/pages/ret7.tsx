import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formRet7Schema } from "@/validations/formRet7Schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Layout from '../components/Layout';


function RequestForm() {
  const ret7Form = useForm<z.infer<typeof formRet7Schema>>({
    resolver: zodResolver(formRet7Schema),
    defaultValues: {
      // Datos Empresa
      empresa: "", // No se precarga ningún valor
      direccionCiudad: "", // No se precarga ningún valor
      comuna: "", // No se precarga ningún valor
      region: "", // No se precarga ningún valor
      observador: "", // No se precarga ningún valor

      fuenteEmisora: "", // No se precarga ningún valor
      puntoMuestreo: "", // No se precarga ningún valor
      planilla: "", // No se precarga ningún valor

      // Antecedentes de Monitoreo:
      tipoDescarga: undefined, // No se precarga ningún valor (dropdown sin selección)
      tipoMuestreo: undefined, // No se precarga ningún valor (dropdown sin selección)
      tipoMuestreoCompuesto: undefined, // No se precarga ningún valor (dropdown sin selección)
      ElaboracionMuestra: undefined, // No se precarga ningún valor (dropdown sin selección)
      horaTomaMuestra: "", // No se precarga ningún valor

      // Medición Parámetros de Terreno
      temp: false, // Checkbox desmarcado
      pH: false, // Checkbox desmarcado
      caudal: false, // Checkbox desmarcado
      cloroResidual: false, // Checkbox desmarcado
      clorado: "", // No se precarga ningún valor
      declorado: "", // No se precarga ningún valor
      horasClorado: "", // No se precarga ningún valor
      horasDeclorado: "", // No se precarga ningún valor

      // Equipos Utilizados
      equipoPhTemp: undefined, // Checkbox desmarcado
      equipoPhTemp2: undefined, // No se precarga ningún valor (dropdown sin selección)
      equipoMuestreo: undefined, // No se precarga ningún valor (dropdown sin selección)
      equipoCaudal: undefined, // No se precarga ningún valor (dropdown sin selección)

      codigoEquipoPhTemp: "", // No se precarga ningún valor
      codigoEquipoPhTemp2: "", // No se precarga ningún valor
      codigoEquipoMuestreo: "", // No se precarga ningún valor
      codigoEquipoCaudal: "", // No se precarga ningún valor

      dimensionesCaracteristicasCanal: "", // No se precarga ningún valor
      metodosMedicionCaudal: "", // No se precarga ningún valor
      condicionPuntoMuestreo: "", // No se precarga ningún valor
      controlVerificacionSondaPh: "", // No se precarga ningún valor

      // Verificacion Equipo Muestreador Automatico
      controlador: false, // Checkbox desmarcado
      sistemaBombeo: false, // Checkbox desmarcado
      sistemaDistribuidor: false, // Checkbox desmarcado
      refrigeracionMuestras: false, // Checkbox desmarcado
      calibracionVolumen: false, // Checkbox desmarcado
      tomaMuestra: false, // Checkbox desmarcado
      lineaSuccion: false, // Checkbox desmarcado
      cierreEquipo: false, // Checkbox desmarcado
      limpiezaEquipo: false, // Checkbox desmarcado
      voltaje: "", // No se precarga ningún valor

      // Resultados de Análisis
      // ... (agregar tabla con campos y valores predeterminados para los resultados de análisis)

      // Observaciones
      observaciones: "", // No se precarga ningún valor

      // Firma
      responsableInstalacionEquipo: undefined, // No se precarga ningún valor (dropdown sin selección)
      responsableDesinstalacionEquipo: undefined, // No se precarga ningún valor (dropdown sin selección)
      nombreFirma: "", // No se precarga ningún valor
    },
  });



  const { handleSubmit, formState: { errors }, reset } = ret7Form;

  const onSubmit = (data: z.infer<typeof formRet7Schema>) => {
    console.log("Formulario enviado:", data);
    reset();
    // Simulate data submission (replace with your backend logic)
  };
  return (
    <>
      <div className="flex items-center justify-center h-full w-full ">
        <Card className="w-[1000px]  mx-auto relative  px-6 z-10 shadow-lg pb-6 ">
          <CardHeader className="text-center text-3xl font-semibold">
            <CardTitle>REGISTRO CONTROL DE MUESTREORET-07</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...ret7Form}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                <h2 className="text-center font-bold text-2xl text-gray-800 mb-6 pb-2 border-b border-gray-300 shadow-md bg-gray-100 rounded-lg">Datos Empresa</h2>
                <div className="grid grid-cols-3 gap-2 items-center justify-center">  
                  <FormField
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Nombre de la empresa" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.empresa?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="direccionCiudad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dirección/Ciudad:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Dirección y ciudad" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.direccionCiudad?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Región:</FormLabel>  {/* Changed label case for consistency */}
                        <FormControl>
                          <Input type="text" placeholder="Región" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.region?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="observador"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Observador:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Observador" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.observador?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                  name="fuenteEmisora"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuente Emisora:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="fuenteEmisora" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.fuenteEmisora?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                

                <FormField
                  name="comuna"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Comuna:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Comuna" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.comuna?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />



                <FormField
                  name="puntoMuestreo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Punto de Muestreo:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Punto de muestreo" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.puntoMuestreo?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="planilla"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>N° de Planilla:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Número de planilla" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.planilla?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                </div>

                <h2 className="text-center font-bold text-2xl text-gray-800 mb-6 pb-2 border-b border-gray-300 shadow-md bg-gray-100 rounded-lg">Antecedentes de Monitoreo</h2>

                <FormField
                  name="tipoDescarga"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Descarga:</FormLabel>
                      <FormControl>
                        <Select {...field}>  {/* Spread field props for validation etc. */}
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Continua">Continua</SelectItem>
                            <SelectItem value="Discontinua">Discontinua</SelectItem>
                            <SelectItem value="Esporádica">Esporádica</SelectItem>
                            <SelectItem value="Batch">Batch</SelectItem>
                            {/* Add more options here if needed */}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.tipoDescarga?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="tipoMuestreo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Muestreo:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Automatico">Automatico</SelectItem>
                            <SelectItem value="Manual">Manual</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.tipoMuestreo?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="tipoMuestreoCompuesto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Muestreo 2:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Funcion del Caudal">Funcion del Caudal</SelectItem>
                            <SelectItem value="Funcion del Tiempo">Funcion del Tiempo</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.tipoMuestreoCompuesto?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="ElaboracionMuestra"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Elaboración Muestra:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opción1">Opción 1</SelectItem>
                            <SelectItem value="opción2">Opción 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.ElaboracionMuestra?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="horaTomaMuestra"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hora Toma Muestra:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Hora toma muestra" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.horaTomaMuestra?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />


                <h2 className="text-center font-bold text-2xl text-gray-800 mb-6 pb-2 border-b border-gray-300 shadow-md bg-gray-100 rounded-lg"> Medición Parámetros de Terreno</h2>

                <FormField
                  name="temp"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container flex justify-center"> {/* Wrap Checkbox and Label */}
                        <Checkbox {...ret7Form.register("temp")} />
                        <FormLabel>Temperatura (°C)</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="pH"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container flex justify-center">
                        <Checkbox {...ret7Form.register("pH")} />
                        <FormLabel>pH</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="caudal"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container flex justify-center">
                        <Checkbox {...ret7Form.register("caudal")} />
                        <FormLabel>Caudal</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="cloroResidual"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container flex justify-center">
                        <Checkbox {...ret7Form.register("cloroResidual")} />
                        <FormLabel>Cloro Residual</FormLabel>
                      </div>
                    </FormItem>
                  )}

                />

                {/* {ret7Form.watch("cloroResidual") && (
                <>
                  <FormField
                    name="clorado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Clorado:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Clorado" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.clorado?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="declorado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Declorado:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Declorado" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.declorado?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="horasClorado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Horas Clorado:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Horas clorado" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.horasClorado?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="horasDeclorado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Horas Declorado:</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Horas declorado" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 mt-1">
                          {errors.horasDeclorado?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </>
              )} */}

                {/* Equipos Utilizados */}

                <h2 className="text-center font-bold text-2xl text-gray-800 mb-6 pb-2 border-b border-gray-300 shadow-md bg-gray-100 rounded-lg">Equipos Utilizados</h2>
                <FormField
                  name="equipoPhTemp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Equipos de pH - Temperatura:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opción1">Portátil N°</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.equipoPhTemp?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="equipoPhTemp2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Equipos de pH - Temperatura:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opción1">Portátil</SelectItem>
                            <SelectItem value="opción1"> Línea</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.equipoPhTemp2?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="equipoMuestreo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Equipo de muestreo:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opción1">Automatico</SelectItem>
                            <SelectItem value="opción1">Manual</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.equipoMuestreo?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  name="equipoCaudal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Equipo medición de caudal:</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="opción1">Automatico</SelectItem>
                            <SelectItem value="opción1">Manual</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.equipoCaudal?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                {/* Campos de Código de Equipo */}
                <FormField
                  name="codigoEquipoPhTemp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código de Equipo pH-Temperatura:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Código de equipo" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.codigoEquipoPhTemp?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="codigoEquipoPhTemp2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código de Equipo pH-Temperatura 2:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Código de equipo" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.codigoEquipoPhTemp2?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="codigoEquipoMuestreo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código de Equipo de Muestreo:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Código de equipo" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.codigoEquipoMuestreo?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="codigoEquipoCaudal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código de Equipo de Medición de Caudal:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Código de equipo" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.codigoEquipoCaudal?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                {/* Otros Campos */}
                <FormField
                  name="dimensionesCaracteristicasCanal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dimensiones y Características del Canal:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Dimensiones y características del canal" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.dimensionesCaracteristicasCanal?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="metodosMedicionCaudal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Métodos de Medición de Caudal:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Métodos de medición de caudal" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.metodosMedicionCaudal?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="condicionPuntoMuestreo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Condición del Punto de Muestreo:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Condición del punto de muestreo" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.condicionPuntoMuestreo?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  name="controlVerificacionSondaPh"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Control y Verificación Sonda pH:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Control y verificación sonda pH" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.controlVerificacionSondaPh?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                {/* Verificación Equipo Muestreador Automático */}
                <h2 className="text-center font-bold text-2xl text-gray-800 mb-6 pb-2 border-b border-gray-300 shadow-md bg-gray-100 rounded-lg">Verificación Equipo Muestreador Automático</h2>
                <div className="grid grid-cols-4 gap-3 items-center justify-center">  

                <FormField
                  name="controlador"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("controlador")} />
                        <FormLabel>controlador</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="sistemaBombeo"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("sistemaBombeo")} />
                        <FormLabel>sistemaBombeo</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="sistemaBombeo"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("sistemaBombeo")} />
                        <FormLabel>Sistema de Bombeo</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="sistemaDistribuidor"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("sistemaDistribuidor")} />
                        <FormLabel>Sistema Distribuidor</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="refrigeracionMuestras"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("refrigeracionMuestras")} />
                        <FormLabel>Refrigeración de Muestras</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="calibracionVolumen"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("calibracionVolumen")} />
                        <FormLabel>Calibración Volumen</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="tomaMuestra"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("tomaMuestra")} />
                        <FormLabel>Toma 1era Muestra</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="lineaSuccion"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("lineaSuccion")} />
                        <FormLabel>Línea de Succión</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="cierreEquipo"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("cierreEquipo")} />
                        <FormLabel>Cierre de Equipo</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  name="limpiezaEquipo"
                  render={({ field }) => (
                    <FormItem>
                      <div className="checkbox-container">
                        <Checkbox {...ret7Form.register("limpiezaEquipo")} />
                        <FormLabel>Limpieza de Equipo</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />


                <FormField
                  name="voltaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voltaje</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Voltaje (>=13V)" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.voltaje?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                 </div>
                <FormField
                  name="observaciones"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observaciones:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Observaciones" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 mt-1">
                        {errors.observaciones?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormItem>
                  <FormLabel>Responsable Instalación Equipo:</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Seleccionar..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sergio Herrera">Sergio Herrera</SelectItem>
                        <SelectItem value="Juan Mattus">Juan Mattus</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel>Responsable Desinstalación Equipo:</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Seleccionar..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sergio Herrera">Sergio Herrera</SelectItem>
                        <SelectItem value="Juan Mattus">Juan Mattus</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>

                <Button type="submit" variant="default" className="mt-4">
                  Enviar
                </Button>
              </form>
            </Form>
          </CardContent >
        </Card >


      </div>
    </>
  );
};

export default RequestForm;