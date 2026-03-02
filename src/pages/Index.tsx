import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SubNav from "@/components/SubNav";
import IntroSection from "@/components/IntroSection";
import GuidingPrinciples from "@/components/GuidingPrinciples";
import ArcsetSection from "@/components/ArcsetSection";
import CampusTabs from "@/components/CampusTabs";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <SubNav />
      <IntroSection />
      <GuidingPrinciples />
      <ArcsetSection />
      <CampusTabs />
      <FooterCTA />
    </div>
  );
};

export default Index;
