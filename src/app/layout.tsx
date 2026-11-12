// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL('https://devsynexzportfolio.netlify.app/'), // Replace with your actual deployed domain (e.g., Vercel URL)
//   title: {
//     default: 'Mahi Shahriar (DevSynexZ) | Frontend Developer & BUP CSE',
//     template: '%s | Mahi Shahriar (DevSynexZ)',
//   },
//   description: 'Portfolio of Mahi Shahriar (DevSynexZ), a Junior Frontend Developer and Computer Science student at Bangladesh University of Professionals (BUP). Specializing in React, Next.js, and TypeScript.',
//   keywords: [
//     'Mahi Shahriar',
//     'DevSynexZ',
//     'Mahi Shahriar BUP',
//     'Frontend Developer Bangladesh',
//     'React Developer Dhaka',
//     'Bangladesh University of Professionals CSE',
//   ],
//   authors: [{ name: 'Mahi Shahriar', url: 'https://github.com/DevSynexZ' }],
//   creator: 'Mahi Shahriar',
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://yourdomain.com',
//     title: 'Mahi Shahriar | DevSynexZ — Frontend Developer',
//     description: 'Explore the portfolio, projects, and web engineering work of Mahi Shahriar (DevSynexZ) from BUP.',
//     siteName: 'Mahi Shahriar Portfolio',
//     images: [
//       {
//         url: '/og-image.png', // Add a 1200x630px preview image in your public folder
//         width: 1200,
//         height: 630,
//         alt: 'Mahi Shahriar - Frontend Developer Portfolio',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Mahi Shahriar | DevSynexZ',
//     description: 'Junior Frontend Developer & BUP CSE Student.',
//     images: ['/og-image.png'],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen font-sans">{children}</body>
//     </html>
//   );
// }


// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://devsynexzportfolio.netlify.app/'),
  title: {
    default: 'Mahi Shahriar (DevSynexZ) | Frontend Developer & BUP CSE',
    template: '%s | Mahi Shahriar (DevSynexZ)',
  },
  description: 'Portfolio of Mahi Shahriar (DevSynexZ), a Junior Frontend Developer and Computer Science student at Bangladesh University of Professionals (BUP). Specializing in React, Next.js, and TypeScript.',
  keywords: [
    'Mahi Shahriar',
    'DevSynexZ',
    'Mahi Shahriar BUP',
    'Frontend Developer Bangladesh',
    'React Developer Dhaka',
    'Bangladesh University of Professionals CSE',
  ],
  authors: [{ name: 'Mahi Shahriar', url: 'https://github.com/DevSynexZ' }],
  creator: 'Mahi Shahriar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devsynexzportfolio.netlify.app/',
    title: 'Mahi Shahriar | DevSynexZ — Frontend Developer',
    description: 'Explore the portfolio, projects, and web engineering work of Mahi Shahriar (Devsynexz) from BUP.',
    siteName: 'Mahi Shahriar Portfolio',
    images: [
      {
        url: '/og-image.png', // Ensure a 1200x630px image is saved in your public folder
        width: 1200,
        height: 630,
        alt: 'Mahi Shahriar - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahi Shahriar | DevSynexZ',
    description: 'Junior Frontend Developer & BUP CSE Student.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}