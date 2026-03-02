import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SubNav from "@/components/SubNav";
import IntroSection from "@/components/IntroSection";
import GuidingPrinciples from "@/components/GuidingPrinciples";
import ArcsetSection from "@/components/ArcsetSection";
import CampusTabs from "@/components/CampusTabs";
import FooterCTA from "@/components/FooterCTA";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <SubNav activeTab="Sustainability" />
      <IntroSection />
      <SectionDivider />
      <GuidingPrinciples />
      <SectionDivider />
      <ArcsetSection />
      <SectionDivider />
      <CampusTabs />
      <SectionDivider />
      <FooterCTA />
    </div>
  );
};

export default Index;
