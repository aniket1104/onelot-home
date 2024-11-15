import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductDescription from "@/components/ProductDescription";
import ProductInventory from "@/components/ProductInventory";
import Questions from "@/components/Questions";
import StayConnected from "@/components/StayConnected";
import Testimonials from "@/components/Testimonials";
import WhyOnelot from "@/components/WhyOneLot";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductInventory />
      <ProductDescription />
      <WhyOnelot />
      <Testimonials />
      <StayConnected />
      <Questions />
      <GetStarted />
      <Footer />
    </>
  );
}
