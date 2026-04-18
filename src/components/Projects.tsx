"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, LayoutGrid, Zap, Wallet, Grid3X3, Building } from "lucide-react";

const projects = [
  { title: "E-commerce Platform", description: "A modern, responsive e-commerce storefront built with Next.js and styled with Tailwind CSS. It provides a seamless shopping experience featuring secure user authentication, product browsing, and an integrated checkout flow to handle purchases efficiently.", icon: ShoppingCart, image: "/khan.png", link: "https://khanempiricaltraders.netlify.app/" },
  { title: "TrackMint", description: "A robust financial management application developed using the MERN stack (MongoDB, Express, React, Node.js). TrackMint empowers users to log daily expenses, visualize spending habits through interactive data graphs, and manage personal cash flow with dedicated features for tracking lend/borrow transactions.", icon: Wallet, image: "/trackmint.png", link:"https://track-mint-front-end.vercel.app/" },
  { title: "TicTacToe", description: "An interactive implementation of the classic Tic-Tac-Toe game built with React. This project demonstrates core React concepts including state management, component lifecycles, and efficient DOM updates to deliver a smooth and responsive gaming experience.", icon: Grid3X3, image: "/tictactoe.png", link:"https://devsynexz.github.io/tic_tac_toe/" },
   { title: "Real Estate CRM(Demo)", description: "A powerful management dashboard designed for real estate professionals using React and Express. It enables data-driven decision-making with centralized client management, total asset value tracking, and real-time inventory oversight for available plots and residential buildings.", icon: Building, image: "/re.png", link: "https://realestatemahi.netlify.app/" },
];

export default function Projects() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <h2 className="text-4xl font-black mb-16 text-center text-slate-900">Featured Projects</h2>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Project List */}
        <div className="space-y-6">
        {projects.map((p, i) => {
  const Icon = p.icon;
  return (
    <motion.div 
      key={i}
      onMouseEnter={() => setHoveredImage(p.image)}
      onMouseLeave={() => setHoveredImage(null)}
      className="p-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/50 hover:bg-[var(--color-brand)] group transition-colors"
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-[var(--color-brand)] group-hover:text-white" />
        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-white">{p.title}</h3>
      </div>
      <p className="text-slate-600 group-hover:text-white/90 mb-4">{p.description}</p>
      
      {/* Link added here */}
      <a href={p.link} target="_blank" rel="noopener noreferrer">
        <Button 
          variant="outline" 
          className="group-hover:bg-white group-hover:text-[var(--color-brand)]"
        >
          View Project
        </Button>
      </a>
    </motion.div>
  );
})}
        </div>

        {/* Hover Popup Div */}
        <div className="hidden md:flex items-center justify-center sticky top-24 h-[500px]">
          <AnimatePresence>
            {hoveredImage ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl object-contain"
              >
                <img src={hoveredImage} alt="Project Preview" className="w-full h-full object-cover" />
              </motion.div>
            ) : (
              <div className="w-full h-full rounded-3xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                Hover over a project
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}