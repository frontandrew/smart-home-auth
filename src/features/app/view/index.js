import { RouteLink, RouterView } from "effector-routing/dist/react"
import { AppGate } from '../model'

export function App() {
  return (
    <>
      <AppGate />
      <RouterView />
      <div>app</div>
    </>
  )
}

