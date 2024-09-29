import { createBrowserRouter } from "react-router-dom"

import { SignIn } from "./pages/auth/sign-in"
import { AppLayout } from "./pages/_layouts/app"
import { AuthLayout } from "./pages/_layouts/auth"

// Imports do header
import { Home } from "./pages/app/Home"
import { Schedule } from "./pages/app/Schedule/Schedule"
import { Contact } from "./pages/app/Contact/Contat"
import { Trajectory } from "./pages/app/Trajectory/Trajectory"
import { Transparency } from "./pages/app/Transparency/Transparency"
import { DistribuicaoRecursos } from "./pages/app/DistribuicaoRecursos.tsx/DistribuicaoRecursos"
import { DocumentosOficiais } from "./pages/app/DocumentosOficiais/DocumentosOficiais"
import { VotacoesPesquisas } from "./pages/app/VotacoesPesquisas/VotacoesPesquisas"
import { SistemaDoacoes } from "./pages/app/SistemaDoacoes/SistemaDoacoes"
import { RegistroAtividades } from './pages/app/RegistroAtividades/RegistroAtividades'


// Imports do footer


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/schedule", element: <Schedule />},
      {path: "/contact", element: <Contact />},
      {path: "/trajectory", element: <Trajectory />},
      {path: "/transparency", element: <Transparency />},
      {path: "/distribuicao-recursos", element: <DistribuicaoRecursos />},
      {path: "/registro-atividades", element: <RegistroAtividades />},
      {path: "/documentos-oficiais", element: <DocumentosOficiais />},
      {path: "/votacoes-pesquisas", element: <VotacoesPesquisas />},
      {path: "/sistema-doacoes", element: <SistemaDoacoes />}


    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{path: "/sign-in", element: <SignIn />}],
  },
])