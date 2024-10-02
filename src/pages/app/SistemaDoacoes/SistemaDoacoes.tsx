import { Image } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function SistemaDoacoes(){
  return (
    <div>
      <Helmet title="SistemaDoacoes" />
      <div className="flex flex-col items-center justify-center text-justify w-full p-2 mb-24"> 
        <p className="text-3xl font-bold">
          Sistema de doações
        </p>
        <p className="opacity-50 text-sm font-medium">
          Navegue por região e fique por dentro das nossas
          atividades em seu município.
        </p>
        </div>

        <div className="w-full h-[479px] bg-[#4a4a4a] flex justify-center items-end relative">
          <div className="w-[418px] h-[548.17px] bg-[#c4c4c4]">

          </div>
          <div>
            
          </div>
          <div className="absolute bottom-[-80px] w-[1170px] h-[161px] bg-white rounded-[10px] transform-translate-y-[80px] flex items-center space-x-6 p-6">

            <div className="flex items-center justify-center w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
              <Image />
            </div>
            <div className="flex items-center justify-center w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
              <Image />
            </div>
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 p-6 w-[336px] h-5 bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[10px]">
            </div>
          </div>
          <div className="bg-black ">
          </div>
        </div> 
    </div>
  )
}