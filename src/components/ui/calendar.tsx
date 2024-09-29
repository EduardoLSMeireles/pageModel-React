import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ptBR } from 'date-fns/locale'; // Importa a localização para português do Brasil

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ptBR} // Define a localidade como português do Brasil
      showOutsideDays={showOutsideDays}
      className={cn("p-6 w-[1000px] h-screen rounded-[50px]", className)} // Dimensões do container
      classNames={{
        months: "grid grid-cols h-full p-24", // O mês ocupa todo o espaço do container
        month: "h-full", // A altura total do mês é ajustada
        caption: "flex justify-center pt-1 relative items-center mb-6",
        caption_label: "text-xl font-medium",
        nav: "space-x-1 flex items-center mt-2",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full h-full border-collapse", // A tabela ocupa toda a área disponível
        head_row: "grid grid-cols-7", // 7 colunas para os dias da semana
        head_cell: "text-zinc-500 text-center font-normal text-[0.8rem] dark:text-zinc-400",
        row: "grid grid-cols-7 gap-4", // Grid com 7 colunas e espaçamento entre as células
        cell: "flex justify-center items-center", // Células centralizadas
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-[100px] h-[100px] rounded-[20px] text-black flex items-center justify-center" // Dias com dimensões e estilo definidos
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#cb0544d6] text-black hover:bg-zinc-100 hover:text-black focus:bg-zinc-100 focus:text-black", // Cor para o dia selecionado
        day_today: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
        day_outside:
          "text-zinc-500 opacity-50 aria-selected:bg-zinc-100/50 aria-selected:text-zinc-500 aria-selected:opacity-30 dark:text-zinc-400 dark:aria-selected:bg-zinc-800/50 dark:aria-selected:text-zinc-400",
        day_disabled: "text-zinc-500 opacity-50 dark:text-zinc-400",
        day_range_middle:
          "aria-selected:bg-yellow-300 aria-selected:text-black dark:aria-selected:bg-yellow-300 dark:aria-selected:text-black",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";
