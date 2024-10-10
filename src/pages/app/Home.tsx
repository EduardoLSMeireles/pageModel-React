import { Count } from "@/components/count/count"
import { Helmet } from "react-helmet-async"
export function Home() {

  return (
    <div className="grid cols-auto">
      <Helmet title="Home" />
      <div className="grid col-start-auto items-center justify-center text-justify w-full">
        <p className="opacity-50 text-sm font-medium">Deputado Federal</p> {/* Maior espaçamento entre os textos */}
        <p className="text-3xl font-bold">Arthur Maia</p> {/* Espaçamento maior abaixo do nome */}
        <p>A força do <span className="text-[#56545467] ">trabalho</span> pela Bahia.</p>

      </div>

      <div className="relative w-full mb-6 h-[500px]  object-cover bg-[grey]">
        <span className=""> </span>
        
        
        <div
          className="absolute right-10 bottom-44 w-[400px] h-auto max-h-[430px] rounded-lg transition-transform transform -translate-y-1/4" // Removi bg-transparent
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/0a9a/3e4c/b2146a1856e9f2abb1a08a32b2fe1e44?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TaN6WGLyeJn0iMnuWKrCIX3Z3ieQ2AaDkaV9~VRgD8DgVjxSV7eeb9t9gBogZm59gfgTkU7E8qnBhHQPyAyHCvIXOm0F9nbPI74QqDSm1bVxpQd-NdZlbDdF7hezIl~Ucgvy22g1cDFfWdRbFdcRIlMgEG7juLiP50NmfZ-7i0X~9PUz~rqaLAeVAQjBTP1SKPd6OzA1KOgYs4B1XNjkrWylpW5E~zc~0BMz7qxaWO~G8yfSGEiarRTQnDARmMiUJ5JzY0bJGB-fYiPiBofJDKtObedAKyW9jU0QvYVL2SltR3D2KYHSZJ6qFyManPhwC-bliTKmGeG4qUEm1Pk5WQ__" 
            className="object-cover w-full h-full rounded-lg"
          />
        </div> 
      </div>

      <div className="grid m-6 h-auto">
        <div className="w-full h-56 bg-[#17176a] rounded-[10px] gap-2 flex flex-col items-center justify-start" >

          <div className="text-[#edeaeaf1] text-3xl font-extrabold text-center mt-2"> {/* Maior espaçamento no topo */}
            Juntos, seguiremos em frente!
          </div>
          <div className="w-[782px] text-[#fdfdfd] text-sm font-normal text-center mt-2"> {/* Espaçamento abaixo do título */}
            Todos merecem crescer e prosperar e, com a força do nosso trabalho, construiremos o Estado que tanto sonhamos.
          </div>

          <div className="flex flex-1 flex-row justify-start items-center gap-[100px] mt-10"> {/* Dados mais para baixo */}
            <div className="flex flex-col items-center">
              <div className="w-[92px] text-[#fdfdfd] text-3xl font-extrabold">
              <Count endValue={4608} duration={3000}/>
              </div>
              <div className="w-20 text-[#fdfdfd] text-sm font-normal">
                Indicações
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[92px] text-[#fdfdfd] text-3xl font-extrabold">
              <Count endValue={304} duration={3000}/>
              </div>
              <div className="w-[99px] text-[#fdfdfd] text-sm font-normal">
                Leis Ordinárias
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[92px] text-[#fdfdfd] text-3xl font-extrabold">
                <Count endValue={102} duration={3000}/>
              </div>
              <div className="w-[109px] text-[#fdfdfd] text-sm font-normal">
                Requerimentos
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Count endValue={223} duration={3000}/>
              <div className="w-[165px] text-[#fdfdfd] text-sm font-normal">
                Projetos de Resolução
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}