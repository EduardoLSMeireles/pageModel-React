import { Count } from "@/components/count/count"
import { Helmet } from "react-helmet-async"
export function Home() {

  return (
    <div className="relative flex-col">
      <Helmet title="Home" />
      <div className="flex flex-col items-center justify-center text-justify w-full">
        <p className="opacity-50 text-sm font-medium">Deputado Federal</p> {/* Maior espaçamento entre os textos */}
        <p className="text-3xl font-bold">Arthur Maia</p> {/* Espaçamento maior abaixo do nome */}
        <p>A força do trabalho pela Bahia.</p>
      </div>

      <div className="relative w-full mb-6">
        <img 
          className="w-full h-[479px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/aeac/dfa2/d3b7a99b4028b3f6c79a0fa59a4e7ea3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f4atUpAu8VgUl4hlFSm-TzPIR25FnM-8fTW5AZGAYjjn2q6pBBclqbPiiq-3ycumzqjFGYayANHLaUJ9azF9eK4JUhcUHzc1yW652Xoeppeb1VsZ1DD6BJZbBIrvKmTAO-IVTlgRuSE7FHlRET7XykNG8-jk5DW2Qy390RwZCB-tE4TNZHIrUtllmfmWUc2XGK-TPSHEkko2m-0RyJrWp8aIOID2Y0FRnJdiFbyRHU596BGNEklOlL~I1bnwXgupBSfeQSeCAnJjSmUscE8WjO9aCgY6yqDozQAuUOl6P0r2KtLqp8YIiLgFcYVlR29Mgx4kLHe5DHcbMNbV3azlbw__"
        />
        
        <div 
          className="absolute right-10 bottom-44 w-[366px] h-auto max-h-[380px] rounded-lg transition-transform transform hover:scale-105 -translate-y-1/4" // Removi bg-transparent
        >
          <img 
            src="https://s3-alpha-sig.figma.com/img/0a9a/3e4c/b2146a1856e9f2abb1a08a32b2fe1e44?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ej4O7nOakRjjZIxCyM3~vQgD2g9EqnFVrHuDbqMWRZmcSwd6AwI6Mdf2blL~iaNkRfuy4JRM9AmlO~txN6P5QTK2PEZ8CMNFYutyrMfGHWMef8B3pKl42wMyK0i6AmRUEwPV~3wWTD8PFqKe6foAR6UFdvujCLF6ariajviq0Y-1py2ZumKMBZEWLDVhFeRx91pm49j3mSa7biET1EKWkfkxK2rlWsNfkQ5VOPLLFo6cAc~vdT~qL1XtAnVQy6jU87ywjVIGQ7lnF1kXQsPNhIAERNaVVuZBU00iR9gy34FAx68yrWtJIGDYMp3rfs0-RrBXuod0wY1Qw0xx-80yRA__" 
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

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
              Requerimento
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
  )
}