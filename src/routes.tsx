import { createBrowserRouter } from "react-router-dom"

import { Home } from "./pages/app/Home"
import { SignIn } from "./pages/auth/sign-in"
import { AppLayout } from "./pages/_layouts/app"
import { AuthLayout } from "./pages/_layouts/auth"
import { Schedule } from "./pages/app/Schedule/Schedule"
import { Contact } from "./pages/app/Contact/Contat"
import { Trajectory } from "./pages/app/Trajectory/Trajectory"
import { Transparency } from "./pages/app/Transparency/Transparency"

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
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{path: "/sign-in", element: <SignIn />}],
  },
])