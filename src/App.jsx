/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState, createContext, useContext, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const MotionContext = createContext(true);

const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => setReducedMotion(mq.matches);
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  return reducedMotion;
};

const useSEO = ({ title, description, ogImage }) => {
  useEffect(() => {
    document.title = title || "Muhammad Fahreza";
    const setMeta = (name, content, property) => {
      let element = document.querySelector(`meta[${property ? "property" : "name"}="${property || name}"]`);
      if (!element) {
        element = document.createElement("meta");
        if (property) element.setAttribute("property", property);
        else element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    if (description) setMeta("description", description);
    if (ogImage) setMeta("og:image", ogImage, true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image", false);
    setMeta("twitter:title", title, false);
    setMeta("twitter:description", description, false);
    if (ogImage) setMeta("twitter:image", ogImage, false);
  }, [title, description, ogImage]);
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const PortfolioIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const MusicNoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PROFILE = {
  name: "Muhammad Fahreza",
  bio: "Web Programmer",
  avatar: "/src/assets/fotome.jpg",
};

const LINKS = [
  {
    id: 1,
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/muhammad-fahreza-a20975285",
    previewBg: "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)",
    previewDesc: "My LinkedIn Profile",
  },
  {
    id: 2,
    label: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/MhmdFahreza",
    previewBg: "linear-gradient(135deg, #24292e 0%, #586069 100%)",
    previewDesc: "Code Repository",
  },
  {
    id: 3,
    label: "My Portfolio Website",
    icon: <PortfolioIcon />,
    href: "https://muhammadfahreza.vercel.app/",
    previewBg: "linear-gradient(135deg, #6c63ff 0%, #a78bfa 100%)",
    previewDesc: "Personal Portfolio",
  },
  {
    id: 4,
    label: "Discord Community",
    icon: <DiscordIcon />,
    href: "https://discord.gg/UncurKFS",
    previewBg: "linear-gradient(135deg, #5865F2 0%, #7289da 100%)",
    previewDesc: "Join the Community",
  },
];

const MUSIC_LINKS = [
  {
    id: 5,
    label: "Spotify",
    icon: <MusicNoteIcon />,
    href: "https://open.spotify.com/user/duezo5jo46nrrfj5qtr89e34u?si=13180a662e6f4a30",
    previewBg: "linear-gradient(135deg, #1DB954 0%, #1ed760 100%)",
    previewDesc: "My Spotify Playlist",
  },
  {
    id: 6,
    label: "YouTube Music",
    icon: <MusicNoteIcon />,
    href: "https://music.youtube.com/playlist?list=PL9X21xjKqYoXnoUX4vl0EMhs0iQWEvE1k",
    previewBg: "linear-gradient(135deg, #FF0000 0%, #ff4444 100%)",
    previewDesc: "YouTube Music Playlist",
  },
];

const DONATION_LINKS = [
  {
    id: 7,
    label: "Trakteer",
    icon: <HeartIcon />,
    href: "https://trakteer.id/muhammad_fahreza19",
    previewBg: "linear-gradient(135deg, #e74c3c 0%, #ff6b6b 100%)",
    previewDesc: "Support via Trakteer",
  },
  {
    id: 8,
    label: "Saweria",
    icon: <HeartIcon />,
    href: "https://saweria.co/FareekzYT",
    previewBg: "linear-gradient(135deg, #f39c12 0%, #ffd447 100%)",
    previewDesc: "Support via Saweria",
  },
  {
    id: 9,
    label: "Tako",
    icon: <HeartIcon />,
    href: "https://tako.id/MuhammadFahreza",
    previewBg: "linear-gradient(135deg, #00b4d8 0%, #48cae4 100%)",
    previewDesc: "Support via Tako",
  },
];

const SERVICE_LINKS = [
  {
    id: 10,
    label: "Open Jasa Pembuatan Website",
    icon: <WAIcon />,
    href: "https://wa.me/6283847882287?text=Halo%2C%20saya%20ingin%20tanya%20tentang%20jasa%20pembuatan%20website",
    previewBg: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    previewDesc: "Chat via WhatsApp",
  },
];

const SOCIALS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@weiterszz",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.87a4.85 4.85 0 01-1.07-.18z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@FareekzYT",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23.5 6.2s-.23-1.64-.95-2.36c-.9-.95-1.92-.96-2.38-1.01C17.1 2.6 12 2.6 12 2.6s-5.1 0-8.17.23c-.46.05-1.47.06-2.38 1.01C.73 4.56.5 6.2.5 6.2S.27 8.1.27 10v1.87c0 1.9.23 3.8.23 3.8s.23 1.64.95 2.36c.91.95 2.1.92 2.63 1.02C5.87 19.27 12 19.27 12 19.27s5.1 0 8.17-.23c.46-.05 1.47-.06 2.38-1.01.72-.72.95-2.36.95-2.36s.23-1.9.23-3.8V10c0-1.9-.23-3.8-.23-3.8zM9.73 14.59V8.66l6.44 2.97-6.44 2.96z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/Muhamma83709506",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/imfhrz/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const KONAMI_SEQUENCE = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "KeyB","KeyA",
];

const useKonamiCode = (callback) => {
  useEffect(() => {
    let index = 0;
    const handler = (e) => {
      if (e.code === KONAMI_SEQUENCE[index]) {
        index++;
        if (index === KONAMI_SEQUENCE.length) { callback(); index = 0; }
      } else { index = 0; }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
};

const useSakuraBurst = (avatarRef) => {
  const reducedMotion = useContext(MotionContext);
  const triggerBurst = useCallback(() => {
    if (reducedMotion || !avatarRef.current) return;
    const avatar = avatarRef.current;
    const rect = avatar.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    for (let i = 0; i < 30; i++) {
      const petal = document.createElement("div");
      petal.className = "sakura-burst-petal";
      petal.style.left = startX + "px";
      petal.style.top = startY + "px";
      petal.style.width = (6 + Math.random() * 10) + "px";
      petal.style.height = petal.style.width;
      petal.style.background = `rgba(255,183,197,${0.7 + Math.random() * 0.3})`;
      document.body.appendChild(petal);
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 150;
      const toX = startX + Math.cos(angle) * distance;
      const toY = startY + Math.sin(angle) * distance + 200;
      gsap.fromTo(petal,
        { x: 0, y: 0, scale: 0, rotation: Math.random() * 360, opacity: 1 },
        { x: toX - startX, y: toY - startY, scale: 1 + Math.random(), rotation: Math.random() * 720 - 360, opacity: 0, duration: 1.2 + Math.random() * 1.2, ease: "power2.out", onComplete: () => petal.remove() }
      );
    }
  }, [avatarRef, reducedMotion]);
  return triggerBurst;
};

function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef(null);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.max(Math.floor(Math.random() * 4 + 2), 1);
        return next >= 100 ? 100 : next;
      });
    }, 80);
    progressIntervalRef.current = timer;
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100 && overlayRef.current) {
      clearInterval(progressIntervalRef.current);
      gsap.to(overlayRef.current, {
        opacity: 0, duration: 0.6, ease: "power2.in", onComplete: onFinish,
      });
    }
  }, [progress, onFinish]);

  const petalData = [
    { left: "188px", top: "28px", anim: "pl-fall-a", dur: "3.2s", delay: "0.0s", size: 10, hue: 197 },
    { left: "212px", top: "18px", anim: "pl-fall-b", dur: "2.9s", delay: "0.6s", size: 8,  hue: 185 },
    { left: "230px", top: "38px", anim: "pl-fall-c", dur: "3.6s", delay: "1.1s", size: 12, hue: 205 },
    { left: "198px", top: "52px", anim: "pl-fall-a", dur: "2.7s", delay: "1.6s", size: 7,  hue: 193 },
    { left: "244px", top: "32px", anim: "pl-fall-b", dur: "3.1s", delay: "2.1s", size: 9,  hue: 200 },
    { left: "172px", top: "44px", anim: "pl-fall-c", dur: "3.9s", delay: "0.9s", size: 11, hue: 190 },
    { left: "258px", top: "22px", anim: "pl-fall-a", dur: "2.5s", delay: "1.4s", size: 8,  hue: 210 },
    { left: "165px", top: "62px", anim: "pl-fall-b", dur: "3.4s", delay: "0.3s", size: 10, hue: 195 },
    { left: "275px", top: "48px", anim: "pl-fall-c", dur: "2.8s", delay: "1.8s", size: 7,  hue: 188 },
  ];

  return (
    <div ref={overlayRef} className="preloader-overlay">
      <style>{`
        @keyframes pl-fall-a {
          0%   { transform: translate(0,0)   rotate(0deg)   scale(1);   opacity: 1; }
          100% { transform: translate(-130px,190px) rotate(560deg) scale(0.4); opacity: 0; }
        }
        @keyframes pl-fall-b {
          0%   { transform: translate(0,0)   rotate(20deg)  scale(0.9); opacity: 0.95; }
          100% { transform: translate(-70px, 210px) rotate(-380deg) scale(0.3); opacity: 0; }
        }
        @keyframes pl-fall-c {
          0%   { transform: translate(0,0)   rotate(-15deg) scale(1.1); opacity: 1; }
          100% { transform: translate(25px,  195px) rotate(440deg) scale(0.45); opacity: 0; }
        }
        @keyframes pl-sway {
          0%, 100% { transform: rotate(-1.2deg); }
          50%       { transform: rotate(1.2deg);  }
        }
        @keyframes pl-breathe {
          0%, 100% { transform: scaleY(1) translateY(0);     }
          50%       { transform: scaleY(1.015) translateY(-1px); }
        }
        @keyframes pl-kanji-glow {
          0%, 100% { text-shadow: 0 0 18px rgba(255,183,197,0.85), 0 0 36px rgba(232,115,138,0.45), 0 2px 8px rgba(180,60,100,0.25); }
          50%       { text-shadow: 0 0 28px rgba(255,183,197,1),    0 0 56px rgba(232,115,138,0.65), 0 2px 12px rgba(180,60,100,0.35); }
        }
        @keyframes pl-romaji-fade {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 0.80; }
        }
        @keyframes pl-sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.7); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes pl-cloud-drift {
          0%   { transform: translateX(-12px); }
          100% { transform: translateX(12px);  }
        }
        @keyframes pl-lantern-swing {
          0%, 100% { transform: rotate(-4deg); transform-origin: top center; }
          50%       { transform: rotate(4deg);  transform-origin: top center; }
        }
        @keyframes pl-badge-bounce {
          0%, 100% { transform: translateY(0);  }
          50%       { transform: translateY(-4px); }
        }
      `}</style>

      <div className="preloader-content" style={{ gap: 0 }}>

        <div style={{ position: "relative", width: 340, height: 220, marginBottom: 6 }}>

          {petalData.map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: `hsla(${p.hue},100%,82%,0.92)`,
                borderRadius: "50% 0 50% 50%",
                animation: `${p.anim} ${p.dur} ${p.delay} ease-in infinite`,
                pointerEvents: "none",
                zIndex: 6,
              }}
            />
          ))}

          <svg
            width="340"
            height="220"
            viewBox="0 0 340 220"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "visible" }}
          >
            <defs>
              <linearGradient id="pl-gnd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b8e08a" />
                <stop offset="100%" stopColor="#90c860" />
              </linearGradient>
              <linearGradient id="pl-trunk" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5a3018" />
                <stop offset="100%" stopColor="#8a5530" />
              </linearGradient>
              <radialGradient id="pl-moon" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,245,220,0.95)" />
                <stop offset="100%" stopColor="rgba(255,230,180,0.5)" />
              </radialGradient>
            </defs>

            <ellipse cx="58"  cy="162" rx="100" ry="62" fill="rgba(210,158,185,0.32)" />
            <ellipse cx="270" cy="168" rx="90"  ry="52" fill="rgba(200,148,175,0.28)" />
            <ellipse cx="158" cy="152" rx="80"  ry="46" fill="rgba(218,168,195,0.22)" />

            <circle cx="298" cy="28" r="22" fill="url(#pl-moon)" />
            <circle cx="298" cy="28" r="22" fill="none" stroke="rgba(255,220,160,0.4)" strokeWidth="3" />
            <circle cx="298" cy="28" r="30" fill="rgba(255,240,200,0.12)" />

            <g style={{ animation: "pl-cloud-drift 6s ease-in-out infinite alternate" }}>
              <ellipse cx="55"  cy="22" rx="28" ry="10" fill="rgba(255,240,248,0.55)" />
              <ellipse cx="70"  cy="16" rx="20" ry="9"  fill="rgba(255,240,248,0.60)" />
              <ellipse cx="40"  cy="18" rx="18" ry="8"  fill="rgba(255,240,248,0.50)" />
            </g>
            <g style={{ animation: "pl-cloud-drift 8s ease-in-out 1s infinite alternate-reverse" }}>
              <ellipse cx="255" cy="32" rx="22" ry="8"  fill="rgba(255,240,248,0.45)" />
              <ellipse cx="268" cy="26" rx="16" ry="7"  fill="rgba(255,240,248,0.50)" />
            </g>

            <rect x="0" y="172" width="340" height="48" fill="url(#pl-gnd)" />
            <rect x="0" y="170" width="340" height="7"  fill="rgba(140,196,90,0.65)" rx="3" />

            {[25,62,100,148,265,300,328].map((x, i) => (
              <g key={i}>
                <line x1={x}   y1="172" x2={x-3} y2="163" stroke="#6aaa38" strokeWidth="1.5" strokeLinecap="round" />
                <line x1={x}   y1="172" x2={x}   y2="162" stroke="#7cbb44" strokeWidth="1.5" strokeLinecap="round" />
                <line x1={x}   y1="172" x2={x+3} y2="164" stroke="#6aaa38" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            ))}

            <g style={{ animation: "pl-lantern-swing 3.5s ease-in-out infinite" }}>
              <line x1="28" y1="0" x2="28" y2="18" stroke="rgba(80,40,20,0.7)" strokeWidth="1.5" />
              <rect x="20" y="18" width="16" height="22" rx="4" fill="#e04010" opacity="0.88" />
              <rect x="22" y="20" width="12" height="18" rx="3" fill="rgba(255,160,80,0.45)" />
              <rect x="18" y="16" width="20" height="4"  rx="2" fill="#b82c08" />
              <rect x="18" y="38" width="20" height="4"  rx="2" fill="#b82c08" />
              <line x1="28" y1="42" x2="28" y2="50" stroke="rgba(180,60,20,0.6)" strokeWidth="1.5" />
              <ellipse cx="28" cy="51" rx="4" ry="2" fill="rgba(200,80,30,0.5)" />
            </g>

            <g opacity="0.90">
              <rect x="44" y="110" width="9" height="62" rx="3.5" fill="#d85518" />
              <rect x="82" y="110" width="9" height="62" rx="3.5" fill="#d85518" />
              <rect x="30" y="104" width="75" height="6" rx="3" fill="#b83e0c" />
              <path d="M28 112 Q67.5 98 107 112" fill="none" stroke="#d85518" strokeWidth="9" strokeLinecap="round" />
              <path d="M28 112 Q67.5 98 107 112" fill="none" stroke="#b83e0c" strokeWidth="9" strokeLinecap="round" opacity="0.4" />
              <rect x="42" y="126" width="51" height="6" rx="3" fill="#b83e0c" />
              <line x1="48" y1="135" x2="87" y2="135" stroke="rgba(240,210,130,0.65)" strokeWidth="1.2" strokeDasharray="3,3" />
              <rect x="40"  y="168" width="14" height="6" rx="3" fill="#c8a888" opacity="0.7" />
              <rect x="81"  y="168" width="14" height="6" rx="3" fill="#c8a888" opacity="0.7" />
            </g>

            <g style={{ animation: "pl-sway 4.5s ease-in-out infinite", transformOrigin: "228px 172px" }}>
              <path d="M220 172 Q208 175 200 178" fill="none" stroke="#5a3018" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
              <path d="M220 172 Q232 175 242 178" fill="none" stroke="#5a3018" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

              <path d="M220 172 Q218 148 215 128 Q213 112 210 90" fill="none" stroke="url(#pl-trunk)" strokeWidth="11" strokeLinecap="round" />
              <path d="M220 172 Q219 148 217 128 Q215 112 213 90" fill="none" stroke="rgba(255,200,160,0.25)" strokeWidth="4" strokeLinecap="round" />

              <path d="M213 105 Q196 83 172 68"  fill="none" stroke="#7a4820" strokeWidth="7" strokeLinecap="round" />
              <path d="M211 98  Q232 74 256 60"   fill="none" stroke="#7a4820" strokeWidth="6" strokeLinecap="round" />
              <path d="M215 122 Q194 110 168 96"  fill="none" stroke="#7a4820" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M217 118 Q242 108 270 94"  fill="none" stroke="#7a4820" strokeWidth="5" strokeLinecap="round" />
              <path d="M172 68  Q160 55 152 46"   fill="none" stroke="#8a5830" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M256 60  Q266 47 274 40"   fill="none" stroke="#8a5830" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M168 96  Q156 86 148 78"   fill="none" stroke="#8a5830" strokeWidth="3"   strokeLinecap="round" />
              <path d="M270 94  Q280 84 288 77"   fill="none" stroke="#8a5830" strokeWidth="3"   strokeLinecap="round" />
              <path d="M210 90  Q205 78 200 68"   fill="none" stroke="#8a5830" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M152 46  Q148 38 144 32"   fill="none" stroke="#9a6838" strokeWidth="2"   strokeLinecap="round" />
              <path d="M274 40  Q280 32 284 25"   fill="none" stroke="#9a6838" strokeWidth="2"   strokeLinecap="round" />
              <path d="M200 68  Q195 60 190 54"   fill="none" stroke="#9a6838" strokeWidth="2"   strokeLinecap="round" />

              <circle cx="210" cy="74"  r="24" fill="rgba(255,168,190,0.82)" />
              <circle cx="196" cy="70"  r="19" fill="rgba(255,183,197,0.86)" />
              <circle cx="226" cy="67"  r="20" fill="rgba(255,155,182,0.80)" />
              <circle cx="209" cy="56"  r="15" fill="rgba(255,195,210,0.78)" />
              <circle cx="220" cy="82"  r="13" fill="rgba(255,175,195,0.75)" />

              <circle cx="163" cy="58"  r="20" fill="rgba(255,173,193,0.83)" />
              <circle cx="149" cy="55"  r="15" fill="rgba(255,183,197,0.87)" />
              <circle cx="168" cy="44"  r="14" fill="rgba(255,162,185,0.80)" />
              <circle cx="152" cy="68"  r="12" fill="rgba(255,187,202,0.74)" />
              <circle cx="143" cy="44"  r="11" fill="rgba(255,195,212,0.76)" />

              <circle cx="264" cy="55"  r="19" fill="rgba(255,168,190,0.82)" />
              <circle cx="278" cy="50"  r="15" fill="rgba(255,183,197,0.86)" />
              <circle cx="272" cy="67"  r="13" fill="rgba(255,158,183,0.79)" />
              <circle cx="257" cy="42"  r="14" fill="rgba(255,192,208,0.81)" />
              <circle cx="285" cy="65"  r="10" fill="rgba(255,178,198,0.73)" />

              <circle cx="158" cy="90"  r="16" fill="rgba(255,175,195,0.80)" />
              <circle cx="145" cy="87"  r="13" fill="rgba(255,183,197,0.84)" />
              <circle cx="163" cy="77"  r="11" fill="rgba(255,162,185,0.77)" />

              <circle cx="278" cy="90"  r="15" fill="rgba(255,170,192,0.79)" />
              <circle cx="291" cy="86"  r="12" fill="rgba(255,183,197,0.82)" />
              <circle cx="284" cy="77"  r="11" fill="rgba(255,158,182,0.76)" />

              <circle cx="144" cy="33"  r="11" fill="rgba(255,185,205,0.80)" />
              <circle cx="283" cy="28"  r="11" fill="rgba(255,175,198,0.80)" />
              <circle cx="189" cy="56"  r="12" fill="rgba(255,180,200,0.78)" />

              {[
                [200,68],[214,62],[210,78],[224,72],[165,56],
                [152,53],[271,53],[257,68],[278,87],[144,86],
              ].map(([cx,cy],i)=>(
                <circle key={i} cx={cx} cy={cy} r="2.8" fill="rgba(255,230,240,0.88)" />
              ))}
            </g>

            <ellipse cx="197" cy="174" rx="5"  ry="2.8" fill="rgba(255,183,197,0.68)" transform="rotate(-18,197,174)" />
            <ellipse cx="250" cy="175" rx="4.5" ry="2.5" fill="rgba(255,175,193,0.60)" transform="rotate(12,250,175)" />
            <ellipse cx="175" cy="176" rx="4"   ry="2.2" fill="rgba(255,190,207,0.62)" transform="rotate(-8,175,176)" />

            <g style={{ animation: "pl-breathe 3.2s ease-in-out infinite", transformOrigin: "142px 165px" }}>
              <ellipse cx="142" cy="175" rx="22" ry="5.5" fill="rgba(0,0,0,0.14)" />

              <path d="M134 162 Q125 169 120 174" fill="none" stroke="#f2c2a2" strokeWidth="7" strokeLinecap="round" />
              <path d="M150 162 Q156 169 162 174" fill="none" stroke="#f2c2a2" strokeWidth="7" strokeLinecap="round" />
              <ellipse cx="118" cy="175" rx="7"  ry="4.5" fill="#c84880" />
              <ellipse cx="163" cy="175" rx="7"  ry="4.5" fill="#c84880" />
              <ellipse cx="117" cy="174" rx="5"  ry="2.5" fill="rgba(255,255,255,0.25)" />
              <ellipse cx="162" cy="174" rx="5"  ry="2.5" fill="rgba(255,255,255,0.25)" />

              <path d="M130 148 Q126 157 122 167 Q131 170 142 170 Q153 170 162 167 Q158 157 154 148 Z" fill="#ffb7c5" />
              <path d="M130 148 Q128 153 127 159 L133 159 Q133 153 132 148 Z" fill="rgba(220,90,130,0.35)" />
              <path d="M152 148 Q154 153 155 159 L149 159 Q149 153 150 148 Z" fill="rgba(220,90,130,0.35)" />
              <path d="M136 148 Q142 144 148 148" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
              <rect x="126" y="156" width="32" height="8" rx="4" fill="#e0608a" />
              <rect x="126" y="157" width="32" height="3" rx="1.5" fill="rgba(255,255,255,0.20)" />
              <ellipse cx="163" cy="161" rx="6" ry="5" fill="#e0608a" />
              <ellipse cx="163" cy="160" rx="4" ry="3" fill="rgba(255,140,180,0.5)" />

              <path d="M130 152 Q121 157 116 164" fill="none" stroke="#f2c2a2" strokeWidth="6" strokeLinecap="round" />
              <path d="M154 152 Q163 157 168 164" fill="none" stroke="#f2c2a2" strokeWidth="6" strokeLinecap="round" />
              <circle cx="114" cy="165" r="5.5" fill="#f2c2a2" />
              <circle cx="169" cy="165" r="5.5" fill="#f2c2a2" />
              <ellipse cx="115" cy="162" rx="6" ry="3.5" fill="rgba(255,183,197,0.6)" />
              <ellipse cx="168" cy="162" rx="6" ry="3.5" fill="rgba(255,183,197,0.6)" />

              <rect x="135" y="141" width="12" height="10" rx="5" fill="#f2c2a2" />

              <ellipse cx="142" cy="132" rx="18" ry="17" fill="#f7cab0" />

              <ellipse cx="142" cy="124" rx="19" ry="15" fill="#2c1808" />
              <path d="M124 127 Q118 138 119 150 Q125 153 128 150 Q124 139 126 127 Z" fill="#2c1808" />
              <path d="M160 127 Q166 138 165 150 Q159 153 156 150 Q160 139 158 127 Z" fill="#2c1808" />
              <path d="M124 124 Q128 116 142 114 Q156 116 160 124" fill="#2c1808" />
              <path d="M142 114 Q146 105 143 98"  fill="none" stroke="#2c1808" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="143" cy="97" r="3.2" fill="#2c1808" />
              <path d="M130 120 Q136 115 144 116" fill="none" stroke="rgba(120,70,30,0.4)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="157" cy="122" r="6"   fill="#ff5599" />
              <circle cx="157" cy="122" r="3.5" fill="#ffb7c5" />
              <circle cx="157" cy="122" r="1.5" fill="#ff3377" />
              <line x1="157" y1="128" x2="160" y2="136" stroke="#d4488a" strokeWidth="1.5" strokeLinecap="round" />

              <ellipse cx="134" cy="133" rx="4.5" ry="5" fill="#1c0e04" />
              <ellipse cx="150" cy="133" rx="4.5" ry="5" fill="#1c0e04" />
              <ellipse cx="134" cy="133" rx="3.2" ry="3.8" fill="#4a2890" />
              <ellipse cx="150" cy="133" rx="3.2" ry="3.8" fill="#4a2890" />
              <circle cx="135.5" cy="130.5" r="1.8" fill="white" />
              <circle cx="151.5" cy="130.5" r="1.8" fill="white" />
              <circle cx="134.5" cy="134.5" r="0.9" fill="rgba(255,255,255,0.65)" />
              <circle cx="150.5" cy="134.5" r="0.9" fill="rgba(255,255,255,0.65)" />
              <path d="M129 129 Q131.5 126 134 129" fill="none" stroke="#1c0e04" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M146 129 Q148.5 126 151 129" fill="none" stroke="#1c0e04" strokeWidth="1.2" strokeLinecap="round" />
              <ellipse cx="127" cy="139" rx="6" ry="3.5" fill="rgba(255,120,150,0.38)" />
              <ellipse cx="157" cy="139" rx="6" ry="3.5" fill="rgba(255,120,150,0.38)" />
              <circle cx="142" cy="139" r="1.3" fill="rgba(190,120,100,0.55)" />
              <path d="M136 144 Q142 149 148 144" fill="none" stroke="#c07070" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="139" y="144" width="6" height="2.5" rx="1" fill="rgba(255,255,255,0.7)" />
            </g>

            {[[96,140],[182,108],[310,130],[330,60]].map(([cx,cy],i)=>(
              <circle
                key={i}
                cx={cx} cy={cy} r="2.2"
                fill="rgba(255,240,160,0.92)"
                style={{ animation: `pl-sparkle ${1.5+i*0.4}s ease-in-out ${i*0.3}s infinite` }}
              />
            ))}

            {[0,1,2,3].map(i=>(
              <ellipse key={i} cx={67.5+i*0} cy={178+i*(-0.5)} rx={10-i} ry={3-i*0.2}
                fill="rgba(200,180,160,0.5)"
                transform={`translate(0,${i*6})`}
              />
            ))}
          </svg>
        </div>

        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <p
            style={{
              fontFamily: "'Noto Serif JP','Yu Mincho','Hiragino Mincho ProN','MS Mincho',serif",
              fontSize: "1.72rem",
              fontWeight: 700,
              color: "rgba(42,22,46,0.90)",
              letterSpacing: "0.14em",
              lineHeight: 1.2,
              animation: "pl-kanji-glow 2.8s ease-in-out infinite",
              margin: "0 0 5px 0",
            }}
          >
            桜の世界へようこそ
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontStyle: "italic",
              fontSize: "0.70rem",
              color: "rgba(110,70,90,0.62)",
              letterSpacing: "0.20em",
              animation: "pl-romaji-fade 2.8s ease-in-out infinite",
              margin: 0,
            }}
          >
            Sakura no sekai e yōkoso
          </p>
        </div>

        {/* ── PROGRESS BAR ── */}
        <div className="progress-pill">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-number">{progress}%</span>
        </div>
        <p className="preloader-caption">Loading…</p>
      </div>
    </div>
  );
}

function CustomCursor() {
  const dotRef    = useRef(null);
  const glowRef   = useRef(null);
  const trailRefs = useRef([]);
  const TRAIL_N   = 7;
  const reducedMotion = useContext(MotionContext);

  useEffect(() => {
    const isTouch = !window.matchMedia("(hover: hover)").matches || reducedMotion;
    if (isTouch) return;

    gsap.set([dotRef.current, glowRef.current], { xPercent: -50, yPercent: -50 });
    gsap.set(trailRefs.current, { xPercent: -50, yPercent: -50 });

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(dotRef.current, { x, y, duration: 0.05, ease: "none" });
      gsap.to(glowRef.current, { x, y, duration: 0.22, ease: "power3.out" });
      trailRefs.current.forEach((trail, i) => {
        if (!trail) return;
        gsap.to(trail, { x, y, duration: 0.12 + i * 0.07, ease: "power2.out", overwrite: "auto" });
      });
    };

    const growCursor = () => {
      gsap.to(dotRef.current,  { scale: 2.8, backgroundColor: "rgba(255,183,197,0.9)", duration: 0.3, ease: "power2.out" });
      gsap.to(glowRef.current, { scale: 1.6, opacity: 0.7, duration: 0.3 });
    };
    const shrinkCursor = () => {
      gsap.to(dotRef.current,  { scale: 1, backgroundColor: "#e8738a", duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(glowRef.current, { scale: 1, opacity: 0.35, duration: 0.3 });
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, .link-btn-wrap").forEach((el) => {
      el.addEventListener("mouseenter", growCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });
    return () => { document.removeEventListener("mousemove", onMove); };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="cursor-root" aria-hidden="true">
      <div ref={glowRef}  className="cursor-glow" />
      <div ref={dotRef}   className="cursor-dot"  />
      {Array.from({ length: TRAIL_N }).map((_, i) => (
        <div key={i} ref={(el) => { trailRefs.current[i] = el; }} className="cursor-trail" style={{ "--idx": i, "--total": TRAIL_N }} />
      ))}
    </div>
  );
}

function PageTransition() {
  const overlayRef = useRef(null);
  const textRef    = useRef(null);
  const reducedMotion = useContext(MotionContext);

  useEffect(() => {
    if (reducedMotion) { gsap.set(overlayRef.current, { yPercent: -100 }); return; }
    const tl = gsap.timeline();
    tl.to(textRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power2.in", delay: 0.5 })
      .to(overlayRef.current, { yPercent: -100, duration: 1.0, ease: "expo.inOut" }, "-=0.1");
  }, [reducedMotion]);

  return (
    <div ref={overlayRef} className="page-transition">
      <div ref={textRef} className="pt-content">
        <span className="pt-sakura-icon">🌸</span>
        <span className="pt-name">Muhammad Fahreza</span>
      </div>
    </div>
  );
}

function SplitTextReveal({ text, className }) {
  const containerRef = useRef(null);
  const reducedMotion = useContext(MotionContext);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".char");
    if (reducedMotion) { gsap.set(chars, { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }); return; }
    gsap.fromTo(chars,
      { opacity: 0, y: 36, rotateX: -70, filter: "blur(6px)" },
      { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", duration: 0.65, stagger: 0.032, ease: "back.out(1.5)", delay: 1.2 }
    );
  }, [reducedMotion]);

  return (
    <h1 ref={containerRef} className={`${className} name-split`}>
      {text.split("").map((char, i) => (
        <span key={i} className="char">{char === " " ? "\u00A0" : char}</span>
      ))}
    </h1>
  );
}

function MagneticBtn({ children, strength = 0.38, className = "" }) {
  const wrapRef  = useRef(null);
  const innerRef = useRef(null);
  const reducedMotion = useContext(MotionContext);

  useEffect(() => {
    const isTouch = !window.matchMedia("(hover: hover)").matches || reducedMotion;
    if (isTouch) return;
    const wrap  = wrapRef.current;
    const inner = innerRef.current;
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      gsap.to(inner, { x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength, duration: 0.35, ease: "power2.out", overwrite: "auto" });
    };
    const onLeave = () => { gsap.to(inner, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.45)", overwrite: "auto" }); };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => { wrap.removeEventListener("mousemove", onMove); wrap.removeEventListener("mouseleave", onLeave); };
  }, [strength, reducedMotion]);

  return (
    <div ref={wrapRef} className={`magnetic-wrap ${className}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

function LinkButton({ label, icon, href, index, previewBg, previewDesc }) {
  const previewRef = useRef(null);
  const hasPreview = !!previewBg;
  const reducedMotion = useContext(MotionContext);

  const onEnter = () => {
    if (!hasPreview || !previewRef.current || reducedMotion) return;
    gsap.killTweensOf(previewRef.current);
    gsap.fromTo(previewRef.current, { opacity: 0, y: 10, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" });
  };
  const onLeave = () => {
    if (!hasPreview || !previewRef.current || reducedMotion) return;
    gsap.killTweensOf(previewRef.current);
    gsap.to(previewRef.current, { opacity: 0, y: 8, scale: 0.94, duration: 0.2, ease: "power2.in" });
  };

  return (
    <div className="link-btn-wrap" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <a href={href} className="link-btn" style={{ animationDelay: `${reducedMotion ? 0 : 0.3 + index * 0.08}s` }} target="_blank" rel="noopener noreferrer">
        <span className="link-btn__icon">{icon}</span>
        <span className="link-btn__label">{label}</span>
        <span className="link-btn__arrow">→</span>
      </a>
      {hasPreview && (
        <div ref={previewRef} className="hover-preview" style={{ background: previewBg }}>
          <span className="hover-preview__icon">{icon}</span>
          <div className="hover-preview__info">
            <strong>{label}</strong>
            <span>{previewDesc}</span>
          </div>
        </div>
      )}
    </div>
  );
}
class SakuraSoundEngine {
  constructor() {
    this.ctx = null; this.masterGain = null; this.nodes = []; this.playing = false;
    this._currentVolume = 0.35;  
    this._chimeInterval = null;
  }

  _createBreezeBuffer(seconds = 10) {
    const sr = this.ctx.sampleRate;
    const buf = this.ctx.createBuffer(1, sr * seconds, sr);
    const d = buf.getChannelData(0);
    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
    for (let i = 0; i < d.length; i++) {
      const wh = Math.random() * 2 - 1;
      b0=0.99886*b0+wh*0.0555179; b1=0.99332*b1+wh*0.0750759;
      b2=0.969*b2+wh*0.153852; b3=0.8665*b3+wh*0.3104856;
      b4=0.55*b4+wh*0.5329522; b5=-0.7616*b5-wh*0.016898;
      d[i]=(b0+b1+b2+b3+b4+b5+b6+wh*0.5362)*0.06; b6=wh*0.115926;
    }
    return buf;
  }

  _addBreezeLayer({ lfoFreq, filterFreq, filterQ, gain, lfoDepth }) {
    const src = this.ctx.createBufferSource();
    src.buffer = this._createBreezeBuffer(10); src.loop = true;
    const hpf = this.ctx.createBiquadFilter(); hpf.type="highpass"; hpf.frequency.value=400; hpf.Q.value=0.5;
    const bpf = this.ctx.createBiquadFilter(); bpf.type="bandpass"; bpf.frequency.value=filterFreq; bpf.Q.value=filterQ;
    const lpf = this.ctx.createBiquadFilter(); lpf.type="lowpass"; lpf.frequency.value=filterFreq*2.5;
    const lfo = this.ctx.createOscillator(); lfo.type="sine"; lfo.frequency.value=lfoFreq;
    const lfoG = this.ctx.createGain(); lfoG.gain.value=lfoDepth;
    const layG = this.ctx.createGain(); layG.gain.value=gain;
    src.connect(hpf); hpf.connect(bpf); bpf.connect(lpf); lpf.connect(layG);
    lfo.connect(lfoG); lfoG.connect(layG.gain); layG.connect(this.masterGain);
    lfo.start(0); src.start(0, Math.random()*10);
    this.nodes.push({ src, lfo });
  }

  _playChime() {
    if (!this.ctx||!this.playing) return;
    const NOTES=[523.25,587.33,659.25,783.99,880,1046.5,1174.66,1318.51];
    const freq=NOTES[Math.floor(Math.random()*NOTES.length)]; const now=this.ctx.currentTime;
    const osc1=this.ctx.createOscillator(); osc1.type="sine"; osc1.frequency.value=freq;
    const osc2=this.ctx.createOscillator(); osc2.type="triangle"; osc2.frequency.value=freq*2;
    const osc3=this.ctx.createOscillator(); osc3.type="sine"; osc3.frequency.value=freq*3.01;
    const cG=this.ctx.createGain();
    const decay=2.5+Math.random()*2; const peak=0.1+Math.random()*0.05; // ✅ Naik dari 0.06+0.04
    cG.gain.setValueAtTime(0,now); cG.gain.linearRampToValueAtTime(peak,now+0.005); cG.gain.exponentialRampToValueAtTime(0.0001,now+decay);
    const oG=this.ctx.createGain(); oG.gain.value=0.4;   // ✅ Naik dari 0.3
    const tG=this.ctx.createGain(); tG.gain.value=0.12;  // ✅ Naik dari 0.08
    osc1.connect(cG); osc2.connect(oG); oG.connect(cG); osc3.connect(tG); tG.connect(cG); cG.connect(this.masterGain);
    [osc1,osc2,osc3].forEach(o=>{ o.start(now); o.stop(now+decay+0.1); });
  }

  _startChimeLoop() {
    const next=()=>{ if(!this.playing) return; this._chimeInterval=setTimeout(()=>{ this._playChime(); if(Math.random()<0.3) setTimeout(()=>this._playChime(),200+Math.random()*400); next(); },1500+Math.random()*3500); };
    setTimeout(()=>{ this._playChime(); next(); },800);
  }

  _stopChimeLoop() { if(this._chimeInterval){clearTimeout(this._chimeInterval);this._chimeInterval=null;} }

  _startBirdLoop() { const sch=()=>{ if(!this.playing) return; this._birdTimeout=setTimeout(()=>{ this._playBirdChirp(); sch(); },4000+Math.random()*8000); }; setTimeout(()=>sch(),3000); }

  _playBirdChirp() {
    if(!this.ctx||!this.playing) return;
    const now=this.ctx.currentTime; const bf=1800+Math.random()*1200;
    const osc=this.ctx.createOscillator(); osc.type="sine";
    osc.frequency.setValueAtTime(bf,now); osc.frequency.linearRampToValueAtTime(bf*1.3,now+0.05);
    osc.frequency.linearRampToValueAtTime(bf*0.9,now+0.12); osc.frequency.linearRampToValueAtTime(bf*1.15,now+0.18);
    const bG=this.ctx.createGain();
    bG.gain.setValueAtTime(0,now); bG.gain.linearRampToValueAtTime(0.035,now+0.01);  // ✅ Naik dari 0.02
    bG.gain.linearRampToValueAtTime(0.025,now+0.1); bG.gain.exponentialRampToValueAtTime(0.0001,now+0.25);
    osc.connect(bG); bG.connect(this.masterGain); osc.start(now); osc.stop(now+0.3);
  }

  _stopBirdLoop() { if(this._birdTimeout){clearTimeout(this._birdTimeout);this._birdTimeout=null;} }

  init() {
    if(this.ctx) return;
    this.ctx=new(window.AudioContext||window.webkitAudioContext)();
    this.masterGain=this.ctx.createGain(); this.masterGain.gain.value=0; this.masterGain.connect(this.ctx.destination);

    this._addBreezeLayer({lfoFreq:0.06,filterFreq:800, filterQ:0.4,gain:0.55,lfoDepth:0.22});
    this._addBreezeLayer({lfoFreq:0.12,filterFreq:1800,filterQ:0.6,gain:0.35,lfoDepth:0.16});
    this._addBreezeLayer({lfoFreq:0.03,filterFreq:3500,filterQ:0.3,gain:0.2, lfoDepth:0.08});
    this.setVolume(this._currentVolume,0);
  }

  play() {
    if(!this.ctx) this.init();
    if(this.ctx.state==="suspended") this.ctx.resume();
    const now=this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now); this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,now);
    this.masterGain.gain.linearRampToValueAtTime(this._currentVolume,now+2.5);
    this.playing=true; this._startChimeLoop(); this._startBirdLoop();
  }

  pause() {
    if(!this.ctx) return;
    const now=this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now); this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,now);
    this.masterGain.gain.linearRampToValueAtTime(0,now+1.0);
    this.playing=false; this._stopChimeLoop(); this._stopBirdLoop();
  }

  setVolume(val,ramp=0.3) {
    this._currentVolume=Math.min(1,Math.max(0,val));
    if(this.ctx&&this.masterGain){
      const now=this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now); this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,now);
      this.masterGain.gain.linearRampToValueAtTime(this._currentVolume,now+ramp);
    }
  }

  isPlaying(){return this.playing;}

  destroy(){
    this._stopChimeLoop(); this._stopBirdLoop();
    this.nodes.forEach(({src,lfo})=>{ try{src.stop()}catch(_){} try{lfo.stop()}catch(_){} });
    if(this.ctx) this.ctx.close();
  }
}

function AudioControl({ engineRef }) {
  const [muted, setMuted] = useState(() => localStorage.getItem("sakuraMuted") === "true");
  const storedVol = useRef(0.35);  // ✅ Sesuai default engine

  const toggleMute = () => {
    const e = engineRef.current;
    if (!e) return; 
    if (muted) { e.setVolume(storedVol.current); setMuted(false); localStorage.setItem("sakuraMuted","false"); }
    else { storedVol.current=e._currentVolume; e.setVolume(0); setMuted(true); localStorage.setItem("sakuraMuted","true"); }
  };

  return (
    <div className="audio-wrap">
      <MagneticBtn strength={0.25}>
        <button className={`audio-btn ${!muted ? "audio-btn--playing" : ""}`} onClick={toggleMute} aria-label={muted ? "Nyalakan suara" : "Matikan suara"}>
          {muted ? (
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
          {!muted && (<div className="audio-wave"><span /><span /><span /></div>)}
        </button>
      </MagneticBtn>
    </div>
  );
}

function SakuraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    let t = 0, animId;

    const bgImg = new Image(); bgImg.src = "/sakura-bg.png"; let bgLoaded = false;
    bgImg.onload = () => { bgLoaded = true; };

    const PETAL_COLORS = ["rgba(255,183,197,0.85)","rgba(255,200,210,0.80)","rgba(255,160,180,0.75)","rgba(255,220,230,0.70)","rgba(248,140,170,0.80)","rgba(255,175,195,0.90)"];
    const petals = Array.from({ length: 55 }, () => ({
      x: Math.random()*W*1.2-W*0.1, y: Math.random()*H*1.2-H*0.3,
      size: 6+Math.random()*12, rotation: Math.random()*Math.PI*2,
      rotSpd: (Math.random()-0.5)*0.04, fallSpd: 0.4+Math.random()*1.0,
      driftSpd: 0.5+Math.random()*1.5, wobbleAmp: 20+Math.random()*40,
      wobbleSpd: 0.5+Math.random()*1.5, phase: Math.random()*Math.PI*2,
      color: PETAL_COLORS[Math.floor(Math.random()*PETAL_COLORS.length)],
      opacity: 0.6+Math.random()*0.4, scaleY: 0.5+Math.random()*0.5,
    }));

    const winds = Array.from({ length: 35 }, () => ({
      x: Math.random()*W*1.5-W*0.25, y: Math.random()*H,
      len: 60+Math.random()*160, spd: 2.0+Math.random()*3.5,
      alpha: 0.04+Math.random()*0.1, w: 0.5+Math.random()*1.0,
    }));

    const drawPetal = (x,y,size,rot,color,opacity,scaleY) => {
      ctx.save(); ctx.translate(x,y); ctx.rotate(rot); ctx.scale(1,scaleY); ctx.globalAlpha=opacity;
      ctx.beginPath(); ctx.moveTo(0,0);
      ctx.bezierCurveTo(size*0.4,-size*0.6,size,-size*0.4,size*0.5,0);
      ctx.bezierCurveTo(size,size*0.4,size*0.4,size*0.6,0,0);
      ctx.fillStyle=color; ctx.shadowBlur=4; ctx.shadowColor="rgba(255,183,197,0.3)"; ctx.fill();
      ctx.globalAlpha=1; ctx.shadowBlur=0; ctx.restore();
    };

    const draw = () => {
      t+=0.008; ctx.clearRect(0,0,W,H);
      const sky=ctx.createLinearGradient(0,0,0,H);
      sky.addColorStop(0,"#87CEEB"); sky.addColorStop(0.25,"#a8dcf0");
      sky.addColorStop(0.5,"#c9e8ff"); sky.addColorStop(0.75,"#e8d5e0"); sky.addColorStop(1,"#fce4ec");
      ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);
      if(bgLoaded){
        ctx.globalAlpha=0.45;
        const ir=bgImg.width/bgImg.height,cr=W/H;
        let dw,dh,dx,dy;
        if(cr>ir){dw=W;dh=W/ir;dx=0;dy=(H-dh)/2;}else{dh=H;dw=H*ir;dy=0;dx=(W-dw)/2;}
        ctx.drawImage(bgImg,dx,dy,dw,dh); ctx.globalAlpha=1;
      }
      [{cx:W*0.2,cy:H*0.15,r:W*0.4,c:"rgba(255,200,220,0.18)"},{cx:W*0.85,cy:H*0.1,r:W*0.35,c:"rgba(255,180,200,0.15)"}].forEach(({cx,cy,r,c})=>{
        const g=ctx.createRadialGradient(cx,cy,0,cx,cy,r); g.addColorStop(0,c); g.addColorStop(1,"transparent");
        ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      });
      winds.forEach(l=>{
        l.x+=l.spd; if(l.x>W+l.len){l.x=-l.len*1.2;l.y=Math.random()*H;}
        const dy=l.len*0.02;
        const wg=ctx.createLinearGradient(l.x,l.y,l.x+l.len,l.y+dy);
        wg.addColorStop(0,"rgba(255,255,255,0)"); wg.addColorStop(0.15,`rgba(255,255,255,${l.alpha})`);
        wg.addColorStop(0.85,`rgba(255,240,245,${l.alpha})`); wg.addColorStop(1,"rgba(255,255,255,0)");
        ctx.beginPath(); ctx.moveTo(l.x,l.y); ctx.lineTo(l.x+l.len,l.y+dy);
        ctx.strokeStyle=wg; ctx.lineWidth=l.w; ctx.stroke();
      });
      const windX=Math.sin(t*0.5)*0.8;
      petals.forEach(p=>{
        p.x+=p.driftSpd+windX; p.y+=p.fallSpd; p.x+=Math.sin(t*p.wobbleSpd+p.phase)*0.5; p.rotation+=p.rotSpd;
        if(p.y>H+20){p.y=-20;p.x=Math.random()*W*1.2-W*0.1;}
        if(p.x>W+30){p.x=-20;p.y=Math.random()*H*0.5;}
        drawPetal(p.x+Math.sin(t*p.wobbleSpd+p.phase)*p.wobbleAmp*0.02,p.y,p.size,p.rotation,p.color,p.opacity,p.scaleY);
      });
      animId=requestAnimationFrame(draw);
    };
    draw();

    const onResize=()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;};
    window.addEventListener("resize",onResize);
    return ()=>{cancelAnimationFrame(animId);window.removeEventListener("resize",onResize);};
  }, []);

  return <canvas ref={canvasRef} className="neon-city-canvas" />;
}

function SectionLabel({ text }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      <span className="label-text">{text}</span>
      <span className="label-dot" />
    </div>
  );
}

function SwipeNotifier() {
  const [message, setMessage] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    let startX = 0;
    const handleTouchStart = (e) => { startX = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        setMessage(diff > 0 ? "Swiped right 👉" : "Swiped left 👈");
        setTimeout(() => setMessage(null), 2000);
      }
    };
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => { el.removeEventListener("touchstart", handleTouchStart); el.removeEventListener("touchend", handleTouchEnd); };
  }, []);

  return (
    <>
      <div ref={cardRef} className="swipe-area" />
      {message && <div className="swipe-notification">{message}</div>}
    </>
  );
}

function SecretSection({ onClose }) {
  const overlayRef = useRef(null);
  useEffect(() => { if(overlayRef.current) gsap.fromTo(overlayRef.current,{opacity:0},{opacity:1,duration:0.5}); }, []);
  return (
    <div ref={overlayRef} className="secret-overlay" onClick={onClose}>
      <div className="secret-card" onClick={(e) => e.stopPropagation()}>
        <div className="secret-icon">🌸🎮🌸</div>
        <h2>🎉 Easter Egg Unlocked! 🎉</h2>
        <p>You discovered the hidden Sakura Garden.<br/>Enjoy the blossoms!</p>
        <button className="secret-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default function App() {
  const engineRef  = useRef(null);
  const fogRef     = useRef(null);
  const cardRef    = useRef(null);
  const avatarRef  = useRef(null);
  const [loading, setLoading] = useState(true);
  const [konamiActive, setKonamiActive] = useState(false);
  const reducedMotion = useReducedMotion();

  useKonamiCode(() => setKonamiActive(true));
  const triggerSakuraBurst = useSakuraBurst(avatarRef);

  useSEO({
    title: "Muhammad Fahreza | Web Programmer",
    description: "Personal link Bio Profile Muhammad Fahreza. Temukan semua tautan penting: LinkedIn, GitHub, portofolio, musik, donasi, dan layanan pembuatan website.",
    ogImage: "/src/assets/fotome.jpg",
  });

  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({ duration: 1.3, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tickerFn = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.destroy(); gsap.ticker.remove(tickerFn); };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    gsap.to(cardRef.current, { y: -30, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 } });
    gsap.to(".corner-glow--tl", { y: -60, x: -30, ease: "none", scrollTrigger: { trigger: ".page", start: "top top", end: "bottom top", scrub: 2 } });
    gsap.to(".corner-glow--br", { y: 60, x: 30, ease: "none", scrollTrigger: { trigger: ".page", start: "top top", end: "bottom top", scrub: 2 } });
    gsap.to(".corner-glow--tr", { y: -40, ease: "none", scrollTrigger: { trigger: ".page", start: "top top", end: "bottom top", scrub: 1.5 } });
    gsap.to(".corner-glow--bl", { y: 40, ease: "none", scrollTrigger: { trigger: ".page", start: "top top", end: "bottom top", scrub: 1.5 } });
    gsap.to(fogRef.current, { opacity: 0.4, ease: "none", scrollTrigger: { trigger: ".page", start: "top top", end: "50% top", scrub: true } });
  }, [reducedMotion]);

  useEffect(() => {
    if (loading) return;                
    const engine = new SakuraSoundEngine();
    engineRef.current = engine;

    const wasMuted = localStorage.getItem("sakuraMuted") === "true";
    if (wasMuted) engine.setVolume(0);
    engine.play();

    const resume = () => {
      if (engine.ctx && engine.ctx.state === "suspended") engine.play();
      document.removeEventListener("click", resume);
      document.removeEventListener("touchstart", resume);
    };
    if (engine.ctx && engine.ctx.state === "suspended") {
      document.addEventListener("click", resume);
      document.addEventListener("touchstart", resume);
    }

    return () => {
      engine.destroy();
    };
  }, [loading]);

  let globalIndex = 0;

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <MotionContext.Provider value={reducedMotion}>
      <div className="page">
        <CustomCursor />
        <PageTransition />
        <SakuraBackground />
        <div ref={fogRef} className="edge-fog" />
        <div className="corner-glows">
          <div className="corner-glow corner-glow--tl" />
          <div className="corner-glow corner-glow--tr" />
          <div className="corner-glow corner-glow--bl" />
          <div className="corner-glow corner-glow--br" />
          <div className="corner-glow corner-glow--ct" />
        </div>
        <AudioControl engineRef={engineRef} />
        <section className="hero">
          <main ref={cardRef} className="card">
            <div className="avatar-wrap">
              <div className="avatar-ring" />
              <img ref={avatarRef} src={PROFILE.avatar} alt={PROFILE.name} className="avatar-img" onClick={triggerSakuraBurst} style={{ cursor: "pointer" }} />
              <div className="avatar-badge">🌸</div>
            </div>
            <div className="identity">
              <SplitTextReveal text={PROFILE.name} className="name" />
              <p className="bio">{PROFILE.bio}</p>
            </div>
            <SectionLabel text="My Bio" />
            <nav className="links">
              {LINKS.map((link) => (<LinkButton key={link.id} {...link} index={globalIndex++} />))}
            </nav>
            <SectionLabel text="Music" />
            <nav className="links">
              {MUSIC_LINKS.map((link) => (<LinkButton key={link.id} {...link} index={globalIndex++} />))}
            </nav>
            <SectionLabel text="Donation" />
            <nav className="links">
              {DONATION_LINKS.map((link) => (<LinkButton key={link.id} {...link} index={globalIndex++} />))}
            </nav>
            <SectionLabel text="Services" />
            <div className="links">
              {SERVICE_LINKS.map((link) => (<LinkButton key={link.id} {...link} index={globalIndex++} />))}
            </div>
            <div className="socials">
              {SOCIALS.map((s) => (
                <MagneticBtn key={s.name} strength={0.45}>
                  <a href={s.href} className="social-btn" aria-label={s.name} target="_blank" rel="noopener noreferrer">{s.icon}</a>
                </MagneticBtn>
              ))}
            </div>
            <SwipeNotifier />
          </main>
        </section>
        {konamiActive && <SecretSection onClose={() => setKonamiActive(false)} />}
      </div>
    </MotionContext.Provider>
  );
}