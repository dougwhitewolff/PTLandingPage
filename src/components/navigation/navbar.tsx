"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { SignUpDialog } from "@/components/modals/signup-dialog"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { useRouter, usePathname } from "next/navigation"

type NavItem = {
  name: string;
  href: string;
}

const landingNavigation: NavItem[] = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Blog", href: "/blog" },
]

const blogNavigation: NavItem[] = []

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');
  const navigation = isBlogPage ? blogNavigation : landingNavigation;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // fallback to normal navigation
      router.push(href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 text-2xl font-light text-primary hover:text-primary/90">
            <Image
              src="/assets/logo3.png"
              alt="SherpaPrompt Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            SherpaPrompt
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="flex items-center justify-between px-6 pt-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 text-2xl font-light text-primary hover:text-primary/90">
                  <Image
                    src="/assets/logo.png"
                    alt="SherpaPrompt Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  SherpaPrompt
                </Link>
              </div>
              <div className="mt-6 flow-root px-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  {isBlogPage ? (
                    <div className="py-6">
                      <Link
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-foreground hover:bg-primary/10"
                      >
                        Back to Home
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-foreground hover:bg-primary/10"
                          onClick={e => handleNavClick(e, item.href)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  <div className="py-6">
                    <div className="flex flex-col gap-4">
                      <ThemeToggle />
                      {isBlogPage ? (
                        <Button
                          variant="default"
                          className="bg-primary text-white hover:bg-primary-hover"
                          onClick={() => router.push('/?signup=true')}
                        >
                          Get Access
                        </Button>
                      ) : (
                        <SignUpDialog />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-light leading-6 text-foreground hover:text-primary"
              onClick={e => handleNavClick(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <ThemeToggle />
          {isBlogPage ? (
            <>
              <Link
                href="/"
                className="text-sm font-light leading-6 text-foreground hover:text-primary flex items-center"
              >
                Back to Home
              </Link>
              <Button
                variant="default"
                className="bg-primary text-white hover:bg-primary-hover"
                onClick={() => router.push('/?signup=true')}
              >
                Get Access
              </Button>
            </>
          ) : (
            <SignUpDialog />
          )}
        </div>
      </nav>
    </header>
  )
}
