// components/Contact.tsx

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { DiscIcon as Discord, Briefcase,  } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/mahi.shahriar.2024", color: "hover:bg-[#1877F2]" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/mahi-shahriar-20b823383/", color: "hover:bg-[#0A66C2]" },
  { name: "Discord", icon: Discord, href: "https://discord.com/users/mahi12x", color: "hover:bg-[#5865F2]" },
  { name: "Fiverr", icon: Briefcase, href: "https://www.fiverr.com/users/maahi_shahriar/seller_dashboard", color: "hover:bg-[#1DBF73]" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/DevSynexZ", color: "hover:bg-[#333]" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 container mx-auto px-4 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-6">Let's Connect</h2>
      <p className="text-xl text-slate-600 mb-16 max-w-lg mx-auto">
        Interested in collaboration, or just want to say hi? Choose your preferred platform below.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            className={`group p-8 bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl transition-all duration-300 ${social.color} hover:-translate-y-2 hover:shadow-2xl`}
          >
            <social.icon className="w-12 h-12 mx-auto mb-4 text-[var(--color-brand)] group-hover:text-white transition-colors" />
            <span className="font-bold text-slate-700 group-hover:text-white transition-colors">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}