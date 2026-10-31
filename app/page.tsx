"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Asterisk, Code2, Globe2,
  Mail, Menu, MousePointer2, Palette, Send, Sparkles, Workflow, X
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "The Investment Room",
    type: "FINANCE · WEBSITE DESIGN",
    description: "A polished digital presence for a modern investment brand.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    url: "https://theinvestmentroommk.co.uk"
  },
  {
    number: "02",
    name: "Little Ink Tales",
    type: "CREATIVE · E-COMMERCE",
    description: "A warm, story-led online experience with a clear shopping journey.",
    image: "https://images.unsplash.com/photo-1455390582262-044cadece27a?auto=format&fit=crop&w=1200&q=85",
    url: "https://littleinktales.ie"
  },
  {
    number: "03",
    name: "La Bottega di Miribel",
    type: "LIFESTYLE · BRAND WEBSITE",
    description: "An elegant web experience built to bring a distinctive brand to life.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    url: "https://labottegadimiribel.com"
  }
];

const skills = [
  "WORDPRESS", "DIVI", "ELEMENTOR", "FRAMER", "SHOPIFY", "WEBFLOW",
  "FIGMA", "N8N AUTOMATION", "AI CREATIVE", "SEO", "HTML / CSS", "JAVASCRIPT"
];

const steps = [
  { number: "01", title: "DISCOVER", description: "Understand your goals, audience, and what success should look like.", icon: MousePointer2 },
  { number: "02", title: "STRATEGY", description: "Shape the structure, direction, and experience around your goals.", icon: Sparkles },
  { number: "03", title: "DESIGN", description: "Create a distinctive visual system with clarity and purpose.", icon: Palette },
  { number: "04", title: "DEVELOP", description: "Build a responsive, fast, and reliable digital experience.", icon: Code2 },
  { number: "05", title: "DELIVER", description: "Test, refine, launch, and make sure everything works.", icon: Send }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top"><span>VICTOR FABONMI</span><small>DIGITAL DESIGNER & DEVELOPER</small></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["WORK", "ABOUT", "PROCESS", "CONTACT"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <a className="availability" href="#contact"><span className="status-dot" /> AVAILABLE FOR PROJECTS <Asterisk size={15} /></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-word" aria-hidden="true">PORTFOLIO</div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> INDEPENDENT DIGITAL CREATOR</p>
          <p className="script">Hello, I&apos;m</p>
          <h1>VICTOR<br />FABONMI<span>.</span></h1>
          <p className="role">WEB DESIGNER &<br />DIGITAL CREATIVE</p>
          <p className="intro">I design and build thoughtful digital experiences that help businesses look sharper, communicate clearly, and grow online.</p>
          <a className="text-link" href="#work">EXPLORE MY WORK <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-image-wrap">
          <div className="portrait-frame">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=90"
              alt="Portrait placeholder — replace with your own photograph"
              fill priority sizes="(max-width: 800px) 75vw, 42vw" className="hero-image"
            />
          </div>
          <div className="hero-note"><span className="note-star"><Asterisk /></span><p>Turning ideas<br />into powerful<br />digital experiences.</p></div>
          <div className="hero-stats">
            <div><strong>WEB</strong><span>DESIGN & DEVELOPMENT</span></div>
            <div><strong>AI</strong><span>CREATIVE PRODUCTION</span></div>
            <div><strong>01:1</strong><span>COLLABORATIVE APPROACH</span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>BASED IN NIGERIA</span><span>WORKING WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">A FEW THINGS I&apos;VE MADE</p><h2>SELECTED <em>WORK</em><span>.</span></h2></div>
          <a className="text-link" href="#contact">HAVE A PROJECT? <ArrowUpRight size={17} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className="project-image" href={project.url} target="_blank" rel="noreferrer">
                <Image src={project.image} alt={project.name + " project preview"} fill sizes="(max-width: 700px) 100vw, 33vw" />
                <span className="project-open"><ArrowUpRight /></span>
              </a>
              <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
              <div className="project-title-row"><h3>{project.name}</h3><a href={project.url} target="_blank" rel="noreferrer" aria-label={"Visit " + project.name}><ArrowUpRight /></a></div>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-block">
          <p className="eyebrow">THE TOOLKIT</p><h2>SKILLS &<br /><em>EXPERTISE</em><span>.</span></h2>
          <p className="about-description">A blend of design thinking, web development, and creative technology to turn ambitious ideas into useful digital products.</p>
          <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
        <div className="about-block process-block" id="process">
          <p className="eyebrow">FROM FIRST IDEA TO LAUNCH</p><h2>THE WORK<br /><em>PROCESS</em><span>.</span></h2>
          <div className="process-list">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div className="process-item" key={number}>
                <span className="process-number">{number}</span><span className="process-icon"><Icon size={17} /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
        </div>
        <aside className="quote-block"><span className="quote-mark">“</span><blockquote>Good design is not just how it looks. It&apos;s how clearly it works.</blockquote><p className="signature">Victor.</p><p className="quote-foot">LET&apos;S CREATE<br />SOMETHING MEANINGFUL.</p><Asterisk className="quote-star" /></aside>
      </section>

      <footer className="contact-section section-pad" id="contact">
        <div className="contact-main"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>LET&apos;S WORK<br /><em>TOGETHER</em><span>.</span></h2><p className="contact-copy">Have a website, digital project, or creative idea in mind? Let&apos;s talk about how we can bring it to life.</p><a className="contact-cta" href="mailto:hello@victorfabonmi.com">START A PROJECT <ArrowUpRight size={18} /></a></div>
        <div className="contact-details">
          <a href="mailto:hello@victorfabonmi.com"><span><Mail /></span><div><small>EMAIL</small>hello@victorfabonmi.com</div><ArrowUpRight /></a>
          <a href="https://wa.me/2340000000000" target="_blank" rel="noreferrer"><span><Send /></span><div><small>WHATSAPP</small>Let&apos;s talk about your project</div><ArrowUpRight /></a>
          <div><span><Globe2 /></span><div><small>LOCATION</small>Nigeria · Available worldwide</div></div>
          <div><span><Workflow /></span><div><small>WHAT I DO</small>Websites · Automation · AI Creative</div></div>
        </div>
        <div className="contact-visual"><div className="visual-window"><div className="window-top"><i /><i /><i /><span>VICTOR / DIGITAL STUDIO</span></div><div className="window-content"><span>DESIGNING<br />DIGITAL<br />EXPERIENCES</span><b>V.</b></div></div><div className="visual-caption">BUILT WITH INTENTION. MADE TO WORK.</div></div>
        <div className="footer-bottom"><span>© 2026 VICTOR FABONMI</span><span>DESIGNED WITH PURPOSE <Asterisk size={14} /></span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}