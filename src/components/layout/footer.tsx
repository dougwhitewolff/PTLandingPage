"use client"

import Link from "next/link"
import { SignUpDialog } from "@/components/modals/signup-dialog"
import { toast } from "sonner"
import { Copy } from "lucide-react"

export function Footer() {
  const email = "team@sherpaprompt.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast(
      <div className="flex items-center">
        <Copy className="mr-2" />
        Contact email has been copied
      </div>,
      {
        duration: 2000,
        className: "bg-primary text-white border-primary",
      }
    );
  };

  return (
    <footer className="bg-div-bg">
      {/* Final CTA Section */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-primary text-center max-w-4xl mx-auto">
            Be Among the First to Accelerate Your Prompting
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground/80">
            We&apos;re inviting early users to shape the future of SherpaPrompt. Want in?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <SignUpDialog />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-foreground/60 font-light">
            &copy; 2025 SherpPrompt. Built by Transformation Math.
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-6 md:order-2 md:mt-0 items-center">
          <Link
            href="/privacy"
            target="_blank"
            className="text-sm leading-5 text-foreground/60 hover:text-primary font-light"
          >
            Privacy
          </Link>
          <span className="text-foreground/60">|</span>
          <Link
            href="/terms"
            target="_blank"
            className="text-sm leading-5 text-foreground/60 hover:text-primary font-light"
          >
            Terms
          </Link>
          <span className="text-foreground/60">|</span>
          <button
            className="text-sm leading-5 text-foreground/60 hover:text-primary focus:outline-none font-light"
            onClick={handleCopy}
            type="button"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  )
}
