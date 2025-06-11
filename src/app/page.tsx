import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/howItWorks"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
