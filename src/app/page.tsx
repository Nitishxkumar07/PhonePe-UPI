import { Card } from "@/components/Homecompo/Card";
import Country from "@/components/Homecompo/Country";
import { Hero } from "@/components/Homecompo/Hero";
import InvestmentSection from "@/components/Homecompo/InvestmentSection";
import { Qrsection } from "@/components/Homecompo/Qrsection";
import Review from "@/components/Homecompo/Review";
import Cards from "@/components/Homecompo/Cards";
import Travel from "@/components/Homecompo/Travel";
import PhonePePulse from "@/components/Homecompo/PhonePePulse";

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
