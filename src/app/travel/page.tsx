"use client"
import React, { useState } from 'react';
import { 
  Bus, 
  Plane, 
  Train, 
  Hotel, 
  TrainTrack, 
  CreditCard, 
  Wrench, 
  Car, 
  ChevronDown, 
  ChevronUp, 
  Play, 
  Smartphone,
  ShieldCheck,
  Zap,
  Tag
} from 'lucide-react';

export default function TravelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const travelServices = [
    { title: 'Buses', desc: 'Find and book reliable buses with ease.', icon: Bus },
    { title: 'Flights', desc: 'Great flight deals for your next adventure!', icon: Plane },
    { title: 'Trains', desc: 'Quick and convenient train bookings.', icon: Train },
    { title: 'Hotels', desc: 'Book cozy stays with exclusive offers.', icon: Hotel },
  ];

  const commuteServices = [
    { title: 'Metros', desc: 'Book metro tickets in seconds, fast, easy and without hassle.', icon: TrainTrack },
    { title: 'FASTags', desc: 'Easily manage your FASTag balance and payments directly.', icon: CreditCard },
    { title: 'Roadside Assistance', desc: 'Travel with peace of mind knowing help is just a tap away.', icon: Wrench },
    { title: 'Cabs', desc: 'Reliable rides at your fingertips for stress-free journeys.', icon: Car },
  ];

  const faqs = [
    {
      question: 'Why should I use Travel & Commute on PhonePe?',
      answer: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Hassle-free and secure login</strong> – No separate accounts needed. Log in seamlessly with single-tap authentication using your phone number and email.</li>
          <li><strong>Seamless payments</strong> – Pay conveniently via UPI, Debit/Credit cards, Gift Cards, or Wallet.</li>
          <li><strong>Offers and cashback</strong> – Maximize savings with exclusive merchant discounts and instant cashbacks.</li>
        </ul>
      )
    },
    {
      question: 'How do I use Travel/Commute on PhonePe?',
      answer: 'Simply open the PhonePe app, navigate to the "Switch" or "Travel & Commute" section, select your required service (Flights, Buses, Trains, Metros, etc.), enter your trip details, and pay securely in one click.'
    },
    {
      question: 'How do I book a Metro ticket or recharge my Metro Smart Card on PhonePe?',
      answer: 'Go to the Commute section, select your local Metro network, choose "Book Ticket" or "Recharge Smart Card", enter your card details/route, and complete the payment.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-950 leading-tight">
              Seamless Travel & Commute Solutions with PhonePe!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need is just a tap away. Download the PhonePe app now!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs uppercase">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs uppercase">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Hero Media Block (Video / Visual Preview) */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-md aspect-[9/16] max-h-[500px] bg-purple-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-white relative group">
              {/* HTML5 Video Showcase */}
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
                poster="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
              >
                <source src="https://www.phonepe.com/webstatic/15016/videos/travel-and-transit/travel-needs-video-v4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-800 uppercase">Live Demo Video</span>
                </div>
                <Play className="w-4 h-4 text-purple-600 fill-purple-600" />
              </div>

              {/* Bottom Feature Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-purple-900/90 backdrop-blur-md text-white rounded-xl p-4 shadow-lg border border-purple-500/30">
                <p className="text-xs font-semibold text-purple-200">PhonePe Travel Hub</p>
                <p className="text-sm font-bold mt-1">Book Flights, Trains, Cabs & Hotels instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-purple-950 sm:text-4xl">
              Fulfill your travel needs with PhonePe
            </h2>
            <p className="mt-2 text-purple-600 font-medium">
              No need to download extra apps! Get quick access to your needs anytime anywhere.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="p-6 rounded-2xl bg-purple-50/50 hover:bg-purple-100/60 border border-purple-100 transition duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commute Services Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-purple-950 sm:text-4xl">
              On the move around the city? No need to worry!
            </h2>
            <p className="mt-2 text-gray-600">
              Book metro tickets, manage your FASTag & more without downloading any extra apps.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commuteServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition duration-300 hover:shadow-md">
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Propositions / Features */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-800 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">100% Secure Payments</h4>
              <p className="text-purple-200 text-sm mt-1">Protected by bank-grade security and instant UPI refunds.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-800 rounded-lg">
              <Zap className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Instant Booking</h4>
              <p className="text-purple-200 text-sm mt-1">Get instant confirmations and e-tickets on your phone.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-800 rounded-lg">
              <Tag className="w-8 h-8 text-purple-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Best Deals & Cashback</h4>
              <p className="text-purple-200 text-sm mt-1">Exclusive discounts every time you travel with PhonePe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-purple-950 text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition"
                >
                  <span className="font-semibold text-gray-900 text-base md:text-lg">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-5 bg-white border-t border-gray-100 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}