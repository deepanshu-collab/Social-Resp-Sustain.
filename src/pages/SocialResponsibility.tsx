import Header from "@/components/Header";
import SRHeroBanner from "@/components/social-responsibility/SRHeroBanner";
import SubNav from "@/components/SubNav";
import SRIntroSection from "@/components/social-responsibility/SRIntroSection";
import NirmaanSection from "@/components/social-responsibility/NirmaanSection";
import SRCampusTabs from "@/components/social-responsibility/SRCampusTabs";
import FooterCTA from "@/components/FooterCTA";
import SectionDivider from "@/components/SectionDivider";

const SocialResponsibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SRHeroBanner />
      <SubNav activeTab="Social Responsibility" />
      <SRIntroSection />
      <SectionDivider />
      <NirmaanSection />
      <SectionDivider />
      <SRCampusTabs />
      <SectionDivider />
      <FooterCTA />
    </div>
  );
};

export default SocialResponsibility;
