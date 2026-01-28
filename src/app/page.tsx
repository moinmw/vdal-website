import Architecture from "@/components/Architecture";
import BusinessValue from "@/components/BusinessValue";
import ContactSection from "@/components/ContactSection";
import CoreCapabilities from "@/components/CoreCapabilities";
import EnterprisePain from "@/components/EnterprisePain";
// import GroqPartner from "@/components/GroqPartner";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Roadmap from "@/components/Roadmap";
import SecurityGovernance from "@/components/SecurityGovernance";
import SolutionOverview from "@/components/SolutionOverview";
import SuccessStories from "@/components/SuccessStories";
import UseCases from "@/components/UseCases";
import WhoBenefits from "@/components/WhoBenefits";


export default function Home() {
  return (
    <>
      <Hero />
      <Introduction/>
      <Architecture />
      <EnterprisePain />
      <SolutionOverview/>
      <WhoBenefits/>
      <UseCases/> 
      <CoreCapabilities/>
      <SecurityGovernance/>
      <BusinessValue/>
      <SuccessStories/>
      <Roadmap/>
      {/* <GroqPartner/> */}
      <ContactSection/>
    
    </>
  );
}
