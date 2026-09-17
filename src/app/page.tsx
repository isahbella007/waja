import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PathwayCards from "@/components/home/PathwayCards";
import ProblemStatement from "@/components/home/ProblemStatement";
import Programs from "@/components/home/Programs";
import ChangeApproach from "@/components/home/ChangeApproach";
import GraduateStory from "@/components/home/GraduateStory";
import ImpactNumbers from "@/components/home/ImpactNumbers";
import ActivityFeed from "@/components/home/ActivityFeed";
import SupportersPartners from "@/components/home/SupportersPartners";
import GetInvolved from "@/components/home/GetInvolved";
import EmailSignup from "@/components/home/EmailSignup";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PathwayCards />
        <ProblemStatement />
        <Programs />
        <ChangeApproach />
        <GraduateStory />
        <ImpactNumbers />
        <ActivityFeed />
        <SupportersPartners />
        <GetInvolved />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
