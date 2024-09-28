import { Header } from "../../components/header/header";
import { Outlet } from "react-router-dom";


export function AppLayout(){
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />


      {/* tinha um padding de 6px p-6*/}
      <div className="flex flex-1 flex-col gap-4 pt-6"> 
        <Outlet />
      </div>
    </div>
  )
}