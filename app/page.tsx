import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Curriculum from "@/components/Curriculum";
import CohortDetails from "@/components/CohortDetails";
import Pricing from "@/components/Pricing";
import Outcomes from "@/components/Outcomes";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Enroll from "@/components/Enroll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Curriculum />
      <CohortDetails />
      <Pricing />
      <Outcomes />
      <FAQ />
      <Testimonials />
      <Enroll />
      <Footer />
    </main>
  );
}
