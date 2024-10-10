import { Header } from "../../components/header/header";
import { Outlet } from "react-router-dom";


export function AppLayout(){
  return (
    <div className="grid min-h-screen col-start-auto antialiased">
      <Header />


      {/* tinha um padding de 6px p-6*/}
      <div className="grid grid-1 col-start-auto gap-4 pt-6"> 
        <Outlet />
      </div>
    </div>
  )
}