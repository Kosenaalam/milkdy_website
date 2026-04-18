import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to modernize your dairy farm?
          </h2>
          <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
            Join thousands of farmers who have already transformed their
            operations with Milkdy. Start your free 30-days trial today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Talk to Sales
            </Button> */}
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
