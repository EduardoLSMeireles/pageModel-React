import { Helmet } from "react-helmet-async"
import { Calendar } from "@/components/ui/calendar"
import React from "react"


export function DocumentosOficiais(){
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div>
      <header className="flex justify-center p-3">
        <Helmet title="Portal da Transparência" />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Registro de Atividades </h1>
          <h2 className="opacity-50 text-base font-medium tracking-tight">
            Acompanhe todas as atividades  relacionadas
            ao parlamentar.
          </h2>
        </div>
      </header>

      <Calendar
        mode="single"
        selected={date}
        onSelect={(day: Date | undefined) => setDate(day)}  // Corrige o tipo para aceitar 'Date | undefined'
        className="rounded-md border"
      />
      {date && <p>Data Selecinada: {date.toDateString()}</p>}
    </div>
  )
}