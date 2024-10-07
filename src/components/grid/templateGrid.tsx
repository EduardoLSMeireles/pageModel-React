import { Helmet } from "react-helmet-async"


export function templateGrid () {
  return (
    <div className="h-full">
    <Helmet title="SistemaDoacoes" />
      <div className="grid col-auto items-center justify-center text-justify w-full p-2 mb-24"> 
          <p className="text-3xl font-bold">
            Sistema de doações
          </p>
          <p className="opacity-50 text-sm font-medium">
            Navegue por região e fique por dentro das nossas
            atividades em seu município.
          </p>
      </div>

      <div className="grid grid-cols-3 gap-4">

          <div className="...">
            item 1
          </div>

          <div className="...">
            item 2
          </div>

          <div className="...">
            item 3
          </div>

      </div>
    </div>
  )
}