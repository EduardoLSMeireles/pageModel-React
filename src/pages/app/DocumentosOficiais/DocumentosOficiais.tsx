/* eslint-disable @typescript-eslint/no-unused-vars */
import { Helmet } from "react-helmet-async"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ImagePlus } from "lucide-react";


export function DocumentosOficiais(){
  return (
    <div>
      <Helmet title="DocumentosOficiais" />
      {/* Conteúdo da H1*/}
      <div className="flex flex-col items-center justify-center text-justify w-full mb-5">
        <p className="text-3xl font-bold">Documentos oficiais</p>
        <p className="opacity-50 text-sm font-medium">
          Aqui você tem acesso a todos os documentos oficiais 
          em que o parlamentar emitiu ou participou.
        </p>
      </div>
        {/* Carousel component/content */}
      <div className="flex items-center justify-center h-auto p-6 mb-24 ">
        <Carousel className="flex flex-col w-auto h-auto ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-3">
                  <Card className="bg-[#4a4a4a]">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">conteúdo {index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
        </Carousel>
        
      </div>
      {/* Conteúdo da primeira box */}
      <div className="flex flex-wrap mb-5">
        <div id="firstBox" className="flex items-center space-x-4 mb-5 p-10">
          <div className="w-[343px] h-[318px] bg-[#4a4a4a] rounded-[15px] flex justify-center items-center">
            <ImagePlus className="w-[70px] h-[69px]" />
          </div>


          <div className="space-y-6">
            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>
            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>
            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>
            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>

            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>

            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>
          </div>
          
        </div>
      {/* Conteúdo da segunda box */}
        <div className="flex justify-end w-full">

          <div id="secondBox" className="flex items-center space-x-4 mb-5 p-10 ml-auto">
            <div className="space-y-6">
              <div>
                <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                  <span>content message user</span>
                </div>
              </div>

              <div>
                <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                  <span>content message user</span>
                </div>
              </div>
              <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>
            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>
            <div>
              <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                <span>content message user</span> 
              </div>
            </div>

              <div>
                <div className="text-center w-[645px] h-5 bg-gradient-to-r from-[#4a4a4a] via-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">
                  <span>content message user</span>
                </div>
              </div>
            </div>

            {/* Container cinza maior à direita */}
            <div className="w-[343px] h-[318px] bg-[#4a4a4a] rounded-[15px] flex justify-center items-center">
              <ImagePlus className="w-[70px] h-[69px]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
