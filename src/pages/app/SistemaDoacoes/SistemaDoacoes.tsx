import { Image } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function SistemaDoacoes() {
  return (
    <div className="h-full">
      <Helmet title="SistemaDoacoes" />
      <header className="grid justify-center p-2">
        <div className="items-center gap-4">

          <h1 className="text-3xl font-bold tracking-tight">
            Sistemas de doações
          </h1>
          <h2 className="opacity-50 text-base font-medium tracking-tight">
            Navegue por região e fique por dentro das nossas
            atividades em seu município.
          </h2>
        </div>
      </header>

      <div className="w-screen h-screen mt-20">
        <div 
          className="relative w-full h-[479px] bg-cover bg-center flex items-center justify-center bg-[#4a4a4a]" 
          style={{ backgroundImage: "link-da-imagem" }} 
          >
          <div className="w-[420px] h-[550px] bg-[#c4c4c4] rounded-sm grid cols-auto translate-y-[-35px] items-center justify-center">
            <p></p>
          </div>
          <div className="grid absolute justify-self-center bottom-[-80px] w-[1200px] h-[160px] bg-white rounded-[8px] transform-translate-y-[80px] items-center space-x-6 p-4">
            <div className="w-full">
              <div className="h-auto max-w-6xl">
                <div className="w-[400px] h-32">
                <div className="grid grid-cols-2 gap-1">
                  <p className="text-sm font-medium w-[90px] h-[90px] bg-[#4a4a4a] rounded-full"></p>
                  <p className="text-base w-[90px] h-[90px] bg-[#4a4a4a] rounded-full"></p>
                  <div className="w-[336px] h-3 bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[10px] mt-4"></div>
                </div>
                </div>
              </div>

              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 p-6 w-[336px] h-5 bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[10px]">
                <div>
                  
                </div>
              </div>
            </div>
            <div className="mt-20">
              <h1 className="opacity-50 text-3xl font-bold text-center my-8 tracking-wide">
                Titulo das informações
              </h1>
              <div className="grid grid-cols-3 w-full gap-4 p-2 sm:w-1/1 lg:w-1/1">  
                <div className="grid grid-cols-1 w-full h-full justify-start items-center gap-4">
                  <p className="w-[330px] h-9 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                </div>


                <div className="grid grid-cols-1 w-full h-full justify-start items-center gap-4">
                  <p className="w-[330px] h-9 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                </div>


                <div className="grid grid-cols-1 w-full h-full justify-start items-center gap-4">
                  <p className="w-[330px] h-9 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                  <p className="w-[330px] h-2.5 bg-[#4a4a4a] rounded-[20px]"></p>
                </div>
              </div>

              <div className="grid grid-cols-2 w-full gap-2 p-2 sm:w-1/1 lg:w-1/1 mt-52">
                <div className="w-full h-[400px] p-4">
                  <div className="w-[455px] h-9 bg-[#4a4a4a] rounded-[20px] "></div>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2 m-2">
                    <div className="rounded-full w-[90px] h-[90px] bg-[#c4c4c4] grid items-center justify-center"> <Image/> </div>
                    <div className="grid gap-1">
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2 m-2">
                    <div className="rounded-full w-[90px] h-[90px] bg-[#c4c4c4] grid items-center justify-center"> <Image/> </div>
                    <div className="grid gap-1">
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2 m-2">
                    <div className="rounded-full w-[90px] h-[90px] bg-[#c4c4c4] grid items-center justify-center">  <Image/> </div>
                    <div className="grid gap-1">
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                    </div>
                  </div>

                </div>
                


                <div className="w-full h-[400px] p-4">
                  <div className="w-[455px] h-9 bg-[#4a4a4a] rounded-[20px]"></div>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2 m-2">
                    <div className="rounded-full w-[90px] h-[90px] bg-[#c4c4c4] grid items-center justify-center"> <Image /> </div>
                    <div className="grid gap-1">
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px] grid items-center justify-center"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px] grid items-center justify-center"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px] grid items-center justify-center"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2 m-2">
                    <div className="rounded-full w-[90px] h-[90px] bg-[#c4c4c4] grid items-center justify-center"> <Image /> </div>
                    <div className="grid gap-1">
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-2 m-2">
                    <div className="rounded-full w-[90px] h-[90px] bg-[#c4c4c4] grid items-center justify-center"><Image /></div>
                    <div className="grid gap-1">
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                      <div className="w-[300px] h-2.5 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]"></div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
// import { Image } from "lucide-react"
// import { Helmet } from "react-helmet-async"

// export function SistemaDoacoes(){
//   return (
//     <div className="h-full">
//       <Helmet title="SistemaDoacoes" />
//       <div className="grid col-auto items-center justify-center text-justify w-full p-2 mb-24 border"> 
//         <p className="text-3xl font-bold border">
//           Sistema de doações
//         </p>
//         <p className="opacity-50 text-sm font-medium border">
//           Navegue por região e fique por dentro das nossas
//           atividades em seu município.
//         </p>
//       </div>

//       <div className="absolute w-full h-[479px] bg-[#4a4a4a] grid justify-center items-end">
//         <div className="grid w-[420px] h-[550px] rounded-sm translate-y-[-50px] bg-[#c4c4c4]">
//           Eduardo Lopes da Silva Meireles
//         </div>

//         <div className="flex border absolute justify-self-center bottom-[-80px] w-[1200px] h-[160px] bg-white rounded-[8px] transform-translate-y-[80px] items-center space-x-6 p-4">
//           <div className="flex gap-6">
//             <div className="grid items-center justify-center w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
//               <Image />
//             </div>
//             <div className="grid items-center justify-center w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
//               <Image />
//             </div>
//           </div>

//           <div className="absolute right-6 top-1/2 transform -translate-y-1/2 p-6 w-[336px] h-5 bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[10px]">
//             Text 
//           </div>
          
//           <div className="absolute bottom-1 w-[325px] h-4 bg-[#4a4a4a] rounded-[20px] justify-center text-center ">
//             hey boy
//           </div>

//         </div>

//           <div className="grid grid-cols-3 gap-6 m-16 border w-full h-[auto]">
//             <div className="">
//               <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-4">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//             </div>

//             <div className="">
//               <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-4">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//             </div>

//             <div className="">
//               <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-4">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//               <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">Text Area</p>
//             </div>

//           </div>

//           <div className="border  w-full h-screen">
//             <div className="grid grid-cols-3 m-16 border">
//               <div>
//                 <div className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px] m-2">
//                   edsuadf
//                 </div>
//                 <div className="grid grid-cols-2 items-center gap-2">

//                   <div>

//                   <div className="grid grid-cols-2 items-center ">
//                     <div className="w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
//                     </div>
//                     <div className=" space-y-2">
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-1
//                       </div>
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-2
//                       </div>
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-3
//                       </div>
//                     </div>
//                   </div>

//                     <div className="w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
//                     </div>
//                     <div className=" space-y-2">
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-1
//                       </div>
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-2
//                       </div>
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-3
//                       </div>
//                     </div>

//                     <div className="w-[90px] h-[90px] bg-[#4a4a4a] rounded-full">
//                     </div>
//                     <div className=" space-y-2">
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-1
//                       </div>
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-2
//                       </div>
//                       <div className="w-[336px] h-4 bg-gradient-to-r from-[#4a4a4a] via-[#7d7d7d] to-[#b0b0b0] rounded-[20px]">
//                         text-3
//                       </div>
//                     </div>
                    
//                   </div>

//                 </div>
//               </div>
//             </div>



//           </div>
//           <div>
//         </div>
//       </div>
//     </div>
//   )
// }


// /* <div className="grid grid-cols-3 gap-6 m-14 border">
// <div className="">
//   <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
// </div>

// <div>
//   <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
// </div>

// <div>
//   <p className="w-[325px] h-[36px] text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
//   <p className="text-center bg-gradient-to-r from-[#4a4a4a] to-[#b0b0b0] rounded-[20px]">Text Area</p>
// </div>
// </div> */
