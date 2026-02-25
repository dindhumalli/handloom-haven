import { TrendingUp, Globe, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Market Size 2025", value: "$8.95B", desc: "Global handloom market target" },
  { icon: Globe, label: "Countries Reached", value: "45+", desc: "Worldwide shipping network" },
  { icon: Users, label: "Active Artisans", value: "2,500+", desc: "Skilled weavers on platform" },
  { icon: Sparkles, label: "Products Listed", value: "12,000+", desc: "Unique handloom creations" },
];

export default function MarketReach() {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-foreground md:text-4xl">
            Handloom Market Reach
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-secondary-foreground/70">
            The global handloom industry is witnessing unprecedented growth. Join us in empowering artisans worldwide.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 text-center backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="mx-auto h-8 w-8 text-gold" />
              <p className="mt-4 font-display text-3xl font-bold text-secondary-foreground">
                {stat.value}
              </p>
              <p className="mt-1 font-body text-sm font-semibold text-secondary-foreground/90">
                {stat.label}
              </p>
              <p className="mt-1 font-body text-xs text-secondary-foreground/60">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
