"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  Target,
  MousePointer,
  FileText,
  PieChart,
  Download,
  ArrowRight,
  Lock,
  Scale,
} from "lucide-react";

/**
 * Fades + slides content up into view the first time it scrolls into the
 * viewport. Pure CSS transitions + IntersectionObserver — no animation
 * library required. Respects prefers-reduced-motion.
 */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const journeySteps = [
  {
    icon: Target,
    title: "Set Your Goal",
    desc: "Tell us what you're investing for — retirement, a home, or your child's education.",
  },
  {
    icon: PieChart,
    title: "Find Your Fit",
    desc: "We match you to funds based on your risk appetite, timeline, and investment size.",
  },
  {
    icon: TrendingUp,
    title: "Grow Steadily",
    desc: "Track performance in real time and let your money compound over the long run.",
  },
];

const fundTypes = [
  {
    icon: TrendingUp,
    title: "Equity Funds",
    desc: "High growth products curated as per your risk appetite",
    accent: "from-purple-500 to-purple-700",
  },
  {
    icon: Lock,
    title: "Debt Funds",
    desc: "Get stable returns without any lock-in period",
    accent: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Scale,
    title: "Hybrid Funds",
    desc: "Get a balance of growth and stability for your investment",
    accent: "from-fuchsia-500 to-purple-700",
  },
];

const whyInvest = [
  { icon: ShieldCheck, title: "Trust", desc: "Over 72+ Crore registered users" },
  { icon: PieChart, title: "Investment Solutions", desc: "Expert investment solutions offered by trusted industry partners" },
  { icon: Target, title: "Achieve your goals", desc: "Get expert help to achieve your goals" },
  { icon: MousePointer, title: "Invest with a few clicks", desc: "Invest in a few clicks with digital KYC" },
  { icon: FileText, title: "No paperwork", desc: "No paperwork required" },
  { icon: TrendingUp, title: "Track investments", desc: "Track all your investments in one place" },
];

export const PhonePeInvestmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-white py-16 lg:py-28">
        {/* Ambient glow accents */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted by 72+ Crore users
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              The right{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Mutual Fund Solutions
              </span>{" "}
              for you
            </h1>

            <p className="text-lg sm:text-xl text-slate-600">
              Manage & grow your wealth with expert help — right from the app you already use every day.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white font-bold rounded-full shadow-lg shadow-purple-600/20 transition-all hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5"
              >
                Invest Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                className="px-8 py-3.5 bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-bold rounded-full shadow-sm transition-all hover:-translate-y-0.5"
              >
                Try SIP Calculator
              </button>
            </div>
          </Reveal>

          {/* Hero Illustration */}
          <Reveal delay={150} className="relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-purple-100 bg-gradient-to-tr from-purple-100 to-indigo-50 p-6 shadow-xl">
              <img
                src="https://www.phonepe.com/webstatic/15016/static/8470cfd6cd867c1ebeb64ed00084ff4b/063af/investment-desktop.png"
                alt="Preview of the PhonePe mutual fund investment dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INVESTMENT JOURNEY ================= */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-600">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Your investment journey, simplified
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Three simple steps to start building wealth that lasts.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200" />

            {journeySteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 120} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/20">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-xs mx-auto">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FUND TYPES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-600">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Build a strong investment portfolio
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              With a variety of products, you can invest and manage your wealth in one place on PhonePe.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {fundTypes.map((fund, idx) => (
              <Reveal key={fund.title} delay={idx * 120}>
                <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center space-y-4 h-full">
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${fund.accent} text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    <fund.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{fund.title}</h3>
                  <p className="text-slate-600 text-sm">{fund.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY INVEST ================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-600">Why PhonePe</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Why invest on PhonePe?
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyInvest.map((item, idx) => (
              <Reveal key={item.title} delay={(idx % 3) * 100}>
                <div className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md space-y-2 h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-2">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD CTA ================= */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white text-center">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <Reveal className="relative max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Download the PhonePe App</h2>
          <p className="text-purple-100/80 text-sm sm:text-base max-w-xl mx-auto">
            Start investing in mutual funds in minutes — no paperwork, no branch visits.
          </p>
          <button
            type="button"
            className="group px-8 py-3.5 bg-white text-purple-900 font-bold rounded-full shadow-lg hover:bg-purple-50 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Now</span>
          </button>
        </Reveal>
      </section>


    </div>
  );
};

export default PhonePeInvestmentPage;