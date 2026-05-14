// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRight as ArrowRightIcon,
  BarChart3,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileText,
  GraduationCap,
  HardHat,
  Hash,
  Heart,
  Layers,
  List,
  Maximize2,
  Menu,
  Minimize2,
  Moon,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Sun,
  Target,
  Timer,
  Truck,
  Users,
  Workflow,
  X,
} from "lucide-react";

const assetPath = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

const ASSETS = {
  logoBlack: assetPath("/bnextai-logo-black.png"),
  logoColor: assetPath("/bnextai-logo-color.png"),
};

const BLUE = "#3B82F6";
const GOLD = "#FACC15";

const slides = [
  {
    section: "Cover",
    title: "BNext AI × Scale AI Partnership Strategy",
    layout: "cover",
  },
  {
    section: "Who is BHive",
    title: "Who is BHive",
    subtitle: "The AI adoption operating arm of TBDC.",
    keyMessage:
      "BHive combines TBDC's credibility with a focused operating model for local AI adoption.",
    cards: [
      {
        icon: Building2,
        title: "TBDC foundation",
        body: "36 years supporting entrepreneurship and innovation across the region.",
      },
      {
        icon: Workflow,
        title: "BHive role",
        body: "Operating arm for practical AI adoption, commercialization, and ecosystem activation.",
      },
      {
        icon: Network,
        title: "Market function",
        body: "Connects SMBs, vendors, funders, and implementation partners into one adoption pathway.",
      },
    ],
    layout: "intro",
  },
  {
    section: "Program Team",
    title: "Program Team",
    subtitle: "The people delivering the BHive AI adoption program.",
    team: [
      {
        name: "Vik",
        role: "Ecosystem leadership and strategic partnerships",
        body: "Leads institutional relationships, commercialization strategy, and long-term ecosystem development.",
      },
      {
        name: "Rahim",
        role: "AI adoption and implementation strategy",
        body: "Brings practical AI deployment experience and operating insight for SMB adoption programs.",
      },
      {
        name: "Abdi",
        role: "Curriculum and technical credibility",
        body: "Supports applied AI education, diagnostic design, and technical program quality.",
      },
      {
        name: "Yogi",
        role: "Program delivery and ecosystem activation",
        body: "Supports cohort execution, partner coordination, and participant engagement.",
      },
      {
        name: "Angela",
        role: "Government program operations and reporting",
        body: "Brings public-sector delivery discipline, compliance, stakeholder coordination, and reporting experience.",
      },
    ],
    layout: "team",
  },
  {
    section: "Market Problem",
    title: "The AI Adoption Gap",
    subtitle:
      "Local SMBs understand AI's potential, but need help turning awareness into implementation.",
    stats: [
      {
        value: "[CFIB / StatCan 2025]",
        label: "Canadian SMB AI adoption stat",
        note: "Insert verified national adoption figure.",
      },
      {
        value: "[Ontario 2025]",
        label: "Ontario SMB readiness / barrier",
        note: "Insert verified Ontario implementation barrier figure.",
      },
      {
        value: "[Peel / regional]",
        label: "Regional productivity opportunity",
        note: "Insert Peel or regional adoption opportunity figure.",
      },
    ],
    callout: {
      title: "Why BHive is targeting this market",
      body: "BHive is focused on local SMBs because this is where AI awareness most often fails to become implementation. With TBDC's long-standing reputation for supporting local businesses, BHive is positioned to convert interest into practical adoption, trusted vendor matching, and measurable business outcomes.",
    },
    layout: "problemStats",
  },
  {
    section: "Ecosystem Model",
    title: "The BHive Ecosystem Model",
    subtitle:
      "BHive coordinates the moving parts of practical AI adoption.",
    keyMessage:
      "BHive acts as the coordinating layer between SMB demand, AI supply, implementation support, and measurable outcomes.",
    nodes: [
      { label: "SMBs", desc: "Identify operational pain points and adoption-ready use cases." },
      { label: "AI solution providers", desc: "Match validated vendors to real business needs." },
      { label: "Implementation partners", desc: "Support deployment, integration, and change management." },
      { label: "Academia & technical expertise", desc: "Strengthen curriculum, diagnostics, and technical validation." },
      { label: "Ecosystem & government partners", desc: "Coordinate funding, referrals, and regional activation." },
      { label: "Commercialization pathways", desc: "Help AI companies turn demand into market traction." },
      { label: "Thought leadership", desc: "Build local confidence through education and practical guidance." },
      { label: "Measurable outcomes & reporting", desc: "Track adoption progress, KPIs, and partner-facing results." },
    ],
    layout: "flywheel",
  },
  {
    section: "Program Mechanics",
    title: "How the Sprint Actually Runs",
    subtitle:
      "A structured implementation sprint that moves SMBs from AI education to scoped adoption opportunities.",
    phases: [
      {
        title: "Education & Use Case Discovery",
        body: "AI fundamentals, sector context, and practical use case identification.",
        detail: "SMBs define priority workflows and adoption opportunities.",
      },
      {
        title: "Diagnostic & Matchmaking",
        body: "Business readiness assessment, vendor mapping, and implementation pathway design.",
        detail: "BHive helps connect SMBs with relevant solution and implementation partners.",
      },
      {
        title: "Business Case & Implementation Kickoff",
        body: "Scope, KPIs, budget, and next-step implementation plan.",
        detail: "Sprint closes with a practical roadmap and partner-ready reporting baseline.",
      },
    ],
    mechanics: "Cohort-based delivery · xx half-day workshops · xx virtual sessions · office hours · on-site programming at BHive.",
    layout: "timeline",
  },
  {
    section: "Execution Capability",
    title: "Why BHive is Positioned to Execute",
    subtitle:
      "A proven delivery platform with institutional trust, public funding discipline, and ecosystem reach.",
    proofColumns: [
      {
        title: "Execution Track Record",
        icon: ClipboardList,
        body: "BHive and TBDC have delivered entrepreneurship, innovation, commercialization, and ecosystem programs with public and private partners.",
        items: ["[Insert past program names]"],
      },
      {
        title: "Public Fund Accountability",
        icon: ShieldCheck,
        body: "Managed and reported on government-supported initiatives with discipline around compliance, accountability, and outcome tracking.",
        items: ["[Insert government dollars managed / reported]"],
      },
      {
        title: "Partner Network",
        icon: Network,
        body: "Built on an existing network of government, ecosystem, academic, and implementation partners.",
        items: ["[Insert partner logos]"],
      },
    ],
    layout: "proof",
  },
  {
    section: "Sector Focus",
    title: "Priority Sectors",
    subtitle:
      "A three-year focus on practical AI adoption across traditional and service-intensive industries.",
    note: "Initial sector focus areas — to be confirmed.",
    sectors: [
      { label: "Healthcare", icon: Heart, opp: "Administrative automation, patient flow, documentation support." },
      { label: "Manufacturing", icon: Factory, opp: "Workflow optimization, quality control, predictive maintenance." },
      { label: "Construction", icon: HardHat, opp: "Estimating, scheduling, safety, project coordination." },
      { label: "Transportation", icon: Workflow, opp: "Routing, dispatch, compliance, fleet productivity." },
      { label: "Retail", icon: ShoppingBag, opp: "Inventory, customer insight, marketing automation." },
      { label: "Trucking", icon: Truck, opp: "Dispatch, routing, maintenance, compliance." },
      { label: "Clinics", icon: Stethoscope, opp: "Booking, intake, documentation, patient communications." },
      { label: "Law firms", icon: Scale, opp: "Intake, document workflows, knowledge management." },
    ],
    keyMessage:
      "Broad enough for regional impact, practical enough to drive implementation-ready use cases.",
    layout: "sectorGrid",
  },
  {
    section: "Scale AI Alignment",
    title: "Strategic Alignment with Scale AI",
    subtitle:
      "A practical downstream partner for funding navigation, matchmaking, adoption support, and structured reporting.",
    intro:
      "BHive can support Scale AI's broader adoption objectives by helping local SMBs move from interest to implementation through education, diagnostic support, vendor matchmaking, and structured outcome reporting. As a downstream partner, BHive can help capture the operating details that matter — who was supported, what use case was pursued, what partner was matched, what funding was activated, and what measurable progress followed.",
    pillars: [
      { title: "Funding pathway support", body: "Help SMBs understand and navigate eligible adoption supports.", icon: Briefcase },
      { title: "Matchmaking infrastructure", body: "Connect businesses with relevant AI solution and implementation partners.", icon: Network },
      { title: "KPI capture", body: "Define baseline metrics before implementation begins.", icon: Target },
      { title: "Reporting cadence", body: "Provide structured progress updates aligned to partner requirements.", icon: CalendarCheck },
      { title: "Outcome visibility", body: "Translate program activity into clear adoption, workforce, and business impact signals.", icon: BarChart3 },
    ],
    keyMessage:
      "BHive can operate as a disciplined downstream partner that strengthens implementation visibility and outcome reporting.",
    layout: "alignment",
  },
  {
    section: "Market Momentum",
    title: "Early Market Activation and Ecosystem Momentum",
    subtitle:
      "A three-year program to empower 100 local SMBs in Southern Ontario with AI adoption and workforce upskilling.",
    statValue: "100",
    statLabel: "local SMBs",
    statSupport: "Supported over three years across Southern Ontario.",
    bullets: [
      "Three-year regional AI adoption program",
      "Goal to support 100 local SMBs",
      "Focus on practical implementation, not awareness alone",
      "Upskilling local workers through applied AI education",
      "Building a stronger regional AI vendor and implementation ecosystem",
    ],
    dual: [
      { title: "SMB AI adoption", icon: Rocket },
      { title: "Local workforce upskilling", icon: GraduationCap },
    ],
    layout: "momentum",
  },
  {
    section: "Governance",
    title: "Impact Reporting and Governance",
    subtitle: "Structured reporting from intake through post-sprint adoption progress.",
    flow: [
      { label: "SMBs vetted", icon: CheckCircle2 },
      { label: "Education", icon: GraduationCap },
      { label: "Diagnostic", icon: Search },
      { label: "Matchmaking", icon: Network },
      { label: "Outcome tracking", icon: BarChart3 },
      { label: "Advisory reporting support", icon: FileText },
    ],
    body: "BHive does not simply run the sprint and step away. The program stays involved after matchmaking to help SMBs track progress, capture KPIs, and report implementation outcomes in a way funders and partners can use.",
    scorecard: [
      "SMBs supported",
      "Use cases identified",
      "Vendors matched",
      "Implementation pathways created",
      "Workforce upskilling activity",
      "Post-sprint progress signals",
      "Case studies / outcome evidence",
    ],
    keyMessage:
      "BHive helps turn program activity into structured, partner-ready evidence of adoption progress.",
    layout: "governanceFlow",
  },
  {
    section: "Next Steps",
    title: "Proposed Next Steps",
    subtitle: "Three practical asks to move the partnership discussion forward.",
    asks: [
      {
        title: "Review this presentation",
        body: "Scale AI to review the proposed BHive partnership model, program structure, and regional adoption opportunity.",
      },
      {
        title: "Book a follow-up leadership discussion",
        body: "Schedule a deeper conversation with the wider Scale AI leadership team to explore fit, priorities, and partnership structure.",
      },
      {
        title: "Align on partnership options",
        body: "Identify potential collaboration models that support Scale AI's broader objectives while enhancing this program's ability to deliver tangible AI adoption results for SMBs.",
      },
    ],
    keyMessage:
      "Align on the partnership model that best supports Scale AI's objectives and strengthens SMB adoption outcomes.",
    layout: "nextStepsThreeAsks",
  },
];

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function AssetImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={cx("flex items-center justify-center text-[0.6rem] uppercase tracking-[0.18em] opacity-60", className)}>
        {alt}
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

/* ---------- Slide chrome ---------- */

function HexAccent({ className, color = BLUE }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <polygon
        points="50,4 92,28 92,72 50,96 8,72 8,28"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

function SlideShell({ children, slide, currentIndex }) {
  const isCover = slide.layout === "cover";
  return (
    <section
      className="relative flex aspect-video w-full max-w-[1500px] max-h-[calc(100dvh-7.5rem)] overflow-hidden rounded-lg border border-black/10 bg-white text-black shadow-xl shadow-blue-100/60"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#3B82F6] via-sky-300 to-[#FACC15]" />
      <HexAccent className="pointer-events-none absolute -right-12 -bottom-16 h-64 w-64 opacity-[0.05]" color={BLUE} />
      <HexAccent className="pointer-events-none absolute -left-10 top-24 h-40 w-40 opacity-[0.06]" color={GOLD} />

      <div className="relative z-10 flex h-full w-full flex-col p-[2.4%]">
        {!isCover && (
          <header className="mb-3 flex items-start justify-between gap-4">
            <div className="text-[clamp(0.6rem,0.95vw,0.85rem)] font-semibold uppercase tracking-[0.22em] text-black/60">
              <span className="text-[#3B82F6]">Slide {currentIndex + 1}</span>
              <span className="mx-2 opacity-40">/</span>
              <span className="text-[#a17a00]">{slide.section}</span>
            </div>
            <AssetImage src={ASSETS.logoBlack} alt="BNext AI" className="h-7 w-auto object-contain" />
          </header>
        )}
        <main className="min-h-0 flex-1">{children}</main>
        {!isCover && (
          <footer className="mt-2 flex items-center justify-between gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-[#3B82F6]/60 via-black/10 to-[#FACC15]/60" />
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black/50">
              {String(currentIndex + 1).padStart(2, "0")} / {slides.length}
            </div>
          </footer>
        )}
      </div>
    </section>
  );
}

function SlideHeader({ slide }) {
  return (
    <div>
      <h1 className="text-[clamp(1.5rem,3.2vw,3rem)] font-bold leading-[1.05] tracking-tight text-black">
        {slide.title}
      </h1>
      {slide.subtitle && (
        <p className="mt-2 max-w-[860px] text-[clamp(0.78rem,1.05vw,1rem)] leading-snug text-black/65">
          {slide.subtitle}
        </p>
      )}
      <div className="mt-3 h-[2px] w-20 bg-gradient-to-r from-[#3B82F6] to-[#FACC15]" />
    </div>
  );
}

function KeyLine({ children }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-[#3B82F6]/25 bg-[#3B82F6]/[0.04] p-3">
      <Sparkles className="h-5 w-5 shrink-0 text-[#3B82F6]" />
      <p className="text-[clamp(0.78rem,1.05vw,1rem)] font-semibold leading-snug text-black">{children}</p>
    </div>
  );
}

/* ---------- Slide layouts ---------- */

function CoverSlide({ slide }) {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="flex justify-end">
        <AssetImage src={ASSETS.logoBlack} alt="BNext AI" className="h-9 w-auto object-contain" />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-4">
          <HexAccent className="h-10 w-10" color={BLUE} />
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-black/50">
            Partnership Strategy · 2025
          </div>
        </div>
        <h1 className="mt-5 max-w-[1100px] text-[clamp(2.2rem,5.2vw,5rem)] font-bold leading-[1] tracking-tight text-black">
          BNext AI <span className="text-[#3B82F6]">×</span> Scale AI<br />
          Partnership Strategy
        </h1>
        <div className="mt-7 h-[3px] w-40 bg-gradient-to-r from-[#3B82F6] to-[#FACC15]" />
      </div>
      <div className="flex items-end justify-between">
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black/45">
          Prepared by BHive · TBDC
        </div>
        <div className="flex gap-2">
          <HexAccent className="h-5 w-5 opacity-50" color={BLUE} />
          <HexAccent className="h-5 w-5 opacity-50" color={GOLD} />
          <HexAccent className="h-5 w-5 opacity-50" color={BLUE} />
        </div>
      </div>
    </div>
  );
}

function IntroSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <SlideHeader slide={slide} />
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
        {slide.cards.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex flex-col rounded-lg border border-black/10 bg-white p-4 shadow-sm">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-[#3B82F6]/10">
              <Icon className="h-5 w-5 text-[#3B82F6]" />
            </div>
            <h3 className="mt-3 text-[clamp(0.95rem,1.3vw,1.2rem)] font-bold text-black">{title}</h3>
            <p className="mt-2 text-[clamp(0.72rem,0.95vw,0.92rem)] leading-snug text-black/70">{body}</p>
          </div>
        ))}
      </div>
      <KeyLine>{slide.keyMessage}</KeyLine>
    </div>
  );
}

function TeamSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <SlideHeader slide={slide} />
      <div className="grid min-h-0 flex-1 grid-cols-5 gap-3">
        {slide.team.map((p) => (
          <div key={p.name} className="flex flex-col rounded-lg border border-black/10 bg-white p-3 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#FACC15] text-base font-bold text-white">
              {p.name[0]}
            </div>
            <h3 className="mt-3 text-[clamp(0.95rem,1.25vw,1.15rem)] font-bold text-black">{p.name}</h3>
            <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#3B82F6]">
              {p.role}
            </p>
            <p className="mt-2 text-[clamp(0.7rem,0.9vw,0.88rem)] leading-snug text-black/70">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemStatsSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <SlideHeader slide={slide} />
      <div className="grid grid-cols-3 gap-3">
        {slide.stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
            <div className="text-[clamp(1rem,1.5vw,1.4rem)] font-bold leading-tight text-[#3B82F6]">
              {s.value}
            </div>
            <div className="mt-2 text-[clamp(0.78rem,1vw,0.95rem)] font-semibold text-black">{s.label}</div>
            <div className="mt-1 text-[0.72rem] italic text-black/55">{s.note}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 min-h-0 rounded-lg border border-[#FACC15]/40 bg-[#FACC15]/[0.06] p-4">
        <div className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#a17a00]">
          {slide.callout.title}
        </div>
        <p className="mt-2 text-[clamp(0.82rem,1.1vw,1.05rem)] leading-relaxed text-black/80">
          {slide.callout.body}
        </p>
      </div>
    </div>
  );
}

function FlywheelSlide({ slide }) {
  return (
    <div className="grid h-full grid-cols-[1fr_1.15fr] gap-5">
      <div className="flex flex-col gap-4">
        <SlideHeader slide={slide} />
        <KeyLine>{slide.keyMessage}</KeyLine>
      </div>
      <div className="grid min-h-0 grid-cols-2 gap-2 overflow-hidden">
        {slide.nodes.map((n, i) => (
          <div key={n.label} className="flex flex-col rounded-md border border-black/10 bg-white p-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#3B82F6] text-[0.65rem] font-bold text-white">
                {i + 1}
              </span>
              <h4 className="text-[clamp(0.78rem,1vw,0.95rem)] font-bold text-black">{n.label}</h4>
            </div>
            <p className="mt-1.5 text-[clamp(0.68rem,0.85vw,0.82rem)] leading-snug text-black/70">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <SlideHeader slide={slide} />
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
        {slide.phases.map((p, i) => (
          <div key={p.title} className="flex flex-col rounded-lg border border-black/10 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-[#3B82F6] to-[#FACC15] text-base font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-[clamp(0.92rem,1.2vw,1.1rem)] font-bold leading-tight text-black">{p.title}</h3>
            </div>
            <p className="mt-3 text-[clamp(0.78rem,1vw,0.95rem)] leading-snug text-black/80">{p.body}</p>
            <p className="mt-2 text-[clamp(0.72rem,0.9vw,0.85rem)] leading-snug text-black/55">{p.detail}</p>
          </div>
        ))}
      </div>
      <div className="rounded-md border border-[#3B82F6]/25 bg-[#3B82F6]/[0.04] p-3 text-center text-[clamp(0.78rem,1vw,0.95rem)] font-semibold text-black/80">
        {slide.mechanics}
      </div>
    </div>
  );
}

function ProofSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <SlideHeader slide={slide} />
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
        {slide.proofColumns.map(({ icon: Icon, title, body, items }) => (
          <div key={title} className="flex flex-col rounded-lg border border-black/10 bg-white p-4 shadow-sm">
            <Icon className="h-6 w-6 text-[#3B82F6]" />
            <h3 className="mt-3 text-[clamp(0.92rem,1.2vw,1.1rem)] font-bold text-black">{title}</h3>
            <p className="mt-2 text-[clamp(0.74rem,0.95vw,0.9rem)] leading-snug text-black/70">{body}</p>
            <div className="mt-auto pt-3">
              {items.map((it) => (
                <div
                  key={it}
                  className="rounded-md border border-dashed border-black/15 bg-black/[0.02] p-2 text-[0.72rem] italic text-black/55"
                >
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectorGridSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <SlideHeader slide={slide} />
      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a17a00]">
        {slide.note}
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-4 gap-2.5">
        {slide.sectors.map(({ label, icon: Icon, opp }) => (
          <div key={label} className="flex flex-col rounded-md border border-black/10 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-[#3B82F6]" />
              <h4 className="text-[clamp(0.82rem,1.05vw,1rem)] font-bold text-black">{label}</h4>
            </div>
            <p className="mt-2 text-[clamp(0.68rem,0.85vw,0.82rem)] leading-snug text-black/70">{opp}</p>
          </div>
        ))}
      </div>
      <KeyLine>{slide.keyMessage}</KeyLine>
    </div>
  );
}

function AlignmentSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <SlideHeader slide={slide} />
      <p className="text-[clamp(0.74rem,0.95vw,0.9rem)] leading-relaxed text-black/75">{slide.intro}</p>
      <div className="grid min-h-0 flex-1 grid-cols-5 gap-2.5">
        {slide.pillars.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex flex-col rounded-md border border-black/10 bg-white p-3 shadow-sm">
            <Icon className="h-5 w-5 text-[#3B82F6]" />
            <h4 className="mt-2 text-[clamp(0.78rem,1vw,0.95rem)] font-bold leading-tight text-black">{title}</h4>
            <p className="mt-1.5 text-[clamp(0.66rem,0.82vw,0.8rem)] leading-snug text-black/65">{body}</p>
          </div>
        ))}
      </div>
      <KeyLine>{slide.keyMessage}</KeyLine>
    </div>
  );
}

function MomentumSlide({ slide }) {
  return (
    <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-5">
      <div className="flex flex-col justify-between">
        <SlideHeader slide={slide} />
        <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-[clamp(3rem,7vw,7rem)] font-bold leading-none text-[#3B82F6]">
            {slide.statValue}
          </div>
          <div className="mt-1 text-[clamp(1rem,1.6vw,1.5rem)] font-bold text-black">{slide.statLabel}</div>
          <div className="mt-2 text-[clamp(0.78rem,1vw,0.95rem)] text-black/65">{slide.statSupport}</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {slide.dual.map(({ title, icon: Icon }) => (
            <div key={title} className="flex items-center gap-2 rounded-md border border-[#FACC15]/40 bg-[#FACC15]/[0.08] p-3">
              <Icon className="h-5 w-5 text-[#a17a00]" />
              <span className="text-[clamp(0.78rem,1vw,0.95rem)] font-bold text-black">{title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2.5">
        {slide.bullets.map((b, i) => (
          <div key={b} className="flex items-start gap-3 rounded-md border border-black/10 bg-white p-3 shadow-sm">
            <span className="mt-0.5 text-[0.72rem] font-bold text-[#3B82F6]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[clamp(0.82rem,1.1vw,1.05rem)] font-semibold text-black/85">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GovernanceFlowSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <SlideHeader slide={slide} />
      <div className="rounded-lg border border-black/10 bg-white p-3 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-hidden">
          {slide.flow.map(({ label, icon: Icon }, i) => (
            <React.Fragment key={label}>
              <div className="flex flex-1 flex-col items-center gap-1.5 rounded-md border border-black/10 bg-white p-2 text-center">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#FACC15] text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-[0.7rem] font-semibold leading-tight text-black">{label}</div>
              </div>
              {i < slide.flow.length - 1 && <ArrowRightIcon className="h-4 w-4 shrink-0 text-black/30" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[1.1fr_0.9fr] gap-3">
        <div className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
          <p className="text-[clamp(0.78rem,1vw,0.95rem)] leading-relaxed text-black/75">{slide.body}</p>
        </div>
        <div className="rounded-lg border border-black/10 bg-white p-4 shadow-sm">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a17a00]">
            Partner scorecard
          </div>
          <ul className="mt-2 grid grid-cols-1 gap-1.5">
            {slide.scorecard.map((s) => (
              <li key={s} className="flex items-start gap-2 text-[clamp(0.72rem,0.9vw,0.85rem)] text-black/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3B82F6]" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <KeyLine>{slide.keyMessage}</KeyLine>
    </div>
  );
}

function NextStepsThreeAsksSlide({ slide }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <SlideHeader slide={slide} />
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
        {slide.asks.map((a, i) => (
          <div key={a.title} className="flex flex-col rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <div className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-none text-[#3B82F6]">
              0{i + 1}
            </div>
            <h3 className="mt-3 text-[clamp(0.95rem,1.3vw,1.2rem)] font-bold text-black">{a.title}</h3>
            <p className="mt-2 text-[clamp(0.78rem,1vw,0.95rem)] leading-snug text-black/70">{a.body}</p>
          </div>
        ))}
      </div>
      <KeyLine>{slide.keyMessage}</KeyLine>
    </div>
  );
}

function SlideRenderer({ slide }) {
  switch (slide.layout) {
    case "cover": return <CoverSlide slide={slide} />;
    case "intro": return <IntroSlide slide={slide} />;
    case "team": return <TeamSlide slide={slide} />;
    case "problemStats": return <ProblemStatsSlide slide={slide} />;
    case "flywheel": return <FlywheelSlide slide={slide} />;
    case "timeline": return <TimelineSlide slide={slide} />;
    case "proof": return <ProofSlide slide={slide} />;
    case "sectorGrid": return <SectorGridSlide slide={slide} />;
    case "alignment": return <AlignmentSlide slide={slide} />;
    case "momentum": return <MomentumSlide slide={slide} />;
    case "governanceFlow": return <GovernanceFlowSlide slide={slide} />;
    case "nextStepsThreeAsks": return <NextStepsThreeAsksSlide slide={slide} />;
    default: return null;
  }
}

function IconButton({ label, onClick, disabled, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        "grid h-9 w-9 place-items-center rounded-md border border-black/10 bg-white text-black transition hover:border-[#3B82F6] hover:bg-[#3B82F6]/10",
        disabled && "cursor-not-allowed opacity-35"
      )}
    >
      {children}
    </button>
  );
}

/* ---------- Root component ---------- */

export default function BNextStrategyDeck() {
  const [current, setCurrent] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(true);

  const slide = slides[current];
  const progress = useMemo(() => ((current + 1) / slides.length) * 100, [current]);

  const goTo = (i) => setCurrent(Math.min(slides.length - 1, Math.max(0, i)));

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") goTo(current - 1);
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(slides.length - 1);
      if (e.key.toLowerCase() === "f") toggleFullscreen();
      if (e.key.toLowerCase() === "m") setTocOpen((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  return (
    <div
      className="h-dvh overflow-hidden bg-[#f6f7fb] text-black"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      <div className="flex h-full overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cx(
            "fixed inset-y-0 left-0 z-30 flex shrink-0 flex-col border-r border-black/10 bg-white transition-all duration-300 lg:relative",
            tocOpen ? "w-72 translate-x-0" : "w-14 -translate-x-full lg:translate-x-0"
          )}
        >
          <div className="flex h-14 items-center justify-between border-b border-black/10 px-3">
            {tocOpen ? (
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-black/60">
                Deck Contents
              </span>
            ) : (
              <List className="mx-auto h-4 w-4 text-[#3B82F6]" />
            )}
            <button
              type="button"
              aria-label={tocOpen ? "Collapse contents" : "Expand contents"}
              title={tocOpen ? "Collapse contents" : "Expand contents"}
              onClick={() => setTocOpen((v) => !v)}
              className="grid h-8 w-8 place-items-center rounded-md border border-black/10 hover:bg-black/[0.04]"
            >
              {tocOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
            </button>
          </div>
          <nav className="min-h-0 flex-1 overflow-y-auto p-2">
            {slides.map((item, index) => {
              const active = index === current;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goTo(index)}
                  title={item.title}
                  className={cx(
                    "mb-1 flex w-full items-center gap-2 rounded-md border p-2 text-left transition",
                    active
                      ? "border-[#3B82F6] bg-[#3B82F6]/10"
                      : "border-transparent hover:border-black/10 hover:bg-black/[0.03]"
                  )}
                >
                  <div
                    className={cx(
                      "grid h-7 w-7 shrink-0 place-items-center rounded-md text-[0.7rem] font-bold",
                      active ? "bg-gradient-to-br from-[#3B82F6] to-[#FACC15] text-white" : "bg-black/[0.05] text-black/60"
                    )}
                  >
                    {index + 1}
                  </div>
                  {tocOpen && (
                    <div className="min-w-0">
                      <div className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-black/45">
                        {item.section}
                      </div>
                      <div className="truncate text-xs font-bold text-black">{item.title}</div>
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          {/* slim progress bar (no top header) */}
          <div className="h-[3px] bg-black/5">
            <div
              className="h-full bg-gradient-to-r from-[#3B82F6] to-[#FACC15] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-3 sm:p-4 lg:p-5">
            <SlideRenderer slide={slide} />
          </div>

          {/* Floating mobile sidebar trigger */}
          <button
            type="button"
            onClick={() => setTocOpen((v) => !v)}
            className="absolute left-3 top-3 z-40 grid h-9 w-9 place-items-center rounded-md border border-black/10 bg-white shadow lg:hidden"
            aria-label="Toggle contents"
            title="Toggle contents (M)"
          >
            {tocOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {/* Bottom controls */}
          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-40 flex justify-center">
            {controlsOpen ? (
              <div className="pointer-events-auto flex items-center gap-1.5 rounded-lg border border-black/10 bg-white/95 p-1.5 text-black shadow-xl backdrop-blur">
                <IconButton label="Previous slide" onClick={() => goTo(current - 1)} disabled={current === 0}>
                  <ArrowLeft className="h-4 w-4" />
                </IconButton>
                <div className="min-w-[4.25rem] px-1 text-center text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-black/70">
                  {current + 1} / {slides.length}
                </div>
                <IconButton label="Next slide" onClick={() => goTo(current + 1)} disabled={current === slides.length - 1}>
                  <ArrowRight className="h-4 w-4" />
                </IconButton>
                <div className="mx-1 h-6 w-px bg-black/10" />
                <IconButton label="Fullscreen" onClick={toggleFullscreen}>
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </IconButton>
                <IconButton label="Minimize controls" onClick={() => setControlsOpen(false)}>
                  <Minimize2 className="h-4 w-4" />
                </IconButton>
              </div>
            ) : (
              <button
                type="button"
                aria-label="Expand slide controls"
                title="Expand slide controls"
                onClick={() => setControlsOpen(true)}
                className="pointer-events-auto flex items-center gap-2 rounded-md border border-black/10 bg-white/95 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-black shadow backdrop-blur hover:border-[#3B82F6]"
              >
                {current + 1} / {slides.length}
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
