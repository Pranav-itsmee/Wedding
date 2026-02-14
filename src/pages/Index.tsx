import HeroSection from "@/components/wedding/HeroSection";
import CoupleReveal from "@/components/wedding/CoupleReveal";
import DateSection from "@/components/wedding/DateSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import VenueSection from "@/components/wedding/VenueSection";
import EventsTimeline from "@/components/wedding/EventsTimeline";
import LoveQuotes from "@/components/wedding/LoveQuotes";
import BlessingsSection from "@/components/wedding/BlessingsSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <CoupleReveal />
      <DateSection />
      <CountdownTimer />
      <VenueSection />
      <EventsTimeline />
      <LoveQuotes />
      <BlessingsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
