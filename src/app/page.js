import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
    </main>
  );
  
}
