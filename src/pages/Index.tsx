import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-handloom.webp";
import MarketReach from "@/components/MarketReach";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, Leaf, Heart, Globe } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainable", desc: "Natural dyes and eco-friendly processes rooted in centuries of tradition." },
  { icon: Heart, title: "Ethical Trade", desc: "Fair wages and direct partnerships with artisan communities." },
  { icon: Globe, title: "Global Reach", desc: "Connecting village looms to living rooms across 45+ countries." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Handloom silk fabrics"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container relative z-10 flex min-h-[85vh] items-center py-20">
          <div className="max-w-xl animate-fade-in-up">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              Thread Aura Collection
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              Weaving Heritage,{" "}
              <span className="italic text-gold-light">Wearing Stories</span>
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-primary-foreground/80">
              Discover handcrafted textiles from India's finest artisans. Each piece carries the soul of centuries-old weaving traditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-deep-red-light"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/feedback"
                className="rounded-md border border-primary-foreground/30 px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Share Feedback
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Our Promise
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-lg border bg-card p-8 text-center transition-shadow hover:shadow-md animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <v.icon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Reach */}
      <MarketReach />

      <Footer />
    </div>
  );
};

export default Index;
