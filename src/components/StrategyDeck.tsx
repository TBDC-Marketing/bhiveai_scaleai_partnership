// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Factory,
  Focus,
  Handshake,
  LineChart,
  List,
  Maximize2,
  Menu,
  Minimize2,
  Moon,
  Network,
  PanelLeftClose,
  PanelLeftOpen,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Timer,
  Truck,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const ASSETS = {
  logoColor: assetPath("/bnextai-logo-color.png"),
  logoBlack: assetPath("/bnextai-logo-black.png"),
  hero: assetPath("/tbdc-bhive-bnextai.png"),
  slide1: assetPath("/Slide 1.png"),
  slide2: assetPath("/Slide 2.png"),
  slide3: assetPath("/Slide 3.png"),
  screen1: assetPath("/screen 1.png"),
  screen2: assetPath("/screen 2.png"),
};

const brand = {
  blue: "#3B82F6",
  gold: "#FACC15",
  surface: "#1F2937",
};

const slides = [
  {
    eyebrow: "Slide 1 | Institutional Credibility",
    title: "TBDC and BHive",
    subtitle: "Institutional credibility combined with modern AI adoption infrastructure.",
    purpose:
      "Establish execution capability, ecosystem trust, and the strategic role of BHive beside TBDC.",
    keyMessage: "TBDC is the trusted backbone. BHive is the modern execution engine.",
    layout: "splitHero",
    image: ASSETS.hero,
    bullets: [
      "TBDC has supported entrepreneurship and innovation for 36 years.",
      "BHive accelerates practical AI adoption and commercialization.",
      "The platform sits at the intersection of startups, SMEs, implementation partners, academia, and ecosystem stakeholders.",
      "The model combines ecosystem credibility with operational execution capability.",
    ],
    tags: ["Credibility", "Execution", "Trust", "Infrastructure"],
    icon: Building2,
  },
  {
    eyebrow: "Slide 2 | Market Problem",
    title: "The AI Adoption Gap",
    subtitle: "Canada's challenge is no longer AI awareness.",
    purpose:
      "Define the market problem as operational adoption and implementation, not awareness.",
    keyMessage:
      "The next phase of AI leadership will be defined by measurable operational adoption.",
    layout: "problem",
    bullets: [
      "The larger challenge is operational deployment and measurable implementation within SMEs.",
      "Traditional industries remain underserved in AI adoption.",
      "Businesses need trusted guidance, implementation support, curated vendors, and funding navigation.",
      "The ecosystem today remains fragmented.",
    ],
    tags: [
      "Operational deployment gap",
      "Implementation complexity",
      "Productivity and competitiveness",
      "Fragmented ecosystem",
      "Trusted operator requirement",
    ],
    icon: Target,
  },
  {
    eyebrow: "Slide 3 | Ecosystem Model",
    title: "The BHive Ecosystem Model",
    subtitle: "Operational AI adoption infrastructure, not simply a program.",
    purpose:
      "Position BHive as the connected platform coordinating stakeholders toward measurable business outcomes.",
    keyMessage:
      "BHive helps businesses move from AI awareness into operational implementation and measurable impact.",
    layout: "flywheel",
    bullets: [
      "SMEs",
      "Startups and AI solution providers",
      "Implementation partners",
      "Academia and technical expertise",
      "Thought leadership",
      "Ecosystem and government partners",
      "Commercialization pathways",
      "Measurable outcomes and reporting",
    ],
    workflow: [
      "Readiness assessment",
      "Opportunity mapping",
      "Matchmaking",
      "Implementation",
      "Measurement",
    ],
    tags: ["Curated vendor matching", "Funding navigation", "Impact reporting"],
    icon: Network,
  },
  {
    eyebrow: "Slide 4 | Program Mechanics",
    title: "How the Sprint Actually Runs",
    subtitle:
      "A structured cohort sprint moving SMBs from foundations to signed implementation agreements.",
    purpose:
      "Show partners how the operating model works and build confidence in execution.",
    keyMessage:
      "BHive is built to deliver measurable implementation outcomes in a compressed timeframe.",
    layout: "timeline",
    bullets: [
      "Cohort size of 10 to 15 SMBs as the program scales.",
      "xx half-day workshops on-site at the BHive facility.",
      "xx virtual sessions and office hours interspersed.",
      "Full on-site delivery at the BHive meeting and event space.",
    ],
    phases: [
      {
        title: "Foundations and Use Cases",
        lead: "Led by Abdi Aidid, Curriculum Lead",
        items: [
          "AI fundamentals and sector context",
          "Industry-specific use case exploration",
          "SMBs identify and prioritize their top use case",
        ],
      },
      {
        title: "Vendor Match and Business Case",
        lead: "Led by the BHive program team",
        items: [
          "Vendor pool introductions from cohort-matched providers",
          "Use case scoping with selected vendor",
          "Quantified business case and ROI projection",
        ],
      },
      {
        title: "Implementation Kickoff",
        lead: "Final workshop and agreement signed",
        items: [
          "Business case, KPIs, and roadmap finalized",
          "Vendor scope and quote complete",
          "Implementation agreement signed before sprint close",
        ],
      },
    ],
    icon: Timer,
  },
  {
    eyebrow: "Slide 5 | Execution Capability",
    title: "Why BHive Is Positioned to Execute",
    subtitle:
      "Ecosystem credibility, operational maturity, and implementation capability in one platform.",
    purpose:
      "Demonstrate why BHive can coordinate the adoption infrastructure required by the market.",
    keyMessage:
      "The team combines ecosystem leadership, operational AI adoption, academic credibility, and government delivery.",
    layout: "capabilities",
    capabilities: [
      {
        title: "Ecosystem Leadership and Commercialization",
        person: "Vikram Khurana",
        items: [
          "36 years of ecosystem development through TBDC",
          "Startup ecosystem connectivity",
          "Partnership development and commercialization programming",
        ],
      },
      {
        title: "Operational AI Adoption and Implementation",
        person: "Rahim Kanji",
        items: [
          "Enterprise AI adoption experience",
          "Implementation and operational transformation expertise",
          "Practical deployment focus",
        ],
      },
      {
        title: "Academic and Technical Credibility",
        person: "Abdi Aidid",
        items: [
          "University of Toronto affiliation",
          "AI and technical expertise",
          "Applied AI education and implementation insight",
        ],
      },
      {
        title: "Program Operations and Government Delivery",
        person: "Angela Larraguibel",
        items: [
          "Public sector and funding program administration",
          "Reporting and impact measurement",
          "Stakeholder management and ecosystem coordination",
        ],
      },
    ],
    icon: ShieldCheck,
  },
  {
    eyebrow: "Slide 6 | Sector Focus",
    title: "Priority Sectors and Regional Focus",
    subtitle: "Focused industry implementation in underserved traditional sectors.",
    purpose:
      "Demonstrate practical implementation focus and regional opportunity concentration.",
    keyMessage:
      "BHive approaches AI adoption through focused industry implementation.",
    layout: "sectors",
    bullets: [
      "Operational workflows",
      "Measurable efficiency opportunities",
      "Real implementation use cases",
      "Underserved traditional industries",
    ],
    sectors: [
      { label: "Logistics", icon: Workflow },
      { label: "Trucking", icon: Truck },
      { label: "Manufacturing", icon: Factory },
    ],
    region:
      "Peel region as a dense industrial and SME opportunity cluster, with broader GTA expansion potential.",
    icon: Factory,
  },
  {
    eyebrow: "Slide 7 | Scale AI Alignment",
    title: "Strategic Alignment with Scale AI",
    subtitle:
      "Complementary infrastructure supporting practical adoption and commercialization objectives.",
    purpose:
      "Position BHive as a partner aligned with Scale AI's operational adoption agenda.",
    keyMessage:
      "BHive complements Scale AI's operational adoption and commercialization objectives.",
    layout: "alignment",
    bullets: [
      "Practical AI adoption",
      "Commercialization",
      "Implementation acceleration",
      "SME engagement",
      "Operational deployment",
      "Regional ecosystem activation",
    ],
    collaboration: [
      "SME matchmaking",
      "Implementation pathways",
      "AI solution provider ecosystem development",
      "Vertical-specific initiatives",
      "Adoption pilots",
      "Commercialization support",
    ],
    icon: Handshake,
  },
  {
    eyebrow: "Slide 8 | Market Momentum",
    title: "Early Market Activation and Ecosystem Momentum",
    subtitle: "The platform is already transitioning from strategy into execution.",
    purpose:
      "Demonstrate movement from strategic narrative to operational activation.",
    keyMessage:
      "Brampton Next becomes the near-term proof point for regional AI adoption infrastructure.",
    layout: "momentum",
    bullets: [
      "Brampton Next launching July 1.",
      "Supporting 100 Peel region businesses and startups over the next 3 years.",
      "Vendor ecosystem development underway.",
      "Implementation pathways being structured.",
      "Startup engagement and partnership discussions progressing.",
      "Expanding regional AI ecosystem activity.",
    ],
    icon: Rocket,
  },
  {
    eyebrow: "Slide 9 | Governance and Reporting",
    title: "Impact Reporting and Governance",
    subtitle:
      "One reporting framework. Same metrics across grant funders, partners, and Scale AI.",
    purpose:
      "Show partners how accountability, reporting, and KPI translation flow back in their language.",
    keyMessage: "Aligned outcomes by design.",
    layout: "reporting",
    workflow: [
      "Enrollment readiness assessment",
      "Sprint-close milestones logged",
      "3-month progress signals",
      "6-month efficiency and cost movement",
      "12-month sustained adoption and case study",
    ],
    bullets: [
      "First-time AI adopters",
      "Commercialization",
      "Workforce AI capability",
      "Operational quality gains",
      "Community impact",
    ],
    tranches: ["60% at kickoff", "20% at 6 months", "20% at 12 months"],
    icon: BarChart3,
  },
  {
    eyebrow: "Slide 10 | Partnership Path",
    title: "Proposed Next Steps",
    subtitle: "Build a practical, execution-oriented long-term partnership.",
    purpose:
      "Position the Scale AI relationship as collaborative, operational, and long-term.",
    keyMessage:
      "The goal is to build a practical, execution-oriented long-term partnership.",
    layout: "nextSteps",
    bullets: [
      "Continue strategic alignment discussions.",
      "Explore accelerator participation opportunities.",
      "Identify vertical-specific pilot opportunities.",
      "Share additional operational and implementation details.",
      "Explore long-term regional adoption collaboration opportunities.",
      "Evaluate future ecosystem expansion initiatives together.",
    ],
    icon: Sparkles,
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-blue-500 via-sky-300 to-yellow-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function AssetImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cx(
          "flex h-full min-h-0 w-full items-center justify-center border border-dashed border-current/20 bg-current/5 px-2 text-center text-[0.55rem] uppercase tracking-[0.18em] opacity-70",
          className
        )}
      >
        {src.replace("/", "")}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function SlideBackground({ light }) {
  return (
    <div
      className={cx(
        "pointer-events-none absolute inset-0",
        light ? "bg-white" : "bg-[#050505]"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-200 to-yellow-400" />
      <div
        className={cx(
          "absolute inset-x-0 bottom-0 h-px",
          light ? "bg-black/10" : "bg-white/10"
        )}
      />
    </div>
  );
}

function Logo({ light }) {
  return (
    <div className="flex h-10 w-32 shrink-0 items-center justify-end overflow-hidden px-2">
      <AssetImage
        src={light ? ASSETS.logoBlack : ASSETS.logoColor}
        alt="BNext AI"
        className="max-h-8 w-full object-contain"
      />
    </div>
  );
}

function SlideShell({ children, slide, currentIndex, light }) {
  return (
    <section
      className={cx(
        "relative flex aspect-video w-full max-w-[1500px] max-h-[calc(100dvh-8.25rem)] overflow-hidden rounded-lg border shadow-2xl",
        light
          ? "border-black/10 bg-white text-black shadow-blue-200/30"
          : "border-white/10 bg-black text-white shadow-black"
      )}
    >
      <SlideBackground light={light} />
      <div className="relative z-10 flex h-full w-full flex-col p-[2.35%]">
        <header className="mb-3 flex items-start justify-between gap-4">
          <div>
            <div
              className={cx(
                "font-mono text-[clamp(0.6rem,1.1vw,1rem)] uppercase tracking-[0.28em]",
                light ? "text-blue-700" : "text-blue-300"
              )}
            >
              <span>{slide.eyebrow.split("|")[0].trim()}</span>
              <span className="mx-3 opacity-50">|</span>
              <span className={light ? "text-yellow-600" : "text-yellow-300"}>
                {slide.eyebrow.split("|")[1]?.trim()}
              </span>
            </div>
          </div>
          <Logo light={light} />
        </header>
        <main className="min-h-0 flex-1">{children}</main>
        <footer className="mt-2 flex items-center justify-between gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/80 via-white/20 to-yellow-400/80" />
          <div className="font-mono text-[clamp(0.55rem,0.8vw,0.8rem)] uppercase tracking-[0.26em] opacity-60">
            {String(currentIndex + 1).padStart(2, "0")} / {slides.length}
          </div>
        </footer>
      </div>
    </section>
  );
}

function KeyMessage({ children, light, icon: Icon = Zap }) {
  return (
    <div
      className={cx(
        "flex items-center gap-3 rounded-lg border p-3",
        light
          ? "border-blue-200 bg-gradient-to-r from-blue-50 via-white to-yellow-50"
          : "border-blue-400/40 bg-white/[0.04]"
      )}
    >
      <Icon className="h-9 w-9 shrink-0 text-blue-400" />
      <p className="text-[clamp(0.82rem,1.28vw,1.18rem)] font-bold leading-tight">
        {children}
      </p>
    </div>
  );
}

function BulletList({ items, light, icon: Icon = CheckCircle2 }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item}
          className={cx(
            "flex gap-2.5 border-b pb-2 text-[clamp(0.68rem,0.98vw,0.96rem)] leading-snug",
            light ? "border-black/10" : "border-white/10"
          )}
        >
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function Tags({ tags, light }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cx(
            "rounded-md border px-3 py-2 font-mono text-[clamp(0.56rem,0.8vw,0.78rem)] uppercase tracking-[0.16em]",
            light
              ? "border-black/10 bg-white/80 text-black"
              : "border-white/15 bg-white/[0.05] text-white"
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function SlideTitle({ slide }) {
  const titleParts = slide.title.split("AI");

  return (
    <div>
      <h1 className="max-w-[920px] text-[clamp(1.75rem,4.1vw,4.55rem)] font-black uppercase leading-[0.92] tracking-normal">
        {slide.title.includes("AI") ? (
          <>
            {titleParts.map((part, index) => (
              <React.Fragment key={`${part}-${index}`}>
                {part}
                {index < titleParts.length - 1 && <GradientText>AI</GradientText>}
              </React.Fragment>
            ))}
          </>
        ) : (
          slide.title
        )}
      </h1>
      <p className="mt-2 max-w-[760px] text-[clamp(0.78rem,1.15vw,1.05rem)] font-medium leading-snug opacity-80">
        {slide.subtitle}
      </p>
    </div>
  );
}

function SplitHeroSlide({ slide, light }) {
  return (
    <div className="grid h-full grid-cols-[1fr_0.86fr] gap-5">
      <div className="flex flex-col justify-between">
        <div>
          <SlideTitle slide={slide} />
          <p
            className={cx(
              "mt-3 max-w-[720px] border-l-2 pl-4 text-[clamp(0.85rem,1.3vw,1.1rem)] leading-relaxed",
              light ? "border-blue-500" : "border-blue-400"
            )}
          >
            {slide.purpose}
          </p>
        </div>
        <div className="space-y-3">
          <BulletList items={slide.bullets} light={light} />
          <Tags tags={slide.tags} light={light} />
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg border border-current/10">
        <AssetImage
          src={slide.image}
          alt="BNext AI brand reference"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
          <KeyMessage light={false} icon={Building2}>
            {slide.keyMessage}
          </KeyMessage>
        </div>
      </div>
    </div>
  );
}

function ProblemSlide({ slide, light }) {
  return (
    <div className="grid h-full grid-cols-[1.15fr_0.85fr] gap-5">
      <div className="flex flex-col justify-between">
        <div>
          <SlideTitle slide={slide} />
          <div className="mt-5 h-1 w-64 bg-gradient-to-r from-blue-500 to-yellow-400" />
        </div>
        <BulletList items={slide.bullets} light={light} icon={LineChart} />
        <Tags tags={slide.tags} light={light} />
      </div>
      <div
        className={cx(
          "flex flex-col justify-between rounded-lg border p-5",
          light
            ? "border-black/10 bg-white/80 shadow-xl shadow-blue-100"
            : "border-blue-400/40 bg-white/[0.05] shadow-2xl shadow-blue-500/10"
        )}
      >
        <div className="text-5xl font-black leading-none">
          <GradientText>&quot;</GradientText>
        </div>
        <p className="text-[clamp(1.1rem,2.3vw,2.25rem)] font-black uppercase leading-tight">
          Canada's challenge is no longer <GradientText>AI awareness</GradientText>
        </p>
        <div className="h-px w-full bg-gradient-to-r from-blue-500 to-yellow-400" />
        <p className="font-mono text-[clamp(0.9rem,1.35vw,1.2rem)] uppercase leading-relaxed tracking-[0.12em]">
          The next phase will be defined by measurable operational adoption.
        </p>
      </div>
    </div>
  );
}

function FlywheelSlide({ slide, light }) {
  const Icon = slide.icon;
  return (
    <div className="grid h-full grid-cols-[0.82fr_1.18fr] gap-5">
      <div className="flex flex-col justify-between">
        <SlideTitle slide={slide} />
        <div
          className={cx(
            "rounded-lg border p-3",
            light ? "border-black/10 bg-white/80" : "border-white/10 bg-white/[0.05]"
          )}
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-yellow-400">
            <Icon className="h-5 w-5" />
            Platform Anchor
          </div>
          <div className="grid grid-cols-2 gap-2">
            {slide.workflow.map((step, index) => (
              <div
                key={step}
                className={cx(
                  "rounded-md border p-2 text-sm font-semibold",
                  light ? "border-black/10 bg-blue-50/60" : "border-white/10 bg-black/30"
                )}
              >
                <span className="mr-2 text-blue-400">0{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
        </div>
        <KeyMessage light={light} icon={Network}>
          {slide.keyMessage}
        </KeyMessage>
      </div>
      <div className="relative grid place-items-center">
        <div className="absolute h-[62%] w-[62%] rounded-full border border-dashed border-current/20" />
        <div className="absolute h-[36%] w-[36%] rounded-full border border-current/20" />
        <div
          className={cx(
            "z-10 grid h-24 w-24 place-items-center rounded-full border text-center text-lg font-black uppercase",
            light
              ? "border-blue-200 bg-white shadow-xl"
              : "border-blue-400/40 bg-black shadow-2xl shadow-blue-500/20"
          )}
        >
          <GradientText>BHive</GradientText>
        </div>
        {slide.bullets.map((item, index) => {
          const angle = (index / slide.bullets.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * 31;
          const y = Math.sin(angle) * 31;
          return (
            <div
              key={item}
              className={cx(
                "absolute flex h-14 w-36 items-center justify-center rounded-md border px-3 text-center text-[clamp(0.52rem,0.68vw,0.68rem)] font-bold leading-tight",
                light
                  ? "border-black/10 bg-white/90 shadow-lg"
                  : "border-white/10 bg-white/[0.06] backdrop-blur"
              )}
              style={{
                left: `calc(50% + ${x}% - 4.5rem)`,
                top: `calc(50% + ${y}% - 1.75rem)`,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineSlide({ slide, light }) {
  return (
    <div className="flex h-full flex-col gap-5">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-8">
        <SlideTitle slide={slide} />
        <div className="self-end">
          <BulletList items={slide.bullets} light={light} icon={CircleDot} />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
        {slide.phases.map((phase, index) => (
          <div
            key={phase.title}
            className={cx(
              "flex flex-col rounded-lg border p-3",
              light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
            )}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-gradient-to-r from-blue-500 to-yellow-400 text-lg font-black text-black">
                {index + 1}
              </div>
              <div>
                <h3 className="text-[clamp(1rem,1.45vw,1.35rem)] font-black leading-tight">
                  {phase.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] opacity-55">
                  {phase.lead}
                </p>
              </div>
            </div>
            <BulletList items={phase.items} light={light} icon={CheckCircle2} />
          </div>
        ))}
      </div>
      <KeyMessage light={light} icon={Timer}>
        {slide.keyMessage}
      </KeyMessage>
    </div>
  );
}

function CapabilitiesSlide({ slide, light }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-[1fr_0.9fr] gap-8">
        <SlideTitle slide={slide} />
        <KeyMessage light={light} icon={ShieldCheck}>
          {slide.keyMessage}
        </KeyMessage>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-4 gap-4">
        {slide.capabilities.map((capability) => (
          <div
            key={capability.title}
            className={cx(
              "flex flex-col rounded-lg border p-3",
              light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
            )}
          >
            <Users className="mb-4 h-5 w-5 text-blue-400" />
            <h3 className="text-[clamp(0.92rem,1.25vw,1.18rem)] font-black leading-tight">
              {capability.title}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-yellow-400">
              {capability.person}
            </p>
            <div className="mt-3">
              <BulletList items={capability.items} light={light} icon={CheckCircle2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectorsSlide({ slide, light }) {
  return (
    <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-5">
      <div className="flex flex-col justify-between">
        <SlideTitle slide={slide} />
        <BulletList items={slide.bullets} light={light} icon={Focus} />
        <KeyMessage light={light} icon={Factory}>
          {slide.keyMessage}
        </KeyMessage>
      </div>
      <div className="flex flex-col justify-center gap-5">
        {slide.sectors.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={cx(
              "flex items-center gap-5 rounded-lg border p-4",
              light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
            )}
          >
            <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-blue-500 to-yellow-400">
              <Icon className="h-8 w-8 text-black" />
            </div>
            <div>
              <h3 className="text-[clamp(1.4rem,2.4vw,2.4rem)] font-black uppercase">
                {label}
              </h3>
              <p className="max-w-[620px] text-sm leading-relaxed opacity-70">
                Operational workflows, measurable efficiency opportunities, and implementation-ready use cases.
              </p>
            </div>
          </div>
        ))}
        <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 p-5 text-[clamp(0.9rem,1.4vw,1.25rem)] font-semibold">
          {slide.region}
        </div>
      </div>
    </div>
  );
}

function AlignmentSlide({ slide, light }) {
  return (
    <div className="grid h-full grid-cols-[1fr_1fr] gap-5">
      <div className="flex flex-col justify-between">
        <SlideTitle slide={slide} />
        <div>
          <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-blue-400">
            Shared Focus Areas
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {slide.bullets.map((item) => (
              <div
                key={item}
                className={cx(
                  "rounded-md border p-4 text-sm font-bold",
                  light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <KeyMessage light={light} icon={Handshake}>
          {slide.keyMessage}
        </KeyMessage>
      </div>
      <div
        className={cx(
          "flex flex-col justify-between rounded-lg border p-4",
          light ? "border-black/10 bg-white/85" : "border-blue-400/40 bg-white/[0.05]"
        )}
      >
        <div className="flex items-center gap-4">
          <Handshake className="h-10 w-10 text-yellow-400" />
          <h3 className="font-mono text-lg uppercase tracking-[0.22em]">
            Collaboration Areas
          </h3>
        </div>
        <div className="space-y-2">
          {slide.collaboration.map((item, index) => (
            <div key={item} className="flex items-center gap-4">
              <span className="font-mono text-lg text-blue-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-current/15" />
              <span className="w-[68%] text-[clamp(1rem,1.6vw,1.45rem)] font-bold">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MomentumSlide({ slide, light }) {
  return (
    <div className="grid h-full grid-cols-[1fr_0.9fr] gap-5">
      <div className="flex flex-col justify-between">
        <SlideTitle slide={slide} />
        <KeyMessage light={light} icon={Rocket}>
          {slide.keyMessage}
        </KeyMessage>
      </div>
      <div className="flex flex-col justify-center">
        <div
          className={cx(
            "rounded-lg border p-5",
            light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
          )}
        >
          <div className="mb-7 text-[clamp(2.6rem,5vw,5rem)] font-black leading-none">
            <GradientText>100</GradientText>
          </div>
          <p className="mb-8 text-[clamp(1.1rem,2vw,2rem)] font-black uppercase leading-tight">
            Peel region businesses and startups over 3 years
          </p>
          <BulletList items={slide.bullets} light={light} icon={Rocket} />
        </div>
      </div>
    </div>
  );
}

function ReportingSlide({ slide, light }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-[1fr_0.9fr] gap-8">
        <SlideTitle slide={slide} />
        <KeyMessage light={light} icon={BarChart3}>
          {slide.keyMessage}
        </KeyMessage>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[1.25fr_0.75fr] gap-3">
        <div
          className={cx(
            "rounded-lg border p-4",
            light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
          )}
        >
          <h3 className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-blue-400">
            Reporting Flywheel
          </h3>
          <div className="grid grid-cols-5 gap-3">
            {slide.workflow.map((step, index) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 text-lg font-black text-black">
                  {index + 1}
                </div>
                <div className="mt-2 text-[clamp(0.72rem,1vw,0.95rem)] font-bold leading-tight">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={cx(
            "rounded-lg border p-4",
            light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
          )}
        >
          <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-yellow-400">
            Partner Scorecard
          </h3>
          <BulletList items={slide.bullets} light={light} icon={BarChart3} />
          <div className="mt-5 grid grid-cols-3 gap-2">
            {slide.tranches.map((item) => (
              <div
                key={item}
                className="rounded-md bg-gradient-to-r from-blue-500 to-yellow-400 p-3 text-center text-xs font-black uppercase text-black"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NextStepsSlide({ slide, light }) {
  return (
    <div className="grid h-full grid-cols-[0.9fr_1.1fr] gap-5">
      <div className="flex flex-col justify-between">
        <SlideTitle slide={slide} />
        <KeyMessage light={light} icon={Sparkles}>
          {slide.keyMessage}
        </KeyMessage>
      </div>
      <div className="flex flex-col justify-center gap-4">
        {slide.bullets.map((item, index) => (
          <div
            key={item}
            className={cx(
              "flex items-center gap-5 rounded-lg border p-3",
              light ? "border-black/10 bg-white/85" : "border-white/10 bg-white/[0.05]"
            )}
          >
            <span className="font-mono text-2xl font-black text-blue-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[clamp(1rem,1.7vw,1.5rem)] font-bold">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideRenderer({ slide, index, light }) {
  const content = {
    splitHero: <SplitHeroSlide slide={slide} light={light} />,
    problem: <ProblemSlide slide={slide} light={light} />,
    flywheel: <FlywheelSlide slide={slide} light={light} />,
    timeline: <TimelineSlide slide={slide} light={light} />,
    capabilities: <CapabilitiesSlide slide={slide} light={light} />,
    sectors: <SectorsSlide slide={slide} light={light} />,
    alignment: <AlignmentSlide slide={slide} light={light} />,
    momentum: <MomentumSlide slide={slide} light={light} />,
    reporting: <ReportingSlide slide={slide} light={light} />,
    nextSteps: <NextStepsSlide slide={slide} light={light} />,
  }[slide.layout];

  return (
    <SlideShell slide={slide} currentIndex={index} light={light}>
      {content}
    </SlideShell>
  );
}

function IconButton({ children, label, onClick, disabled, active }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        "grid h-9 w-9 place-items-center rounded-md border transition",
        active
          ? "border-yellow-300 bg-yellow-300 text-black"
          : "border-white/10 bg-white/[0.08] text-white hover:border-blue-300 hover:bg-blue-500/20",
        disabled && "cursor-not-allowed opacity-35"
      )}
    >
      {children}
    </button>
  );
}

export default function BNextStrategyDeck() {
  const [current, setCurrent] = useState(0);
  const [tocOpen, setTocOpen] = useState(true);
  const [light, setLight] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(true);

  const slide = slides[current];
  const progress = useMemo(
    () => ((current + 1) / slides.length) * 100,
    [current]
  );

  const goTo = (index) => {
    const next = Math.min(slides.length - 1, Math.max(0, index));
    setCurrent(next);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") goTo(current + 1);
      if (event.key === "ArrowLeft" || event.key === "PageUp") goTo(current - 1);
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(slides.length - 1);
      if (event.key.toLowerCase() === "f") toggleFullscreen();
      if (event.key.toLowerCase() === "t") setLight((value) => !value);
      if (event.key.toLowerCase() === "m") setTocOpen((value) => !value);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current]);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  return (
    <div
      className={cx(
        "h-dvh overflow-hidden font-sans",
        light
          ? "bg-slate-100 text-black"
          : "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_84%_10%,rgba(250,204,21,0.16),transparent_28%),#050505] text-white"
      )}
    >
      <div className="flex h-full overflow-hidden">
        <aside
          className={cx(
            "fixed inset-y-0 left-0 z-30 flex shrink-0 flex-col border-r transition-all duration-300 lg:relative",
            tocOpen ? "w-80 translate-x-0" : "w-16 -translate-x-full lg:translate-x-0",
            light ? "border-black/10 bg-white" : "border-white/10 bg-black/80"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-current/10 px-4">
            {tocOpen ? (
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-blue-400" />
                <span className="font-mono text-xs uppercase tracking-[0.18em]">
                  Deck Contents
                </span>
              </div>
            ) : (
              <List className="mx-auto h-5 w-5 text-blue-400" />
            )}
            <button
              type="button"
              aria-label={tocOpen ? "Collapse table of contents" : "Expand table of contents"}
              title={tocOpen ? "Collapse table of contents" : "Expand table of contents"}
              onClick={() => setTocOpen((value) => !value)}
              className="grid h-9 w-9 place-items-center rounded-md border border-current/10 hover:bg-current/5"
            >
              {tocOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
            </button>
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto p-3">
            {slides.map((item, index) => {
              const Icon = item.icon;
              const active = index === current;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goTo(index)}
                  title={item.title}
                  className={cx(
                    "mb-2 flex w-full items-center gap-3 rounded-md border p-3 text-left transition",
                    active
                      ? "border-blue-400 bg-blue-500/15"
                      : "border-transparent hover:border-current/10 hover:bg-current/5"
                  )}
                >
                  <div
                    className={cx(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-md",
                      active
                        ? "bg-gradient-to-br from-blue-500 to-yellow-400 text-black"
                        : "bg-current/5 text-blue-400"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  {tocOpen && (
                    <div className="min-w-0">
                      <div className="font-mono text-[0.62rem] uppercase tracking-[0.18em] opacity-55">
                        Slide {index + 1}
                      </div>
                      <div className="truncate text-sm font-bold">{item.title}</div>
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <div
            className={cx(
              "flex h-16 items-center justify-between border-b px-5",
              light ? "border-black/10 bg-white/80" : "border-white/10 bg-black/35"
            )}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setTocOpen((value) => !value)}
                className="grid h-10 w-10 place-items-center rounded-md border border-current/10 hover:bg-current/5 lg:hidden"
                aria-label="Toggle contents"
                title="Toggle contents"
              >
                {tocOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
              <div>
                <div className="font-mono text-[0.64rem] uppercase tracking-[0.2em] opacity-55">
                  BNext AI Strategy Deck
                </div>
                <div className="text-sm font-bold">{slide.title}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLight((value) => !value)}
                className="flex h-10 items-center gap-2 rounded-md border border-current/10 px-3 text-sm font-bold hover:bg-current/5"
              >
                {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="hidden sm:inline">{light ? "Light" : "Dark"}</span>
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex h-10 items-center gap-2 rounded-md border border-current/10 px-3 text-sm font-bold hover:bg-current/5"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                <span className="hidden sm:inline">Full Screen</span>
              </button>
            </div>
          </div>

          <div className="h-1 bg-current/10">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-yellow-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden p-3 sm:p-4 lg:p-5">
            <SlideRenderer slide={slide} index={current} light={light} />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-40 flex justify-center">
            {controlsOpen ? (
              <div className="pointer-events-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/80 p-1.5 text-white shadow-2xl backdrop-blur">
                <IconButton label="Previous slide" onClick={() => goTo(current - 1)} disabled={current === 0}>
                  <ArrowLeft className="h-4 w-4" />
                </IconButton>
                <div className="min-w-[4.25rem] px-1 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em]">
                  {current + 1} / {slides.length}
                </div>
                <IconButton label="Next slide" onClick={() => goTo(current + 1)} disabled={current === slides.length - 1}>
                  <ArrowRight className="h-4 w-4" />
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
                className="pointer-events-auto flex items-center gap-2 rounded-md border border-white/10 bg-black/80 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur hover:border-blue-300"
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
