// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart, LayoutGrid, Zap, Wallet, Grid3X3, Building } from "lucide-react";

// const projects = [
//   { title: "E-commerce Platform", description: "A modern, responsive e-commerce storefront built with Next.js and styled with Tailwind CSS. It provides a seamless shopping experience featuring secure user authentication, product browsing, and an integrated checkout flow to handle purchases efficiently.", icon: ShoppingCart, image: "/khan.png", link: "https://khanempiricaltraders.netlify.app/" },
//   { title: "TrackMint", description: "A robust financial management application developed using the MERN stack (MongoDB, Express, React, Node.js). TrackMint empowers users to log daily expenses, visualize spending habits through interactive data graphs, and manage personal cash flow with dedicated features for tracking lend/borrow transactions.", icon: Wallet, image: "/trackmint.png", link:"https://track-mint-front-end.vercel.app/" },
//   // { title: "TicTacToe", description: "An interactive implementation of the classic Tic-Tac-Toe game built with React. This project demonstrates core React concepts including state management, component lifecycles, and efficient DOM updates to deliver a smooth and responsive gaming experience.", icon: Grid3X3, image: "/tictactoe.png", link:"https://devsynexz.github.io/tic_tac_toe/" },
//   // { title: "Real Estate CRM(Demo)", description: "A powerful management dashboard designed for real estate professionals using React and Express. It enables data-driven decision-making with centralized client management, total asset value tracking, and real-time inventory oversight for available plots and residential buildings.", icon: Building, image: "/re.png", link: "https://realestatemahi.netlify.app/" },
//   { title: "Sailor's Haircut", description: "Haircut is a full-stack salon booking web application designed to streamline appointment scheduling and customer management. Built with Next.js, Tailwind CSS, and MongoDB, it features seamless service browsing, secure bKash payment processing, and automated email notifications for confirmed bookings.", icon: Building, image: "/sailor.png", link: "https://appointmentsyst.netlify.app/" },
//    { title: "Fruitery", description: "is an interactive 3D e-commerce platform designed to elevate online fresh-produce shopping through immersive web visuals. Built with Next.js 16 (App Router), TypeScript, and Three.js / React Three Fiber, it features real-time 3D product previews, fluid GSAP and Framer Motion animations, and a full MongoDB backend for dynamic inventory, cart, and order management.", icon: Building, image: "/fruitery.png", link: "https://fruitery.netlify.app" },
// ];

// export default function Projects() {
//   const [hoveredImage, setHoveredImage] = useState<string | null>(null);

//   return (
//     <section id="projects" className="py-24 relative">
//       <h2 className="text-4xl font-black mb-16 text-center text-slate-900">Featured Projects</h2>
      
//       <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
//         {/* Project List */}
//         <div className="space-y-6">
//         {projects.map((p, i) => {
//   const Icon = p.icon;
//   return (
//     <motion.div 
//       key={i}
//       onMouseEnter={() => setHoveredImage(p.image)}
//       onMouseLeave={() => setHoveredImage(null)}
//       className="p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/50 hover:bg-[var(--color-brand)] group transition-colors"
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <Icon className="w-8 h-8 text-[var(--color-brand)] group-hover:text-white" />
//         <h3 className="text-2xl font-bold text-slate-800 group-hover:text-white">{p.title}</h3>
//       </div>
//       <p className="text-slate-600 group-hover:text-white/90 mb-4">{p.description}</p>
      
//       {/* Link added here */}
//       <a href={p.link} target="_blank" rel="noopener noreferrer">
//         <Button 
//           variant="outline" 
//           className="group-hover:bg-white group-hover:text-[var(--color-brand)]"
//         >
//           View Project
//         </Button>
//       </a>
//     </motion.div>
//   );
// })}
//         </div>

//         {/* Hover Popup Div */}
//         <div className="hidden md:flex items-center justify-center sticky top-24 h-[500px]">
//           <AnimatePresence>
//             {hoveredImage ? (
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl object-contain"
//               >
//                 <img src={hoveredImage} alt="Project Preview" className="w-full h-full object-cover" />
//               </motion.div>
//             ) : (
//               <div className="w-full h-full rounded-3xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
//                 Hover over a project
//               </div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Wallet, Building, Sparkles } from "lucide-react";
import { BiFootball } from "react-icons/bi";
import { GiFruitTree } from "react-icons/gi";

const projects = [
   { 
    title: "FieldSync", 
    description: "FieldSync is a multi-department desktop field reservation and scheduling application engineered for robust institutional management. Built using Java 21, JavaFX, and Maven, it features a sleek desktop UI, multi-department role coordination, and a persistent PostgreSQL backend for real-time slot booking and conflict resolution..", 
    icon: BiFootball, 
    image: "/fieldSync.jpeg", 
    link: "https://github.com/DevSynexZ/BUPFIELDSYNCbySynexZ.git",
    tag: "Open Repo"
  },
  { 
    title: "E-commerce Platform", 
    description: "A modern, responsive e-commerce storefront built with Next.js and styled with Tailwind CSS. Features secure user authentication, product browsing, and an integrated checkout flow.", 
    icon: ShoppingCart, 
    image: "/khan.png", 
    link: "https://khanempiricaltraders.netlify.app/",
    tag: "Next.js & Tailwind"
  },
  { 
    title: "TrackMint", 
    description: "A robust financial management application developed using the MERN stack. Empowering users to log expenses, visualize spending through interactive graphs, and track cash flow.", 
    icon: Wallet, 
    image: "/trackmint.png", 
    link: "https://track-mint-front-end.vercel.app/",
    tag: "MERN Stack"
  },
  { 
    title: "Sailor's Haircut", 
    description: "A full-stack salon booking web application featuring seamless service browsing, secure bKash payment processing, and automated email notifications for confirmed bookings.", 
    icon: Building, 
    image: "/sailor.png", 
    link: "https://appointmentsyst.netlify.app/",
    tag: "Full-Stack Booking"
  },
  { 
    title: "Fruitery", 
    description: "An interactive 3D e-commerce platform built with Next.js 16 App Router, TypeScript, and Three.js / R3F with real-time 3D product previews and GSAP animations.", 
    icon: GiFruitTree, 
    image: "/fruitery.png", 
    link: "https://fruitery.netlify.app",
    tag: "3D Web Experience"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        {/* <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 shadow-sm">
          Portfolio Showcase
        </span> */}
        <h2 className="text-4xl sm:text-5xl font-black mt-4 text-slate-900 tracking-tight">
          Featured Projects
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 flex flex-col justify-end p-8"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-80"
                />
                {/* Multi-stop Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              {/* Top Floating Tag */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg">
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  {p.tag}
                </span>
              </div>

              {/* Content Box */}
              <div className="relative z-10 flex flex-col justify-end space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base line-clamp-2 leading-relaxed font-normal">
                  {p.description}
                </p>
                
                {/* Action Link Button */}
                <div className="pt-2">
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-amber-400 hover:text-slate-950 transition-all duration-300 shadow-md group/btn"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}