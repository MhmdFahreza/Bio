import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
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
      let element = document.querySelector(
        `meta[${property ? "property" : "name"}="${property || name}"]`,
      );
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

// SVG icon components (tetap, tidak diubah)
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
  avatar: "/fotome.jpg",
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
      petal.style.width = 6 + Math.random() * 10 + "px";
      petal.style.height = petal.style.width;
      petal.style.background = `rgba(255,183,197,${0.7 + Math.random() * 0.3})`;
      document.body.appendChild(petal);
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 150;
      const toX = startX + Math.cos(angle) * distance;
      const toY = startY + Math.sin(angle) * distance + 200;
      gsap.fromTo(
        petal,
        { x: 0, y: 0, scale: 0, rotation: Math.random() * 360, opacity: 1 },
        {
          x: toX - startX,
          y: toY - startY,
          scale: 1 + Math.random(),
          rotation: Math.random() * 720 - 360,
          opacity: 0,
          duration: 1.2 + Math.random() * 1.2,
          ease: "power2.out",
          onComplete: () => petal.remove(),
        },
      );
    }
  }, [avatarRef, reducedMotion]);
  return triggerBurst;
};

function PageTransition() {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const reducedMotion = useContext(MotionContext);

  useEffect(() => {
    if (reducedMotion) {
      gsap.set(overlayRef.current, { yPercent: -100 });
      return;
    }
    const tl = gsap.timeline();
    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      delay: 0.5,
    }).to(
      overlayRef.current,
      { yPercent: -100, duration: 1.0, ease: "expo.inOut" },
      "-=0.1",
    );
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
    if (reducedMotion) {
      gsap.set(chars, { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" });
      return;
    }
    gsap.fromTo(
      chars,
      { opacity: 0, y: 36, rotateX: -70, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.65,
        stagger: 0.032,
        ease: "back.out(1.5)",
        delay: 1.2,
      },
    );
  }, [reducedMotion]);

  return (
    <h1 ref={containerRef} className={`${className} name-split`}>
      {text.split("").map((char, i) => (
        <span key={i} className="char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

function MagneticBtn({ children, strength = 0.38, className = "" }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const reducedMotion = useContext(MotionContext);

  useEffect(() => {
    const isTouch =
      !window.matchMedia("(hover: hover)").matches || reducedMotion;
    if (isTouch) return;
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(inner, {
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    const onLeave = () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.45)",
        overwrite: "auto",
      });
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
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
    gsap.fromTo(
      previewRef.current,
      { opacity: 0, y: 10, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" },
    );
  };
  const onLeave = () => {
    if (!hasPreview || !previewRef.current || reducedMotion) return;
    gsap.killTweensOf(previewRef.current);
    gsap.to(previewRef.current, {
      opacity: 0,
      y: 8,
      scale: 0.94,
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <div
      className="link-btn-wrap"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <a
        href={href}
        className="link-btn"
        style={{ animationDelay: `${reducedMotion ? 0 : 0.3 + index * 0.08}s` }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="link-btn__icon">{icon}</span>
        <span className="link-btn__label">{label}</span>
        <span className="link-btn__arrow">→</span>
      </a>
      {hasPreview && (
        <div
          ref={previewRef}
          className="hover-preview"
          style={{ background: previewBg }}
        >
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

function SakuraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth,
      H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    let t = 0,
      animId;

    const bgImg = new Image();
    bgImg.src = "/sakura-bg.png";
    let bgLoaded = false;
    bgImg.onload = () => {
      bgLoaded = true;
    };

    const PETAL_COLORS = [
      "rgba(255,183,197,0.85)",
      "rgba(255,200,210,0.80)",
      "rgba(255,160,180,0.75)",
      "rgba(255,220,230,0.70)",
      "rgba(248,140,170,0.80)",
      "rgba(255,175,195,0.90)",
    ];
    // ⬇️ dikurangi dari 55 → 25 untuk performa
    const petals = Array.from({ length: 25 }, () => ({
      x: Math.random() * W * 1.2 - W * 0.1,
      y: Math.random() * H * 1.2 - H * 0.3,
      size: 6 + Math.random() * 12,
      rotation: Math.random() * Math.PI * 2,
      rotSpd: (Math.random() - 0.5) * 0.04,
      fallSpd: 0.4 + Math.random() * 1.0,
      driftSpd: 0.5 + Math.random() * 1.5,
      wobbleAmp: 20 + Math.random() * 40,
      wobbleSpd: 0.5 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      opacity: 0.6 + Math.random() * 0.4,
      scaleY: 0.5 + Math.random() * 0.5,
    }));

    // ⬇️ dikurangi dari 35 → 15 untuk performa
    const winds = Array.from({ length: 15 }, () => ({
      x: Math.random() * W * 1.5 - W * 0.25,
      y: Math.random() * H,
      len: 60 + Math.random() * 160,
      spd: 2.0 + Math.random() * 3.5,
      alpha: 0.04 + Math.random() * 0.1,
      w: 0.5 + Math.random() * 1.0,
    }));

    const drawPetal = (x, y, size, rot, color, opacity, scaleY) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(1, scaleY);
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        size * 0.4,
        -size * 0.6,
        size,
        -size * 0.4,
        size * 0.5,
        0,
      );
      ctx.bezierCurveTo(size, size * 0.4, size * 0.4, size * 0.6, 0, 0);
      ctx.fillStyle = color;
      ctx.shadowBlur = 4;
      ctx.shadowColor = "rgba(255,183,197,0.3)";
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.restore();
    };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, "#87CEEB");
      sky.addColorStop(0.25, "#a8dcf0");
      sky.addColorStop(0.5, "#c9e8ff");
      sky.addColorStop(0.75, "#e8d5e0");
      sky.addColorStop(1, "#fce4ec");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);
      if (bgLoaded) {
        ctx.globalAlpha = 0.45;
        const ir = bgImg.width / bgImg.height,
          cr = W / H;
        let dw, dh, dx, dy;
        if (cr > ir) {
          dw = W;
          dh = W / ir;
          dx = 0;
          dy = (H - dh) / 2;
        } else {
          dh = H;
          dw = H * ir;
          dy = 0;
          dx = (W - dw) / 2;
        }
        ctx.drawImage(bgImg, dx, dy, dw, dh);
        ctx.globalAlpha = 1;
      }
      [
        { cx: W * 0.2, cy: H * 0.15, r: W * 0.4, c: "rgba(255,200,220,0.18)" },
        { cx: W * 0.85, cy: H * 0.1, r: W * 0.35, c: "rgba(255,180,200,0.15)" },
      ].forEach(({ cx, cy, r, c }) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, c);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });
      winds.forEach((l) => {
        l.x += l.spd;
        if (l.x > W + l.len) {
          l.x = -l.len * 1.2;
          l.y = Math.random() * H;
        }
        const dy = l.len * 0.02;
        const wg = ctx.createLinearGradient(l.x, l.y, l.x + l.len, l.y + dy);
        wg.addColorStop(0, "rgba(255,255,255,0)");
        wg.addColorStop(0.15, `rgba(255,255,255,${l.alpha})`);
        wg.addColorStop(0.85, `rgba(255,240,245,${l.alpha})`);
        wg.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + l.len, l.y + dy);
        ctx.strokeStyle = wg;
        ctx.lineWidth = l.w;
        ctx.stroke();
      });
      const windX = Math.sin(t * 0.5) * 0.8;
      petals.forEach((p) => {
        p.x += p.driftSpd + windX;
        p.y += p.fallSpd;
        p.x += Math.sin(t * p.wobbleSpd + p.phase) * 0.5;
        p.rotation += p.rotSpd;
        if (p.y > H + 20) {
          p.y = -20;
          p.x = Math.random() * W * 1.2 - W * 0.1;
        }
        if (p.x > W + 30) {
          p.x = -20;
          p.y = Math.random() * H * 0.5;
        }
        drawPetal(
          p.x + Math.sin(t * p.wobbleSpd + p.phase) * p.wobbleAmp * 0.02,
          p.y,
          p.size,
          p.rotation,
          p.color,
          p.opacity,
          p.scaleY,
        );
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
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
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        setMessage(diff > 0 ? "Swiped right 👉" : "Swiped left 👈");
        setTimeout(() => setMessage(null), 2000);
      }
    };
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <div ref={cardRef} className="swipe-area" />
      {message && <div className="swipe-notification">{message}</div>}
    </>
  );
}

export default function App() {
  const fogRef = useRef(null);
  const cardRef = useRef(null);
  const avatarRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const triggerSakuraBurst = useSakuraBurst(avatarRef);

  useSEO({
    title: "Muhammad Fahreza",
    description:
      "Personal link Bio Profile Muhammad Fahreza. Temukan semua tautan penting: LinkedIn, GitHub, portofolio, musik, donasi, dan layanan pembuatan website.",
    ogImage: "/fotome.jpg",
  });

  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({
      duration: 1.0, // sedikit dikurangi
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // lebih ringan
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const tickerFn = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    // hanya card parallax yang dipertahankan
    gsap.to(cardRef.current, {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
    // animasi corner glows & fog dihapus agar scroll ringan

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [reducedMotion]);

  let globalIndex = 0;

  return (
    <MotionContext.Provider value={reducedMotion}>
      <div className="page">
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
      </div>
    </MotionContext.Provider>
  );
}