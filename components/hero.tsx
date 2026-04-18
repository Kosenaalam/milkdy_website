import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            Trusted by 2,000+ dairy farms worldwide
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Modern Dairy Management for{" "}
            <span className="text-primary">Growing Farms</span>
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Streamline your dairy operations with intelligent tools for milk
            production tracking, herd management, and supply chain optimization.
            Built for farmers who want to scale sustainably.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Download App
              <ArrowRight className="h-4 w-4" />
            </Button>
            {/* <Button variant="outline" size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button> */}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "2,000+", label: "Farms" },
              { value: "98%", label: "Satisfaction" },
              { value: "15M", label: "Liters Tracked" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-foreground lg:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
