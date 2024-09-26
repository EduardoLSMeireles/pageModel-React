/* eslint-disable @typescript-eslint/no-unused-vars */
import { Footer } from "@/components/footer/footer";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";

export function Transparency() {
  return (
    <div>
      <header className="flex justify-center p-3">
        <Helmet title="Portal da Transparência" />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Portal da Transparência</h1>
          <h2 className="opacity-50 text-base font-medium tracking-tight">
            Dep. Federal Arthur Oliveira Maia
          </h2>
        </div>
      </header>

      <div id="Conteudo central" className="flex gap-8">
        {/* CONTEÚDO 1 */}
        <div className="flex w-[662px] h-[461px] rounded-[10px] bg-white border border-black">
          {/* Container da Imagem */}
          <div className="w-[187px] h-full flex items-end">
            <img
              src="https://s3-alpha-sig.figma.com/img/12e1/35f7/a27b8782871b7082d7ad4731ab51da7b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZV60Ipx1Kf7NinqSx7lqIX57nOtA3CTXIK71IXqg9TU4JRN94ihKx2xAEPTlKhdPmBOgZYeiUaKA1zDJlFaaP~RwkidqGlIfQfT1t4u38IU6~0nxRU9cYJ93XSctNeyy6flgDuioaoQ4EWC7Ce3c4mnebsVqiDoc58Uu4aYCFq4IXiidWO2lD~MOiau7b6OGoK-jgfaAnBGD79pzoHKNKPrEVyglvU7gbtg~NVGoQhHzrjQpkdrB0gKk3kEoMifZ8yMVNTbtedz35ELw~eI7g14iUk0fOHDx6JBvy13B4bric16o12rV2jLXROB8RgZnCn8jZzEv6HDc8XqnEuzWgw__"
              className="w-full h-[332px] object-cover"
            />
          </div>

          {/* DIV 1 */}
          <div className="ml-4 flex flex-col justify-center p-8 w-full">
            <h1 className="text-xl font-bold tracking-tight">
              Nosso trabalho é guiado pelas necessidades do povo baiano,
            </h1>
            <h2>
              com a transparência na destinação dos recursos como nosso principal
              objetivo. Aqui, você acompanha de perto como estamos empenhados em
              garantir que nossos municípios recebam recursos para melhorias em diversos
              setores. Além de prestar contas, este ambiente foi criado para que você
              possa acompanhar conosco as mudanças essenciais no nosso estado.
            </h2>
          </div>
        </div>

        {/* CONTEÚDO 2 */}
        <div className="flex flex-col gap-3 ml-20">
          <div className="flex text-black text-3xl font-bold">
            Informações públicas do parlamentar
          </div>
          <div className="flex opacity-50 text-black text-xs font-medium">
            Acesso aberto a atuação Política e Financeira
          </div>

          <div className="flex justify-center space-x-4">
            {/* CONTAINER DE DADOS PESSOAIS DO DEPUTADO */}
            <div className="flex flex-col justify-start items-center w-[199px] h-auto bg-[white] rounded-[10px] p-2">
              <div className="w-[109px] h-[109px] opacity-50 rounded-full border border-[black] mb-2 flex justify-center items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/8d2f/ae31/49b03e776da1513a72725c422ad71a6d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cTMer5AKCYPwL3U5vufMsKqTmOMOOa-ERTdn5wn5eJUZnCJd5XoiH4eDv59ZK~FwbwS-tem-mBo2~dQjZsIy06-Yf8srsW-Dpo1HHnE~FGmqQ6m-PZQSG5nxnfou6XR~ddVz-C3OsI~TmSk7C3uo0oeJGtn~NrvhsbUZocyq3g1rHU4mcMdD--N0KX82-4cRwys2AUkGjf77iK640hR7zjBkOT21M91oudmOa9b8XBAYbvDlgbmxfKBA4pN7DI6FDiWyjlgpjPUkwctoSbsCmXWlXt3ZK4EXIitykMco7~eIoKm~Zo9gC6C5x-keiIV9tW3MKHfzEjZI55OltwtUIg__"
                  className="w-full h-full rounded-full"
                />
              </div>

              {/* PRIMEIRO BLOCO DE INFORMAÇÕES */}
              <div id="container txt" className="w-[173px] flex flex-col gap-2 mb-2">
                <div className="flex gap-4">
                  <div>
                    <div className="flex flex-col relative w-[120px]">
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                        Nome Civil
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6 ">
                        <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                          Arthur Oliveira Maia
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col relative w-[45px]">
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                        Nascimento
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
                      <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                        17/08/1964
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEGUNDO BLOCO DE INFORMAÇÕES */ }
              <div className="w-[173px] flex flex-col gap-2 mb-2">
                <div className="flex gap-4">
                  <div>
                    <div className="flex flex-col relative w-[120px]">
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                        Naturalidade
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
                      <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                        Salvador
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col relative w-[45px]">
                      
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                        UF
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
                      <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                        BA
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TERCEIRO BLOCO DE INFORMAÇÕES */}
              <div className="w-[173px] flex flex-col gap-2 mb-2">
                <div className="flex gap-4">
                  <div>
                    <div className="flex flex-col relative w-[120px]">
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                      Formação 
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
                      <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                        Diteiro
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col relative w-[45px]">
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                        Escolaridade
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
                      <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                        Mestrado
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUARTO BLOCO DE INFORMAÇÕES */}
              <div className="w-[173px] flex flex-col gap-2 mb-2">
                <div className="flex gap-4"> 
                  <div>
                    <div className="flex flex-col relative w-[120px]">
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                        Cargo político atual  
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                        <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                        Deputado Federal - União Brasil
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUINTO BLOCO DE INFORMAÇÕES */}
              <div className="w-[173px] flex flex-col gap-2 mb-2">
                <div className="flex gap-4"> 
                  <div>
                    <div className="flex flex-col relative w-[120px]">
                      <div className="absolute opacity-50 text-black text-[6px] font-medium">
                        Salário  
                      </div>
                      <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                        <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                        R$ 30.788,66
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* CONTAINER DE MANDATOS E ATIVIDADES */}
            <div className="flex justify-center w-[343px] h-[317px] bg-[white] rounded-[15px] p-2">
              <div className="flex flex-col">
                <div className="text-black text-[10px] font-bold">
                  Mandatos na Câmara dos Deputados
                </div>
                <div className="text-black text-[8px]">
                  Deputado(a) Federal - 2011-2015, BA, PMDB, Dt. Posse: 01/02/2011; 
                  Deputado(a) Federal - 2015-2019, BA, SD, Dt. Posse: 01/02/2015; 
                  Deputado(a) Federal - 2019-2023, BA, DEM, Dt. Posse: 01/02/2019; 
                  Deputado(a) Federal - 2023-2027, BA, UNIÃO, Dt. Posse: 01/02/2023.
                </div>

                <div className="text-black text-[10px] font-bold">
                Mandatos Externos 
                </div>
                <div className="text-black text-[8px]">
                Vereador(a), Guanambi, BA, Partido: PDC, Período: 1989 a 1991; 
                Deputado(a) Estadual, BA, Partido: PMDB, Período: 1991 a 1993; 
                Prefeito(a), Bom Jesus da Lapa, BA, Partido: PMDB, Período: 1993 a 1996; 
                Deputado(a) Estadual, BA, Partido: PSDB, Período: 1999 a 2003; 
                Deputado(a) Estadual, BA, Partido: PSDB, Período: 2003 a 2007; 
                Deputado(a) Estadual, BA, Partido: PSDB, Período: 2007 a 2011.
                </div>
                
                <div className="text-black text-[10px] font-bold">
                  Atividades Profissionais e Cargos Públicos 
                </div>
                <div className="text-black text-[8px]">
                  Deputado(a) Federal - 2011-2015, BA, PMDB, Dt. Posse: 01/02/2011; 
                  Deputado(a) Federal - 2015-2019, BA, SD, Dt. Posse: 01/02/2015; 
                  Deputado(a) Federal - 2019-2023, BA, DEM, Dt. Posse: 01/02/2019; 
                  Deputado(a) Federal - 2023-2027, BA, UNIÃO, Dt. Posse: 01/02/2023.
                </div>
                <div className="text-black text-[10px] font-bold">
                  Estudos e Cursos Diversos 
                </div>
                <div className="text-black text-[8px]">
                  Direito, Universidade Federal da Bahia, Salvador, BA, 1983 - 1987; 
                  Direito Econômico, Universidade Federal da Bahia, Salvador, BA, 1999 - 2002 
                  Gestão Estratégica de Negócios, Pensilvânia University / Walton School,
                  Filadélfia, 2009.
                </div>

                <div className="text-black text-[10px] font-bold">
                  Filiações Partidárias  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
