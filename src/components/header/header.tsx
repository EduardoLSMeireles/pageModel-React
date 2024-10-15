 
import { Separator } from "@radix-ui/react-separator"
import { NavLink } from "./nav-link"

export function Header() {
  return (
    <div>
      <div className="border-b">
        <div className="flex h-16 items-center gap-6 px-6">
          {/* icone esquerda */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
            <img 
              src="https://s3-alpha-sig.figma.com/img/9b13/7865/732dcf75e1f4ec803b085daf7870a665?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFH6tU20u7dIC4UUlhDqznXS8Rd4fz0UcYjXqwI0XVOesJ7kwphLP9XLpfihCDCoS7IrOrqxzKC24ArabtmcUS2MBQU8v7udVPYpzG5j9sWC2N5t5utochPprLEBXVopBuIYFZyWqYSjdkm4esLIdJ~kZxjb7d2SIVozFPawFwpvMwrbCgkIFjeKKETgmDi0aVdF2NZRuZsh8FwioPKu~Kt0QTM8KH9DLEdstlrUDvWJ1fpKaLVMtk913vEnxOHexsKxxxVovKIB4ZXCXoyCCPhBMNhBbgTAZfbHDW8-4SiEKbqvdb5l0nnOC9wo6oMQ4TA8zObWbiV5tHowRYfi9w__"
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
            src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOTldW8K3VhOwJzBsLBCctcthCgxYoDqeA2xKwTBAure2HRw~BV87h7Q~BhPCgxwD1x~UQ-yh1D8IkAnLrmNneD2Q1HXNVv3TTdTNoGblLYJR~DilwrMsOTHJA8YwERh5fmp98yphsVEIgFwMr2Iq3eRxkAqKtI~G4tCtLhIL1xQV2Ut3hQr6y2d4pLGWSEUbZqVXTZtc-IPrlPWugkd~-GkRpxxHfy40BfBi05Y6Qw0EcAM~TCfVIXwKi~ERt4m-MnHU-fbj5LOZRvbKFuZD9En~mA-RBb0SJ0pS~z5f6fUv0o~4O6Cco7J7YsqwIQfPgXibe-M8ao1BDcAZz42iA__"
            className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
