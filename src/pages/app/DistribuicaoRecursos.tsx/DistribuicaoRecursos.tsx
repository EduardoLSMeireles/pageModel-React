import { Helmet } from "react-helmet-async"
import { BrazilianMap } from '../../../components/images/brazilianMap'
import { MiniBox } from "@/components/miniBox/miniBox";
export function DistribuicaoRecursos() {
  return (
    <div>
      <Helmet title="DistribuicaoRecursos" />
      <div className="flex flex-col items-center justify-center text-justify w-full mb-5">
        <p className="text-black text-3xl font-bold"> Mapa de redirecionamento de verba</p>
        <p className="opacity-50 text-black text-xs font-medium">Navegue por região e fique por dentro dos investimentos
        feitos em seu município.</p>
      </div>
      <div className="w-full h-[700px] bg-gray-400 mb-6 p-6 flex items-center justify-center">
  {/* Imagem do mapa do Brasil */}
  <div className="grid items-center justify-center w-auto h-auto max-w-[800px] transition-transform transform hover:scale-105 -translate-y-1/1">
    <BrazilianMap />
  </div>
</div>



      <footer className="flex flex-col items-center p-6 mb-6">
        <div className="text-black text-lg font-bold mb-4">Área Beneficiada</div>
        <div className="flex flex-col items-center space-y-4">
          <MiniBox />
        </div>
      </footer>
    </div>
  );
}
