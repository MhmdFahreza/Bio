import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './App.css'

// ─── Three.js Background ───────────────────────────────────────────
function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const W = mount.clientWidth
    const H = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // ── Floating Rings ──
    const rings = []
    const ringColors = [0xff6b35, 0xff9a5c, 0xff3d7f, 0xc040fb, 0x00d4ff]
    for (let i = 0; i < 12; i++) {
      const geo = new THREE.TorusGeometry(
        0.3 + Math.random() * 1.2,
        0.015 + Math.random() * 0.025,
        16, 100
      )
      const mat = new THREE.MeshBasicMaterial({
        color: ringColors[i % ringColors.length],
        transparent: true,
        opacity: 0.3 + Math.random() * 0.5,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8 - 2
      )
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      mesh.userData = {
        speedX: (Math.random() - 0.5) * 0.003,
        speedY: (Math.random() - 0.5) * 0.003,
        speedZ: (Math.random() - 0.5) * 0.001,
        floatSpeed: 0.001 + Math.random() * 0.002,
        floatOffset: Math.random() * Math.PI * 2,
      }
      scene.add(mesh)
      rings.push(mesh)
    }

    // ── Particle Field ──
    const particleCount = 300
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const particleColorsRaw = [
      [1.0, 0.42, 0.21], [1.0, 0.6, 0.36],
      [1.0, 0.24, 0.50], [0.75, 0.25, 0.98], [0.0, 0.83, 1.0],
    ]
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      const c = particleColorsRaw[Math.floor(Math.random() * particleColorsRaw.length)]
      colors[i * 3] = c[0]; colors[i * 3 + 1] = c[1]; colors[i * 3 + 2] = c[2]
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pGeo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    const pMat = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.8 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // ── Icosahedra ──
    const icoGeo  = new THREE.IcosahedronGeometry(0.8, 0)
    const icoMat  = new THREE.MeshBasicMaterial({ color: 0xff6b35, wireframe: true, transparent: true, opacity: 0.12 })
    const ico     = new THREE.Mesh(icoGeo, icoMat)
    ico.position.set(3.5, -2, -1)
    scene.add(ico)

    const icoGeo2 = new THREE.IcosahedronGeometry(0.5, 0)
    const icoMat2 = new THREE.MeshBasicMaterial({ color: 0xc040fb, wireframe: true, transparent: true, opacity: 0.15 })
    const ico2    = new THREE.Mesh(icoGeo2, icoMat2)
    ico2.position.set(-3.5, 2.5, -2)
    scene.add(ico2)

    // ── Mouse parallax ──
    let mouseX = 0, mouseY = 0
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // ── Animate ──
    let frame
    const clock = new THREE.Clock()
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      rings.forEach((r) => {
        r.rotation.x += r.userData.speedX
        r.rotation.y += r.userData.speedY
        r.rotation.z += r.userData.speedZ
        r.position.y  += Math.sin(t * r.userData.floatSpeed * 60 + r.userData.floatOffset) * 0.001
      })
      particles.rotation.y = t * 0.02
      particles.rotation.x = t * 0.008
      ico.rotation.y  =  t * 0.40; ico.rotation.x  = t * 0.25
      ico2.rotation.y = -t * 0.35; ico2.rotation.z = t * 0.20
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.02
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ──
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="three-bg" />
}

// ─── SVG Icons ─────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const PortfolioIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

const MusicNoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

// ─── Data ──────────────────────────────────────────────────────────
const PROFILE = {
  name:   'Muhammad Fahreza',
  bio:    'Web Programmer | Android Developer',
  avatar: '/src/assets/fotome.jpg',
}

const LINKS = [
  { id: 1, label: 'LinkedIn',             icon: <LinkedInIcon />,  href: '#' },
  { id: 2, label: 'GitHub',               icon: <GitHubIcon />,    href: '#' },
  { id: 3, label: 'My Portfolio Website', icon: <PortfolioIcon />, href: '#' },
  { id: 4, label: 'Discord Community',    icon: <DiscordIcon />,   href: '#' },
]

const MUSIC_LINKS = [
  { id: 5, label: 'Spotify',        icon: <MusicNoteIcon />, href: '#' },
  { id: 6, label: 'YouTube Music',  icon: <MusicNoteIcon />, href: '#' },
]

const DONATION_LINKS = [
  { id: 7, label: 'Trakteer', icon: <HeartIcon />, href: '#' },
  { id: 8, label: 'Saweria',  icon: <HeartIcon />, href: '#' },
  { id: 9, label: 'Tako',     icon: <HeartIcon />, href: '#' },
]

const SOCIALS = [
  {
    name: 'TikTok', href: 'https://www.tiktok.com/@weiterszz',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.27 8.27 0 004.84 1.55V6.87a4.85 4.85 0 01-1.07-.18z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube', href: 'https://www.youtube.com/@FareekzYT',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23.5 6.2s-.23-1.64-.95-2.36c-.9-.95-1.92-.96-2.38-1.01C17.1 2.6 12 2.6 12 2.6s-5.1 0-8.17.23c-.46.05-1.47.06-2.38 1.01C.73 4.56.5 6.2.5 6.2S.27 8.1.27 10v1.87c0 1.9.23 3.8.23 3.8s.23 1.64.95 2.36c.91.95 2.1.92 2.63 1.02C5.87 19.27 12 19.27 12 19.27s5.1 0 8.17-.23c.46-.05 1.47-.06 2.38-1.01.72-.72.95-2.36.95-2.36s.23-1.9.23-3.8V10c0-1.9-.23-3.8-.23-3.8zM9.73 14.59V8.66l6.44 2.97-6.44 2.96z"/>
      </svg>
    ),
  },
  {
    name: 'X', href: 'https://x.com/Muhamma83709506',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram', href: 'https://www.instagram.com/imfhrz/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
]

// ─── Link Button ───────────────────────────────────────────────────
function LinkButton({ label, icon, href, index }) {
  return (
    <a
      href={href}
      className="link-btn"
      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="link-btn__icon">{icon}</span>
      <span className="link-btn__label">{label}</span>
      <span className="link-btn__arrow">→</span>
    </a>
  )
}

// ─── Section Label ─────────────────────────────────────────────────
function SectionLabel({ text }) {
  return (
    <div className="section-label">
      <span className="line" />
      <span className="label-text">{text}</span>
      <span className="line" />
    </div>
  )
}

// ─── App ───────────────────────────────────────────────────────────
export default function App() {
  let globalIndex = 0

  return (
    <div className="page">
      <ThreeBackground />
      <div className="overlay" />

      <main className="card">
        {/* Avatar */}
        <div className="avatar-wrap">
          <div className="avatar-ring" />
          <img src={PROFILE.avatar} alt={PROFILE.name} className="avatar-img" />
          <div className="avatar-badge">🎧</div>
        </div>

        {/* Identity */}
        <div className="identity">
          <h1 className="name">{PROFILE.name}</h1>
          <p className="bio">{PROFILE.bio}</p>
        </div>

        {/* ── My Bio ── */}
        <SectionLabel text="My Bio" />
        <nav className="links">
          {LINKS.map((link, i) => (
            <LinkButton key={link.id} {...link} index={globalIndex++} />
          ))}
        </nav>

        {/* ── Music ── */}
        <SectionLabel text="Music" />
        <nav className="links">
          {MUSIC_LINKS.map((link, i) => (
            <LinkButton key={link.id} {...link} index={globalIndex++} />
          ))}
        </nav>

        {/* ── Donation ── */}
        <SectionLabel text="Donation" />
        <nav className="links">
          {DONATION_LINKS.map((link, i) => (
            <LinkButton key={link.id} {...link} index={globalIndex++} />
          ))}
        </nav>

        {/* Socials */}
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
    </div>
  )
}