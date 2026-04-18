import { Shield, Lock, Database, UserCheck } from "lucide-react"

const privacyPoints = [
  {
    title: "Data Protection",
    description: "Your data is securely stored and protected from unauthorized access.",
    icon: Shield,
  },
  {
    title: "Secure Storage",
    description: "We use modern technologies to ensure safe and reliable data storage.",
    icon: Lock,
  },
  {
    title: "Data Usage",
    description: "Your information is used only to improve your experience and services.",
    icon: Database,
  },
  {
    title: "User Control",
    description: "You can update or delete your data anytime with full control.",
    icon: UserCheck,
  },
]

export function Privacy() {
  return (
    <section id="privacy" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">Privacy Policy</h2>
          <p className="mt-4 text-muted-foreground">
            Your data security and privacy are our top priorities.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {privacyPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6 hover:shadow-lg transition"
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