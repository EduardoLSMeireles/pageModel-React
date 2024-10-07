import { Binoculars, Bus, ChartGantt, Cpu, DramaIcon, Fish, GraduationCap, HeartPulse, Medal, Siren, Speech, Tent, Tractor, TreeDeciduous, TreePine, User } from "lucide-react"
import { Button } from "../ui/button"

export function MiniBox() {
  return (
    <div>
      <footer className="">
        <div className="grid grid-flow-row justify-center space-x-4">

        <div className="grid grid-cols-8 gap-6 m-4">

          {/* Container 1 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md ">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <DramaIcon className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Cultura</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
              <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 2 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <GraduationCap className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Educação</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
              <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>
  

          {/* Container 3 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Speech className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Comunicações</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>
          {/* Container 4 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Siren className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Defesa</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 5 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Tractor className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[9px] font-medium">Desenvolvimento Agrário e Agricultura Familiar </div>
              <div className="opacity-50 text-black text-[8px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-7 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 6 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Binoculars className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Turismo </div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 7 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Bus className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Transportes </div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 8 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <HeartPulse className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Saúde </div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 9 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Medal className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Esporte</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 10 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Fish className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[12px] font-medium">Pesca e Aquicultura </div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 11 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <ChartGantt className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[10px] font-medium">Planejamento e Orçamento</div>
              <div className="opacity-50 text-black text-[8px] font-medium">R$ 255.000,00</div>
                <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

  {/* Continue adicionando mais containers com conteúdo exclusivo */}
  {/* Container 4, Container 5, etc. */}
  
          {/* Container 12 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Tent className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[14px] font-medium">Povos Indígenas</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
              <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 13 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <User className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[10px] font-medium">Direitos Humanos e Cidadania</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
              <Button className="grid w-[75px] h-7 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 14 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <Cpu className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[8px] font-medium">Ciência, Tecnologia e Inovação</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
              <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 15 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <TreeDeciduous className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[11px] font-medium">Agricultura e Pecuária</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
              <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

          {/* Container 16 */}
          <div className="w-[130px] h-[180px] bg-gray-300 rounded-lg shadow-md">
            <div className="w-[130px] h-[87px] bg-[#717171]/10 rounded-tl-[10px] rounded-tr-[10px] flex justify-center items-center">
              <TreePine className="w-[51px] h-[51px]" />
            </div>
            <div className="grid grid-rows-[auto_1fr_auto] w-[130px] h-[95px] bg-white rounded-bl-[5px] rounded-br-[5px] gap-2 p-1">
              <div className="text-black text-[11px] font-medium">Agricultura e Pecuária</div>
              <div className="opacity-50 text-black text-[10px] font-medium">R$ 255.000,00</div>
              <Button className="grid w-[75px] h-8 rounded-[4px] shadow mb-2 text-[10px]">Saiba mais</Button>
            </div>
          </div>

        </div>
      </div>
        
    </footer>
      
  </div>
  )
}



// <footer className="flex flex-col items-center p-6 mb-6">
// <div className="text-black text-lg font-bold mb-4">Área Beneficiada</div>
// <div className="flex flex-col items-center space-y-4">
//   {/* Contêiner superior */}
//   <div className="flex flex-wrap justify-center space-x-4">
//     {[...Array(8)].map((_, index) => (
//       <div key={index} className="w-[130px] h-[172px] bg-gray-300 rounded-lg shadow-md"> </div>
//     ))}
//   </div>

//   {/* Contêiner inferior */}
//   <div className="flex flex-wrap justify-center space-x-4">
//     {[...Array(8)].map((_, index) => (
//       <div key={index + 8} className="w-[130px] h-[172px] bg-gray-300 rounded-lg shadow-md"></div>
//     ))}
//   </div>
// </div>
// </footer>