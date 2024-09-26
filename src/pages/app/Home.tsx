import { Helmet } from "react-helmet-async"

export function Home(){
  return (
    <div className="flex flex-col">
     <Helmet title="Home" />
      <div className="flex flex-col relative items-center justify-center">
        <p className="flex opacity-50 text-sm font-medium">Deputado Federal</p>
        <p className="flex text-3xl font-bold">Arthur Maia</p>
        <p className="flex">A força do trabalho pela Bahia.</p>
      </div>

    <div className="relative w-full mb-5">
      <img 
        className="w-full h-[479px] object-cover"
        src="https://st3.depositphotos.com/1011646/36678/i/450/depositphotos_366789012-stock-photo-bahia-flag-waving-wind-brazilian.jpg" />
      <img 
        className="absolute right-10 bottom-10 w-[280px] h-auto max-h-[380px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" 
        src="https://via.placeholder.com/418x745" />
    </div>

    <div className="w-full h-56 bg-[#253d85] rounded-[10px] gap-2 flex flex-col items-center justify-start p-4">
      <div className="text-[#fdfdfd] text-3xl font-extrabold text-center">
        Juntos, seguiremos em frente!
      </div>
      <div className="w-[782px] text-[#fdfdfd] text-sm font-normal text-center">
        Todos merecem crescer e prosperar e, com a força do nosso trabalho, construiremos o Estado que tanto sonhamos.
      </div>
    </div>



  </div>
     
  )
}