import { Helmet } from "react-helmet-async"

export function SistemaDoacoes(){
  return (
    <div>
      <Helmet title="SistemaDoacoes" />
      <div className="text-black text-3xl font-bold font-['Inter']">Documentos oficiais </div>
      <div className="opacity-50 text-black text-xs font-medium font-['Inter']">Aqui você tem acesso a todos os documentos oficiais <br/>em que o parlamentar emitiu ou participou. </div>
      <div className="w-[261px] h-[318px] bg-[#4a4a4a] rounded-[15px]" />
      <div className="w-[343px] h-[318px] bg-[#4a4a4a] rounded-[15px]" />
    </div>
  )
}