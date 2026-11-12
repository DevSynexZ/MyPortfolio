// import { Navbar, Hero, Skills, Projects,Contact } from "@/components";
// import Education from "@/components/Education";
// import CustomCursor from "@/components/ui/Cursor";

// export default function Home() {
//   return (
//     <main className="container mx-auto px-4 cursor-none">
//       <CustomCursor />
//       <Navbar />
//       <Hero />
//       <Skills />
//       <Projects />
//       <Education/>
//       <Contact />
//     </main>
//   );
// }


// src/app/page.tsx
import { Navbar, Hero, Skills, Projects, Contact } from "@/components";
import Education from "@/components/Education";
import CustomCursor from "@/components/ui/Cursor";

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahi Shahriar',
    alternateName: 'DevSynexZ',
    jobTitle: 'Junior Frontend Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'CodeProphet Inc.',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Bangladesh University of Professionals (BUP)',
    },
    url: 'https://devsynexzportfolio.netlify.app/',
    sameAs: [
      'https://github.com/DevSynexZ',
      'https://www.fiverr.com/maahi_shahriar',
    ],
  };

  return (
    <main className="container mx-auto px-4 cursor-none">
      {/* Google Structured Data for Personal Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}