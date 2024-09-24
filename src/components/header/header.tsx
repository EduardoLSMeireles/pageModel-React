/* eslint-disable @typescript-eslint/no-unused-vars */
import { Separator } from "@radix-ui/react-separator"
import { Home } from "lucide-react"
import { Link } from "react-router-dom"
import { NavLink } from "./nav-link"

export function Header() {
  return (
    <div>
      <div className="border-b">
        <div className="flex h-16 items-center gap-6 px-6">
          {/* icone esquerda */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
            <img 
              src="https://s3-alpha-sig.figma.com/img/9b13/7865/732dcf75e1f4ec803b085daf7870a665?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYxUEx6CTyCax76kr96J9kBXRGP5TyIgZD4Qs7AeuAiE1wl5IdfY~CkScuPqRzSj63dwyhzaIZtKLgFEHhK8ViFYYtBrlTnQWWR-~4vyiRrOGJRZP89TJOILayzQFxhy63EzZ-pxS3sFWKwa2lSkTAJ3iAS4zf0niyWfq-nZr74gI1nrd~ydoI0Dn58C0dpPFRqMisq6VHS~nplUoksDeuz2guzBtBHJ6Ns7dOYEOTrZdIOOFs4kFFegHH2-Nl4tITJQk0DyhTe9LUuP9MMjyjsd0wLcntriq6nAt537UmlqDe6TjfnjSDIy9JoMVJLwNLjIZYYcIk9JNDGY8azqWg__"
              className="object-cover w-full h-full"
            />
          </div>

          <Separator orientation="vertical" className="h-6" />

          <nav className="flex justify-center items-center gap-10 space-x-4 lg:space-x-6 w-full">
            <NavLink to="/">
              Inicial
            </NavLink>

            <NavLink to="/schedule">
              Agenda
            </NavLink>

            <NavLink to="/contact">
              Contato
            </NavLink>

            <NavLink to="/Trajectory">
              Trajetória política
            </NavLink>

            <NavLink to="/Transparency">
              Transparência
            </NavLink>
          </nav>

          {/* icone direita */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
            <img 
            src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPz4Sq8jMH9mGdn90VrHhYBt34CXhEYMF3scVGIR1tq6B36Vu9k-C-Y1tJaFD0t-JOr5CQGpSYMf6XFc9b1ng0s4JWWeShSGZ2gNkrNhwgTKGGOHi6TcLcmi83oocmCRqW8DT~edmdPqCZzL79TUab8KBz4Ihkybv3oKVpgh7dffJodBk6eeMeyb4yRTkdjjLWNHvpAxk02obz4UrTU9N1Q4GSeoiFpEaWC9KAa18G0ktfslDGtcmZsdaeOWVgNmp--pEGSS8NbBSdDyrv0g-L1l~X-9hAuj0NfNk9Vw-yxN-gHtFoSawBIORQMw5rFmwBjByQRI~JPiWJ8LvMupjA__"
            className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
