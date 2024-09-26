import { Helmet } from "react-helmet-async"
import { Calendar } from "@/components/ui/calendar"
import React from "react"

export function RegistroAtividades(){
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div>
      <header>
      <Helmet title="RegistroAtividades" />
      <div className="flex justify-center items-center h-screen">
        <Calendar 
          className="border-4 border-gray-700 rounded-md shadow-md"  // Corrige o tipo para aceitar 'Date | undefined'
          mode="single"
          selected={date}
          onSelect={(day: Date | undefined) => setDate(day)}
        />
      </div>

      </header>
    </div>
  )
}