import { MiniBox } from "@/components/miniBox/miniBox"
import { Helmet } from "react-helmet-async"

export function Trajectory(){
  return (
    <div>
      <Helmet title="Trajectory" />
      <div>
        <MiniBox />
      </div>
    </div>
  )
}