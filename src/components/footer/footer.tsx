import { NavLink } from "./footer-link";

export function Footer() {
  return (
    <footer className="mt-25 p-6 bg-white rounded-[10px] transform-translate-y-[80px] flex items-center">
      <nav className="flex items-center justify-between px-8 border-b w-full h-[161px] bg-white rounded-[10px]">
        {/* Esfera 1 - Distribuição de recursos */}
        <NavLink to="/distribuicao-recursos" className="flex flex-col items-center text-center">
          <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOTldW8K3VhOwJzBsLBCctcthCgxYoDqeA2xKwTBAure2HRw~BV87h7Q~BhPCgxwD1x~UQ-yh1D8IkAnLrmNneD2Q1HXNVv3TTdTNoGblLYJR~DilwrMsOTHJA8YwERh5fmp98yphsVEIgFwMr2Iq3eRxkAqKtI~G4tCtLhIL1xQV2Ut3hQr6y2d4pLGWSEUbZqVXTZtc-IPrlPWugkd~-GkRpxxHfy40BfBi05Y6Qw0EcAM~TCfVIXwKi~ERt4m-MnHU-fbj5LOZRvbKFuZD9En~mA-RBb0SJ0pS~z5f6fUv0o~4O6Cco7J7YsqwIQfPgXibe-M8ao1BDcAZz42iA__"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="mt-2 text-sm font-medium">Distribuição de recursos</span>
        </NavLink>

        {/* Esfera 2 - Registro de atividades */}
        <NavLink to="/registro-atividades" className="flex flex-col items-center text-center">
          <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOTldW8K3VhOwJzBsLBCctcthCgxYoDqeA2xKwTBAure2HRw~BV87h7Q~BhPCgxwD1x~UQ-yh1D8IkAnLrmNneD2Q1HXNVv3TTdTNoGblLYJR~DilwrMsOTHJA8YwERh5fmp98yphsVEIgFwMr2Iq3eRxkAqKtI~G4tCtLhIL1xQV2Ut3hQr6y2d4pLGWSEUbZqVXTZtc-IPrlPWugkd~-GkRpxxHfy40BfBi05Y6Qw0EcAM~TCfVIXwKi~ERt4m-MnHU-fbj5LOZRvbKFuZD9En~mA-RBb0SJ0pS~z5f6fUv0o~4O6Cco7J7YsqwIQfPgXibe-M8ao1BDcAZz42iA__"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="mt-2 text-sm font-medium">Registro de atividades</span>
        </NavLink>

        {/* Esfera 3 - Documentos oficiais */}
        <NavLink to="/documentos-oficiais" className="flex flex-col items-center text-center">
          <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOTldW8K3VhOwJzBsLBCctcthCgxYoDqeA2xKwTBAure2HRw~BV87h7Q~BhPCgxwD1x~UQ-yh1D8IkAnLrmNneD2Q1HXNVv3TTdTNoGblLYJR~DilwrMsOTHJA8YwERh5fmp98yphsVEIgFwMr2Iq3eRxkAqKtI~G4tCtLhIL1xQV2Ut3hQr6y2d4pLGWSEUbZqVXTZtc-IPrlPWugkd~-GkRpxxHfy40BfBi05Y6Qw0EcAM~TCfVIXwKi~ERt4m-MnHU-fbj5LOZRvbKFuZD9En~mA-RBb0SJ0pS~z5f6fUv0o~4O6Cco7J7YsqwIQfPgXibe-M8ao1BDcAZz42iA__"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="mt-2 text-sm font-medium">Documentos oficiais</span>
        </NavLink>

        {/* Esfera 4 - Votações e pesquisas */}
        <NavLink to="/votacoes-pesquisas" className="flex flex-col items-center text-center">
          <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOTldW8K3VhOwJzBsLBCctcthCgxYoDqeA2xKwTBAure2HRw~BV87h7Q~BhPCgxwD1x~UQ-yh1D8IkAnLrmNneD2Q1HXNVv3TTdTNoGblLYJR~DilwrMsOTHJA8YwERh5fmp98yphsVEIgFwMr2Iq3eRxkAqKtI~G4tCtLhIL1xQV2Ut3hQr6y2d4pLGWSEUbZqVXTZtc-IPrlPWugkd~-GkRpxxHfy40BfBi05Y6Qw0EcAM~TCfVIXwKi~ERt4m-MnHU-fbj5LOZRvbKFuZD9En~mA-RBb0SJ0pS~z5f6fUv0o~4O6Cco7J7YsqwIQfPgXibe-M8ao1BDcAZz42iA__"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="mt-2 text-sm font-medium">Votações e pesquisas</span>
        </NavLink>

        {/* Esfera 5 - Sistema de doações */}
        <NavLink to="/sistema-doacoes" className="flex flex-col items-center text-center">
          <div className="w-[106px] h-[106px] rounded-full overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/2beb/46af/fc0fe5e64a810cb5c98f813093e0f30b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOTldW8K3VhOwJzBsLBCctcthCgxYoDqeA2xKwTBAure2HRw~BV87h7Q~BhPCgxwD1x~UQ-yh1D8IkAnLrmNneD2Q1HXNVv3TTdTNoGblLYJR~DilwrMsOTHJA8YwERh5fmp98yphsVEIgFwMr2Iq3eRxkAqKtI~G4tCtLhIL1xQV2Ut3hQr6y2d4pLGWSEUbZqVXTZtc-IPrlPWugkd~-GkRpxxHfy40BfBi05Y6Qw0EcAM~TCfVIXwKi~ERt4m-MnHU-fbj5LOZRvbKFuZD9En~mA-RBb0SJ0pS~z5f6fUv0o~4O6Cco7J7YsqwIQfPgXibe-M8ao1BDcAZz42iA__"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="mt-2 text-sm font-medium">Sistema de doações</span>
        </NavLink>
      </nav>
    </footer>
  )
}

