export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Handloom Hub
            </h3>
            <p className="mt-2 font-body text-sm text-muted-foreground">
              Connecting artisans with global buyers. Preserving heritage, empowering communities.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="mt-2 space-y-1 font-body text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Artisan Stories</li>
              <li>Sustainability</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Support
            </h4>
            <ul className="mt-2 space-y-1 font-body text-sm text-muted-foreground">
              <li>Shipping & Returns</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center">
          <p className="font-display text-sm italic text-muted-foreground">
            "Life is a loom, weaving illusion." — Vachel Lindsay
          </p>
          <p className="mt-2 font-body text-xs text-muted-foreground">
            © 2025 Handloom Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
