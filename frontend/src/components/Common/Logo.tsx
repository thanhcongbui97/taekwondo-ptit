import { Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "icon" | "responsive"
  className?: string
  asLink?: boolean
}

export function Logo({
  variant = "full",
  className,
  asLink = true,
}: LogoProps) {
  const iconClass = "brightness-0 dark:invert"

  const content =
    variant === "responsive" ? (
      <>
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
          <img
            src="/assets/images/favicon.ico"
            alt="Taekwondo PTIT"
            className={cn("h-6 w-6", iconClass, className)}
          />
          <span className="font-bold">Taekwondo PTIT</span>
        </div>
        <img
          src="/assets/images/favicon.ico"
          alt="Taekwondo PTIT"
          className={cn(
            "size-5 hidden group-data-[collapsible=icon]:block",
            iconClass,
            className,
          )}
        />
      </>
    ) : variant === "icon" ? (
      <img
        src="/assets/images/favicon.ico"
        alt="Taekwondo PTIT"
        className={cn("size-5", iconClass, className)}
      />
    ) : (
      <div className="flex items-center gap-2">
        <img
          src="/assets/images/favicon.ico"
          alt="Taekwondo PTIT"
          className={cn("h-6 w-6", iconClass, className)}
        />
        <span className="font-bold">Taekwondo PTIT</span>
      </div>
    )

  if (!asLink) {
    return content
  }

  return <Link to="/">{content}</Link>
}
