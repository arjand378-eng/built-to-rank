import type { Metadata } from "next";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact | Built to Rank — Free Quote, GTA Web Design & SEO",
  description: "Get a free quote from Built to Rank. Web design and SEO for trades businesses across the GTA. Usually reply within a few hours.",
  alternates: { canonical: "https://builttorankk.netlify.app/contact" },
};

const details = [
  { icon: <EnvelopeSimple size={17} weight="duotone" />, label: "Email", value: "builttorank@hotmail.com", href: "mailto:builttorank@hotmail.com" },
  { icon: <Phone size={17} weight="duotone" />, label: "Phone", value: "647-657-8525", href: "tel:+16476578525" },
  { icon: <MapPin size={17} weight="duotone" />, label: "Location", value: "GTA, Ontario, Canada", href: null },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-40 pb-12 px-6 overflow-hidden"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(109,40,217,0.1) 0%, transparent 65%)" }}
          />
          <div className="relative max-w-6xl mx-auto">
            <p className="section-eyebrow mb-5">Contact</p>
            <h1
              className="text-foreground leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem,7vw,5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Let&apos;s Build<br />
              <span className="text-muted-foreground">Something That Ranks.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-[44ch]">
              Free quote. No hard sell. Usually reply within a few hours.
            </p>
          </div>
        </section>

        {/* Contact details strip */}
        <section className="py-10 px-6" style={{ background: "#08080F" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {details.map(({ icon, label, value, href }) => (
                <Card key={label} className="rounded-2xl border-white/7 bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-violet-300"
                      style={{ background: "rgba(109,40,217,0.12)", border: "1px solid var(--border-accent)" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-foreground hover:text-violet-300 transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: value === "Coming soon" ? "var(--muted-foreground)" : "var(--foreground)" }}>{value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reuse the Contact form component but hide its own header */}
        <div className="[&_#contact-inner-header]:hidden">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
