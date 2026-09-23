/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ARISHA RAJ — PORTFOLIO
 *  3D Artist & Graphics Designer
 *  Single-file application: Starfield + Navbar + Hero + About + Experience +
 *  Education + Certifications + Skills + Works (Creative Canvas & Reels) +
 *  Why Us + Testimonials + Footer
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  Bot,
  Boxes,
  Briefcase,
  Brush,
  CheckCircle2,
  Clapperboard,
  Clock,
  Copyright,
  Cpu,
  Film,
  Gem,
  GraduationCap,
  Heart,
  Image as ImageIcon,
  Languages,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorPlay,
  Palette,
  PenTool,
  Phone,
  Play,
  Quote,
  Rocket,
  Sparkles,
  Star,
  Target,
  Terminal,
  Trophy,
  Users,
  Volleyball,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "./utils/cn";

/* ─── Brand social icons (removed from lucide; drawn in matching style) ─── */
type SvgIconProps = { size?: number | string; className?: string };
type AnyIcon = React.ComponentType<SvgIconProps>;

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const InstagramIcon = ({ size = 24, className }: SvgIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24, className }: SvgIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className }: SvgIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 24, className }: SvgIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

/* ═══════════════════════════════ DATA ═══════════════════════════════ */

const NAME = "ARISHA RAJ";
const PROFESSION = "3D Artist & Graphics Designer";
const PHONE_DISPLAY = "+91 90909 09090";
const PHONE_TEL = "+919090909090";
const PHONE_WA = "919090909090";
const EMAIL = "arisharaj9090@gmail.com";
const ADDRESS = "Main Road, Delhi 110001";
const ADDRESS_SHORT = "Delhi, India";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "why-us", label: "Why Us" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const ROTATING_ROLES = ["3D ARTIST", "GRAPHICS DESIGNER", "BLENDER SPECIALIST", "AI CREATIVE"];

const PROFILE = [
  "A results-driven 3D Artist & Graphics Designer distinguished by an unwavering commitment to professionalism and pixel-perfect craftsmanship. I operate with meticulous precision on every brief, blend seamlessly into collaborative team environments, and bring innate leadership qualities that inspire teams to consistently deliver work of exceptional calibre.",
  "From immersive 3D worlds sculpted in Blender to high-impact brand campaigns engineered with cutting-edge AI workflows — I transform ambitious ideas into visuals that command attention, communicate powerfully, and convert audiences into believers.",
];

const EXPERIENCE: {
  role: string;
  org: string;
  period: string;
  tag: string;
  points: string[];
}[] = [
  {
    role: "Social Media Expert",
    org: "ABC Marketing",
    period: "2024 — 2026",
    tag: "Current Role",
    points: [
      "Orchestrated high-impact, data-driven social media strategies that amplified brand presence across premier digital platforms.",
      "Engineered viral content calendars and campaigns, driving exponential growth in audience reach, engagement and conversions.",
      "Leveraged cutting-edge AI tools to optimise creative workflows, sharpen audience targeting and maximise campaign ROI.",
    ],
  },
  {
    role: "Computer Teacher",
    org: "Delhi Public School, Delhi",
    period: "2021 — 2024",
    tag: "3 Years",
    points: [
      "Delivered comprehensive computer education over three distinguished years, mentoring hundreds of students in digital literacy, design fundamentals and emerging technologies.",
      "Architected an innovative, future-ready learning environment that consistently inspired academic excellence and creative curiosity.",
      "Demonstrated exemplary leadership by spearheading technology-driven workshops, initiatives and inter-school digital events.",
    ],
  },
  {
    role: "Graphics Designer",
    org: "XYZ Marketing Co.",
    period: "2019 — 2021",
    tag: "1.5 Years",
    points: [
      "Spearheaded end-to-end visual communication for a diverse clientele — conceptualising compelling brand identities, marketing collateral and digital creatives.",
      "Collaborated cross-functionally with strategy and content teams to deliver visually cohesive, high-performing campaigns.",
      "Elevated client engagement and brand recall through meticulous, detail-driven design craftsmanship.",
    ],
  },
];

const EDUCATION: { title: string; org: string; period: string; desc: string }[] = [
  {
    title: "MBA — Digital Marketing",
    org: "Delhi University, Delhi",
    period: "Pursuing · Till 2028",
    desc: "Pursuing advanced postgraduate mastery in digital marketing — specialising in strategic brand management, consumer-behaviour analytics and performance-driven growth marketing.",
  },
  {
    title: "BBA — Digital Marketing",
    org: "Delhi University, Delhi",
    period: "2023 — 2026",
    desc: "Graduated with a specialised undergraduate degree, building formidable expertise in digital advertising, marketing strategy, e-commerce ecosystems and data-driven decision-making.",
  },
  {
    title: "Intermediate — Commerce",
    org: "DAV Public School, Delhi",
    period: "2021 — 2023",
    desc: "Completed senior secondary education in the Commerce stream, establishing a robust academic foundation in accountancy, business studies and economics.",
  },
  {
    title: "Matriculation",
    org: "DAV Public School, Delhi",
    period: "2021",
    desc: "Successfully completed secondary education with distinguished academic standing and a well-rounded command across core disciplines.",
  },
];

const CERTIFICATIONS: { title: string; issuer: string; desc: string }[] = [
  {
    title: "LinkedIn Mastery Course",
    issuer: "XYZ Marketers",
    desc: "Certified in advanced LinkedIn personal branding, strategic network expansion and professional authority building.",
  },
  {
    title: "AI Mastery Course",
    issuer: "ABC Courses",
    desc: "Certified in cutting-edge artificial-intelligence tools, precision prompt engineering and AI-augmented creative production workflows.",
  },
  {
    title: "Job Mastery Course",
    issuer: "PQR Educators",
    desc: "Certified in career-acceleration strategies, interview excellence and comprehensive corporate readiness.",
  },
];

const SKILLS: { icon: LucideIcon; name: string; tool: string; stars: number }[] = [
  { icon: Boxes, name: "3D Animation Artist", tool: "Blender", stars: 5 },
  { icon: PenTool, name: "Graphics Designing", tool: "Adobe Suite & Figma", stars: 4 },
  { icon: Terminal, name: "Claude Code", tool: "AI-Powered Development", stars: 4 },
  { icon: Bot, name: "Top AI Tools", tool: "Mastered & Production-Ready", stars: 4 },
];

const LANGUAGES: { icon: LucideIcon; name: string; level: string; stars: number }[] = [
  { icon: Languages, name: "English", level: "Professional Fluency", stars: 5 },
  { icon: Languages, name: "Hindi", level: "Native Proficiency", stars: 5 },
];

const PASSIONS: { icon: LucideIcon; label: string; desc: string }[] = [
  { icon: Bot, label: "Exploring AI Tools", desc: "Always hunting the next frontier" },
  { icon: Trophy, label: "Cricket", desc: "Strategy, patience & passion" },
  { icon: Volleyball, label: "Football", desc: "Energy, teamwork & drive" },
];

const POSTERS = ["poster1.jpg", "poster2.jpg", "poster3.jpg", "poster4.jpg", "poster5.jpg", "poster6.jpg"];
const REELS_916 = ["reel1.mp4", "reel2.mp4", "reel3.mp4", "reel4.mp4", "reel5.mp4", "reel6.mp4"];
const REELS_169 = ["reel7.mp4", "reel8.mp4"];

const WHY_US: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Gem,
    title: "Uncompromising Excellence",
    desc: "Every pixel, frame and render is obsessively refined until it radiates premium, gallery-grade quality that sets your brand apart.",
  },
  {
    icon: Layers,
    title: "Full-Stack Creative Arsenal",
    desc: "From Blender-built 3D worlds to Adobe & Figma-driven design systems — one artist commanding the entire creative spectrum.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Workflows",
    desc: "Cutting-edge AI integration accelerates every stage of production dramatically — faster turnarounds with zero compromise on finesse.",
  },
  {
    icon: Clock,
    title: "Deadline-Driven Delivery",
    desc: "Disciplined project management and transparent milestones ensure your vision ships on schedule — every single time, without exception.",
  },
  {
    icon: Users,
    title: "Collaborative Leadership",
    desc: "Effortless teamwork backed by genuine leadership instinct — crystal-clear communication from the first brief to final delivery.",
  },
  {
    icon: Rocket,
    title: "End-to-End Brand Solutions",
    desc: "Concept, design, animation and social amplification — a complete creative partnership under one roof, tailored to your ambition.",
  },
];

const TESTIMONIALS: { name: string; role: string; text: string }[] = [
  {
    name: "Rohan Mehta",
    role: "Marketing Director — PixelWave Studios, Mumbai",
    text: "Arisha transformed our brand's entire visual identity. The 3D creatives she delivered were nothing short of cinematic — our campaign engagement nearly doubled within a quarter. An absolute professional who treats every deadline as sacred.",
  },
  {
    name: "Priya Sharma",
    role: "Founder & CEO — CraftNest Designs, Bengaluru",
    text: "Working with Arisha felt effortless. She understood our vision instantly, then elevated it far beyond our expectations. Her leadership on cross-team projects and her obsessive eye for detail make her one of the finest designers we've ever collaborated with.",
  },
  {
    name: "Arjun Kapoor",
    role: "Brand Manager — DigiSphere Media, New Delhi",
    text: "From social media creatives to breathtaking 3D animations — everything Arisha touches turns premium. Her AI-driven workflow meant remarkably faster delivery without a single compromise on quality. Highly recommended for any ambitious brand.",
  },
];

const SOCIALS: { icon: AnyIcon; label: string; href: string }[] = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/beingsalmankhan/?hl=en" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/beingsalmankhan/?hl=en" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/beingsalmankhan/?hl=en" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/beingsalmankhan/?hl=en" },
];

const MARQUEE = [
  "3D Animation",
  "Blender",
  "Brand Identity",
  "Figma",
  "AI Workflows",
  "Adobe Suite",
  "Motion Graphics",
  "Claude Code",
  "Social Media",
  "Visual Design",
];

const STATS = [
  { value: 7, suffix: "+", label: "Years Creative Journey" },
  { value: 60, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Tools Mastered" },
];

const WHATSAPP_URL = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(
  "Hi Arisha! I visited your portfolio and I'd love to discuss a project with you."
)}`;

/* ═══════════════════════════ STARFIELD CANVAS ═══════════════════════════ */

function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let mx = 0;
    let my = 0;

    type StarT = { x: number; y: number; r: number; phase: number; speed: number; color: string };
    let stars: StarT[] = [];
    const palette = ["255,255,255", "103,232,249", "196,181,253", "240,171,252"];

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(260, Math.floor((w * h) / 6500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.35 + 0.35,
        phase: Math.random() * Math.PI * 2,
        speed: 0.25 + Math.random() * 0.95,
        color: palette[Math.floor(Math.random() * palette.length)],
      }));
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.y += s.speed * 0.085;
        s.x -= s.speed * 0.03;
        if (s.y > h + 6) s.y = -6;
        if (s.x < -6) s.x = w + 6;
        const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(t * 0.0009 * s.speed + s.phase));
        const px = s.x + mx * 6 * s.r;
        const py = s.y + my * 6 * s.r;
        if (s.r > 1.05) {
          const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 5);
          g.addColorStop(0, `rgba(${s.color},${0.35 * twinkle})`);
          g.addColorStop(1, `rgba(${s.color},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, s.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.color},${twinkle})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    build();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", build);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}

/* ═══════════════════════════ SHARED PRIMITIVES ═══════════════════════════ */

function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  index,
  kicker,
  title,
  accent,
  desc,
}: {
  index: string;
  kicker: string;
  title: string;
  accent: string;
  desc?: string;
}) {
  return (
    <div className="mb-14 sm:mb-20">
      <Reveal>
        <div className="mb-5 flex items-center gap-4">
          <span className="font-display text-xs font-bold tracking-[0.35em] text-neon">{index}</span>
          <span className="h-px w-14 bg-gradient-to-r from-neon to-transparent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
            {kicker}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title} <span className="neon-text">{accent}</span>
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-base">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}

function Stars({ count, size = 15 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= count
              ? "fill-amber-300 text-amber-300 drop-shadow-[0_0_7px_rgba(252,211,77,0.75)]"
              : "text-slate-600"
          }
        />
      ))}
    </div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      <span className="neon-text">{suffix}</span>
    </span>
  );
}

/* ------------ Smart media with elegant branded fallbacks ------------ */

const HUES = [190, 268, 318, 215, 165, 336];

function SmartImage({
  file,
  index,
  className,
  tag,
}: {
  file: string;
  index: number;
  className?: string;
  tag: string;
}) {
  const [failed, setFailed] = useState(false);
  const hue = HUES[index % HUES.length];
  return (
    <div
      className={cn(
        "neon-card group relative overflow-hidden rounded-2xl border border-white/10 bg-panel",
        className
      )}
    >
      {/* ambient branded backdrop (also the graceful fallback) */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(130% 130% at 18% 8%, hsla(${hue},90%,62%,0.30), transparent 55%), radial-gradient(130% 130% at 88% 92%, hsla(${(hue + 70) % 360},90%,64%,0.24), transparent 60%), linear-gradient(160deg,#0b0e17,#070910)`,
        }}
      />
      <div className="media-sheen pointer-events-none absolute inset-0" />

      {!failed ? (
        <img
          src={`/${file}`}
          alt={`Arisha Raj — ${tag} artwork ${index + 1}`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      ) : (
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="font-display text-5xl font-extrabold text-white/10 sm:text-6xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
            <ImageIcon size={20} className="text-neon" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">{tag}</span>
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] text-slate-300">
            {file}
          </span>
        </div>
      )}

      {/* hover glow border */}
      <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-white/10 transition group-hover:ring-neon/50" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </div>
  );
}

function SmartVideo({
  file,
  index,
  ratio,
  className,
}: {
  file: string;
  index: number;
  ratio: "9:16" | "16:9";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const vref = useRef<HTMLVideoElement>(null);
  const hue = HUES[index % HUES.length];
  return (
    <div
      className={cn(
        "neon-card group relative overflow-hidden rounded-2xl border border-white/10 bg-panel",
        ratio === "9:16" ? "aspect-[9/16]" : "aspect-video",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(130% 130% at 15% 10%, hsla(${hue},90%,62%,0.3), transparent 55%), radial-gradient(130% 130% at 90% 90%, hsla(${(hue + 60) % 360},90%,64%,0.22), transparent 60%), linear-gradient(160deg,#0b0e17,#070910)`,
        }}
      />
      <div className="media-sheen pointer-events-none absolute inset-0" />

      {!failed ? (
        <video
          ref={vref}
          src={`/${file}`}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          onError={() => setFailed(true)}
          onMouseEnter={() => vref.current?.play().catch(() => undefined)}
          onMouseLeave={() => vref.current?.pause()}
          className="relative z-10 h-full w-full object-cover"
        />
      ) : (
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-5 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <Clapperboard size={22} className="text-neon" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
            Reel · {ratio}
          </span>
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] text-slate-300">
            {file}
          </span>
        </div>
      )}

      {/* center play affordance */}
      {!failed && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/45 backdrop-blur-md shadow-[0_0_35px_rgba(34,211,238,0.35)]">
            <Play size={20} className="ml-0.5 fill-white text-white" />
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-white/10 transition group-hover:ring-pulse/50" />
      <span className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
        <Film size={10} className="text-pulse" /> {file}
      </span>
    </div>
  );
}

/* ═══════════════════════════════ NAVBAR ═══════════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const pos = window.scrollY + window.innerHeight * 0.38;
      let current = "home";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= pos) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.07] bg-void/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neon/40 bg-panel font-display text-sm font-extrabold text-white shadow-[0_0_22px_rgba(34,211,238,0.3)] transition group-hover:shadow-[0_0_32px_rgba(34,211,238,0.55)]">
            AR
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_10px_#22d3ee]" />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-[0.22em] text-white">ARISHA RAJ</span>
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-slate-500">
              3D Artist · Designer
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={cn(
                "link-line text-[12.5px] font-semibold uppercase tracking-[0.18em] transition-colors",
                active === n.id ? "active text-white" : "text-slate-400 hover:text-white"
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hidden items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white sm:flex"
          >
            <MessageCircle size={14} className="text-neon" />
            Hire Me
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-void/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -18, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-sm font-bold uppercase tracking-[0.2em] transition",
                    active === n.id ? "bg-white/[0.06] text-neon" : "text-slate-300 hover:bg-white/[0.04]"
                  )}
                >
                  {n.label}
                  <ArrowRight size={14} className={active === n.id ? "text-neon" : "text-slate-600"} />
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ════════════════════════════════ HERO ════════════════════════════════ */

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % ROTATING_ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });
  const photoRotateX = useTransform(sy, [-1, 1], [5, -5]);
  const photoRotateY = useTransform(sx, [-1, 1], [-5, 5]);
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      className="noise relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      {/* grid + aurora orbs */}
      <div className="bg-grid absolute inset-0" />
      <div className="animate-pulse-glow absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-neon/[0.13]" />
      <div
        className="animate-pulse-glow absolute right-[4%] top-1/3 h-[460px] w-[460px] rounded-full bg-plasma/[0.14]"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="animate-pulse-glow absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-pulse/[0.10]"
        style={{ animationDelay: "2.4s" }}
      />
      <span className="outline-text pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[16vw] font-extrabold uppercase leading-none opacity-60">
        Portfolio
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12">
        {/* ── Copy ── */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-neon/25 bg-neon/[0.06] px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.3em] text-neon"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Available for Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.2rem,10vw,7.4rem)] font-extrabold uppercase leading-[0.94] tracking-tight text-white"
          >
            Arisha
            <br />
            <span className="neon-text">Raj</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-neon lg:block" />
            <div className="h-7 overflow-hidden font-display text-lg font-bold tracking-[0.25em] sm:text-xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="neon-text inline-block"
                >
                  {ROTATING_ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base lg:mx-0"
          >
            {PROFESSION} based in {ADDRESS_SHORT} — sculpting cinematic 3D worlds, crafting premium brand
            visuals and fusing artistry with AI to make ideas unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#works"
              className="btn-neon inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-neon to-plasma px-7 py-3.5 font-display text-[13px] font-extrabold uppercase tracking-[0.2em] text-void"
            >
              Explore My Works <ArrowRight size={15} />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="btn-ghost inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-display text-[13px] font-extrabold uppercase tracking-[0.2em] text-white"
            >
              <Phone size={15} className="text-pulse" /> {PHONE_DISPLAY}
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/[0.07] pt-9 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px] [perspective:1200px]"
        >
          <motion.div style={{ rotateX: photoRotateX, rotateY: photoRotateY }} className="relative">
            {/* rotating neon ring */}
            <div
              className="animate-spin-slow absolute -inset-[3px] rounded-[2rem]"
              style={{
                background:
                  "conic-gradient(from 0deg, #22d3ee, #8b5cf6, #e879f9, transparent 140deg, #22d3ee 360deg)",
              }}
            />
            <div className="absolute -inset-[3px] rounded-[2rem] bg-neon/30 blur-2xl" />

            <div className="noise relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-panel">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(130% 130% at 20% 10%, rgba(34,211,238,0.22), transparent 55%), radial-gradient(130% 130% at 85% 90%, rgba(232,121,249,0.2), transparent 60%), linear-gradient(165deg,#0d1019,#070910)",
                }}
              />
              {!photoFailed ? (
                <img
                  src="/myphoto.jpg"
                  alt="Arisha Raj — 3D Artist and Graphics Designer"
                  onError={() => setPhotoFailed(true)}
                  className="relative z-10 h-full w-full object-cover"
                />
              ) : (
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4">
                  <span className="font-display text-8xl font-extrabold text-white/15 sm:text-9xl">AR</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <ImageIcon size={22} className="text-neon" />
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 font-mono text-xs text-slate-300">
                    myphoto.jpg
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-void/90 to-transparent" />
              <div className="absolute bottom-5 left-0 right-0 z-30 text-center">
                <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-white">
                  Arisha Raj
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-neon">
                  New Delhi · India
                </p>
              </div>
            </div>

            {/* floating tool chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 z-40 flex items-center gap-2 rounded-2xl border border-white/10 bg-panel/90 px-4 py-2.5 shadow-[0_15px_45px_-10px_rgba(34,211,238,0.4)] backdrop-blur-xl sm:-left-12"
            >
              <Boxes size={16} className="text-neon" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Blender</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -right-4 top-1/3 z-40 flex items-center gap-2 rounded-2xl border border-white/10 bg-panel/90 px-4 py-2.5 shadow-[0_15px_45px_-10px_rgba(232,121,249,0.4)] backdrop-blur-xl sm:-right-10"
            >
              <Palette size={16} className="text-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Adobe</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              className="absolute -bottom-5 left-10 z-40 flex items-center gap-2 rounded-2xl border border-white/10 bg-panel/90 px-4 py-2.5 shadow-[0_15px_45px_-10px_rgba(139,92,246,0.4)] backdrop-blur-xl"
            >
              <Sparkles size={16} className="text-plasma" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">AI Powered</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500">Scroll</span>
        <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.span
            animate={{ y: [0, 16, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-neon shadow-[0_0_8px_#22d3ee]"
          />
        </span>
      </motion.a>
    </section>
  );
}

/* ═══════════════════════════════ MARQUEE ═══════════════════════════════ */

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/[0.07] bg-abyss/70 py-5 backdrop-blur-sm">
      <div className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]">
        {items.map((m, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 font-display text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
              {m}
            </span>
            <Sparkles size={13} className="text-neon/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════ ABOUT ════════════════════════════════ */

function About() {
  const contactItems = [
    { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: "Address", value: ADDRESS, href: "#contact" },
  ];
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="01"
          kicker="About Me"
          title="The Artist Behind"
          accent="The Craft"
          desc="A profile shaped by discipline, creativity and an obsession with detail."
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Profile statement */}
          <Reveal className="h-full">
            <div className="glass neon-card relative h-full overflow-hidden rounded-3xl p-8 sm:p-10">
              <Quote size={90} className="absolute -right-4 -top-4 rotate-12 text-white/[0.05]" />
              <BadgeCheck size={20} className="mb-6 text-neon" />
              <p className="max-w-3xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl">
                {PROFILE[0]}
              </p>
              <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
                {PROFILE[1]}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {["Professional", "Team Player", "Natural Leader", "Detail-Obsessed"].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300"
                  >
                    <CheckCircle2 size={13} className="text-neon" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact card */}
          <Reveal delay={0.12} className="h-full">
            <div className="glass neon-card flex h-full flex-col justify-between gap-7 rounded-3xl p-8">
              <div>
                <span className="font-display text-[11px] font-extrabold uppercase tracking-[0.3em] text-neon">
                  Quick Connect
                </span>
                <div className="mt-6 flex flex-col gap-5">
                  {contactItems.map((c) => (
                    <a key={c.label} href={c.href} className="group flex items-start gap-4">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition group-hover:border-neon/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                        <c.icon size={17} className="text-neon" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                          {c.label}
                        </span>
                        <span className="mt-1 block break-all text-sm font-medium text-slate-200 transition group-hover:text-white">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-6 py-3.5 font-display text-[12px] font-extrabold uppercase tracking-[0.2em] text-emerald-300 transition hover:shadow-[0_0_35px_-5px_rgba(52,211,153,0.6)]"
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* ══════════ Experience timeline ══════════ */}
        <div className="mt-28 sm:mt-36">
          <Reveal>
            <div className="mb-12 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <Briefcase size={20} className="text-neon" />
              </span>
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                Work <span className="neon-text">Experience</span>
              </h3>
            </div>
          </Reveal>

          <div className="relative">
            <div className="spine absolute bottom-0 left-[22px] top-0 w-px sm:left-1/2" />
            <div className="flex flex-col gap-14">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.08} className="relative">
                  <div
                    className={cn(
                      "relative grid gap-6 pl-16 sm:grid-cols-2 sm:gap-14 sm:pl-0",
                      i % 2 === 1 && "sm:[&>*:first-child]:order-2"
                    )}
                  >
                    {/* node */}
                    <span className="absolute left-[13px] top-2 flex h-5 w-5 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                      <span className="absolute h-5 w-5 animate-ping rounded-full bg-neon/30" />
                      <span className="relative h-3.5 w-3.5 rounded-full border-2 border-void bg-gradient-to-br from-neon to-plasma shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                    </span>

                    <div className={cn(i % 2 === 1 ? "sm:pl-14" : "sm:pr-14 sm:text-right")}>
                      <span className="inline-flex items-center gap-2 rounded-full border border-plasma/30 bg-plasma/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-plasma">
                        <Clock size={11} /> {e.period}
                      </span>
                      <h4 className="mt-4 font-display text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl">
                        {e.role}
                      </h4>
                      <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-neon">
                        {e.org}
                      </p>
                      <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        {e.tag}
                      </span>
                    </div>

                    <div className={cn(i % 2 === 1 ? "sm:order-first sm:pr-14" : "sm:pl-14")}>
                      <ul className="glass neon-card flex flex-col gap-4 rounded-2xl p-6 sm:p-7">
                        {e.points.map((p) => (
                          <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-neon" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════ Education + Certifications ══════════ */}
        <div className="mt-28 grid gap-16 sm:mt-36 lg:grid-cols-2 lg:gap-12">
          {/* Education */}
          <div>
            <Reveal>
              <div className="mb-10 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-plasma/30 bg-plasma/10 shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                  <GraduationCap size={20} className="text-plasma" />
                </span>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                  Education
                </h3>
              </div>
            </Reveal>
            <div className="flex flex-col gap-5">
              {EDUCATION.map((ed, i) => (
                <Reveal key={ed.title} delay={i * 0.07}>
                  <div className="glass neon-card group relative overflow-hidden rounded-2xl p-6 sm:p-7">
                    <span className="outline-text pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-extrabold opacity-70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-plasma">
                      <GraduationCap size={11} /> {ed.period}
                    </span>
                    <h4 className="relative mt-4 font-display text-lg font-extrabold uppercase tracking-tight text-white">
                      {ed.title}
                    </h4>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-neon">{ed.org}</p>
                    <p className="mt-3.5 text-sm leading-relaxed text-slate-400">{ed.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <Reveal>
              <div className="mb-10 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pulse/30 bg-pulse/10 shadow-[0_0_25px_rgba(232,121,249,0.25)]">
                  <Award size={20} className="text-pulse" />
                </span>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                  Certified <span className="neon-text">With</span>
                </h3>
              </div>
            </Reveal>
            <div className="flex flex-col gap-5">
              {CERTIFICATIONS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.07}>
                  <div className="glass neon-card flex items-start gap-5 rounded-2xl p-6 sm:p-7">
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-pulse/25 bg-gradient-to-br from-pulse/15 to-plasma/15 p-3.5">
                      <BadgeCheck size={22} className="text-pulse" />
                    </span>
                    <div>
                      <h4 className="font-display text-[17px] font-extrabold uppercase tracking-tight text-white">
                        {c.title}
                      </h4>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-neon">
                        {c.issuer}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Languages + Passions mini-panel */}
              <Reveal delay={0.2}>
                <div className="glass neon-card rounded-2xl p-6 sm:p-7">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <span className="flex items-center gap-2 font-display text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-300">
                        <Languages size={14} className="text-neon" /> Languages
                      </span>
                      <div className="mt-4 flex flex-col gap-4">
                        {LANGUAGES.map((l) => (
                          <div key={l.name} className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm font-bold text-white">{l.name}</p>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{l.level}</p>
                            </div>
                            <Stars count={l.stars} size={12} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="flex items-center gap-2 font-display text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-300">
                        <Heart size={14} className="text-pulse" /> Passions
                      </span>
                      <div className="mt-4 flex flex-col gap-3.5">
                        {PASSIONS.map((p) => (
                          <div key={p.label} className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
                              <p.icon size={14} className="text-pulse" />
                            </span>
                            <div>
                              <p className="text-sm font-bold text-white">{p.label}</p>
                              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{p.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ══════════ Skills with star ratings ══════════ */}
        <div className="mt-28 sm:mt-36">
          <Reveal>
            <div className="mb-12 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <Zap size={20} className="text-neon" />
              </span>
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                Core <span className="neon-text">Skills</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {SKILLS.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07} className="h-full">
                <div className="glass neon-card group flex h-full flex-col gap-5 rounded-2xl p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neon/25 bg-gradient-to-br from-neon/15 to-plasma/15 shadow-[0_0_25px_rgba(34,211,238,0.2)] transition group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]">
                    <s.icon size={24} className="text-neon" />
                  </span>
                  <div>
                    <h4 className="font-display text-[17px] font-extrabold uppercase leading-tight tracking-tight text-white">
                      {s.name}
                    </h4>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {s.tool}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-col gap-3">
                    <Stars count={s.stars} />
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(s.stars / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-neon via-plasma to-pulse shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════ WORKS ════════════════════════════════ */

function Works() {
  return (
    <section id="works" className="relative z-10 overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-plasma/[0.07] blur-[120px]" />
      <span className="outline-text pointer-events-none absolute right-0 top-10 hidden select-none font-display text-[11rem] font-extrabold uppercase leading-none opacity-50 xl:block">
        Works
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="02"
          kicker="Selected Works"
          title="A Gallery Of"
          accent="Imagination"
          desc="Posters forged in light and reels engineered for attention — a curated window into my creative universe."
        />

        {/* ─── Creative Canvas (posters) ─── */}
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <Brush size={20} className="text-neon" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                  Creative <span className="neon-text">Canvas</span>
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Poster Design Series
                </p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              06 Posters
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {POSTERS.map((p, i) => (
            <Reveal key={p} delay={(i % 3) * 0.08} className={cn(i % 3 === 1 && "lg:translate-y-10")}>
              <SmartImage file={p} index={i} tag="Creative Canvas" className="aspect-[3/4]" />
            </Reveal>
          ))}
        </div>

        {/* ─── Reels 9:16 ─── */}
        <Reveal className="mt-28 sm:mt-36">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pulse/30 bg-pulse/10 shadow-[0_0_25px_rgba(232,121,249,0.25)]">
                <Film size={20} className="text-pulse" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                  Reels <span className="neon-text">Motion Vault</span>
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Vertical Stories · 9:16
                </p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              06 Reels · 9:16
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6">
          {REELS_916.map((r, i) => (
            <Reveal key={r} delay={(i % 6) * 0.06}>
              <SmartVideo file={r} index={i} ratio="9:16" />
            </Reveal>
          ))}
        </div>

        {/* ─── Reels 16:9 ─── */}
        <Reveal className="mt-20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-plasma/30 bg-plasma/10 shadow-[0_0_25px_rgba(139,92,246,0.25)]">
                <MonitorPlay size={20} className="text-plasma" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                  Cinematic <span className="neon-text">Widescreen</span>
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Feature Edits · 16:9
                </p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              02 Films · 16:9
            </span>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {REELS_169.map((r, i) => (
            <Reveal key={r} delay={i * 0.1}>
              <SmartVideo file={r} index={i + 2} ratio="16:9" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ WHY US ═══════════════════════════════ */

function WhyUs() {
  return (
    <section id="why-us" className="relative z-10 py-24 sm:py-32">
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-neon/[0.06] blur-[130px]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Sticky narrative column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="mb-5 flex items-center gap-4">
                <span className="font-display text-xs font-bold tracking-[0.35em] text-neon">03</span>
                <span className="h-px w-14 bg-gradient-to-r from-neon to-transparent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                  The Difference
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Why <span className="neon-text">Choose</span>
                <br />
                Us?
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-slate-400 sm:text-base">
                Because extraordinary brands are never built on ordinary effort. Every engagement is treated
                as a flagship — engineered with precision, elevated by AI, and delivered with uncompromising
                professionalism.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="glass mt-10 hidden rounded-3xl p-8 lg:block">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pulse/30 bg-pulse/10">
                    <Target size={20} className="text-pulse" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-extrabold text-white">100% Vision-Aligned</p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                      Brief to final render
                    </p>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-neon to-plasma px-6 py-4 font-display text-[12px] font-extrabold uppercase tracking-[0.2em] text-void"
                >
                  Start a Project <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Reason cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07} className="h-full">
                <div className="glass neon-card group relative h-full overflow-hidden rounded-3xl p-7 sm:p-8">
                  <span className="outline-text pointer-events-none absolute -right-3 -top-5 font-display text-8xl font-extrabold opacity-60 transition group-hover:opacity-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-neon/25 bg-gradient-to-br from-neon/15 via-plasma/15 to-pulse/15 shadow-[0_0_25px_rgba(139,92,246,0.2)] transition duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]">
                    <w.icon size={24} className="text-neon transition group-hover:text-white" />
                  </span>
                  <h3 className="relative mt-6 font-display text-lg font-extrabold uppercase leading-snug tracking-tight text-white">
                    {w.title}
                  </h3>
                  <p className="relative mt-3.5 text-sm leading-relaxed text-slate-400">{w.desc}</p>
                  <span className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-gradient-to-r from-neon via-plasma to-pulse transition-all duration-700 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════ TESTIMONIALS ════════════════════════════ */

function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-24 sm:py-32">
      <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-pulse/[0.06] blur-[130px]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeader
          index="04"
          kicker="Client Voices"
          title="Words That"
          accent="Inspire"
          desc="Real collaborations. Real outcomes. Hear it from the people who trusted the craft."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <div className="glass neon-card group relative flex h-full flex-col rounded-3xl p-8">
                <Quote size={44} className="absolute -top-1 right-7 rotate-180 text-white/[0.06]" />
                <Stars count={5} size={16} />
                <p className="mt-6 flex-1 text-[15px] leading-relaxed text-slate-300">“{t.text}”</p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-7">
                  <span
                    className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full p-3 font-display text-sm font-extrabold text-void"
                    style={{
                      background: `linear-gradient(135deg, hsl(${HUES[i]}, 90%, 62%), hsl(${(HUES[i] + 60) % 360}, 85%, 58%))`,
                      boxShadow: `0 0 22px hsla(${HUES[i]}, 90%, 60%, 0.5)`,
                    }}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-extrabold tracking-tight text-white">{t.name}</p>
                    <p className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {t.role}
                    </p>
                  </div>
                </div>
                <span className="absolute bottom-0 left-1/2 h-[2.5px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon via-plasma to-pulse transition-all duration-700 group-hover:w-2/3" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */

function Footer() {
  const contacts = [
    { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: "Address", value: `${ADDRESS}, India`, href: "#contact" },
  ];
  return (
    <footer id="contact" className="relative z-10 overflow-hidden border-t border-white/[0.07] bg-abyss/60">
      <div className="absolute -top-40 left-1/2 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-plasma/[0.08] blur-[130px]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-24 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.6fr_1fr]">
          {/* Brand + socials */}
          <Reveal>
            <div>
              <a href="#home" className="flex items-center gap-3">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-neon/40 bg-panel font-display text-base font-extrabold text-white shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                  AR
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_10px_#22d3ee]" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-display text-base font-bold tracking-[0.22em] text-white">{NAME}</span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-slate-500">
                    {PROFESSION}
                  </span>
                </span>
              </a>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
                Crafting premium 3D art, striking graphics and AI-amplified brand experiences from the heart
                of {ADDRESS_SHORT}. Let's build something unforgettable together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-neon/60 hover:text-neon hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <div>
              <h4 className="font-display text-[12px] font-extrabold uppercase tracking-[0.3em] text-white">
                Quick Links
              </h4>
              <div className="mt-7 flex flex-col gap-3.5">
                {[{ id: "home", label: "Back to Top" }, ...NAV.slice(1)].map((n) => (
                  <a
                    key={n.id + n.label}
                    href={`#${n.id}`}
                    className="group flex w-fit items-center gap-2.5 text-sm font-medium text-slate-400 transition hover:text-white"
                  >
                    <ArrowRight
                      size={13}
                      className="text-neon opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                    <span className="link-line">{n.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.18}>
            <div>
              <h4 className="font-display text-[12px] font-extrabold uppercase tracking-[0.3em] text-white">
                Get In Touch
              </h4>
              <p className="mt-4 text-lg font-display font-bold text-white">{NAME}</p>
              <div className="mt-5 flex flex-col gap-4">
                {contacts.map((c) => (
                  <a key={c.label} href={c.href} className="group flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition group-hover:border-neon/50 group-hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                      <c.icon size={15} className="text-neon" />
                    </span>
                    <span className="break-all text-sm text-slate-400 transition group-hover:text-white">
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-6 py-3.5 font-display text-[12px] font-extrabold uppercase tracking-[0.18em] text-emerald-300 transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_-5px_rgba(52,211,153,0.65)]"
              >
                <MessageCircle size={15} /> Contact on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="flex items-center gap-2 text-xs tracking-wide text-slate-500">
            <Copyright size={13} className="text-neon" />
            2026 <span className="font-semibold text-slate-300">Arisha Raj</span> — All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-600">
            Designed &amp; crafted with <Heart size={12} className="fill-pulse text-pulse" /> in Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════ BACK TO TOP FAB ═══════════════════════════ */

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          aria-label="Back to top"
          className="fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-neon/40 bg-panel/90 text-neon shadow-[0_0_30px_rgba(34,211,238,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)]"
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ═════════════════════════════════ APP ═════════════════════════════════ */

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.4 });

  return (
    <div className="relative min-h-screen bg-void font-body text-slate-200">
      {/* scroll progress beam */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-neon via-plasma to-pulse shadow-[0_0_14px_rgba(139,92,246,0.9)]"
      />

      {/* ambient particle universe */}
      <Starfield />

      <Navbar />

      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Works />
        <WhyUs />
        <Testimonials />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}
