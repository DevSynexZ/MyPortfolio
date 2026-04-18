import { Navbar, Hero, Skills, Projects,Contact } from "@/components";
import Education from "@/components/Education";
import CustomCursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <main className="container mx-auto px-4 cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education/>
      <Contact />
    </main>
  );
}