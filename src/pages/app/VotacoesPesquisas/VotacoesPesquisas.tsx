import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Helmet } from "react-helmet-async"

export function VotacoesPesquisas() {
  return (
    <div>
    <Helmet title="VotacoesPesquisas" />
      <header className="grid justify-center p-2">
        <div className="grid grid-cols items-center gap-4">

          <h1 className="text-3xl font-bold tracking-tight">
            Votações e pesquisas
          </h1>
          <h2 className="opacity-50 text-base font-medium tracking-tight">
            Aqui você expressa sua opinião sobre decisões 
            que tem impacto direto na sociedade.
          </h2>

        </div>
      </header>

      <div>
      <Carousel className="flex flex-col w-[] h-auto ">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-3">
              <Card className="bg-[#03153b5e]">
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
      <div className="flex items-center justify-center min-h-screen">
        <img src="https://static.wixstatic.com/media/efc233_39256fb42a1e44c4a0398579c500f599~mv2.png/v1/fill/w_618,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/urnaeletronica3d2022_videorapido.png" />
      </div>
    </div>
  )
}
