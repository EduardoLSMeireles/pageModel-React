// // import { Separator } from "@/components/ui/separator"
// import { Helmet } from "react-helmet-async"
// import { Link } from "react-router-dom"

// export function Transparency() {
//   return (
//     <div>
//       <header className="flex justify-center p-3">
//         <Helmet title="Portal da Transparencia" />
//         <div className="flex flex-col items-center gap-4">
//           <h1 className="text-3xl font-bold tracking-tight">Portal da Transparência</h1>
//           <h2 className="opacity-50 text-base font-medium tracking-tight">
//             Dep. Federal Arthur Oliveira Maia
//           </h2>
//         </div>
//       </header>

//       <div id="Conteudo central" className="flex gap-8">
//         {/* CONTEUDO 1 */}
//         <div className="flex w-[662px] h-[461px] rounded-[10px] bg-white border border-black">
//           {/* Container da Imagem */}
//           <div className="w-[187px] h-full flex items-end">
//             <img
//               src="https://s3-alpha-sig.figma.com/img/12e1/35f7/a27b8782871b7082d7ad4731ab51da7b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZV60Ipx1Kf7NinqSx7lqIX57nOtA3CTXIK71IXqg9TU4JRN94ihKx2xAEPTlKhdPmBOgZYeiUaKA1zDJlFaaP~RwkidqGlIfQfT1t4u38IU6~0nxRU9cYJ93XSctNeyy6flgDuioaoQ4EWC7Ce3c4mnebsVqiDoc58Uu4aYCFq4IXiidWO2lD~MOiau7b6OGoK-jgfaAnBGD79pzoHKNKPrEVyglvU7gbtg~NVGoQhHzrjQpkdrB0gKk3kEoMifZ8yMVNTbtedz35ELw~eI7g14iUk0fOHDx6JBvy13B4bric16o12rV2jLXROB8RgZnCn8jZzEv6HDc8XqnEuzWgw__"
//               className="w-full h-[332px] object-cover"
//             />
//           </div>

//           {/* DIV 1 */}
//           <div className="ml-4 flex flex-col justify-center p-8 w-full">
//             <h1 className="text-xl font-bold tracking-tight">
//               Nosso trabalho é guiado pelas necessidades do povo baiano,
//             </h1>
//             <h2>
//               com a transparência na destinação dos recursos como nosso principal
//               objetivo. Aqui, você acompanha de perto como estamos empenhados em
//               garantir que nossos municípios recebam recursos para melhorias em diversos
//               setores. Além de prestar contas, este ambiente foi criado para que você
//               possa acompanhar conosco as mudanças essenciais no nosso estado.
//             </h2>
//           </div>
//         </div>

//         {/* CONTEUDO 2 */}
//         <div className="flex flex-col gap-3 ml-20">
//           <div className="flex text-black text-3xl font-bold">
//             Informações públicas do parlamentar
//           </div>
//           <div className="flex opacity-50 text-black text-xs font-medium">
//             Acesso aberto a atuação Política e Financeira
//           </div>


//           <div className="flex justify-center space-x-4">

//             {/* CONTAINER DE DADOS PESSOAIS DO DEPUTADO */}
//             <div className="flex flex-col justify-start items-center w-[199px] h-auto bg-[#4a4a4a] rounded-[10px] p-2">
//               <div className="w-[109px] h-[109px] opacity-50 rounded-full border border-[#6d7984] mb-2 flex justify-center items-center">
//                 <img
//                   src="https://s3-alpha-sig.figma.com/img/8d2f/ae31/49b03e776da1513a72725c422ad71a6d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cTMer5AKCYPwL3U5vufMsKqTmOMOOa-ERTdn5wn5eJUZnCJd5XoiH4eDv59ZK~FwbwS-tem-mBo2~dQjZsIy06-Yf8srsW-Dpo1HHnE~FGmqQ6m-PZQSG5nxnfou6XR~ddVz-C3OsI~TmSk7C3uo0oeJGtn~NrvhsbUZocyq3g1rHU4mcMdD--N0KX82-4cRwys2AUkGjf77iK640hR7zjBkOT21M91oudmOa9b8XBAYbvDlgbmxfKBA4pN7DI6FDiWyjlgpjPUkwctoSbsCmXWlXt3ZK4EXIitykMco7~eIoKm~Zo9gC6C5x-keiIV9tW3MKHfzEjZI55OltwtUIg__"
//                   className="w-full h-full rounded-full"
//                 />
//               </div>
//                 {/*  Nome Civil / Nascimento */}
//                 <div className="w-[173px] flex flex-col gap-2">
//   <div className="flex gap-4">
//     {/* Primeiro "Nome Civil" e "Nascimento" */}
//     <div>
//       <div className="flex flex-col relative w-[120px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium">Nome Civil</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">Arthur Oliveira Maia</div>
//       </div>
//     </div>
//     <div>
//       <div className="flex flex-col relative w-[45px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium font-['Inter']">Nascimento</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">17/08/1964</div>
//       </div>
//     </div>
//   </div>

//   <div className="flex gap-4">
//     {/* Segundo "Nome Civil" e "Nascimento" */}
//     <div>
//       <div className="flex flex-col relative w-[120px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium">Nome Civil</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">Arthur Oliveira Maia</div>
//       </div>
//     </div>
//     <div>
//       <div className="flex flex-col relative w-[45px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium font-['Inter']">Nascimento</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">17/08/1964</div>
//       </div>
//     </div>
//   </div>

//   <div className="flex gap-4">
//     {/* Terceiro "Nome Civil" e "Nascimento" */}
//     <div>
//       <div className="flex flex-col relative w-[120px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium">Nome Civil</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">Arthur Oliveira Maia</div>
//       </div>
//     </div>
//     <div>
//       <div className="flex flex-col relative w-[45px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium font-['Inter']">Nascimento</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">17/08/1964</div>
//       </div>
//     </div>
//   </div>

//   <div className="flex gap-4">
//     {/* Quarto "Nome Civil" e "Nascimento" */}
//     <div>
//       <div className="flex flex-col relative w-[120px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium">Nome Civil</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">Arthur Oliveira Maia</div>
//       </div>
//     </div>
//     <div>
//       <div className="flex flex-col relative w-[45px]">
//         <div className="absolute opacity-50 text-black text-[6px] font-medium font-['Inter']">Nascimento</div>
//         <div className="bg-white rounded-[5px] border border-[#c2c7cd]/20 h-6" />
//         <div className="absolute left-1 top-1 text-black text-[9px] font-medium whitespace-nowrap">17/08/1964</div>
//       </div>
//     </div>
//   </div>
// </div>

//               </div>
//             </div>

//             {/* CONTAINER DE MANDATOS E ATIVIDADES */}
//             <div className="flex justify-center items-center w-[343px] h-[317px] bg-[#4a4a4a] rounded-[15px] p-2">
//               Container 2
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="mt-26 p-20">
//         <div className="flex items-center justify-between px-8 border-b w-full h-[161px] bg-white rounded-[10px]">
//           {/* Esfera 1 - Distribuição de recursos */}
//           <Link to="/distribuicao-recursos" className="flex flex-col items-center text-center">
//             <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPz4Sq8jMH9mGdn90VrHhYBt34CXhEYMF3scVGIR1tq6B36Vu9k-C-Y1tJaFD0t-JOr5CQGpSYMf6XFc9b1ng0s4JWWeShSGZ2gNkrNhwgTKGGOHi6TcLcmi83oocmCRqW8DT~edmdPqCZzL79TUab8KBz4Ihkybv3oKVpgh7dffJodBk6eeMeyb4yRTkdjjLWNHvpAxk02obz4UrTU9N1Q4GSeoiFpEaWC9KAa18G0ktfslDGtcmZsdaeOWVgNmp--pEGSS8NbBSdDyrv0g-L1l~X-9hAuj0NfNk9Vw-yxN-gHtFoSawBIORQMw5rFmwBjByQRI~JPiWJ8LvMupjA__"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <span className="mt-2 text-sm font-medium">Distribuição de recursos</span>
//           </Link>

//           {/* Esfera 2 - Registro de atividades */}
//           <Link to="/registro-atividades" className="flex flex-col items-center text-center">
//             <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPz4Sq8jMH9mGdn90VrHhYBt34CXhEYMF3scVGIR1tq6B36Vu9k-C-Y1tJaFD0t-JOr5CQGpSYMf6XFc9b1ng0s4JWWeShSGZ2gNkrNhwgTKGGOHi6TcLcmi83oocmCRqW8DT~edmdPqCZzL79TUab8KBz4Ihkybv3oKVpgh7dffJodBk6eeMeyb4yRTkdjjLWNHvpAxk02obz4UrTU9N1Q4GSeoiFpEaWC9KAa18G0ktfslDGtcmZsdaeOWVgNmp--pEGSS8NbBSdDyrv0g-L1l~X-9hAuj0NfNk9Vw-yxN-gHtFoSawBIORQMw5rFmwBjByQRI~JPiWJ8LvMupjA__"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <span className="mt-2 text-sm font-medium">Registro de atividades</span>
//           </Link>

//           {/* Esfera 3 - Documentos oficiais */}
//           <Link to="/documentos-oficiais" className="flex flex-col items-center text-center">
//             <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPz4Sq8jMH9mGdn90VrHhYBt34CXhEYMF3scVGIR1tq6B36Vu9k-C-Y1tJaFD0t-JOr5CQGpSYMf6XFc9b1ng0s4JWWeShSGZ2gNkrNhwgTKGGOHi6TcLcmi83oocmCRqW8DT~edmdPqCZzL79TUab8KBz4Ihkybv3oKVpgh7dffJodBk6eeMeyb4yRTkdjjLWNHvpAxk02obz4UrTU9N1Q4GSeoiFpEaWC9KAa18G0ktfslDGtcmZsdaeOWVgNmp--pEGSS8NbBSdDyrv0g-L1l~X-9hAuj0NfNk9Vw-yxN-gHtFoSawBIORQMw5rFmwBjByQRI~JPiWJ8LvMupjA__"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <span className="mt-2 text-sm font-medium">Documentos oficiais</span>
//           </Link>

//             {/* Esfera 4 - Votações e Pesquisas */}
//           <Link to="/votacoes-pesquisas" className="flex flex-col items-center text-center">
//             <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPz4Sq8jMH9mGdn90VrHhYBt34CXhEYMF3scVGIR1tq6B36Vu9k-C-Y1tJaFD0t-JOr5CQGpSYMf6XFc9b1ng0s4JWWeShSGZ2gNkrNhwgTKGGOHi6TcLcmi83oocmCRqW8DT~edmdPqCZzL79TUab8KBz4Ihkybv3oKVpgh7dffJodBk6eeMeyb4yRTkdjjLWNHvpAxk02obz4UrTU9N1Q4GSeoiFpEaWC9KAa18G0ktfslDGtcmZsdaeOWVgNmp--pEGSS8NbBSdDyrv0g-L1l~X-9hAuj0NfNk9Vw-yxN-gHtFoSawBIORQMw5rFmwBjByQRI~JPiWJ8LvMupjA__"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <span className="mt-2 text-sm font-medium">
//               Votações e Pesquisas
//             </span>
//           </Link>

//             {/* Esfera 5 - Sistema de doações */}
//             <Link to="/sistema-doacoes" className="flex flex-col items-center text-center">
//             <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
//               <img
//                 src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPz4Sq8jMH9mGdn90VrHhYBt34CXhEYMF3scVGIR1tq6B36Vu9k-C-Y1tJaFD0t-JOr5CQGpSYMf6XFc9b1ng0s4JWWeShSGZ2gNkrNhwgTKGGOHi6TcLcmi83oocmCRqW8DT~edmdPqCZzL79TUab8KBz4Ihkybv3oKVpgh7dffJodBk6eeMeyb4yRTkdjjLWNHvpAxk02obz4UrTU9N1Q4GSeoiFpEaWC9KAa18G0ktfslDGtcmZsdaeOWVgNmp--pEGSS8NbBSdDyrv0g-L1l~X-9hAuj0NfNk9Vw-yxN-gHtFoSawBIORQMw5rFmwBjByQRI~JPiWJ8LvMupjA__"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <span className="mt-2 text-sm font-medium">Sistema de doações</span>
//           </Link>
//         </div>
//       </footer>
//     </div>
//   )
// }