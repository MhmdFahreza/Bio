/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

/* ====================== ICONS ====================== */
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

/* ====================== DATA ====================== */
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
  },
  {
    id: 2,
    label: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/MhmdFahreza",
  },
  {
    id: 3,
    label: "My Portfolio Website",
    icon: <PortfolioIcon />,
    href: "https://muhammadfahreza.vercel.app/",
  },
  {
    id: 4,
    label: "Discord Community",
    icon: <DiscordIcon />,
    href: "https://discord.gg/UncurKFS",
  },
];

const MUSIC_LINKS = [
  {
    id: 5,
    label: "Spotify",
    icon: <MusicNoteIcon />,
    href: "https://open.spotify.com/user/duezo5jo46nrrfj5qtr89e34u?si=13180a662e6f4a30",
  },
  {
    id: 6,
    label: "YouTube Music",
    icon: <MusicNoteIcon />,
    href: "https://music.youtube.com/playlist?list=PL9X21xjKqYoXnoUX4vl0EMhs0iQWEvE1k",
  },
];

const DONATION_LINKS = [
  {
    id: 7,
    label: "Trakteer",
    icon: <HeartIcon />,
    href: "https://trakteer.id/muhammad_fahreza19",
  },
  {
    id: 8,
    label: "Saweria",
    icon: <HeartIcon />,
    href: "https://saweria.co/FareekzYT",
  },
  {
    id: 9,
    label: "Tako",
    icon: <HeartIcon />,
    href: "https://tako.id/MuhammadFahreza",
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

/* ====================== SAKURA SOUND ENGINE (Web Audio API) ====================== */
/* Generates: gentle breeze + Japanese furin wind chimes + soft ambient pad */
class SakuraSoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.nodes = [];
    this.playing = false;
    this._currentVolume = 0.12;
    this._chimeInterval = null;
  }

  /* ── Gentle breeze noise buffer ── */
  _createBreezeBuffer(seconds = 10) {
    const sr = this.ctx.sampleRate;
    const buf = this.ctx.createBuffer(1, sr * seconds, sr);
    const d = buf.getChannelData(0);
    let b0 = 0,
      b1 = 0,
      b2 = 0,
      b3 = 0,
      b4 = 0,
      b5 = 0,
      b6 = 0;
    for (let i = 0; i < d.length; i++) {
      const wh = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + wh * 0.0555179;
      b1 = 0.99332 * b1 + wh * 0.0750759;
      b2 = 0.969 * b2 + wh * 0.153852;
      b3 = 0.8665 * b3 + wh * 0.3104856;
      b4 = 0.55 * b4 + wh * 0.5329522;
      b5 = -0.7616 * b5 - wh * 0.016898;
      d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + wh * 0.5362) * 0.06;
      b6 = wh * 0.115926;
    }
    return buf;
  }

  /* ── Soft breeze layer (high-pass filtered, gentle sway) ── */
  _addBreezeLayer({ lfoFreq, filterFreq, filterQ, gain, lfoDepth }) {
    const src = this.ctx.createBufferSource();
    src.buffer = this._createBreezeBuffer(10);
    src.loop = true;
    // High-pass to keep it airy, not rumbly
    const hpf = this.ctx.createBiquadFilter();
    hpf.type = "highpass";
    hpf.frequency.value = 400;
    hpf.Q.value = 0.5;
    const bpf = this.ctx.createBiquadFilter();
    bpf.type = "bandpass";
    bpf.frequency.value = filterFreq;
    bpf.Q.value = filterQ;
    const lpf = this.ctx.createBiquadFilter();
    lpf.type = "lowpass";
    lpf.frequency.value = filterFreq * 2.5;
    // Gentle LFO for swaying wind
    const lfo = this.ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = lfoFreq;
    const lfoGainNode = this.ctx.createGain();
    lfoGainNode.gain.value = lfoDepth;
    const layerGain = this.ctx.createGain();
    layerGain.gain.value = gain;
    src.connect(hpf);
    hpf.connect(bpf);
    bpf.connect(lpf);
    lpf.connect(layerGain);
    lfo.connect(lfoGainNode);
    lfoGainNode.connect(layerGain.gain);
    layerGain.connect(this.masterGain);
    lfo.start(0);
    src.start(0, Math.random() * 10);
    this.nodes.push({ src, lfo });
  }

  /* ── Ambient pad (soft sustained tones) ── */
  _addAmbientPad() {
    // Play two detuned sine waves for a warm, dreamy pad
    const padFreqs = [220, 330]; // A3 & E4 — gentle fifth
    padFreqs.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      // Slight detuning for shimmer
      osc.detune.value = (Math.random() - 0.5) * 8;
      const padGain = this.ctx.createGain();
      padGain.gain.value = 0.025;
      // Very slow tremolo for life
      const trem = this.ctx.createOscillator();
      trem.type = "sine";
      trem.frequency.value = 0.08 + Math.random() * 0.06;
      const tremGain = this.ctx.createGain();
      tremGain.gain.value = 0.012;
      osc.connect(padGain);
      trem.connect(tremGain);
      tremGain.connect(padGain.gain);
      padGain.connect(this.masterGain);
      osc.start(0);
      trem.start(0);
      this.nodes.push({ src: osc, lfo: trem });
    });
  }

  /* ── Japanese furin wind chime (single strike) ── */
  _playChime() {
    if (!this.ctx || !this.playing) return;
    // Japanese pentatonic scale (In Sen): frequencies in higher octave for bell-like quality
    const CHIME_NOTES = [
      523.25, // C5
      587.33, // D5
      659.25, // E5
      783.99, // G5
      880.0, // A5
      1046.5, // C6
      1174.66, // D6
      1318.51, // E6
    ];
    const freq = CHIME_NOTES[Math.floor(Math.random() * CHIME_NOTES.length)];
    const now = this.ctx.currentTime;

    // Main tone (sine for purity)
    const osc1 = this.ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = freq;

    // Harmonic overtone (triangle, octave up, softer)
    const osc2 = this.ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.value = freq * 2;

    // Third partial for shimmer
    const osc3 = this.ctx.createOscillator();
    osc3.type = "sine";
    osc3.frequency.value = freq * 3.01;

    const chimeGain = this.ctx.createGain();
    const attackTime = 0.005;
    const decayTime = 2.5 + Math.random() * 2.0;
    const peakVol = 0.06 + Math.random() * 0.04;

    chimeGain.gain.setValueAtTime(0, now);
    chimeGain.gain.linearRampToValueAtTime(peakVol, now + attackTime);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + decayTime);

    const overtoneGain = this.ctx.createGain();
    overtoneGain.gain.value = 0.3;

    const thirdGain = this.ctx.createGain();
    thirdGain.gain.value = 0.08;

    osc1.connect(chimeGain);
    osc2.connect(overtoneGain);
    overtoneGain.connect(chimeGain);
    osc3.connect(thirdGain);
    thirdGain.connect(chimeGain);
    chimeGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + decayTime + 0.1);
    osc2.stop(now + decayTime + 0.1);
    osc3.stop(now + decayTime + 0.1);
  }

  /* ── Start random chime scheduling ── */
  _startChimeLoop() {
    const scheduleNext = () => {
      if (!this.playing) return;
      // Random interval: 1.5s to 5s between chimes, sometimes clusters
      const delay = 1500 + Math.random() * 3500;
      this._chimeInterval = setTimeout(() => {
        this._playChime();
        // Occasionally play a quick second chime for a cluster effect
        if (Math.random() < 0.3) {
          setTimeout(() => this._playChime(), 200 + Math.random() * 400);
        }
        scheduleNext();
      }, delay);
    };
    // First chime after a short delay
    setTimeout(() => {
      this._playChime();
      scheduleNext();
    }, 800);
  }

  _stopChimeLoop() {
    if (this._chimeInterval) {
      clearTimeout(this._chimeInterval);
      this._chimeInterval = null;
    }
  }

  /* ── Soft bird-like chirps (occasional) ── */
  _startBirdLoop() {
    const scheduleBird = () => {
      if (!this.playing) return;
      const delay = 4000 + Math.random() * 8000;
      this._birdTimeout = setTimeout(() => {
        this._playBirdChirp();
        scheduleBird();
      }, delay);
    };
    setTimeout(() => scheduleBird(), 3000);
  }

  _playBirdChirp() {
    if (!this.ctx || !this.playing) return;
    const now = this.ctx.currentTime;
    const baseFreq = 1800 + Math.random() * 1200;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.linearRampToValueAtTime(baseFreq * 1.3, now + 0.05);
    osc.frequency.linearRampToValueAtTime(baseFreq * 0.9, now + 0.12);
    osc.frequency.linearRampToValueAtTime(baseFreq * 1.15, now + 0.18);
    const birdGain = this.ctx.createGain();
    birdGain.gain.setValueAtTime(0, now);
    birdGain.gain.linearRampToValueAtTime(0.02, now + 0.01);
    birdGain.gain.linearRampToValueAtTime(0.015, now + 0.1);
    birdGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    osc.connect(birdGain);
    birdGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.3);
  }

  _stopBirdLoop() {
    if (this._birdTimeout) {
      clearTimeout(this._birdTimeout);
      this._birdTimeout = null;
    }
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0;
    this.masterGain.connect(this.ctx.destination);
    // Light airy breeze layers
    this._addBreezeLayer({
      lfoFreq: 0.06,
      filterFreq: 800,
      filterQ: 0.4,
      gain: 0.35,
      lfoDepth: 0.18,
    });
    this._addBreezeLayer({
      lfoFreq: 0.12,
      filterFreq: 1800,
      filterQ: 0.6,
      gain: 0.2,
      lfoDepth: 0.12,
    });
    this._addBreezeLayer({
      lfoFreq: 0.03,
      filterFreq: 3500,
      filterQ: 0.3,
      gain: 0.1,
      lfoDepth: 0.06,
    });
    // Warm ambient pad
    this._addAmbientPad();
    this.setVolume(this._currentVolume, 0);
  }

  play() {
    if (!this.ctx) this.init();
    if (this.ctx.state === "suspended") this.ctx.resume();
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(
      this._currentVolume,
      now + 2.5,
    );
    this.playing = true;
    this._startChimeLoop();
    this._startBirdLoop();
  }

  pause() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0, now + 1.0);
    this.playing = false;
    this._stopChimeLoop();
    this._stopBirdLoop();
  }

  setVolume(val, ramp = 0.3) {
    this._currentVolume = Math.min(1, Math.max(0, val));
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(
        this._currentVolume,
        now + ramp,
      );
    }
  }

  isPlaying() {
    return this.playing;
  }

  destroy() {
    this._stopChimeLoop();
    this._stopBirdLoop();
    this.nodes.forEach(({ src, lfo }) => {
      try {
        src.stop();
      } catch (_) {}
      try {
        lfo.stop();
      } catch (_) {}
    });
    if (this.ctx) this.ctx.close();
  }
}

/* ====================== AUDIO CONTROL ====================== */
function AudioControl({ engineRef }) {
  const [muted, setMuted] = useState(() => {
    return localStorage.getItem("sakuraMuted") === "true";
  });
  const storedVolumeRef = useRef(0.1);

  const toggleMute = () => {
    const engine = engineRef.current;
    if (!engine) return;
    if (muted) {
      engine.setVolume(storedVolumeRef.current);
      setMuted(false);
      localStorage.setItem("sakuraMuted", "false");
    } else {
      storedVolumeRef.current = engine._currentVolume;
      engine.setVolume(0);
      setMuted(true);
      localStorage.setItem("sakuraMuted", "true");
    }
  };

  return (
    <div className="audio-wrap">
      <button
        className={`audio-btn ${!muted ? "audio-btn--playing" : ""}`}
        onClick={toggleMute}
        aria-label={muted ? "Nyalakan suara sakura" : "Matikan suara sakura"}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
        {!muted && (
          <div className="audio-wave">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </button>
    </div>
  );
}

/* ====================== SAKURA SPRING CANVAS BACKGROUND ====================== */
function SakuraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let t = 0;
    let animId;

    /* ── Sakura background image ── */
    const bgImg = new Image();
    bgImg.src = "/sakura-bg.png";
    let bgLoaded = false;
    bgImg.onload = () => {
      bgLoaded = true;
    };

    /* ── SAKURA PETALS ── */
    const PETAL_COUNT = 55;
    const petals = [];
    const PETAL_COLORS = [
      "rgba(255,183,197,0.85)",
      "rgba(255,200,210,0.80)",
      "rgba(255,160,180,0.75)",
      "rgba(255,220,230,0.70)",
      "rgba(248,140,170,0.80)",
      "rgba(255,175,195,0.90)",
    ];

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
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
      });
    }

    /* ── WIND STREAKS ── */
    const WIND_COUNT = 35;
    const winds = [];
    for (let i = 0; i < WIND_COUNT; i++) {
      winds.push({
        x: Math.random() * W * 1.5 - W * 0.25,
        y: Math.random() * H,
        len: 60 + Math.random() * 160,
        spd: 2.0 + Math.random() * 3.5,
        alpha: 0.04 + Math.random() * 0.1,
        w: 0.5 + Math.random() * 1.0,
      });
    }

    /* ── Draw single petal shape ── */
    const drawPetal = (x, y, size, rotation, color, opacity, scaleY) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
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

    /* ── MAIN RENDER LOOP ── */
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);

      /* Sky gradient */
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, "#87CEEB");
      sky.addColorStop(0.25, "#a8dcf0");
      sky.addColorStop(0.5, "#c9e8ff");
      sky.addColorStop(0.75, "#e8d5e0");
      sky.addColorStop(1.0, "#fce4ec");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      /* Background image overlay */
      if (bgLoaded) {
        ctx.globalAlpha = 0.45;
        const imgRatio = bgImg.width / bgImg.height;
        const canvasRatio = W / H;
        let dw, dh, dx, dy;
        if (canvasRatio > imgRatio) {
          dw = W;
          dh = W / imgRatio;
          dx = 0;
          dy = (H - dh) / 2;
        } else {
          dh = H;
          dw = H * imgRatio;
          dy = 0;
          dx = (W - dw) / 2;
        }
        ctx.drawImage(bgImg, dx, dy, dw, dh);
        ctx.globalAlpha = 1;
      }

      /* Soft pink/white radial glows */
      const g1 = ctx.createRadialGradient(
        W * 0.2,
        H * 0.15,
        0,
        W * 0.2,
        H * 0.15,
        W * 0.4,
      );
      g1.addColorStop(0, "rgba(255,200,220,0.18)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(
        W * 0.85,
        H * 0.1,
        0,
        W * 0.85,
        H * 0.1,
        W * 0.35,
      );
      g2.addColorStop(0, "rgba(255,180,200,0.15)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      /* Wind streaks */
      winds.forEach((l) => {
        l.x += l.spd;
        if (l.x > W + l.len) {
          l.x = -l.len * 1.2;
          l.y = Math.random() * H;
        }
        const dy = l.len * 0.02;
        const wg = ctx.createLinearGradient(l.x, l.y, l.x + l.len, l.y + dy);
        wg.addColorStop(0, `rgba(255,255,255,0)`);
        wg.addColorStop(0.15, `rgba(255,255,255,${l.alpha})`);
        wg.addColorStop(0.85, `rgba(255,240,245,${l.alpha})`);
        wg.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + l.len, l.y + dy);
        ctx.strokeStyle = wg;
        ctx.lineWidth = l.w;
        ctx.stroke();
      });

      /* Sakura petals */
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

        const wobbleX =
          Math.sin(t * p.wobbleSpd + p.phase) * p.wobbleAmp * 0.02;
        drawPetal(
          p.x + wobbleX,
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

/* ====================== UI COMPONENTS ====================== */
function LinkButton({ label, icon, href, index }) {
  return (
    <a
      href={href}
      className="link-btn"
      style={{ animationDelay: `${0.3 + index * 0.08}s` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="link-btn__icon">{icon}</span>
      <span className="link-btn__label">{label}</span>
      <span className="link-btn__arrow">→</span>
    </a>
  );
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

/* ====================== APP ====================== */
export default function App() {
  const engineRef = useRef(null);

  useEffect(() => {
    const engine = new SakuraSoundEngine();
    engineRef.current = engine;
    const wasMuted = localStorage.getItem("sakuraMuted") === "true";
    if (wasMuted) engine.setVolume(0);
    engine.play();

    const resumeOnInteraction = () => {
      if (engine.ctx && engine.ctx.state === "suspended") engine.play();
      document.removeEventListener("click", resumeOnInteraction);
      document.removeEventListener("touchstart", resumeOnInteraction);
    };
    if (engine.ctx && engine.ctx.state === "suspended") {
      document.addEventListener("click", resumeOnInteraction);
      document.addEventListener("touchstart", resumeOnInteraction);
    }

    return () => {
      engine.destroy();
    };
  }, []);

  let globalIndex = 0;

  return (
    <div className="page">
      <SakuraBackground />
      <div className="edge-fog" />
      {/* Pink glowing orbs at corners */}
      <div className="corner-glows">
        <div className="corner-glow corner-glow--tl" />
        <div className="corner-glow corner-glow--tr" />
        <div className="corner-glow corner-glow--bl" />
        <div className="corner-glow corner-glow--br" />
        <div className="corner-glow corner-glow--ct" />
      </div>

      <AudioControl engineRef={engineRef} />

      <section className="hero">
        <main className="card">
          <div className="avatar-wrap">
            <div className="avatar-ring" />
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              className="avatar-img"
            />
            <div className="avatar-badge">🌸</div>
          </div>
          <div className="identity">
            <h1 className="name">{PROFILE.name}</h1>
            <p className="bio">{PROFILE.bio}</p>
          </div>

          <SectionLabel text="My Bio" />
          <nav className="links">
            {LINKS.map((link) => (
              <LinkButton key={link.id} {...link} index={globalIndex++} />
            ))}
          </nav>

          <SectionLabel text="Music" />
          <nav className="links">
            {MUSIC_LINKS.map((link) => (
              <LinkButton key={link.id} {...link} index={globalIndex++} />
            ))}
          </nav>

          <SectionLabel text="Donation" />
          <nav className="links">
            {DONATION_LINKS.map((link) => (
              <LinkButton key={link.id} {...link} index={globalIndex++} />
            ))}
          </nav>

          <div className="socials">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="social-btn"
                aria-label={s.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
