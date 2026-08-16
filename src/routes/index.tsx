import { createFileRoute } from "@tanstack/react-router";
import { AutoCursor } from "@/components/AutoCursor";
import { Marquee } from "@/components/Marquee";
import { StitchDivider } from "@/components/Filmstrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import tariq from "@/assets/Tariq.jpeg";
// Menswear images
import navyShirtFront from "@/assets/navy-dot-shirt-front.jpeg";
import navyShirtBack from "@/assets/navy-dot-shirt-back.jpeg";
import denimFront from "@/assets/denim-jeans-front.jpeg";
import denimBack from "@/assets/denim-jeans-back.jpeg";
import cargoDetail from "@/assets/cargo-pants-sample-front.jpeg";
import coralShorts from "@/assets/coral-shorts-front-back.jpeg";
import khakiShorts from "@/assets/khaki-shorts-front-back.jpeg";
import maroonZipup from "@/assets/maroon-zipup-top-front-tag.jpeg";
import creamSweatBack from "@/assets/cream-sweatshorts-back.jpeg";
import creamThermalFront from "@/assets/cream-thermal-top-front.jpeg";
import creamThermalBack from "@/assets/cream-thermal-top-back.jpeg";
// Shayan Tariq Collection images
import eveningGownProcess from "@/assets/evening-gown-draping-inprogress.jpg";
import shayanBlackGoldLehenga from "@/assets/shayantariq-black-gold-lehenga-studio-a.jpeg";
import shayanBlushCapeGown from "@/assets/shayantariq-blush-cape-gown-floral.jpeg";
import shayanTealGown from "@/assets/shayantariq-teal-gown-beach.jpeg";
import shayanBlackGoldGharara from "@/assets/shayantariq-black-gold-gharara-boutique.jpeg";
import shayanBeigeKurta from "@/assets/shayantariq-beige-kurta-shop.jpeg";
import shayanBlackLehenga from "@/assets/shayantariq-black-lehenga-shop.jpeg";
import shayanWomenGown from "@/assets/shayantariq_women_gown_front.jpeg";
import kidsGownCreamGold from "@/assets/kids-gown-cream-gold.jpeg";
import kidsDressCreamGold from "@/assets/kids-dress-cream-goldbodice.jpeg";
import kidsDressGoldPink from "@/assets/kids-dress-gold-pink-tutu.jpeg";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Ruler, Scissors, CheckCircle2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tariq Mehmood — Apparel Technical Designer" },
      { name: "description", content: "Apparel Technical Designer specializing in garment technical development, pattern making, fit, construction, and quality assurance across knits, woven, and denim." },
    ],
  }),
  component: Index,
});

const expertise = [
  { name: "Garment Technical Development", icon: Ruler },
  { name: "Pattern Making & Grading", icon: Scissors },
  { name: "Garment Construction & Fit", icon: CheckCircle2 },
  { name: "Technical Specification Review", icon: AlertCircle },
  { name: "Sample & Size Set Evaluation", icon: Ruler },
  { name: "Measurement & Fit Analysis", icon: CheckCircle2 },
  { name: "Construction Detail Analysis", icon: Scissors },
  { name: "Technical Problem Solving", icon: AlertCircle },
  { name: "Production Technical Support", icon: CheckCircle2 },
];

const capabilities = [
  {
    icon: Scissors,
    title: "Pattern Making & Grading",
    sub: "Pattern development & correction",
    desc: "Pattern development & correction, grading, size set development, fit correction, measurement analysis, balance & proportion checking, pattern construction review.",
  },
  {
    icon: Ruler,
    title: "Garment Construction & Fit",
    sub: "Construction & fit analysis",
    desc: "Construction analysis, fit evaluation, sewing operation review, collar/cuff/pocket/waistband construction, seam & stitch evaluation, fit correction & recommendations.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance & Production",
    sub: "QA & production monitoring",
    desc: "Inline & final inspection, AQL inspection, SOP compliance, workmanship evaluation, defect identification & root-cause analysis, CAPA, production monitoring, quality improvement.",
  },
  {
    icon: AlertCircle,
    title: "Fabric Experience",
    sub: "Knits, woven & denim expertise",
    desc: "Knits (jersey, interlock, sweat/knit garments), Woven (shirts, trousers, shorts, outerwear), Denim (denim trousers, denim shirts, wash & shade evaluation, denim construction & fit).",
  },
];

const projects = [
  {
    name: "Dress Shirt",
    category: "MEN'S GARMENT DEVELOPMENT",
    productType: "Tops",
    focus: "Construction & Fit",
    role: "Technical Designer",
    images: { front: navyShirtFront, back: navyShirtBack, detail: null },
  },
  {
    name: "Denim Trouser",
    category: "MEN'S GARMENT DEVELOPMENT",
    productType: "Bottoms",
    focus: "Pattern Grading & Fit",
    role: "Technical Designer",
    images: { front: denimFront, back: denimBack, detail: cargoDetail },
  },
  {
    name: "Shorts Collection",
    category: "MEN'S GARMENT DEVELOPMENT",
    productType: "Bottoms",
    focus: "Fit & Sizing",
    role: "Technical Designer",
    images: { front: coralShorts, back: khakiShorts, detail: null },
  },
  {
    name: "Sweat Shorts",
    category: "MEN'S GARMENT DEVELOPMENT",
    productType: "Bottoms",
    focus: "Comfort & Construction",
    role: "Technical Designer",
    images: { front: null, back: creamSweatBack, detail: null },
  },
  {
    name: "Maroon Zip-Up Top",
    category: "MEN'S GARMENT DEVELOPMENT",
    productType: "Tops",
    focus: "Construction & Detail",
    role: "Technical Designer",
    images: { front: maroonZipup, back: null, detail: null },
  },
  {
    name: "Thermal Top",
    category: "MEN'S GARMENT DEVELOPMENT",
    productType: "Basics",
    focus: "Fabric & Fit",
    role: "Technical Designer",
    images: { front: creamThermalFront, back: creamThermalBack, detail: null },
  },
];

const shayanTariqCollection = [
  {
    name: "Black & Gold Lehenga",
    image: shayanBlackGoldLehenga,
  },
  {
    name: "Blush Cape Gown",
    image: shayanBlushCapeGown,
  },
  {
    name: "Teal Beach Gown",
    image: shayanTealGown,
  },
  {
    name: "Black & Gold Gharara",
    image: shayanBlackGoldGharara,
  },
  {
    name: "Beige Kurta",
    image: shayanBeigeKurta,
  },
  {
    name: "Black Lehenga",
    image: shayanBlackLehenga,
  },
  {
    name: "Women's Gown",
    image: shayanWomenGown,
  },
];

const shayanKidsCollection = [
  {
    name: "Cream & Gold Gown",
    image: kidsGownCreamGold,
  },
  {
    name: "Cream Gold Bodice Dress",
    image: kidsDressCreamGold,
  },
  {
    name: "Gold & Pink Tutu Dress",
    image: kidsDressGoldPink,
  },
];

function Index() {
  const [autoScroll, setAutoScroll] = useState(true);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!autoScroll) return;
    let raf = 0;
    let last = performance.now();
    const speed = 40; // px per second
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const next = window.scrollY + speed * dt;
        if (next >= max - 1) {
          window.scrollTo({ top: 0 });
        } else {
          window.scrollTo({ top: next });
        }
      }
      raf = requestAnimationFrame(tick);
    };
    const onWheel = () => {
      pausedRef.current = true;
      clearTimeout((onWheel as any)._t);
      (onWheel as any)._t = setTimeout(() => (pausedRef.current = false), 2500);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onWheel, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onWheel);
    };
  }, [autoScroll]);

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <AutoCursor />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-xl tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-film text-film-foreground text-xs">TM</span>
            <span>Tariq Mehmood<span className="text-sepia">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.18em]">
            <a href="#about" className="hover:text-sepia">Profile</a>
            <a href="#services" className="hover:text-sepia">Capabilities</a>
            <a href="#contact" className="hover:text-sepia">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setAutoScroll((v) => !v)}
              className="hidden sm:inline-flex rounded-full border border-film px-4 py-2 text-xs uppercase tracking-widest hover:bg-film hover:text-film-foreground transition-colors"
              aria-label="Toggle auto scroll"
            >
              {autoScroll ? "Pause" : "Auto-play"}
            </button>
            <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-sepia transition-colors">Get in touch</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vintage)" }} />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:grid-cols-12 md:pt-24 md:pb-32">
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="fade-up flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-sepia">
              <span className="h-px w-10 bg-sepia" />
              Pakistan
            </div>
            <h1 className="fade-up-2 mt-6 font-display text-[14vw] leading-[0.85] md:text-[9rem] md:leading-[0.85]">
              Tariq
              <br />
              <span className="italic text-sepia">Mehmood</span>
            </h1>
            <h2 className="fade-up-3 mt-6 font-display text-2xl md:text-3xl text-sepia">
              Apparel Technical Designer
            </h2>
            <p className="fade-up-3 mt-4 max-w-2xl font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Technical Design · Pattern Making · Garment Construction · Fit & Quality
            </p>
            <p className="fade-up-3 mt-2 max-w-2xl font-mono text-sm uppercase tracking-widest text-sepia/70">
              Knits · Woven · Denim · Production & Quality
            </p>
            <div className="fade-up-4 mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="rounded-full bg-film px-7 py-3 text-sm uppercase tracking-widest text-film-foreground hover:bg-sepia">View Work</a>
              <a href="#contact" className="rounded-full border border-film px-7 py-3 text-sm uppercase tracking-widest hover:bg-film hover:text-film-foreground transition-colors">Collaborate</a>
            </div>
          </div>

          <div className="md:col-span-5 relative fade-up-3">
            <div className="relative mx-auto w-full max-w-md flex items-center justify-center">
              <div
                className="absolute inset-6 rounded-full blur-2xl opacity-40"
                style={{ background: "var(--gradient-sunset)" }}
              />
              <img
                src={tariq}
                alt="Tariq Mehmood, Apparel Technical Designer based in Pakistan"
                className="relative w-full h-auto rounded-sm float-anim drop-shadow-2xl object-contain"
              />
              <div className="absolute -bottom-2 right-2 rotate-[6deg] bg-film text-film-foreground px-4 py-2 font-mono text-xs tracking-widest">
                SPEC · TM · 2026
              </div>
            </div>
          </div>
        </div>
        <StitchDivider />
      </section>

      <Marquee />

      {/* PROFILE */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sepia">— Profile</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Technical expertise <span className="italic text-sepia">in motion</span>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Experienced Apparel Technical Designer with expertise in garment technical development, pattern making, fit, construction, quality assurance and production support. Experienced in working with knits, woven and denim garments, with a strong focus on technical problem-solving and achieving required quality standards.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                ["37", "Years experience"],
                ["500+", "Garments developed"],
                ["10+", "Size sets graded"],
              ].map(([n, l]) => (
                <div key={l} className="border-l-2 border-sepia pl-4">
                  <div className="font-display text-3xl">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sepia">— Technical Expertise</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {expertise.map((e) => (
                <div key={e.name} className="flex flex-col items-center gap-4 rounded-sm border border-border bg-card p-6 text-center hover:bg-muted/50 transition-colors">
                  <e.icon className="h-6 w-6 text-sepia" />
                  <p className="font-mono text-xs uppercase tracking-widest leading-tight">{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="services" className="bg-paper border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sepia">— Capabilities</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">
                What I <span className="italic text-sepia">deliver</span>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Four core capabilities. Deep expertise across each — from pattern development to production QA.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, sub, desc }, i) => (
              <article
                key={title}
                className="group cursor-target relative overflow-hidden rounded-sm border border-border bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-film text-film-foreground flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="text-xs uppercase tracking-widest text-sepia mt-1">{sub}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StitchDivider />

      {/* SELECTED WORK */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sepia">— Selected Work</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Project <span className="italic text-sepia">case studies</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six key projects — each developed from concept through production support, across multiple fabric types and garment categories.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure
              key={p.name}
              className="cursor-target relative rounded-sm border border-border bg-card overflow-hidden shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-sepia mt-2">{p.category}</p>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div><span className="text-muted-foreground">Product:</span> {p.productType}</div>
                  <div><span className="text-muted-foreground">Focus:</span> {p.focus}</div>
                  <div><span className="text-muted-foreground">Role:</span> {p.role}</div>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Front View</p>
                      {p.images.front ? (
                        <img
                          src={p.images.front}
                          alt={`${p.name} - Front View`}
                          className="w-full h-auto rounded-sm border border-border object-cover aspect-[3/4]"
                        />
                      ) : (
                        <ImagePlaceholder label="Front View" />
                      )}
                    </div>
                    {p.images.back && (
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Back View</p>
                        {p.images.back ? (
                          <img
                            src={p.images.back}
                            alt={`${p.name} - Back View`}
                            className="w-full h-auto rounded-sm border border-border object-cover aspect-[3/4]"
                          />
                        ) : (
                          <ImagePlaceholder label="Back View" />
                        )}
                      </div>
                    )}
                    {p.images.detail && (
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Detail View</p>
                        <img
                          src={p.images.detail}
                          alt={`${p.name} - Detail View`}
                          className="w-full h-auto rounded-sm border border-border object-cover aspect-[3/4]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* SHAYAN TARIQ COLLECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sepia">— Shayan Tariq Collection</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Concept to <span className="italic text-sepia">construction</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Technical design behind the Shayan Tariq label's festive and bridal collection — from atelier draping to finished pieces.
          </p>
        </div>

        {/* Feature image */}
        <div className="mb-10 rounded-sm border border-border overflow-hidden">
          <img
            src={eveningGownProcess}
            alt="Evening gown draping in progress - In the Atelier"
            className="w-full h-auto object-cover"
          />
          <div className="bg-card p-4 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">In the Atelier</p>
            <p className="mt-2 text-sm text-foreground">Technical draping and construction work on an evening gown silhouette.</p>
          </div>
        </div>

        {/* Main Collection Grid */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-sepia mb-8 font-mono">Collection</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {shayanTariqCollection.map((piece) => (
              <figure key={piece.name} className="cursor-target rounded-sm border border-border overflow-hidden shadow-soft transition-transform hover:-translate-y-1">
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <figcaption className="bg-card p-4">
                  <p className="font-display text-sm">{piece.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Kidswear Line */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs uppercase tracking-widest text-sepia mb-8 font-mono">Kidswear Line</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shayanKidsCollection.map((piece) => (
              <figure key={piece.name} className="cursor-target rounded-sm border border-border overflow-hidden shadow-soft transition-transform hover:-translate-y-1">
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <figcaption className="bg-card p-4">
                  <p className="font-display text-sm">{piece.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM-SOLVING PROCESS */}
      <section className="bg-paper border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sepia">— Process</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Problem-solving <span className="italic text-sepia">methodology</span>.
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-5 gap-4 md:gap-2">
              {[
                { step: "1", title: "Identify", desc: "Detect issue" },
                { step: "2", title: "Analyze", desc: "Assess impact" },
                { step: "3", title: "Root Cause", desc: "Find source" },
                { step: "4", title: "Corrective", desc: "Execute fix" },
                { step: "5", title: "Verify", desc: "Confirm solution" },
              ].map((p, i) => (
                <div key={p.step} className="flex flex-col items-center">
                  <div className="flex items-center w-full">
                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-film text-film-foreground flex items-center justify-center font-display font-bold text-sm">
                        {p.step}
                      </div>
                      <p className="font-display text-sm mt-3">{p.title}</p>
                      <p className="font-mono text-[10px] text-muted-foreground mt-1">{p.desc}</p>
                    </div>
                    {i < 4 && (
                      <div className="flex-0 w-4 h-px bg-sepia/30 mx-2 md:mx-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Measurement deviation",
                "Fit issues",
                "Shade variation",
                "Pocket mismatch",
                "Stitching defects",
                "Construction problems",
                "Washing/finishing issues",
                "Quality compliance",
              ].map((tag) => (
                <div key={tag} className="rounded-sm border border-border bg-card px-4 py-3 font-mono text-xs text-center text-muted-foreground">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-vintage)" }} />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-sepia">— Contact</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl max-w-3xl">
            Let's collaborate on your <span className="italic text-sepia">next project</span>.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="group cursor-target rounded-sm border border-film bg-card p-8 transition-colors hover:bg-film hover:text-film-foreground">
              <Mail className="h-6 w-6 text-sepia group-hover:text-gold" />
              <p className="mt-6 text-xs uppercase tracking-[0.25em] opacity-70">Email</p>
              <p className="mt-2 font-display text-xl break-all">tariqi.fashion@gmail.com</p>
            </div>
            <div className="group cursor-target rounded-sm border border-film bg-card p-8 transition-colors hover:bg-film hover:text-film-foreground">
              <Phone className="h-6 w-6 text-sepia group-hover:text-gold" />
              <p className="mt-6 text-xs uppercase tracking-[0.25em] opacity-70">Phone</p>
              <p className="mt-2 font-display text-xl">+923007070948</p>
            </div>
            <div className="group cursor-target rounded-sm border border-film bg-card p-8 transition-colors hover:bg-film hover:text-film-foreground">
              <MapPin className="h-6 w-6 text-sepia group-hover:text-gold" />
              <p className="mt-6 text-xs uppercase tracking-[0.25em] opacity-70">Location</p>
              <p className="mt-2 font-display text-xl">Pakistan</p>
            </div>
          </div>
        </div>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs uppercase tracking-widest text-muted-foreground">
            <span>© 2026 Tariq Mehmood · Apparel Technical Designer</span>
            <span className="font-mono">DESIGNED · DEVELOPED · FOR EXCELLENCE</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
