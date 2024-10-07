import { Image, Text } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function SistemaDoacoes(){
  return (
    <div className="h-full">
      <Helmet title="SistemaDoacoes" />
      <div className="grid col-auto items-center justify-center text-justify w-full p-2 mb-24"> 
        <p className="text-3xl font-bold">
          Sistema de doações
        </p>
        <p className="opacity-50 text-sm font-medium">
          Navegue por região e fique por dentro das nossas
          atividades em seu município.
        </p>
      </div>

      <div className="absolute w-full h-[479px] bg-[#4a4a4a] grid justify-center items-end ">
        <div className="grid w-[418px] h-[548.17px] translate-y-[-50px] bg-[#c4c4c4]">
          Eduardo Lopes da Silva Meireles
        </div>

        <div className="flex border absolute justify-self-center bottom-[-80px] w-[1170px] h-[161px] bg-white rounded-[10px] transform-translate-y-[80px]  items-center space-x-6 p-6 grid-cols-3">
          <div className="flex gap-6">
            <div className="grid items-center justify-center w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
              <Image />
            </div>
            <div className="grid items-center justify-center w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
              <Image />
            </div>
          </div>

          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 p-6 w-[336px] h-5 bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[10px]">
            Text 
          </div>
          
              <div className="absolute bottom-1 w-[325px] h-4 bg-[#4a4a4a] rounded-[20px] justify-center text-center ">
                 <Text className=""/>
              </div>
          </div>

          <div className="grid grid-cols-3 gap-6 m-14 border">
            <div className="">
              <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
            </div>

            <div>
              <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
            </div>

            <div>
              <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
              <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
            </div>
          </div>
        </div>

    {/* <div className="grid grid-cols-3 gap-6 m-14 border">
      <div className="p-6">
        <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
      </div>
          
      <div className="p-6">
        <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
      </div>
          
      <div className="p-6">
        <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
        <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
      </div>
  </div> */}


      
    </div>
  )
}
