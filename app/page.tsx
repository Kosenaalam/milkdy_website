import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Privacy } from "@/components/privacy"
import { Terms } from "@/components/terms"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Services />
      <About />
      <Privacy />
      <Terms />
      <CTA />
      <Footer />
    </main>
  )
}
