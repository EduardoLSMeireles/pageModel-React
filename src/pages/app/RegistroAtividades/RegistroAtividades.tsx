import { Helmet } from "react-helmet-async"
import { Calendar } from "@/components/ui/calendar"
import React from "react"

export function RegistroAtividades(){
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div>
      <div>
        <Helmet title="RegistroAtividades" />
          <div className="flex flex-col items-center justify-center text-justify w-full"> 
            <p className="text-3xl font-bold">
              Registro de atividades
            </p>
            <p className="opacity-50 text-sm font-medium">
            Acompanhe todas as atividades  relacionadas
            ao parlamentar.
            </p>
          </div>

          <div className="flex justify-center items-center h-screen">
            <Calendar 
              mode="single"
              selected={date}
              onSelect={(day: Date | undefined) => setDate(day)}
            />
          </div>

          <div className="relative w-full h-[479px] bg-[#4a4a4a]">
            <img 
              src="imagem" 
              className="w-full h-full object-cover" 
            />
          <div className="absolute w-[418px] h-[479px] bg-[#c4c4c4] left-0 top-0">
            <img 
              src="imagem"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}