import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PathwayCards from "@/components/home/PathwayCards";
import TrustBar from "@/components/home/TrustBar";
import ProblemStatement from "@/components/home/ProblemStatement";
import Programs from "@/components/home/Programs";
import ChangeApproach from "@/components/home/ChangeApproach";
import ChangeWeWant from "@/components/home/ChangeWeWant";
import GraduateStory from "@/components/home/GraduateStory";
import ImpactNumbers from "@/components/home/ImpactNumbers";
import ActivityFeed from "@/components/home/ActivityFeed";
import SupportersPartners from "@/components/home/SupportersPartners";
import GetInvolved from "@/components/home/GetInvolved";
import EmailSignup from "@/components/home/EmailSignup";
import Footer from "@/components/home/Footer";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Box sx={{ bgcolor: "#ECFEFF" }}>
          <PathwayCards />
          <TrustBar />
          <ChangeApproach />
          <Programs />
          <ChangeWeWant />
          {/* <ProblemStatement /> */}
          
          
          <GraduateStory />
          <ImpactNumbers />
          {/* <ActivityFeed /> */}
          {/* <SupportersPartners /> */}
          <GetInvolved />
          {/* <EmailSignup /> */}
        </Box>
       
      </main>
      <Footer />
    </>
  );
}
