import { ReactNode } from "react"
import { ReactQueryProvider } from "./ReactQueryProvider"

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
