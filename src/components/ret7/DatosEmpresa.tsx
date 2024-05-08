import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formRet7Schema } from "@/validations/formRet7Schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Checkbox } from "@/components/ui/checkbox"
function DatosEmpresa() {
    const ret7Form = useForm<z.infer<typeof formRet7Schema>>({
        resolver: zodResolver(formRet7Schema),
        defaultValues: {
            empresa: "",
            direccionCiudad: "",
            comuna: "",
            fuenteEmisora: "",
            puntoMuestreo: "",
            planilla: ""
        },
    });


    const { handleSubmit, formState: { errors }, reset } = ret7Form;
    // ... other component logic (if any)
    const onSubmit = (data: z.infer<typeof formRet7Schema>) => {
        console.log("Formulario enviado:", data);
        reset();
        // Simulate data submission (replace with your backend logic)
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>Datos de la Empresa</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...ret7Form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <FormField
                            name="empresa"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Empresa: Fuente Emisora</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nombre de la empresa" {...field} />
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
                                        <Input placeholder="Dirección y ciudad" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-500 mt-1">
                                        {errors.direccionCiudad?.message}
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
                                        <Input placeholder="Comuna" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-500 mt-1">
                                        {errors.comuna?.message}
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
                                        <Input placeholder="Fuente emisora" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-500 mt-1">
                                        {errors.fuenteEmisora?.message}
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
                                        <Input placeholder="Punto de muestreo" {...field} />
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
                                        <Input placeholder="Número de planilla" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-500 mt-1">
                                        {errors.planilla?.message}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default DatosEmpresa;