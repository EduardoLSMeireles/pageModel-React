import { Helmet } from "react-helmet-async"

export function DistribuicaoRecursos(){
  return (
<div className=" ">
  <Helmet title="DistribuicaoRecursos" />
  <div className="w-[199px] h-[318px] border rounded-[15px] p-4">
  {/* Container da esfera maior */}
  <div className="w-[109px] h-[109px] opacity-50 rounded-full border border-[#c4c4c4] flex justify-center items-center mb-4">
    {/* Container da esfera menor dentro da maior */}
    <div className="w-[99.84px] h-[100px] bg-[#c4c4c4] rounded-full" />
  </div>

  {/* Informações */}
  <div className="grid gap-2">
    <div className="flex flex-col">
      <div className="text-xs opacity-50 font-light">Nome Civil</div>
      <div className="border w-[105px] h-[21px] rounded-[10px] flex items-center justify-center bg-white">
        Arthur Oliveira Maia
      </div>
    </div>

    <div className="flex flex-col">
      <div className="text-xs opacity-50 font-light">Nascimento</div>
      <div className="border w-[105px] h-[21px] rounded-[10px] flex items-center justify-center bg-white">
        01/01/1990
      </div>
    </div>

    <div className="flex flex-col">
      <div className="text-xs opacity-50 font-light">Naturalidade</div>
      <div className="border w-[105px] h-[21px] rounded-[10px] flex items-center justify-center bg-white">
        São Paulo
      </div>
    </div>

    {/* Adicione mais caixas de informações se necessário */}
    <div className="flex flex-col">
      <div className="text-xs opacity-50 font-light">Escolaridade</div>
      <div className="border w-[105px] h-[21px] rounded-[10px] flex items-center justify-center bg-white">
        Superior Completo
      </div>
    </div>
  </div>
</div>


</div>


  )
}