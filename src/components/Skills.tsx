import { 
  Code2, 
  Globe, 
  Type, 
  Palette, 
  Server, 
  Terminal 
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Type },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "JavaScript", icon: Terminal },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <h2 className="text-4xl font-black mb-16 text-center text-slate-900">
        Technical <span className="text-[var(--color-brand)]">Stack</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div 
              key={skill.name} 
              className="group flex flex-col items-center justify-center gap-4 p-8 bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl hover:bg-[var(--color-brand)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <Icon className="w-10 h-10 text-[var(--color-brand)] group-hover:text-white transition-colors" />
              <span className="font-semibold text-slate-700 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}