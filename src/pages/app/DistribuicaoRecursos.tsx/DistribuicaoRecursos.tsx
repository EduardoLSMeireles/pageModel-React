import { Helmet } from "react-helmet-async";
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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0tJcTudE08J6nAd2AMM921GdepBX0CWCgyUYMQBpAw5rb-zHpcdmHF-vTdT0lS3Ue2g&usqp=CAU" className="max-h-full max-w-full object-contain" />
      </div>

      <footer className="flex flex-col items-center p-6 mb-6">
        <div className="text-black text-lg font-bold mb-4">Área Beneficiada</div>
        <div className="flex flex-col items-center space-y-4">
          {/* Contêiner superior */}
          <div className="flex flex-wrap justify-center space-x-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="w-[130px] h-[172px] bg-gray-300 rounded-lg shadow-md"></div>
            ))}
          </div>

          {/* Contêiner inferior */}
          <div className="flex flex-wrap justify-center space-x-4">
            {[...Array(8)].map((_, index) => (
              <div key={index + 8} className="w-[130px] h-[172px] bg-gray-300 rounded-lg shadow-md"></div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
