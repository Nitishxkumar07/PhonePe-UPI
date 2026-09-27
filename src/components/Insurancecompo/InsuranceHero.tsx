"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  HeartPulse,
  ShieldCheck,
  Car,
  Bike,
  Plane,
  Store,
  PiggyBank,
  Users,
  FileCheck,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Clock,
  BookOpen,
  HelpCircle,
  Lock,
  ArrowRight,
} from "lucide-react";

/**
 * Fades + slides content up into view the first time it scrolls into the
 * viewport. Pure CSS transitions + IntersectionObserver, no extra library.
 * Respects prefers-reduced-motion.
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

/**
 * Counts up from 0 to the numeric portion of `value` once it scrolls into
 * view (e.g. "1.6Cr+" -> animates 0.0 -> 1.6, then appends "Cr+"). Falls
 * back to rendering the raw string if no leading number is found.
 */
function AnimatedStat({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setDisplay(Number((progress * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  if (target === null) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Best-effort domain guesses for each partner's real corporate site, used
// to pull a logo from Clearbit's public logo API (logo.clearbit.com/<domain>).
// Some of these may not resolve to a perfect match — the <img> below falls
// back to the plain text name automatically if a logo fails to load, so a
// wrong guess degrades gracefully rather than showing a broken image icon.
const partnerDomains: Record<string, string> = {
  "Star Health Insurance": "starhealth.in",
  "Niva Bupa Health Insurance": "nivabupa.com",
  "Kotak General Insurance": "kotak.com",
  "Care Health Insurance": "careinsurance.com",
  "Digit Insurance": "godigit.com",
  "Tata AIA Life Insurance": "tataaia.com",
  "ICICI Lombard": "icicilombard.com",
  "Aditya Birla Health": "adityabirlacapital.com",
  "HDFC Ergo": "hdfcergo.com",
  "Max Life": "maxlifeinsurance.com",
  "ICICI Prudential": "iciciprulife.com",
  "HDFC Life": "hdfclife.com",
  "Kotak Life": "kotaklife.com",
  "Pnb Metlife": "pnbmetlife.com",
  "SBI Life": "sbilife.co.in",
  "Aviva Life Insurance": "avivaindia.com",
  "Bajaj Allianz": "bajajallianz.com",
  "Ageas Federal": "ageasfederal.com",
  "TATA AIG": "tataaig.com",
  "Zuno": "zuno.co",
  "Oriental Insurance": "orientalinsurance.org.in",
  "Reliance General Insurance": "reliancegeneral.co.in",
  "National Insurance": "nationalinsuranceindia.nic.in",
  "New India Assurance": "newindia.co.in",
  "United India": "uiic.co.in",
  "SBI General Insurance": "sbigeneral.in",
  "Future Generali": "futuregenerali.in",
  "Royal Sundaram General Insurance": "royalsundaram.in",
  "Magma HDI General Insurance": "magmahdi.com",
  "Iffco Tokio General Insurance": "iffcotokio.co.in",
  "Acko": "acko.com",
};

export const InsuranceHome: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const insuranceCards = [
    {
      id: "health",
      title: "Health Insurance",
      desc: "Comprehensive health insurance offers peace of mind during medical emergencies by providing financial assistance.",
      icon: HeartPulse,
      badgeColor: "bg-emerald-500",
      borderColor: "hover:border-emerald-500/50",
      bgColor: "hover:bg-emerald-50/30",
    },
    {
      id: "life",
      title: "Term Life Insurance",
      desc: "Term life insurance provides financial security to your loved ones in the event of your absence.",
      icon: ShieldCheck,
      badgeColor: "bg-purple-600",
      borderColor: "hover:border-purple-500/50",
      bgColor: "hover:bg-purple-50/30",
    },
    {
      id: "car",
      title: "Car Insurance",
      desc: "Car insurance offers financial protection in case your vehicle incurs damages from unexpected events.",
      icon: Car,
      badgeColor: "bg-blue-500",
      borderColor: "hover:border-blue-500/50",
      bgColor: "hover:bg-blue-50/30",
    },
    {
      id: "bike",
      title: "Bike Insurance",
      desc: "Bike insurance protects you from financial losses caused by unexpected damage to your two-wheeler.",
      icon: Bike,
      badgeColor: "bg-indigo-500",
      borderColor: "hover:border-indigo-500/50",
      bgColor: "hover:bg-indigo-50/30",
    },
    {
      id: "travel",
      title: "Travel Insurance",
      desc: "Travel insurance acts as a safety net during your trips, providing protection against unexpected mishaps.",
      icon: Plane,
      badgeColor: "bg-sky-500",
      borderColor: "hover:border-sky-500/50",
      bgColor: "hover:bg-sky-50/30",
    },
    {
      id: "shop",
      title: "Shop Insurance",
      desc: "Shop insurance protects your store's goods against various risks, including theft, natural disasters, and other unforeseen events.",
      icon: Store,
      badgeColor: "bg-amber-500",
      borderColor: "hover:border-amber-500/50",
      bgColor: "hover:bg-amber-50/30",
    },
  ];

  const testimonials = [
    { name: "Subodh", review: "I purchased car insurance from PhonePe. Thank You Shubham from PhonePe for helping me step by step in buying car insurance." },
    { name: "Gopal", review: "I had third-party bike insurance plan and wanted to buy comprehensive plan. I got it conveniently on PhonePe and did not get any spam calls." },
    { name: "Nitesh Deotale", review: "I purchased 4 policies from PhonePe- Bike, Car, Term Plan and health insurance. I am using PhonePe since long and hence I trust PhonePe." },
    { name: "Venkatesh", review: "PhonePe is a very easy to access and secured platform to purchase insurance plan. I liked user friendly and hassle free process." },
    { name: "Dinesh Kumar Yadav", review: "I got health plan at the discounted price on PhonePe. I received my policy receipt and document instantly. Overall, PhonePe provided very good service." },
    { name: "Divya Harwani", review: "Purchased Term plan & health insurance safely and in a few clicks from PhonePe. Communication was also very transparent and easy to understand." },
  ];

  // Expanded from 5 to 10 so the new "See More" toggle has real additional
  // content to reveal instead of just repeating the same 5 items.
  const blogs = [
    { category: "Bike Insurance Basics", title: "Third-Party Bike Insurance Is A Must For You To Ride", author: "Zeba Iqbal", readTime: "3 min read", date: "Jun 05, 2024" },
    { category: "How Tos", title: "Decoding IDV In Bike Insurance For Your Old Bike", author: "Zeba Iqbal", readTime: "2 min read", date: "Jun 05, 2024" },
    { category: "Car Insurance Basics", title: "Renew Your Expired Car Insurance: Complete Guide", author: "Sampurna Mitra", readTime: "3 min read", date: "Jun 05, 2024" },
    { category: "Features & Coverages", title: "Benefits Of Roadside Assistance in Car-Insurance", author: "Zeba Iqbal", readTime: "3 min read", date: "Jun 05, 2024" },
    { category: "Features & Coverages", title: "Zero Depreciation: Car Insurance Add-on", author: "Zeba Iqbal", readTime: "3 min read", date: "May 28, 2024" },
    { category: "Health Insurance Basics", title: "Cashless Vs Reimbursement Claims: What's The Difference?", author: "Sampurna Mitra", readTime: "4 min read", date: "May 20, 2024" },
    { category: "How Tos", title: "How To Choose The Right Sum Insured For Your Family", author: "Zeba Iqbal", readTime: "3 min read", date: "May 14, 2024" },
    { category: "Term Insurance", title: "Why Buying Term Insurance Early Makes Financial Sense", author: "Sampurna Mitra", readTime: "3 min read", date: "May 08, 2024" },
    { category: "Travel Insurance", title: "What Your Travel Insurance Actually Covers Abroad", author: "Zeba Iqbal", readTime: "2 min read", date: "Apr 30, 2024" },
    { category: "Features & Coverages", title: "No Claim Bonus: How It Lowers Your Renewal Premium", author: "Sampurna Mitra", readTime: "3 min read", date: "Apr 22, 2024" },
  ];

  const faqs = [
    { q: "Is it safe to purchase insurance online?", a: "Yes, purchasing insurance on PhonePe is completely safe. PhonePe Insurance Broking Services Private Limited is regulated by IRDAI and uses advanced bank-grade security encryption." },
    { q: "Does PhonePe assist in purchasing insurance?", a: "Yes, PhonePe offers an intuitive 100% digital platform along with step-by-step guidance and 24x7 claim assistance to help you choose and manage your policies." },
    { q: "Which insurance policies can I buy from PhonePe?", a: "You can buy Health Insurance, Term Life Insurance, Car Insurance, Bike Insurance, Travel Insurance, International Travel Insurance, Personal Accident Insurance, and Shop Insurance." },
    { q: "What is the meaning of insurance?", a: "Insurance is a financial contract that safeguards you and your assets against financial loss resulting from unexpected events, accidents, illnesses, or emergencies." },
  ];

  const partners = [
    "Star Health Insurance", "Niva Bupa Health Insurance", "Kotak General Insurance", "Care Health Insurance",
    "Digit Insurance", "Tata AIA Life Insurance", "ICICI Lombard", "Aditya Birla Health", "HDFC Ergo",
    "Max Life", "ICICI Prudential", "HDFC Life", "Kotak Life", "Pnb Metlife", "SBI Life", "Aviva Life Insurance",
    "Bajaj Allianz", "Ageas Federal", "TATA AIG", "Zuno", "Oriental Insurance", "Reliance General Insurance",
    "National Insurance", "New India Assurance", "United India", "SBI General Insurance", "Future Generali",
    "Royal Sundaram General Insurance", "Magma HDI General Insurance", "Iffco Tokio General Insurance", "Acko",
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased relative selection:bg-purple-500 selection:text-white">

      {/* Floating Need Help Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button type="button" className="flex items-center gap-2.5 bg-purple-950 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-purple-900 transition-all duration-300 hover:scale-105 active:scale-95 border border-purple-700/50 group">
          <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-sm">Need help ?</span>
        </button>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/80 via-white to-slate-50/50 py-16 lg:py-24">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-purple-200/30 via-indigo-100/30 to-pink-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />

        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide border border-purple-200 shadow-sm">
            <Lock className="w-3.5 h-3.5" />
            Get Insurance
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Insurance made <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 bg-clip-text text-transparent">
              simple with PhonePe
            </span>
          </h1>

          <p className="text-slate-600 font-medium text-base sm:text-xl max-w-xl mx-auto">
            A guide to navigating your insurance journey!
          </p>
        </Reveal>

        {/* Insurance Category Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {insuranceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.id} delay={idx * 80}>
                  <div
                    className={`group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden h-full ${card.borderColor} ${card.bgColor}`}
                  >
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl ${card.badgeColor} text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors flex items-center gap-1">
                          Explore <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                        {card.title}
                      </h2>

                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>

                    {/* Decorative Subtle Corner Gradient Accent */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100/40 rounded-full blur-xl group-hover:bg-purple-200/60 transition-all duration-500 pointer-events-none" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section: Is insurance necessary? */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Is insurance necessary? <br />
              <span className="text-purple-700">Definitely, yes!</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Insurance is a key part of your financial plan. By getting coverage, you shield yourself from multiple financial uncertainties, allowing you to pursue your investment and savings goals with peace of mind.
            </p>
            <p className="text-xs font-bold text-purple-800 uppercase tracking-widest pt-2">
              Here are the 4 key benefits:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PiggyBank, title: "Protect your savings", desc: "Insurance helps protect your savings by shielding you from unexpected financial expenses.", color: "text-amber-600 bg-amber-50" },
              { icon: Users, title: "Secure your family's future", desc: "Insurance offers financial security and peace of mind, ensuring that your family is protected in times of need.", color: "text-purple-600 bg-purple-50" },
              { icon: ShieldCheck, title: "Save tax", desc: "Insurance helps save taxes by offering exemptions and deductions, maximising your savings & ensuring financial stability.", color: "text-emerald-600 bg-emerald-50" },
              { icon: FileCheck, title: "Offers legal protection", desc: "Sometimes, it's a law to have active insurance products like bike or car insurance to avoid traffic challans.", color: "text-blue-600 bg-blue-50" },
            ].map((benefit, idx) => {
              const BIcon = benefit.icon;
              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/70 hover:bg-white hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between group h-full">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-2xl ${benefit.color} flex items-center justify-center font-bold`}>
                        <BIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-800 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                        "{benefit.desc}"
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5-Step Journey Guide Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                EASY STEPS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Set off on your Insurance journey with confidence!
              </h2>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-300">Download the App</p>
                <p className="text-xs text-purple-300 font-bold">Scan QR or Get Link</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: "1", title: "Research your plan options", desc: "Make an informed decision for the policy you want to purchase." },
              { num: "2", title: "Know your insurers", desc: "Compare insurance providers based on claim settlement ratio & past records." },
              { num: "3", title: "Understand the claim process", desc: "Know more about the hassle-free and seamless claims processing process." },
              { num: "4", title: "Avoid mistakes", desc: "Ensure that you are neither overinsured nor underinsured." },
              { num: "5", title: "Get 24x7 claim assistance", desc: "Access round-the-clock assistance with any purchase or claims-related issues." },
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 90}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* PhonePe Stats Counter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Trust PhonePe for your Insurance needs!
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <Reveal delay={0} className="pt-6 md:pt-0 space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-purple-300">
                <AnimatedStat value="1.6Cr+" />
              </div>
              <p className="text-slate-300 text-sm font-medium">Insurance policies purchased so far</p>
            </Reveal>

            <Reveal delay={100} className="pt-6 md:pt-0 space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-purple-300">
                <AnimatedStat value="29+" />
              </div>
              <p className="text-slate-300 text-sm font-medium">Insurers on our platform offering a range of policies</p>
            </Reveal>

            <Reveal delay={200} className="pt-6 md:pt-0 space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-purple-300">
                <AnimatedStat value="100% Digital" />
              </div>
              <p className="text-slate-300 text-sm font-medium">Hassle-free online processes</p>
            </Reveal>
          </div>

          <p className="text-center text-xs text-slate-400 italic mt-10">
            *Note: All numbers are as of 31st March 2025.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">TESTIMONIALS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                What our users are saying about us!
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>

          {/* Carousel Cards — keyed by activeTestimonial so the whole row
              re-animates in with a fade + slide every time you navigate */}
          <div key={activeTestimonial} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {[0, 1, 2].map((offset) => {
              const index = (activeTestimonial + offset) % testimonials.length;
              const item = testimonials[index];
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    "{item.review}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <span className="font-bold text-slate-900 text-base">{item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Insurance Partners Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Partners</h2>
            <p className="text-slate-500 text-sm mt-1">Leading insurance providers trusted across India</p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((partner, idx) => (
              <Reveal key={partner} delay={(idx % 6) * 60}>
                <div className="group p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-purple-300 hover:bg-white transition-all duration-300 text-center flex items-center justify-center h-20 shadow-sm">
                  <img
                    src={`https://logo.clearbit.com/${partnerDomains[partner] ?? ""}`}
                    alt={`${partner} logo`}
                    loading="lazy"
                    className="max-h-10 max-w-[85%] object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.classList.remove("hidden");
                    }}
                  />
                  <span className="hidden text-xs font-semibold text-slate-700">{partner}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            Logos are pulled automatically from partner domains — a few may not resolve perfectly and will show the partner name instead.
          </p>

        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-slate-50" id="blogs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase tracking-widest">
                <BookOpen className="w-3.5 h-3.5" />
                INSIGHTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Latest blogs</h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveBlogIndex((prev) => (prev > 0 ? prev - 1 : blogs.length - 1))}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="Previous blog"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveBlogIndex((prev) => (prev + 1) % blogs.length)}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="Next blog"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>

          {/* Featured carousel of 3 — re-animates on navigation */}
          <div key={activeBlogIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {[0, 1, 2].map((offset) => {
              const bIdx = (activeBlogIndex + offset) % blogs.length;
              const blog = blogs[bIdx];
              return (
                <div
                  key={bIdx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      {blog.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-800 transition-colors">
                      {blog.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">{blog.author}</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* "See More" now actually does something: reveals the full
              blog list (10 posts) in a grid below, and toggles back. */}
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setShowAllBlogs((prev) => !prev)}
              aria-expanded={showAllBlogs}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-purple-200 text-purple-800 font-bold hover:bg-purple-50 transition-colors shadow-sm"
            >
              {showAllBlogs ? "Show Less" : "See More"}
              {showAllBlogs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showAllBlogs && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-in fade-in slide-in-from-top-2 duration-500">
              {blogs.map((blog, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      {blog.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-800 transition-colors">
                      {blog.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">{blog.author}</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-12">
            <h2 className="inline-flex items-center gap-2 text-3xl font-extrabold text-slate-900">
              <HelpCircle className="w-7 h-7 text-purple-600" />
              FAQs
            </h2>
            <p className="text-slate-500 text-sm mt-1">Got questions? We've got answers.</p>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-purple-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 bg-purple-50/20 animate-in fade-in slide-in-from-top-1 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Disclaimer & Registration Text */}
      <section className="py-10 bg-slate-100 text-slate-600 text-xs border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 text-center sm:text-left">
          <p>
            PhonePe Insurance Broking Services Private Limited. IRDAI Direct Broker (Life & General) Reg. 766 and Broker Registration Code IRDA/DB 822/20 Valid till 10/08/2027.
          </p>
          <p>
            Regd. office - Office-2, Floor 4,5,6,7, Wing A, Block A,Salarpuria Softzone, Service Road, Green Glen Layout, Bellandur, Bengaluru, Karnataka-KA, Pin- 560103
          </p>
          <p>
            CIN : U66000KA2020FTC132814
          </p>
          <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-4 font-semibold text-slate-700">
            <a href="#terms" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#grievance" className="hover:underline">Grievance Policy</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InsuranceHome;