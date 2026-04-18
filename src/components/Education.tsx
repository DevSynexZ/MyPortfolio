import { GraduationCap, Languages, Bot, Database, Cpu } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 container mx-auto">
      <h2 className="text-4xl font-black mb-16 text-center text-slate-900">
        Academic & <span className="text-[var(--color-brand)]">Beyond</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Academic Timeline */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <GraduationCap className="text-[var(--color-brand)]" /> Academic Path
          </h3>
          
          <div className="space-y-4">
            {[
              { level: "University", name: "Bangladesh University Of Professionals", detail: "CGPA: 3.40 | Studying CS" },
              { level: "HSC", name: "Khulna Public College", detail: "GPA 5.00" },
              { level: "SSC/JSC", name: "Khulna Public College", detail: "GPA 5.00" },
            ].map((edu, i) => (
              <div key={i} className="p-6 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl">
                <span className="text-xs font-bold text-[var(--color-brand)] uppercase">{edu.level}</span>
                <h4 className="text-lg font-semibold">{edu.name}</h4>
                <p className="text-slate-600">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Projects */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Languages className="text-[var(--color-brand)]" /> Languages & University Projects
          </h3>

          <div className="p-6 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl">
            <p className="text-slate-700">
              I am fluent in Bengali and English. I am also actively learning <strong>Chinese (Mandarin)</strong>, focusing on HSK-level reading and vocabulary to expand my global communication skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Student DBMS", icon: Database },
              { name: "LFR Robot", icon: Bot },
              { name: "7-Seg Display", icon: Cpu },
            ].map((proj, i) => (
              <div key={i} className="p-6 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl text-center hover:border-[var(--color-brand)] transition-colors">
                <proj.icon className="w-8 h-8 mx-auto mb-2 text-[var(--color-brand)]" />
                <span className="font-medium text-slate-700">{proj.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}