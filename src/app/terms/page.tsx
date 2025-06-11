import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Settings, Shield, FileText, AlertTriangle, Mail } from "lucide-react"

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-light text-foreground/80">
            Last updated: March 15, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                By accessing and using SherpaPrompt, you agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>

          {/* Description of Service */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Settings className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                2. Description of Service
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                SherpaPrompt provides tools for crafting structured, high-performance prompts with context retrieval capabilities.
              </p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                3. User Responsibilities
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 mb-3">
                You agree to:
              </p>
              <ul className="space-y-2 text-sm sm:text-base font-light text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide accurate information when signing up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Maintain the security of your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Use the service in compliance with applicable laws</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                4. Intellectual Property
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                All content and functionality on SherpaPrompt is the property of Transformation Math and is protected by intellectual property laws.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                SherpaPrompt is provided &ldquo;as is&rdquo; without any warranties, express or implied.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                6. Contact
              </h2>
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed">
                For questions about these Terms, please contact us at{" "}
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
