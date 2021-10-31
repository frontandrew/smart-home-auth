import { createGate } from "effector-react"

export const AppGate = createGate()
export const { open: appMount, close: appUnmount, state: appState } = AppGate