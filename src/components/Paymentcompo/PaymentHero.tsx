"use client"

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  ArrowRight, 
  Send, 
  QrCode, 
  CreditCard, 
  Receipt, 
  Lock,
  ChevronRight
} from 'lucide-react';

export const PaymentHero: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // Rotating features displayed in the dynamic interactive band
  const features = [
    { title: "UPI Circle", desc: "Delegate payments with full control", color: "from-purple-600 to-indigo-600" },
    { title: "Biometric Auth", desc: "Lightning-fast small payments without PIN", color: "from-blue-600 to-cyan-600" },
    { title: "NRO Payments", desc: "Instant UPI transfers for NRIs", color: "from-emerald-600 to-teal-600" },
    { title: "UPI Lite", desc: "PIN-less payments up to ₹1,000", color: "from-amber-500 to-orange-600" },
    { title: "RuPay on UPI", desc: "Use credit cards seamlessly across all QRs", color: "from-fuchsia-600 to-pink-600" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-white py-16 sm:py-24">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-purple-200/40 via-indigo-100/30 to-pink-100/40 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs sm:text-sm font-medium border border-purple-200/60 shadow-sm">
            <Lock className="w-3.5 h-3.5" />
            <span>India's Most Trusted Digital Payment Brand</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Payments on PhonePe are <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
              Simple, Secure & Reliable
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Transfer money, scan & pay anywhere, check balance & manage all your payment needs seamlessly with 24x7 instant reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all duration-200 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
              <span>Download App</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm transition-all duration-200 flex items-center justify-center gap-2">
              <span>Explore Features</span>
            </button>
          </div>
        </div>

        {/* Video Showcase Section - Responsive & Framed */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto px-2 sm:px-0">
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-200/80 bg-slate-900">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source 
                src="https://www.phonepe.com/webstatic/15016/static/PPPaymentsBannerVideoDesktop-452192a0eb0f21039fc30c01917ff276.webm" 
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Dynamic Interactive Banner Section */}
        <div className="mt-10 sm:mt-14 relative max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 text-white shadow-2xl transition-all duration-700 overflow-hidden bg-slate-900">
            {/* Background dynamic gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeatureIndex].color} opacity-90 transition-opacity duration-700`} />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80">Featured Solution</span>
                <h3 className="text-2xl sm:text-3xl font-bold">{features[activeFeatureIndex].title}</h3>
                <p className="text-white/90 text-sm sm:text-base">{features[activeFeatureIndex].desc}</p>
              </div>

              {/* Indicator Controls */}
              <div className="flex gap-2">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeatureIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeFeatureIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Payment Action Highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Send, label: 'Send Money', desc: 'To any UPI ID or phone' },
            { icon: QrCode, label: 'Scan & Pay', desc: 'At 5+ crore stores' },
            { icon: Receipt, label: 'Pay Bills', desc: 'Utility, DTH & recharge' },
            { icon: CreditCard, label: 'RuPay Credit', desc: 'Link cards to UPI' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col items-start gap-3 group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm sm:text-base flex items-center gap-1">
                  {item.label}
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Pillars / Trust Badges */}
        <div className="mt-16 pt-12 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900">Safe & Secure</h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs">
              Advanced security infrastructure & UPI PIN protection on every transaction.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900">Instant Transfers</h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs">
              24x7 instant transfers even on bank holidays and peak hours.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-1">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900">All-in-One Platform</h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs">
              From scanning QRs and paying bills to credit cards and international UPI.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentHero;