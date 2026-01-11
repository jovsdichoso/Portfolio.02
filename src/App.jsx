import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import {
  FaReact, FaJs, FaGitAlt, FaFigma, FaFacebook,
  FaGithub, FaLinkedin, FaTwitter, FaInstagram,
  FaDiscord
} from "react-icons/fa";
import { SiFirebase, SiExpo, SiAndroid, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import CV from './assets/CV.pdf';

// --- DATA & CONFIG ---
const TOOLS = [
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <FaJs />, label: "JavaScript", color: "#F7DF1E" },
  { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
  { icon: <FaGitAlt />, label: "Git", color: "#F05032" },
  { icon: <SiExpo />, label: "Expo", color: "#000020" },
  { icon: <SiAndroid />, label: "Android", color: "#3DDC84" },
  { icon: <SiNodedotjs />, label: "Node.js", color: "#339933" },
  { icon: <FaFigma />, label: "Figma", color: "#F24E1E" },
];

const SOCIALS = [
  { icon: <FaGithub />, label: "GitHub", url: "https://github.com/yourusername", pos: "-translate-y-[70px]" },
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/yourusername", pos: "translate-x-[60px] -translate-y-[35px]" },
  { icon: <FaTwitter />, label: "Twitter", url: null, pos: "translate-x-[60px] translate-y-[35px]" },
  { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/justt.jovs/", pos: "translate-y-[70px]" },
  { icon: <FaDiscord />, label: "Discord", url: null, pos: "-translate-x-[60px] translate-y-[35px]" },
  { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/jovsdichoso26", pos: "-translate-x-[60px] -translate-y-[35px]" },
];

const PROJECTS = [
  {
    title: "HakbangQuest",
    desc: "Gamified Fitness Tracker",
    url: "https://hakbang-quest-web.vercel.app/",
    stack: ["React", "Firebase", "Tailwind"]
  },
  {
    title: "Residencia del Hamor",
    desc: "Resort Landing Page Mockup",
    url: "https://residencia-resort.vercel.app/",
    stack: ["React", "Vite", "CSS"]
  },
];

// --- SUB-COMPONENTS ---

const ToolGrid = () => (
  <div className="grid grid-cols-4 gap-2 max-w-[160px]">
    {TOOLS.map((tool, idx) => (
      <div
        key={idx}
        className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center text-sm text-white transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = tool.color;
          e.currentTarget.style.boxShadow = `0 0 20px ${tool.color}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#27272a';
          e.currentTarget.style.boxShadow = 'none';
        }}
        title={tool.label}
      >
        {tool.icon}
      </div>
    ))}
  </div>
);

const SocialHexagon = () => (
  <nav className="relative w-[320px] h-[320px] flex items-center justify-center">

    {/* 1. ORBIT RINGS (Background Visuals) */}
    <div className="absolute inset-0 flex items-center justify-center z-[0] pointer-events-none">
      <div className="absolute w-[220px] h-[220px] rounded-full border border-white/5 opacity-50"></div>
      <div className="absolute w-[280px] h-[280px] rounded-full border border-white/10 opacity-30 border-dashed animate-[spin_60s_linear_infinite]"></div>
    </div>

    {/* 2. THE GREETING ROBOT (Center) */}
    {/* FIX APPLIED: 
        - Added 'overflow-hidden' to crop the logo.
        - Changed translate values to center the robot face.
    */}
    <div className="absolute inset-0 z-[1] flex items-center justify-center overflow-hidden rounded-full pointer-events-none">
      <iframe
        src='https://my.spline.design/genkubgreetingrobot-tykkOzP9AHuoQDQI8daodMNj/'
        frameBorder='0'
        width='100%'
        className="w-full h-[150%] -translate-y-[-10%] translate-x-[10%] scale-70 pointer-events-auto"
        title="Greeting Robot"
      />
    </div>

    {/* 3. SOCIAL ICONS (Circular Orbit) */}
    {SOCIALS.map((social, idx) => {
      // MATH: 360 degrees / 6 items = 60 degrees spacing
      const angle = idx * 60;
      // RADIUS: How far from center?
      const radius = 110;

      return social.url ? (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-[50px] h-[50px] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-xl text-zinc-400 rounded-full transition-all duration-300 z-[20] hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-95"
          style={{
            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
          }}
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ) : (
        <div
          key={idx}
          className="absolute w-[50px] h-[50px] bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 flex items-center justify-center text-xl text-zinc-700 rounded-full z-[20] cursor-not-allowed"
          style={{
            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
          }}
          title="Coming soon"
        >
          {social.icon}
        </div>
      );
    })}

  </nav>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [time, setTime] = useState("");

  // Time Logic
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    // Loading Logic
    const exitTimer = setTimeout(() => setIsExiting(true), 1500);
    const removeTimer = setTimeout(() => setLoading(false), 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading && <Loading isExiting={isExiting} />}

      <div className="w-full min-h-screen md:h-screen bg-black text-white font-['Inter'] p-4 md:p-6 overflow-y-auto md:overflow-hidden">

        <motion.div
          className="bento-container w-full h-full max-w-7xl mx-auto gap-4"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >

          {/* 1. INTRO CARD - Order 2 on Mobile */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col justify-between overflow-hidden md:min-h-full min-h-[400px] order-2 md:order-none"
            style={{ gridArea: 'intro' }}
          >
            <header>
              <h1
                className="text-[2.5rem] md:text-[5rem] font-bold leading-tight m-0"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hi, I'm<br />Jovs
              </h1>
            </header>

            <p className="mt-6 md:mt-0 text-zinc-400 text-sm leading-relaxed max-w-[90%]">
              BSIT Student & Developer based in the Philippines.
              I design and build web and mobile apps.
            </p>

            <div className="mt-auto pt-4">
              <p className="text-xs text-zinc-400 mb-2 uppercase tracking-wide">
                Tools that I use
              </p>
              <ToolGrid />
            </div>
          </section>

          {/* 2. ID CARD (3D Avatar) - Order 1 on Mobile (Top) */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] overflow-hidden relative h-[350px] md:h-auto order-1 md:order-none"
            style={{
              gridArea: 'id',
              background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)'
            }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #555 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}
            />

            <iframe
              src='https://my.spline.design/sleekidbadge-GZjQy5NeqyxGgxEcpqJ3FyJo/'
              frameBorder='0'
              width='100%'
              height='100%'
              className="relative z-10"
              title="3D Developer Avatar"
              loading="lazy"
            />
          </section>

          {/* 3. SOCIALS CARD - Order 3 on Mobile */}
          <section
            className="flex items-center justify-center py-8 md:py-0 rounded-[28px] border border-transparent md:border-transparent bg-[#111111] md:bg-transparent order-3 md:order-none"
            style={{ gridArea: 'socials' }}
          >
            <SocialHexagon />
          </section>

          {/* 4. PROJECTS CARD - Order 4 on Mobile */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col md:overflow-y-auto order-4 md:order-none"
            style={{
              gridArea: 'projects',
              scrollbarWidth: 'thin',
              scrollbarColor: '#27272a transparent'
            }}
          >
            <h2 className="text-lg font-semibold m-0 mb-4 text-white">Featured Work</h2>

            <div className="flex flex-col gap-3">
              {PROJECTS.map((project, idx) => (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 p-3.5 rounded-2xl flex items-start gap-3 transition-all duration-200 hover:bg-zinc-700 hover:translate-x-1 no-underline group"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-zinc-700 rounded-lg flex-shrink-0 group-hover:bg-zinc-600 transition-colors">
                    <MdArrowOutward className="text-zinc-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="m-0 text-[0.95rem] font-semibold text-white">{project.title}</h3>
                    <p className="m-0 mt-0.5 text-xs text-zinc-400 mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] px-1.5 py-0.5 bg-zinc-900/50 text-zinc-400 rounded border border-zinc-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 5. LOCATION CARD - Order 5 on Mobile */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col relative min-h-[140px] order-5 md:order-none"
            style={{
              gridArea: 'map',
              background: `linear-gradient(to right, #0a0a0a 30%, rgba(10, 10, 10, 0.5) 100%), url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="z-[2]" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
              <strong className="text-base md:text-lg font-semibold text-white">Sorsogon, PH</strong>
              <span className="block text-xs text-zinc-400 font-normal mt-1 flex items-center gap-1">
                {time || "Loading..."} (GMT+8)
              </span>
            </div>

            <div className="absolute top-[35%] left-[80%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_2px_rgba(255,255,255,0.9)] z-[1]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/40 rounded-full animate-[gps-pulse_3s_infinite_ease-out]"></div>
            </div>
          </section>

          {/* 6. BUTTONS CARD */}
          <section
            className="flex flex-col md:flex-row gap-3 order-6 md:order-none"
            style={{ gridArea: 'btns' }}
          >
            {/* BUTTON 1: GET IN TOUCH */}
            <a
              href="mailto:your.email@example.com"
              // FIXES:
              // 1. Added 'w-full' for mobile, 'md:w-auto' for desktop
              // 2. Changed 'flex-[2]' to 'md:flex-[2]' so it only applies on desktop
              // 3. Increased mobile bg opacity to 'bg-zinc-900' so it's visible on black
              className="group w-full md:w-auto md:flex-[2] relative overflow-hidden rounded-[18px] font-semibold text-sm h-[50px] md:h-full flex items-center justify-center 
    bg-zinc-900 md:bg-white/5 border border-white/10 backdrop-blur-md text-zinc-400 
    transition-all duration-300 
    hover:bg-white/10 hover:text-white hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] 
    active:scale-[0.98] no-underline cursor-pointer"
            >
              <MdEmail className="mr-2 text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              Get in Touch
            </a>

            {/* BUTTON 2: RESUME */}
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              // FIXES: Same as above (w-full for mobile, flex-1 only for desktop)
              className="group w-full md:w-auto md:flex-1 relative overflow-hidden rounded-[18px] font-semibold text-sm h-[50px] md:h-full flex items-center justify-center 
    bg-zinc-800 md:bg-white/10 border border-white/20 backdrop-blur-xl text-white 
    transition-all duration-300 
    hover:scale-[1.02] hover:border-white/50 
    hover:shadow-[0_0_25px_rgba(0,219,222,0.35)] 
    active:scale-[0.95] cursor-pointer no-underline"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0" />

              <span className="relative z-10 flex items-center">
                Resume
                <MdArrowOutward className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </section>

        </motion.div>

        {/* Global Styles for Layout & Animations */}
        <style>{`
          /* Mobile Layout: Stack (Flex Column) */
          .bento-container {
            display: flex;
            flex-direction: column;
          }

          /* Desktop Layout: Grid */
          @media (min-width: 768px) {
            .bento-container {
              display: grid;
              grid-template-columns: 1fr 1.4fr 1fr;
              grid-template-rows: 2fr 0.5fr 0.7fr 0.4fr;
              grid-template-areas:
                "intro id socials"
                "intro id projects"
                "map id projects"
                "btns id projects";
            }
          }

          @keyframes gps-pulse {
            0% { width: 100%; height: 100%; opacity: 0.8; }
            100% { width: 400%; height: 400%; opacity: 0; }
          }
          @keyframes sphere-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
      </div>
    </>
  );
};

export default App;