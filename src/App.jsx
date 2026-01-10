import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import {
  FaReact, FaJs, FaGitAlt, FaFigma, FaFacebook,
  FaGithub, FaLinkedin, FaTwitter, FaInstagram,
  FaDiscord, FaYoutube
} from "react-icons/fa";
import { SiFirebase, SiExpo, SiAndroid, SiNodedotjs } from "react-icons/si";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import CV from './assets/CV.pdf';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);


  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1500);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);


  return (
    <>
      {loading && <Loading isExiting={isExiting} />}

      <div className="w-full min-h-screen md:h-screen bg-black text-white font-['Inter'] p-4 md:p-6 overflow-y-auto md:overflow-hidden">
        {/* MOBILE LAYOUT (< 768px) */}
        <div className="flex flex-col gap-4 md:hidden pb-4">

          {/* ID CARD - Mobile First */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] overflow-hidden relative h-[350px] md:h-auto"
            style={{
              gridArea: 'id',
              background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)'
            }}
            aria-label="Profile display"
          >
            <iframe
              src='https://my.spline.design/sleekidbadge-GZjQy5NeqyxGgxEcpqJ3FyJo/'
              frameBorder='0'
              width='100%'
              height='100%'
              className="rounded-[28px] md:pointer-events-none"
              title="3D Developer Avatar"
              loading="lazy"
              style={{
                userSelect: 'none',
                overflow: 'hidden'
              }}
            />
          </section>



          {/* INTRO CARD */}
          <section className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col min-h-[400px]">
            <header>
              <h1
                className="text-[2.5rem] font-bold leading-tight m-0"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Hi, I'm<br />Jovs
              </h1>
            </header>

            <p className="mt-6 text-zinc-400 text-sm leading-relaxed">
              BSIT Student & Developer based in the Philippines.
              I design and build web and mobile apps.
            </p>

            <div className="mt-auto pt-4">
              <p className="text-xs text-zinc-400 mb-2 uppercase tracking-wide">
                Tools that I use
              </p>
              <div className="grid grid-cols-4 gap-2 max-w-[160px]">
                {[
                  { icon: <FaReact />, label: "React", color: "#61DAFB" },
                  { icon: <FaJs />, label: "JavaScript", color: "#F7DF1E" },
                  { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
                  { icon: <FaGitAlt />, label: "Git", color: "#F05032" },
                  { icon: <SiExpo />, label: "Expo", color: "#000020" },
                  { icon: <SiAndroid />, label: "Android", color: "#3DDC84" },
                  { icon: <SiNodedotjs />, label: "Node.js", color: "#339933" },
                  { icon: <FaFigma />, label: "Figma", color: "#F24E1E" },
                ].map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center text-sm text-white transition-all duration-300 active:scale-95 cursor-pointer"
                    style={{ transition: 'all 0.3s ease' }}
                    onClick={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = tool.color;
                      el.style.boxShadow = `0 0 20px ${tool.color}40`;

                      setTimeout(() => {
                        el.style.backgroundColor = '#27272a';
                        el.style.boxShadow = 'none';
                      }, 500);
                    }}
                    title={tool.label}
                  >
                    {tool.icon}
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* SOCIALS CARD - Mobile */}
          <section
            className="flex items-center justify-center py-8 min-h-[280px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            <nav className="relative w-[200px] h-[200px] flex items-center justify-center">
              {/* Connecting Lines with Fade Effect */}
              <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(200,200,200,0.6)" />
                    <stop offset="100%" stopColor="rgba(200,200,200,0)" />
                  </linearGradient>
                </defs>

                {/* Top line (GitHub) */}
                <line x1="100" y1="100" x2="100" y2="30" stroke="url(#lineGradientMobile)" strokeWidth="1" />

                {/* Top-right line (LinkedIn) */}
                <line x1="100" y1="100" x2="160" y2="65" stroke="url(#lineGradientMobile)" strokeWidth="1" />

                {/* Bottom-right line (Twitter) */}
                <line x1="100" y1="100" x2="160" y2="135" stroke="url(#lineGradientMobile)" strokeWidth="1" />

                {/* Bottom line (Instagram) */}
                <line x1="100" y1="100" x2="100" y2="170" stroke="url(#lineGradientMobile)" strokeWidth="1" />

                {/* Bottom-left line (Discord) */}
                <line x1="100" y1="100" x2="40" y2="135" stroke="url(#lineGradientMobile)" strokeWidth="1" />

                {/* Top-left line (Facebook) */}
                <line x1="100" y1="100" x2="40" y2="65" stroke="url(#lineGradientMobile)" strokeWidth="1" />
              </svg>

              {/* Center Orb */}
              <div className="absolute w-10 h-10 flex items-center justify-center z-[2]">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#00dbde] to-[#fc00ff] shadow-[0_0_15px_rgba(252,0,255,0.6)] animate-[sphere-pulse_2s_infinite_ease-in-out]"></div>
              </div>

              {/* Social Icons */}
              {[
                { icon: <FaGithub />, label: "GitHub", url: null, pos: "-translate-y-[70px]" },
                { icon: <FaLinkedin />, label: "LinkedIn", url: null, pos: "translate-x-[60px] -translate-y-[35px]" },
                { icon: <FaTwitter />, label: "Twitter", url: null, pos: "translate-x-[60px] translate-y-[35px]" },
                { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/justt.jovs/", pos: "translate-y-[70px]" },
                { icon: <FaDiscord />, label: "Discord", url: null, pos: "-translate-x-[60px] translate-y-[35px]" },
                { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/jovsdichoso26", pos: "-translate-x-[60px] -translate-y-[35px]" },
              ].map((social, idx) => (
                social.url ? (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute w-[45px] h-[45px] bg-[#1a1a1a] flex items-center justify-center text-xl text-zinc-400 transition-all duration-200 z-[2] active:bg-white active:text-black active:scale-110 ${social.pos}`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ) : (
                  <div
                    key={idx}
                    className={`absolute w-[45px] h-[45px] bg-[#0a0a0a] flex items-center justify-center text-xl text-zinc-700 z-[2] cursor-not-allowed opacity-30 ${social.pos}`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    title="Coming soon"
                  >
                    {social.icon}
                  </div>
                )
              ))}
            </nav>
          </section>


          {/* PROJECTS CARD - Mobile */}
          <section className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col">
            <h2 className="text-lg font-semibold m-0 mb-4 text-white">Featured Work</h2>

            {[
              {
                title: "HakbangQuest",
                desc: "Gamified Fitness Tracker",
                url: "https://hakbang-quest-web.vercel.app/"
              },
              {
                title: "Residencia del Hamor",
                desc: "Mock up Webpage",
                url: "https://residencia-resort.vercel.app/"
              },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-3.5 rounded-2xl mb-2.5 last:mb-0 flex items-center gap-3 transition-all duration-200 active:bg-zinc-700 active:scale-[0.98] no-underline"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-zinc-700 rounded-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="m-0 text-[0.95rem] font-semibold text-white">{project.title}</h3>
                  <p className="m-0 mt-0.5 text-xs text-zinc-400">{project.desc}</p>
                </div>
              </a>
            ))}
          </section>


          {/* LOCATION CARD - Mobile */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col relative min-h-[140px]"
            style={{
              background: `linear-gradient(to right, #0a0a0a 30%, rgba(10, 10, 10, 0.5) 100%), url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
              backgroundSize: '200%', // Zoom in (increase percentage to zoom more)
              backgroundPosition: '82% 45%' // Focus on Philippines/Sorsogon area
            }}
          >
            <div className="z-[2]" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
              <strong className="text-base font-semibold text-white">Sorsogon City, Philippines</strong>
              <span className="block text-xs text-zinc-400 font-normal mt-1">GMT+8</span>
            </div>

            {/* GPS Dot - Adjusted position for Sorsogon */}
            <div
              className="absolute top-[35%] left-[79%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_2px_rgba(255,255,255,0.9)] z-[1] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:bg-white/40 before:rounded-full before:animate-[gps-pulse_3s_infinite_ease-out]"
            ></div>
          </section>


          {/* BUTTONS CARD - Mobile */}
          <section className="flex flex-col gap-3">
            <button
              disabled
              className="border-none rounded-[18px] font-semibold text-sm h-[50px] flex items-center justify-center bg-zinc-800 text-zinc-600 cursor-not-allowed opacity-40"
            >
              <MdEmail className="mr-2" />
              Get in Touch
            </button>

            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="border-none rounded-[18px] font-semibold text-sm h-[50px] flex items-center justify-center bg-white text-black active:scale-[0.98] no-underline"
            >
              Resume
              <MdArrowOutward className="ml-1.5" />
            </a>
          </section>
        </div>

        {/* DESKTOP LAYOUT (>= 768px) */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.4fr_1fr] md:grid-rows-[2fr_0.5fr_0.7fr_0.4fr] gap-4 w-full h-full"
          style={{
            gridTemplateAreas: `
              "intro id socials"
              "intro id projects"
              "map id projects"
              "btns id projects"
            `
          }}
        >

          {/* INTRO CARD - Desktop */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col justify-between overflow-hidden"
            style={{ gridArea: 'intro' }}
          >
            <header>
              <h1
                className="text-[5rem] font-bold leading-tight m-0"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Hi, I'm<br />Jovs
              </h1>
            </header>

            <p className="mt-[150px] text-zinc-400 text-sm leading-relaxed max-w-[90%]">
              BSIT Student & Developer based in the Philippines.
              I design and build web and mobile apps.
            </p>

            <div className="mt-auto pt-4">
              <p className="text-xs text-zinc-400 mb-2 uppercase tracking-wide">
                Tools that I use
              </p>
              <div className="grid grid-cols-4 gap-2 max-w-[160px]">
                {[
                  { icon: <FaReact />, label: "React", color: "#61DAFB" },
                  { icon: <FaJs />, label: "JavaScript", color: "#F7DF1E" },
                  { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
                  { icon: <FaGitAlt />, label: "Git", color: "#F05032" },
                  { icon: <SiExpo />, label: "Expo", color: "#000020" },
                  { icon: <SiAndroid />, label: "Android", color: "#3DDC84" },
                  { icon: <SiNodedotjs />, label: "Node.js", color: "#339933" },
                  { icon: <FaFigma />, label: "Figma", color: "#F24E1E" },
                ].map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-800 aspect-square rounded-lg flex items-center justify-center text-sm text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      transition: 'all 0.3s ease'
                    }}
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
            </div>
          </section>


          {/* ID CARD - Desktop */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] overflow-hidden relative before:absolute before:inset-0 before:opacity-30"
            style={{
              gridArea: 'id',
              background: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
              '--dot-bg': 'radial-gradient(circle, #444 1px, transparent 1px)',
              '--dot-size': '20px',
            }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #555 1.5px, transparent 1.5px)',
                backgroundSize: '20px 20px'
              }}
            />
            <iframe
              src='https://my.spline.design/sleekidbadge-GZjQy5NeqyxGgxEcpqJ3FyJo/'
              frameBorder='0'
              width='100%'
              height='100%'
              className="relative z-10"
            />
          </section>



          {/* SOCIALS CARD - Desktop */}
          <section
            className="flex items-center justify-center"
            style={{
              gridArea: 'socials',
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            <nav className="relative w-[200px] h-[200px] flex items-center justify-center">
              {/* Connecting Lines - CSS Version */}
              <div className="absolute inset-0 flex items-center justify-center z-[1]">
                {/* Lines radiating from center */}
                <div className="absolute w-[1px] h-[70px] bg-gradient-to-t from-white/40 to-transparent -translate-y-[35px]"></div>
                <div className="absolute w-[70px] h-[1px] bg-gradient-to-r from-white/40 to-transparent translate-x-[35px] -translate-y-[17.5px] rotate-[30deg] origin-left"></div>
                <div className="absolute w-[70px] h-[1px] bg-gradient-to-r from-white/40 to-transparent translate-x-[35px] translate-y-[17.5px] -rotate-[30deg] origin-left"></div>
                <div className="absolute w-[1px] h-[70px] bg-gradient-to-b from-white/40 to-transparent translate-y-[35px]"></div>
                <div className="absolute w-[70px] h-[1px] bg-gradient-to-l from-white/40 to-transparent -translate-x-[35px] translate-y-[17.5px] rotate-[30deg] origin-right"></div>
                <div className="absolute w-[70px] h-[1px] bg-gradient-to-l from-white/40 to-transparent -translate-x-[35px] -translate-y-[17.5px] -rotate-[30deg] origin-right"></div>
              </div>

              {/* Center Orb */}
              <div className="absolute w-10 h-10 flex items-center justify-center z-[2]">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#00dbde] to-[#fc00ff] shadow-[0_0_15px_rgba(252,0,255,0.6)] animate-[sphere-pulse_2s_infinite_ease-in-out]"></div>
              </div>

              {/* Social Icons */}
              {[
                { icon: <FaGithub />, label: "GitHub", url: null, pos: "-translate-y-[70px]" },
                { icon: <FaLinkedin />, label: "LinkedIn", url: null, pos: "translate-x-[60px] -translate-y-[35px]" },
                { icon: <FaTwitter />, label: "Twitter", url: null, pos: "translate-x-[60px] translate-y-[35px]" },
                { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/justt.jovs/", pos: "translate-y-[70px]" },
                { icon: <FaDiscord />, label: "Discord", url: null, pos: "-translate-x-[60px] translate-y-[35px]" },
                { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/jovsdichoso26", pos: "-translate-x-[60px] -translate-y-[35px]" },
              ].map((social, idx) => (
                social.url ? (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute w-[45px] h-[45px] bg-[#1a1a1a] flex items-center justify-center text-xl text-zinc-400 transition-all duration-200 z-[2] hover:bg-white hover:text-black hover:scale-110 hover:z-10 ${social.pos}`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    {social.icon}
                  </a>
                ) : (
                  <div
                    key={idx}
                    className={`absolute w-[45px] h-[45px] bg-[#0a0a0a] flex items-center justify-center text-xl text-zinc-700 z-[2] cursor-not-allowed opacity-30 ${social.pos}`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    title="Coming soon"
                  >
                    {social.icon}
                  </div>
                )
              ))}
            </nav>
          </section>



          {/* LOCATION CARD - Desktop */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col relative"
            style={{
              gridArea: 'map',
              background: `linear-gradient(to right, #0a0a0a 30%, rgba(10, 10, 10, 0.5) 100%), url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="z-[2]" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
              <strong className="text-lg font-semibold text-white">Sorsogon City, Philippines</strong>
              <span className="block text-xs text-zinc-400 font-normal mt-1">GMT+8</span>
            </div>

            <div
              className="absolute top-[35%] left-[80%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_2px_rgba(255,255,255,0.9)] z-[1] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:bg-white/40 before:rounded-full before:animate-[gps-pulse_3s_infinite_ease-out]"
            ></div>
          </section>

          {/* BUTTONS CARD - Desktop */}
          <section className="flex flex-row gap-3" style={{ gridArea: 'btns' }}>
            <button
              disabled
              className="flex-[2] border-none rounded-[18px] font-semibold text-sm h-full flex items-center justify-center bg-zinc-800 text-zinc-600 cursor-not-allowed opacity-40"
            >
              <MdEmail className="mr-2" />
              Get in Touch
            </button>

            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-none rounded-[18px] font-semibold text-sm h-full flex items-center justify-center bg-white text-black hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer no-underline"
            >
              Resume
              <MdArrowOutward className="ml-1.5" />
            </a>
          </section>


          {/* PROJECTS CARD - Desktop */}
          <section
            className="bg-[#111111] border border-[#222222] rounded-[28px] p-6 flex flex-col overflow-y-auto"
            style={{
              gridArea: 'projects',
              scrollbarWidth: 'thin',
              scrollbarColor: '#27272a transparent'
            }}
          >
            <h2 className="text-lg font-semibold m-0 mb-4 text-white">Featured Work</h2>

            {[
              {
                title: "HakbangQuest",
                desc: "Gamified Fitness Tracker",
                url: "https://hakbang-quest-web.vercel.app/"
              },
              {
                title: "Residencia del Hamor",
                desc: "Mock up Webpage",
                url: "https://residencia-resort.vercel.app/"
              },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 p-3.5 rounded-2xl mb-2.5 last:mb-0 flex items-center gap-3 transition-all duration-200 cursor-pointer hover:bg-zinc-700 hover:translate-x-1 no-underline"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-zinc-700 rounded-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="m-0 text-[0.95rem] font-semibold text-white">{project.title}</h3>
                  <p className="m-0 mt-0.5 text-xs text-zinc-400">{project.desc}</p>
                </div>
              </a>
            ))}
          </section>

        </div>

        <style>{`
          @keyframes gps-pulse {
            0% { width: 100%; height: 100%; opacity: 0.8; }
            100% { width: 350%; height: 350%; opacity: 0; }
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
