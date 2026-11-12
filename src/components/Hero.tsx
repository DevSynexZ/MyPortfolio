import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center py-16 md:py-24">
      {/* Main Grid Layout */}
      <div className="container mx-auto px-4 grid md:grid-cols-[1fr,auto] gap-12 items-center">
        
        {/* Text Column */}
        <div className="space-y-10 order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
            Building Digital<br /> 
            <span className="text-[var(--color-brand)]">Experiences</span>.
          </h1>

          {/* Mission Block */}
          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-lg relative max-w-2xl">
            <span className="absolute -top-3 left-6 bg-[var(--color-brand)] text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-widest">
              Mission
            </span>
            <p className="text-xl text-slate-700 leading-relaxed">
              Computer Science student and Full-Stack Developer specializing in high-performance web applications and immersive digital experiences. With professional internship experience building enterprise systems at <strong>CodeProphet</strong> and <strong>Horizon TechX</strong>, I bridge the gap between robust backends and polished user interfaces. My work spans interactive 3D web platforms, multi-department desktop tools, and scalable database architectures using modern stacks like Next.js, TypeScript, JavaFX, and PostgreSQL.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4">
            {/* Smooth Scroll to Projects */}
            <Link href="#projects">
              <Button size="lg" className="rounded-full bg-[var(--color-brand)] hover:bg-slate-800 text-white px-10 cursor-pointer">
                View My Work
              </Button>
            </Link>

            {/* Navigate to Contact Page */}
            <Link href="#contact">
              <Button size="lg" variant="outline" className="rounded-full bg-white/50 backdrop-blur-sm border-slate-200 cursor-pointer">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2 flex-shrink-0 flex justify-center">
          <div className="relative w-[240px] h-[300px] md:w-[280px] md:h-[350px]">
            {/* Shadow Frame */}
            <div className="absolute inset-0 bg-slate-600 clip-path-polygon-[10%_0%,100%_15%,90%_100%,0%_85%] transform rotate-[-2deg] opacity-90 scale-105" />

            {/* Image Frame */}
            <div className="relative w-full h-full bg-[var(--color-brand)] overflow-hidden clip-path-polygon-[10%_0%,100%_15%,90%_100%,0%_85%] border-4 border-white group">
              <Image
                src="/mahi1.jpg"
                alt="DevSynexz"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}