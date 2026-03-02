import Header from "@/components/Header";
import SRHeroBanner from "@/components/social-responsibility/SRHeroBanner";
import SubNav from "@/components/SubNav";
import SRIntroSection from "@/components/social-responsibility/SRIntroSection";
import SRCampusTabs from "@/components/social-responsibility/SRCampusTabs";
import FooterCTA from "@/components/FooterCTA";

const SocialResponsibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SRHeroBanner />
      <SubNav activeTab="Social Responsibility" />
      <SRIntroSection />
      <SRCampusTabs />
      <FooterCTA />
    </div>
  );
};

export default SocialResponsibility;
