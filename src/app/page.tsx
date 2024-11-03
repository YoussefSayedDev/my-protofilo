import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import MobileNav from "@/components/navigation/MobileNav";
import AboutSection from "@/containers/About";
import ContactSection from "@/containers/Contact";
import HomeSection from "@/containers/Home";
import ProjectsSection from "@/containers/Projects";
import SkillsSection from "@/containers/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <main className='pt-32 container space-y-16 py-28 m-auto px-5 md:px-0 overflow-hidden'>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
