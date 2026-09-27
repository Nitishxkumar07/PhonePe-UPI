"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    ShieldCheck,
    Clock,
    Smartphone,
    TrendingUp,
    Building2,
    CheckCircle2,
    MessageCircle,
    ArrowRight,
    Sparkles,
    ChevronDown,
    Calculator,
    ChevronRight
} from 'lucide-react';

export const LendingPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'personal' | 'merchant'>('personal');

    // Calculator State
    const [loanAmount, setLoanAmount] = useState<number>(200000);
    const [tenureMonths, setTenureMonths] = useState<number>(24);

    // Interest rate varies by loan category
    const interestRate = activeTab === 'merchant' ? 12.5 : 11.5;

    // EMI Calculation Formula
    const calculateEMI = () => {
        const r = interestRate / 12 / 100;
        const emi = (loanAmount * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
        return Math.round(emi);
    };

    const loanCategories = [
        {
            id: 'personal',
            title: 'Personal Loans',
            tag: 'SIMPLIFIED WITH PHONEPE',
            desc: 'Life is too short to live paycheck to paycheck. Apply for a personal loan to meet all your expenses, whether planned or unexpected.',
            icon: Zap,
            badgeColor: 'bg-purple-600',
            borderColor: 'hover:border-purple-500/50',
            bgColor: 'hover:bg-purple-50/30'
        },
        {
            id: 'merchant',
            title: 'Merchant Loans',
            tag: 'HELP YOUR BUSINESS THRIVE',
            desc: 'Empower your business with quick & flexible loans, tailored to meet unique challenges & cash flow requirements.',
            icon: Building2,
            badgeColor: 'bg-emerald-600',
            borderColor: 'hover:border-emerald-500/50',
            bgColor: 'hover:bg-emerald-50/30'
        },
        {
            id: 'secured',
            title: 'Secured Lending',
            tag: 'SIMPLIFIED WITH PHONEPE',
            desc: 'Keep your investments intact while accessing the funds you need. Pledge your mutual funds or gold for quick liquidity.',
            icon: ShieldCheck,
            badgeColor: 'bg-blue-600',
            borderColor: 'hover:border-blue-500/50',
            bgColor: 'hover:bg-blue-50/30'
        }
    ];

    const steps = [
        { num: '1', title: 'Choose Your Loan', desc: 'Select the loan type & amount that perfectly aligns with your personal or business needs.' },
        { num: '2', title: 'Enter Your Information', desc: 'Fill in basic details in minutes through our seamless digital form.' },
        { num: '3', title: 'Complete KYC Digitally', desc: 'Paperless digital KYC verification for instant pre-approval processing.' },
        { num: '4', title: 'Set Up Repayment', desc: 'Schedule hassle-free automated payments using UPI Autopay or eNACH.' }
    ];

    const personalLoanFeatures = [
        { title: 'Instant Loan Disbursal', desc: 'Access your funds in near real-time disbursed directly into your bank account.' },
        { title: 'Pre-Approved Loans', desc: 'Experience the convenience of pre-approval for faster loan processing.' },
        { title: 'Competitive Interest Rates', desc: 'Enjoy attractive interest rates tailored to match your financial needs.' },
        { title: 'Straightforward Closure', desc: 'Foreclose your loan easily without complicated procedures.' },
        { title: 'Access Anytime, Anywhere', desc: 'Avail & manage your loan 24/7 at your convenience through the PhonePe app.' },
        { title: 'Total Control Over Your Loan', desc: 'View statement of accounts and repayment schedules directly in the app.' }
    ];

    const merchantLoanFeatures = [
        { title: 'Quick Loan Disbursal', desc: 'Access funds in near real-time directly into your business bank account.' },
        { title: 'Flexible Use of Funds', desc: 'Freedom to use funds as you see fit for business growth and daily operations.' },
        { title: 'Affordable Interest Rates', desc: 'Tailored interest rates designed to fit your business’s financial situation.' },
        { title: 'No Foreclosure Charges', desc: 'Flexibility to repay your business loan early without paying any extra charges.' },
        { title: 'Daily Repayment Options', desc: 'Conveniently pay back your loan through small, hassle-free daily installments.' },
        { title: 'Collateral-Free Loans', desc: 'Grow your business without putting assets on the line. No collateral required.' }
    ];

    const creditScoreFeatures = [
        { title: 'Free Credit Reports', desc: 'Get regular, complimentary updates on your credit score and bureau reports.' },
        { title: 'Detailed Credit Insights', desc: 'Gain key understanding of factors affecting your score like payment history & utilization.' },
        { title: 'Credit Score Improvement', desc: 'Receive assistance in rectifying inaccuracies & discover strategies to boost your score.' },
        { title: 'No Credit Score Impact', desc: 'Checking your credit score on PhonePe will never negatively impact your score.' }
    ];

    const faqs = [
        { q: 'Does PhonePe issue loans directly?', a: 'No, PhonePe does not issue loans directly. All loans are offered by registered RBI-regulated lending partners through the PhonePe platform.' },
        { q: 'Will checking my credit score on PhonePe affect my score?', a: 'No. Checking your credit score on PhonePe is considered a soft inquiry and will NOT negatively impact your credit score.' },
        { q: 'How is the loan disbursed?', a: 'Once approved, the loan amount is disbursed directly into your linked bank account in near real-time.' },
        { q: 'What repayment options are available?', a: 'You can set up convenient auto-debits via UPI Autopay or eNACH, or choose daily installment deductions for merchant loans.' }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased relative selection:bg-purple-600 selection:text-white">

            {/* Floating Support Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <button className="flex items-center gap-2.5 bg-purple-950 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-purple-900 transition-all duration-300 hover:scale-105 active:scale-95 border border-purple-700/50 group cursor-pointer">
                    <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-sm">Need Help?</span>
                </button>
            </motion.div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/80 via-white to-slate-50/50 py-16 lg:py-24">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-purple-200/30 via-indigo-100/30 to-pink-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide border border-purple-200 shadow-xs">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                            <span>PhonePe Lending</span>
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
                    >
                        Empowering Your <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 bg-clip-text text-transparent">
                            Financial Freedom
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 font-medium text-base sm:text-xl max-w-xl mx-auto"
                    >
                        Easy & Fast, Multi-purpose Loans for your personal & business needs.
                    </motion.p>
                </div>

                {/* Core Category Cards with Scroll Reveal */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {loanCategories.map((card, idx) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => setActiveTab(card.id as 'personal' | 'merchant')}
                                    className={`group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${card.borderColor} ${card.bgColor}`}
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

                                        <span className="text-[10px] uppercase tracking-widest font-extrabold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 inline-block">
                                            {card.tag}
                                        </span>

                                        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                                            {card.title}
                                        </h2>

                                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                                            {card.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Interactive Loan Calculator Section */}
            <section className="py-16 bg-gradient-to-b from-slate-50 to-purple-50/40 border-y border-slate-200/60">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 space-y-2">
                        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold tracking-wide border border-purple-200">
                            INTERACTIVE TOOL
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
                            <Calculator className="w-7 h-7 text-purple-600" />
                            Calculate Your Loan EMI
                        </h2>
                        <p className="text-slate-600 text-sm">Plan your finances before applying with instant calculations.</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                    >
                        {/* Inputs */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Select Loan Category</label>
                                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl">
                                    <button
                                        onClick={() => setActiveTab('personal')}
                                        className={`py-2 text-sm font-bold rounded-xl transition-all ${activeTab === 'personal' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
                                    >
                                        Personal Loan
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('merchant')}
                                        className={`py-2 text-sm font-bold rounded-xl transition-all ${activeTab === 'merchant' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
                                    >
                                        Merchant Loan
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold text-slate-700">Loan Amount</span>
                                    <span className="text-base font-extrabold text-purple-700">₹{loanAmount.toLocaleString('en-IN')}</span>
                                </div>
                                <input
                                    type="range"
                                    min="10000"
                                    max="1000000"
                                    step="10000"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold text-slate-700">Tenure</span>
                                    <span className="text-base font-extrabold text-purple-700">{tenureMonths} Months</span>
                                </div>
                                <input
                                    type="range"
                                    min="6"
                                    max="60"
                                    step="6"
                                    value={tenureMonths}
                                    onChange={(e) => setTenureMonths(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                />
                            </div>
                        </div>

                        {/* Repayment Breakdown */}
                        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden">
                            <div className="space-y-1 relative z-10">
                                <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">Estimated Monthly EMI</span>
                                <div className="text-4xl sm:text-5xl font-black text-white">
                                    ₹{calculateEMI().toLocaleString('en-IN')}
                                    <span className="text-sm font-normal text-purple-300">/mo</span>
                                </div>
                            </div>

                            <div className="space-y-2 pt-4 border-t border-purple-800/80 text-xs text-purple-200 relative z-10">
                                <div className="flex justify-between">
                                    <span>Interest Rate</span>
                                    <span className="font-bold text-white">~{interestRate}% p.a.</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Total Amount Payable</span>
                                    <span className="font-bold text-white">₹{(calculateEMI() * tenureMonths).toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            <button className="w-full py-3.5 bg-purple-500 hover:bg-purple-400 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 relative z-10 cursor-pointer">
                                <span>Apply For Loan</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4 Simple Steps to Get Started */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                            EASY APPLICATION
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            4 Simple Steps to Get Started
                        </h2>
                        <p className="text-slate-400 text-sm">Fast, digital, and designed for convenience</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group"
                            >
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Loans & Visual Mockup Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">CONSUMER LENDING</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Why choose PhonePe Personal Loans?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Left Column - Features */}
                        <div className="space-y-6">
                            {personalLoanFeatures.slice(0, 3).map((feat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-purple-50/40 transition-colors"
                                >
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">{feat.title}</h3>
                                    <p className="text-slate-600 text-xs sm:text-sm">{feat.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center Column - Visual Banner Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group h-full min-h-[360px] flex items-end p-8 text-white bg-slate-900"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
                                alt="Personal Finance"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="relative z-10 space-y-2">
                                <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-bold rounded-full uppercase">Instant Approval</span>
                                <h3 className="text-2xl font-bold">Paperless & 100% Digital</h3>
                                <p className="text-xs text-slate-200">Get personal loans up to ₹5,00,000 instantly transferred to your bank account.</p>
                            </div>
                        </motion.div>

                        {/* Right Column - Features */}
                        <div className="space-y-6">
                            {personalLoanFeatures.slice(3, 6).map((feat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-purple-50/40 transition-colors"
                                >
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">{feat.title}</h3>
                                    <p className="text-slate-600 text-xs sm:text-sm">{feat.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section with Animated Accordions */}
            <section className="py-20 bg-slate-50/50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">FAQs</h2>
                        <p className="text-slate-500 text-sm mt-1">Frequently asked questions about PhonePe Lending</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    <span className="text-base sm:text-lg">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-purple-700 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 bg-purple-50/20">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <section className="py-10 bg-slate-100 text-slate-600 text-xs border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 text-center sm:text-left">
                    <p className="font-bold text-slate-800">
                        PhonePe Lending Services Private Limited
                    </p>
                    <p className="text-slate-500">
                        Office-2, Floor 4,5,6,7, Wing A, Block A, Salarpuria Softzone, Service Road, Green Glen Layout, Bellandur, Bangalore South, Bangalore, Karnataka 560103, India
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-4 font-semibold text-slate-700">
                        <a href="#terms" className="hover:underline">Terms & Conditions</a>
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

export default LendingPage;