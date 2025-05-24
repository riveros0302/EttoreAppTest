import { Tip } from "../../types/tips";

export async function getHealthTips() {
  return new Promise<Tip[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Toma agua",
          descripcion:
            "Bebe al menos 8 vasos de agua al día para mantenerte hidratado.",
          icon: "water-outline",
        },
        {
          title: "Ejercicio diario",
          descripcion:
            "Realiza al menos 30 minutos de actividad física todos los días.",
          icon: "arm-flex-outline",
        },
        {
          title: "Duerme bien",
          descripcion: "Intenta dormir entre 7 y 9 horas cada noche.",
          icon: "sleep",
        },
      ]);
    }, 500);
  });
}
