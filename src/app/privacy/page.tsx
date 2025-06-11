import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Database, Lock, Mail } from "lucide-react"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mb-10">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-primary hover:text-primary/90">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-light text-foreground/80">
            Last updated: March 15, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                1. Information We Collect
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                We collect information you provide directly to us, including name and email address when you sign up for early access.
              </p>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-sm sm:text-base font-light text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide and maintain our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Send you updates about SherpaPrompt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Respond to your requests and inquiries</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lock className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                3. Data Security
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                We implement appropriate security measures to protect your personal information.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                4. Contact Us
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a 
                  href="mailto:team@sherpaprompt.com" 
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  team@sherpaprompt.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
