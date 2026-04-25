import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "../components/header";
import { TitleSection } from "../components/titleSection";
import { AboutSection } from "../components/aboutSection";
import { LanguagesSection } from "../components/languagesSection";
import { ProjectSection } from "../components/projectSection/projectSection";
import { Footer } from "../components/footer";
import { ExperienceSection } from "../components/experienceSection";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />

      <TitleSection />

      <AboutSection />

      <LanguagesSection />

      <ExperienceSection />

      <ProjectSection />

      <Footer />
    </>
  );
}

export default App;
