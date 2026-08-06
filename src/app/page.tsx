import { Card } from "@/components/Card";
import Country from "@/components/Country";
import { Hero } from "@/components/Hero";
import InvestmentSection from "@/components/InvestmentSection";
import { Navbar } from "@/components/Navbar";
import { Qrsection } from "@/components/Qrsection";
import Review from "@/components/Review";
import Cards from "@/components/Cards";
import Travel from "@/components/Travel";
import PhonePePulse from "@/components/PhonePePulse";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Card />
        <Qrsection />
        <Country />
        <Travel />
        <Review/>
        <InvestmentSection/>
        <Cards />
        <PhonePePulse />
      </div>
    </>
  );
}
