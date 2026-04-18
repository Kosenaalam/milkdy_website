import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const services = [
  {
    title: "Farm Setup & Onboarding",
    description:
      "Get personalized assistance setting up your dairy management system with our expert team.",
    benefits: [
      "Dedicated onboarding specialist",
      "Custom workflow configuration",
      "Staff training sessions",
      "Data migration support",
    ],
  },
  {
    title: "Analytics & Reporting",
    description:
      "Transform your farm data into actionable insights with comprehensive analytics and custom reports.",
    benefits: [
      "Real-time dashboards",
      "Automated daily reports",
      "Cost analysis tools",
      "Export to any format",
    ],
  },
  {
    title: "Integration Services",
    description:
      "Connect Milkdy with your existing tools, sensors, and equipment for seamless operations.",
    benefits: [
      "Smart sensor integration",
      "ERP system connectivity",
      "Payment processing",
      "Supply chain partners",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional services to accelerate your success
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Our team of dairy industry experts is here to help you get the most
            out of Milkdy.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-8 gap-2">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
