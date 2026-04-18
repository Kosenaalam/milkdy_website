import { FileText, AlertTriangle, RefreshCcw, Scale } from "lucide-react"

const termsPoints = [
  {
    title: "Usage Rules",
    description: "Use Milkdy only for legal and intended dairy management purposes.",
    icon: FileText,
  },
  {
    title: "User Responsibility",
    description: "You are responsible for maintaining accurate data and usage.",
    icon: AlertTriangle,
  },
  {
    title: "Service Updates",
    description: "We may update features and services to improve performance.",
    icon: RefreshCcw,
  },
  {
    title: "Agreement",
    description: "Using Milkdy means you agree to our terms and conditions.",
    icon: Scale,
  },
]

export function Terms() {
  return (
    <section id="terms" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Terms & Conditions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Understand the rules and guidelines for using Milkdy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {termsPoints.map((item) => (
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