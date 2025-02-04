/* eslint-disable @typescript-eslint/no-unused-vars */ 
import { Footer } from "@/components/footer/footer"; 
import { IPad } from "@/components/iPad/iPad";
import { Helmet } from "react-helmet-async"; 

export function Transparency() { return (
<div>
    <header className="grid justify-center p-2">
        <Helmet title="Portal da Transparência" />
        <div className="grid cols-auto items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Portal da Transparência</h1>
            <h2 className="opacity-50 text-base font-medium tracking-tight">
            Dep. Federal Arthur Oliveira Maia
          </h2>
        </div>
    </header>

    <div className="flex justify-between p-14 w-full mb-4">
        {/* CONTEÚDO 1 */}
        <div className="flex flex-shrink">
            <IPad />
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
                <div className="flex flex-col justify-start items-center border w-[230px] h-auto rounded-[10px] p-2">
                    <div className="w-[110px] h-[110px] rounded-full border border-[#c4c4c4] flex justify-center items-center mb-4">
                        <div className="w-[99.84px] h-[100px] bg-[#c4c4c4] rounded-full">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/8d2f/ae31/49b03e776da1513a72725c422ad71a6d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZSRu8Ii3gd86Gz6KPfMSAX9OzFjS7tDqBkoHG90Qfd69ElJX9tGbQ8jIn9BZgvhhT6zSETdkUB--0zqbevzxPjLXDJDjDBIutdOWAL8Qy5oLAe2W2FpY-q~eR~kpPmM46zHY8UuzWamNx6yZ~~yXSwkmRDKJUwqrzqUf86iG-d8EmXjEhv~C4A-D0TuBcLmIp4FsMfo7X1ZJkzJEuDueM~IwZpsnV2Kxc6zzvj40Nyr~C4NmyomLFZ-ZDo~wZZHZuQVQ2GWPfIjXnUGxZHz5a~JhHe9~CF73478KbxPNKtrb~AWj77ShS2uur1v65bearAZAXYlBYc5rtCH-67-~w__" 
                                className="w-full h-[100px] bg-[#c4c4c4] object-cover rounded-full" 
                            />
                        </div>
                    </div>

                    {/* PRIMEIRO BLOCO DE INFORMAÇÕES */}
                    <div id="container txt" className="w-[173px] flex flex-col gap-2 mb-2">
                        <div className="flex gap-4">
                            <div>
                                <div className="opacity-50 text-black text-[6px] font-medium">
                                    Nome civil
                                </div>
                                <div className="flex flex-col relative w-[120px]">
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6 ">
                                        <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                                            Arthur Oliveira Maia
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                
                                <div className="flex flex-col relative w-[60px]">
                                    <div className="opacity-50 text-black text-[6px] font-medium">
                                        Nascimento
                                    </div>
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                                    <div className="relative left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                                    17/08/1964
                                    </div>
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
                                    <div className="opacity-50 text-black text-[6px] font-medium">
                                        Naturalidade
                                    </div>
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                                        <div className="relative left-1 top-1 text-black text-[12px] font-medium whitespace-nowrap">
                                        Salvador
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col relative w-[45px]">
                                    <div className="opacity-50 text-black text-[6px] font-medium">
                                    UF
                                    </div>
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                                        <div className="relative left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
                                        BA
                                        </div>
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
                                    <div className="opacity-50 text-black text-[6px] font-medium">
                                    Formação
                                    </div>
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                                        <div className="relative left-1 top-1 text-black text-[11px] font-medium whitespace-nowrap">
                                        Direito
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col relative w-[55px]">
                                    <div className=" opacity-50 text-black text-[6px] font-medium">
                                        Escolaridade
                                    </div>
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                                        <div className="relative left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap ">
                                            Mestrado
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUARTO BLOCO DE INFORMAÇÕES */}
                    <div className="w-[173px] flex flex-col gap-2 mb-2">
                        <div className="flex gap-4">
                            <div>
                                <div className="flex flex-col relative w-[160px]">
                                    <div className="opacity-50 text-black text-[6px] font-medium">
                                    Cargo político atual
                                    </div>
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                                        <div className="relative left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
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
                                <div className="flex flex-col relative w-[75px]">
                                    <div className="opacity-50 text-black text-[6px] font-medium">
                                    Salário
                                    </div>
                                    <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6">
                                        <div className="relative left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">
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
                        <div className="text-black text-[10px] font-bold border">
                            Mandatos na Câmara dos Deputados
                        </div>
                        <div className="text-black text-[8px]">
                            Deputado(a) Federal - 2011-2015, BA, PMDB, Dt. Posse: 01/02/2011; Deputado(a) Federal - 2015-2019, BA, SD, Dt. Posse: 01/02/2015; Deputado(a) Federal - 2019-2023, BA, DEM, Dt. Posse: 01/02/2019; Deputado(a) Federal - 2023-2027, BA, UNIÃO, Dt. Posse: 01/02/2023.
                        </div>

                        <div className="text-black text-[10px] font-bold border">
                            Mandatos Externos
                        </div>
                        <div className="text-black text-[8px]">
                            Vereador(a), Guanambi, BA, Partido: PDC, Período: 1989 a 1991; Deputado(a) Estadual, BA, Partido: PMDB, Período: 1991 a 1993; Prefeito(a), Bom Jesus da Lapa, BA, Partido: PMDB, Período: 1993 a 1996; Deputado(a) Estadual, BA, Partido: PSDB, Período: 1999
                            a 2003; Deputado(a) Estadual, BA, Partido: PSDB, Período: 2003 a 2007; Deputado(a) Estadual, BA, Partido: PSDB, Período: 2007 a 2011.
                        </div>

                        <div className="text-black text-[10px] font-bold border">
                            Atividades Profissionais e Cargos Públicos
                        </div>
                        <div className="text-black text-[8px]">
                            Deputado(a) Federal - 2011-2015, BA, PMDB, Dt. Posse: 01/02/2011; Deputado(a) Federal - 2015-2019, BA, SD, Dt. Posse: 01/02/2015; Deputado(a) Federal - 2019-2023, BA, DEM, Dt. Posse: 01/02/2019; Deputado(a) Federal - 2023-2027, BA, UNIÃO, Dt. Posse: 01/02/2023.
                        </div>
                        <div className="text-black text-[10px] font-bold border">
                            Estudos e Cursos Diversos
                        </div>
                        <div className="text-black text-[8px]">
                            Direito, Universidade Federal da Bahia, Salvador, BA, 1983 - 1987; Direito Econômico, Universidade Federal da Bahia, Salvador, BA, 1999 - 2002 Gestão Estratégica de Negócios, Pensilvânia University / Walton School, Filadélfia, 2009.
                        </div>

                        <div className="text-black text-[10px] font-bold border">
                            Filiações Partidárias
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <Footer />
</div>
); }