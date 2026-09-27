"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Send,
  QrCode,
  Wallet,
  Receipt,
  Smartphone,
  CreditCard,
  ShieldCheck,
  Fingerprint,
  Radio,
  Users,
  Train,
  Zap,
  RefreshCw,
  Globe,
  Gift,
  PieChart,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const TABS = [
  { id: "in-app", label: "In - App" },
  { id: "co-branded-cards", label: "Co-branded Cards" },
  { id: "solutions", label: "Solutions" },
  { id: "international", label: "International" },
];

export const ScrollPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const navRef = useRef<HTMLElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // Measures the active button's position relative to the nav container
  // so the sliding pill can be positioned with a CSS transition.
  const updateIndicator = useCallback((id: string) => {
    const btn = tabRefs.current[id];
    const nav = navRef.current;
    if (btn && nav) {
      const btnRect = btn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({ left: btnRect.left - navRect.left, width: btnRect.width });
    }
  }, []);

  useEffect(() => {
    updateIndicator(activeTab);
  }, [activeTab, updateIndicator]);

  useEffect(() => {
    const handleResize = () => updateIndicator(activeTab);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab, updateIndicator]);

  // Scroll-spy: keep the active tab in sync with whichever section is
  // actually in view, not just the last one that was clicked.
  useEffect(() => {
    const sections = TABS
      .map((tab) => document.getElementById(tab.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveTab(mostVisible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-20">

      {/* Sticky Top Scroll Navigation — offset below the main site navbar
          (assumes the fixed Navbar above is 88px tall; adjust top-[88px]
          if your navbar's height differs) so the two don't fight for the
          same sticky slot at the top of the viewport. */}
      <div className="sticky top-[88px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
          <nav
            ref={navRef}
            className="relative inline-flex p-1.5 bg-slate-100 rounded-full border border-slate-200 shadow-inner overflow-x-auto max-w-full"
          >
            {/* Sliding active-tab pill */}
            <span
              className="absolute top-1.5 bottom-1.5 rounded-full bg-purple-600 shadow-md transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
              aria-hidden="true"
            />

            {TABS.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                onClick={() => scrollToSection(tab.id)}
                aria-current={activeTab === tab.id ? "page" : undefined}
                className={`relative z-10 px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-12">

        {/* 1. IN-APP SECTION */}
        <section id="in-app" className="scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              All Your Payment Needs, One App
            </h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Everything you need for seamless everyday digital transactions
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-sm divide-y divide-slate-100 overflow-hidden">
            {[
              { icon: Send, title: "Send Money", desc: "Transfer to any UPI ID, mobile number, or bank account instantly", color: "bg-orange-500" },
              { icon: QrCode, title: "Scan & Pay", desc: "Pay at any store or business using UPI QR codes", color: "bg-purple-500" },
              { icon: Wallet, title: "Check Balance", desc: "View passbook, transaction history & account balance", color: "bg-teal-500" },
              { icon: Receipt, title: "Pay Bills", desc: "Pay electricity, water, credit card, loan EMI & utility bills with instant confirmation", color: "bg-rose-500" },
              { icon: Smartphone, title: "Recharge", desc: "Top up your mobile, DTH, FASTag, Google Play & Apple Store balance with ease", color: "bg-indigo-500" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-5 sm:p-6 flex items-start gap-4 hover:bg-slate-50/80 transition-colors duration-200"
              >
                <div
                  className={`p-3 rounded-xl text-white shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. CO-BRANDED CARDS SECTION */}
        <section id="co-branded-cards" className="scroll-mt-32 space-y-12">
          <div>
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest font-semibold text-purple-600">Cards Section</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                PhonePe Co-Branded Credit Cards
              </h2>
              <p className="text-slate-500 text-sm mt-1">Designed for India's Digital Payment Era</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SBI Card */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-white/10 text-xs rounded-full border border-white/20">SBI Card</span>
                  <h3 className="text-2xl font-bold">PhonePe SBI Card</h3>
                  <p className="text-slate-300 text-sm">Thoughtfully Crafted for India</p>

                  <ul className="space-y-2 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> UPI-first rewards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Digital activation & instant benefits</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Airport Lounge access & travel benefits</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Seamless UPI integration for RuPay Cards</li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-purple-300 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* HDFC Card */}
              <div className="bg-gradient-to-br from-purple-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-white/10 text-xs rounded-full border border-white/20">HDFC Bank</span>
                  <h3 className="text-2xl font-bold">PhonePe HDFC Bank Credit Card</h3>
                  <p className="text-slate-300 text-sm">The Best of UPI in a Credit Card</p>

                  <ul className="space-y-2 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> UPI-first rewards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Digital activation & instant benefits</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Airport Lounge access & travel benefits</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Seamless UPI integration for RuPay Cards</li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-purple-300 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* FD Backed Cards */}
          <div className="bg-purple-50/70 border border-purple-100 rounded-3xl p-6 sm:p-8 transition-shadow duration-300 hover:shadow-md">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">FD Backed Cards</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Build Your Credit Journey Securely</h3>
              <p className="text-slate-600 text-sm mt-1">Wish Card - Wish it. Get it.</p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-purple-700 font-medium text-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
              >
                <span>Explore Wish Card</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* 3. SOLUTIONS SECTION */}
        <section id="solutions" className="scroll-mt-32">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-600">Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Payment Solutions for Every Need
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Innovative features that make payments faster, smarter & more rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wallet, title: "Wallet", desc: ["Up to 2% cashback on spends", "Works on all UPI QRs", "Top up via credit/debit cards"] },
              { icon: CreditCard, title: "RuPay Credit Card on UPI", desc: ["Scan any QR to pay with credit", "Earn rewards on every transaction", "No CVV or OTP required"] },
              { icon: Fingerprint, title: "Biometric Auth", desc: ["No PIN to remember across accounts", "Verified on-device biometrics", "Switch back to UPI PIN anytime"] },
              { icon: Radio, title: "Tap And Pay", desc: ["Tap phone on any POS machine", "Works without internet", "International acceptance"] },
              { icon: Users, title: "UPI Circle", desc: ["Add up to 5 trusted users", "Set spending limits & approve payments", "Perfect for family & staff"] },
              { icon: Train, title: "NCMC", desc: ["Tap & go at metros, buses & parking", "Works offline, no network needed", "Zero-KYC cards live at metro stations"] },
              { icon: Zap, title: "UPI LITE", desc: ["One-click payments up to ₹1,000", "Works even when banks are down", "Clutter-free bank statements"] },
              { icon: RefreshCw, title: "UPI Autopay", desc: ["Auto-pay bills & subscriptions", "Pre-debit notifications", "Pause or cancel anytime"] },
              { icon: CreditCard, title: "Credit Line on UPI", desc: ["Avail through your Bank", "Link & pay anywhere with UPI"] },
              { icon: Globe, title: "NRO Payments", desc: ["Link with international number", "Pay bills in India from abroad", "Instant money transfers"] },
              { icon: Gift, title: "PhonePe Gift Card", desc: ["Send & receive digital gift cards", "Pay bills or recharge with PhonePe", "Use balance for merchant payments"] },
              { icon: PieChart, title: "Split Expense", desc: ["Create expense groups", "Share bills & receipts", "Collect money instantly"] },
            ].map((sol, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-purple-50 text-purple-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{sol.title}</h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {sol.desc.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. INTERNATIONAL SECTION */}
        <section id="international" className="scroll-mt-32">
          <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
                INTERNATIONAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                PhonePe UPI Goes Global
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Innovative features that make payments faster, smarter & more rewarding across borders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-400" />
                  Pay Internationally
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Use your PhonePe UPI in 6+ countries. Available at major tourist spots, restaurants, shopping malls & more in Singapore, UAE, Sri Lanka, Nepal, Bhutan, Mauritius, and beyond.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-purple-400" />
                  Receive Money from Abroad
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Accept instant UPI payments from abroad (such as Singapore). Share your UPI ID with family & friends overseas — money arrives directly in your bank account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TRUST, SAFETY & PULSE STATS SECTION */}
        <section className="space-y-12">
          {/* Safety Card */}
          <div className="bg-emerald-900/90 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Your money stays safe</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Trusted. Secure. Built for your Safety.</h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
                PhonePe actively partners with government law enforcement agencies including the National Cybercrime Portal, CyCord, and CyberSafe to prevent cybercrime. Every transaction is encrypted & protected.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2 bg-white/10 rounded-xl backdrop-blur-md text-xs font-semibold border border-white/20">PCI-DSS Compliant</div>
              <div className="px-4 py-2 bg-white/10 rounded-xl backdrop-blur-md text-xs font-semibold border border-white/20">ISO 27001 Certified</div>
            </div>
          </div>

          {/* Stats Bar (Pulse) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 text-purple-700 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>PhonePe Pulse Insights</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Driving India's Digital Payment Boom</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-purple-700">72+ Crore</div>
                <div className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Registered Users</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-purple-700">98%</div>
                <div className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Postal Codes Covered</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-purple-700">5+ Crore</div>
                <div className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Merchants (Stores & Apps)</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};