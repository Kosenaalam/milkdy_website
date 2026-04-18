import { BarChart3, Droplets, LineChart, Shield, Smartphone, Users } from "lucide-react"

const features = [
  {
    name: "Production Tracking",
    description:
      "Monitor daily milk yield per cow with automated data collection from smart sensors.",
    icon: Droplets,
  },
  {
    name: "Pdf Report Generation",
    description:
      "Generate comprehensive reports in PDF format for easy sharing and documentation.",
    icon: Users,
  },
  {
    name: "Analytics Dashboard",
    description:
      "Get real-time insights into production trends, costs, and profitability metrics.",
    icon: BarChart3,
  },
  {
    name: "Mobile Access",
    description:
      "Manage your farm from anywhere with our fully-featured mobile application.",
    icon: Smartphone,
  },
  {
    name: "Quality Assurance",
    description:
      "Ensure compliance with industry standards and track quality certifications.",
    icon: Shield,
  },
  {
    name: "Growth Insights",
    description:
      "AI-powered recommendations to optimize operations and increase yields.",
    icon: LineChart,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to run a modern dairy farm
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            From production tracking to analytics, Milkdy gives you the tools to
            make data-driven decisions.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
