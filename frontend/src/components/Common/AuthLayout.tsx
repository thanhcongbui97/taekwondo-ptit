import { Appearance } from "@/components/Common/Appearance"
import { Footer } from "./Footer"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted dark:bg-zinc-900 relative hidden lg:flex lg:items-center lg:justify-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-4 p-8">
          <img
            src="/assets/images/favicon.ico"
            alt="PTIT Taekwondo Management"
            className="h-24 w-24 brightness-0 dark:invert"
          />
          <h1 className="text-3xl font-bold text-center">
            PTIT Taekwondo Management
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-end">
          <Appearance />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
