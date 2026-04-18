import { Info, Target, Users, Lightbulb } from "lucide-react"

const aboutPoints = [
  {
    title: "Daily Milk Entry",
    description: "Easily record per-day milk collection for each customer or farmer.",
    icon: Info,
  },
  {
    title: "Auto Calculation",
    description: "Milk totals, balances, and payments are calculated automatically.",
    icon: Target,
  },
  {
    title: "PDF Reports",
    description: "Generate and download complete milk reports in PDF format anytime.",
    icon: Lightbulb,
  },
  {
    title: "Account Management",
    description: "Track customer accounts, payments, and history in one place.",
    icon: Users,
  },
]
export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">About Milkdy</h2>
          <p className="mt-4 text-muted-foreground">
            Learn more about our mission and what we offer.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}