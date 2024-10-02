import { Helmet } from "react-helmet-async"

export function Home() {
  return (
    <div className="flex flex-col">
      <Helmet title="Home" />
      <div className="flex flex-col items-center justify-center text-justify w-full">
        <p className="opacity-50 text-sm font-medium">Deputado Federal</p> {/* Maior espaçamento entre os textos */}
        <p className="text-3xl font-bold">Arthur Maia</p> {/* Espaçamento maior abaixo do nome */}
        <p>A força do trabalho pela Bahia.</p>
      </div>

      <div className="relative w-full mb-6">
        <img 
          className="w-full h-[479px] object-cover bg-gray-500"
          src="link da imagem"
        />
        
        <div 
          className="absolute right-10 bottom-40 w-[280px] h-auto max-h-[380px] rounded-lg shadow-lg transition-transform transform hover:scale-105 -translate-y-1/4" // Removi bg-transparent
        >
          <img 
            src="https://s3-alpha-sig.figma.com/img/0a9a/3e4c/b2146a1856e9f2abb1a08a32b2fe1e44?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ej4O7nOakRjjZIxCyM3~vQgD2g9EqnFVrHuDbqMWRZmcSwd6AwI6Mdf2blL~iaNkRfuy4JRM9AmlO~txN6P5QTK2PEZ8CMNFYutyrMfGHWMef8B3pKl42wMyK0i6AmRUEwPV~3wWTD8PFqKe6foAR6UFdvujCLF6ariajviq0Y-1py2ZumKMBZEWLDVhFeRx91pm49j3mSa7biET1EKWkfkxK2rlWsNfkQ5VOPLLFo6cAc~vdT~qL1XtAnVQy6jU87ywjVIGQ7lnF1kXQsPNhIAERNaVVuZBU00iR9gy34FAx68yrWtJIGDYMp3rfs0-RrBXuod0wY1Qw0xx-80yRA__" 
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>


      <div className="w-full h-56 bg-[#17176a] rounded-[10px] gap-2 flex flex-col items-center justify-start p-4 pt-6">
        <div className="text-[#edeaeaf1] text-3xl font-extrabold text-center mt-2"> {/* Maior espaçamento no topo */}
          Juntos, seguiremos em frente!
        </div>
        <div className="w-[782px] text-[#fdfdfd] text-sm font-normal text-center mt-2"> {/* Espaçamento abaixo do título */}
          Todos merecem crescer e prosperar e, com a força do nosso trabalho, construiremos o Estado que tanto sonhamos.
        </div>

        <div className="flex flex-1 flex-row justify-start items-center gap-[100px] mt-10"> {/* Dados mais para baixo */}
          <div className="flex flex-col items-center">
            <div className="w-[92px] text-[#fdfdfd] text-3xl font-extrabold">
              4,680
            </div>
            <div className="w-20 text-[#fdfdfd] text-sm font-normal">
              Indicações
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[92px] text-[#fdfdfd] text-3xl font-extrabold">
              304
            </div>
            <div className="w-[99px] text-[#fdfdfd] text-sm font-normal">
              Leis Ordinárias
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[92px] text-[#fdfdfd] text-3xl font-extrabold">
              102
            </div>
            <div className="w-[109px] text-[#fdfdfd] text-sm font-normal">
              Requerimento
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[92px] text-[#fdfdfd] text-3xl font-extrabold">
              223
            </div>
            <div className="w-[165px] text-[#fdfdfd] text-sm font-normal">
              Projetos de Resolução
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
