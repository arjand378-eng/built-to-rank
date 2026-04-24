import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy | Built to Rank",
  description: "How Built to Rank handles contact form submissions, analytics, and basic website data.",
  alternates: { canonical: "https://builttorank.ca/privacy" },
};

const sections = [
  {
    title: "Information You Send",
    body: [
      "If you submit the contact form, I may receive your name, business name, email address, phone number, website or Google Business Profile link, selected service, and message.",
      "This information is used to reply to your inquiry, prepare your free written audit, estimate a project, or follow up about services you asked about.",
    ],
  },
  {
    title: "Form Processing",
    body: [
      "The contact form is processed through Web3Forms. When you submit the form, the details you enter are sent through Web3Forms so they can be delivered to Built to Rank by email.",
      "Do not submit sensitive personal information through the form. A normal project inquiry should only include business contact details and public website or profile links.",
    ],
  },
  {
    title: "Analytics",
    body: [
      "This website may use privacy-conscious analytics such as Google Analytics if configured. Analytics can show general information like page visits, device type, traffic source, and form events.",
      "Analytics are used to understand whether the website is working and where visitors may need a clearer path. They are not used to identify you personally.",
    ],
  },
  {
    title: "How Information Is Used",
    body: [
      "I use submitted information to communicate with you, review your current website or online presence, provide recommendations, and deliver services if you choose to work with me.",
      "I do not sell your personal information. I do not add you to a newsletter unless you clearly ask for it.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Inquiry emails may be kept for business records, follow-up, and project history. If you want your inquiry deleted, email info@builttorank.ca and I will handle the request where reasonable.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions or deletion requests, email info@builttorank.ca.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section
          className="relative px-6 pb-16 pt-40"
          style={{ background: "linear-gradient(160deg,#0A0A14 0%,#0D0A1E 60%,#080810 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(109,40,217,0.1) 0%, transparent 65%)" }}
          />
          <div className="relative mx-auto max-w-4xl">
            <p className="section-eyebrow mb-5">Privacy</p>
            <h1
              className="max-w-3xl text-foreground leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem,7vw,5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Privacy Policy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Built to Rank collects only the information needed to respond to project
              inquiries, prepare audits, and run the website responsibly.
            </p>
          </div>
        </section>

        <section className="px-6 py-20" style={{ background: "#080810" }}>
          <div className="mx-auto max-w-4xl">
            <p className="mb-10 text-sm text-muted-foreground">
              Last updated: April 23, 2026
            </p>
            <div className="flex flex-col gap-10">
              {sections.map(({ title, body }) => (
                <section key={title}>
                  <h2 className="mb-4 text-xl font-bold text-foreground">{title}</h2>
                  <div className="flex flex-col gap-3">
                    {body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-white/76">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <Separator className="mt-10 opacity-20" />
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
