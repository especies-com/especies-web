"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

const screens = [
  { eyebrow: "01 \u00b7 VIS\u00c3O GERAL", title: "Comece o dia com tudo sob controle.", description: "Na tela inicial, acompanhe os animais, os alertas e as tarefas priorit\u00e1rias da sua equipe em uma s\u00f3 vis\u00e3o.", image: "/images/home_screen.svg", alt: "Tela inicial do aplicativo Esp\u00e9cies" },
  { eyebrow: "02 \u00b7 PERFIL DO ANIMAL", title: "As informa\u00e7\u00f5es de cada animal, sempre \u00e0 m\u00e3o.", description: "Ao selecionar um animal, consulte o seu perfil completo com dados de identifica\u00e7\u00e3o, sa\u00fade e informa\u00e7\u00f5es relevantes para o manejo.", image: "/images/animal_profile_screen.svg", alt: "Tela de perfil de animal do aplicativo Esp\u00e9cies" },
  { eyebrow: "03 \u00b7 PROCEDIMENTOS", title: "Acompanhe o cuidado do in\u00edcio ao fim.", description: "Veja os procedimentos pendentes, o hist\u00f3rico de atendimentos e qual profissional realizou cada cuidado daquele animal.", image: "/images/procedures_profile_screen.svg", alt: "Tela de procedimentos e hist\u00f3rico de um animal no aplicativo Esp\u00e9cies" },
];

function ScreenTabs({ activeScreen, onSelect }: { activeScreen: number; onSelect: (index: number) => void }) {
  const labels = ["Tela inicial", "Perfil do animal", "Procedimentos"];
  return (
    <div className="grid w-full grid-cols-3 rounded-2xl border border-white/20 bg-white/10 p-1 font-sarabun backdrop-blur-sm sm:max-w-xl">
      {labels.map((label, index) => (
        <button key={label} type="button" aria-pressed={index === activeScreen} onClick={() => onSelect(index)} className={`rounded-xl px-2 py-3 text-center text-xs font-bold transition-all sm:px-4 sm:text-sm ${index === activeScreen ? "bg-[#FFCD52] text-[#123f3c] shadow-sm" : "text-white/75 hover:bg-white/10 hover:text-white"}`}>{label}</button>
      ))}
    </div>
  );
}

function PhonePreview({ activeScreen }: { activeScreen: number }) {
  const screen = screens[activeScreen];
  return (
    <div className="relative z-10 w-[236px] rounded-[2.3rem] bg-[#202733] p-2 shadow-[0_32px_80px_rgba(0,0,0,0.35)] sm:w-[280px] sm:p-3">
      <div className="relative aspect-[430/932] overflow-hidden rounded-[1.85rem] bg-white">
        <AnimatePresence initial={false} mode="sync">
          <motion.img key={screen.image} src={screen.image} alt={screen.alt} className="absolute inset-0 z-10 h-full w-full object-cover" initial={{ opacity: 0, x: 24, scale: 1.02 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -24, scale: 0.98 }} transition={{ duration: 0.38, ease: "easeOut" }} />
        </AnimatePresence>
      </div>
      <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-[#202733]" />
    </div>
  );
}

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const screenRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeScreen, setActiveScreen] = useState(0);
  const { scrollYProgress } = useScroll({ target: showcaseRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (latest) => setActiveScreen(latest < 0.34 ? 0 : latest < 0.67 ? 1 : 2));
  const navigateToScreen = (index: number) => {
    setActiveScreen(index);
    screenRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="sobre" ref={sectionRef} className="overflow-x-clip bg-[#0b3b37] px-6 py-16 sm:px-10 lg:min-h-[300vh] lg:px-16 lg:py-0">
      <div className="mx-auto max-w-6xl py-16 text-center lg:py-28">
        <p className="font-sarabun text-sm font-bold tracking-[0.16em] text-[#FFCD52]">A PLATAFORMA EM AÇÃO</p>
        <h2 className="mx-auto mt-5 max-w-6xl text-balance font-sarabun text-4xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">Tudo o que sua equipe precisa, na palma da mão.</h2>
        <p className="mx-auto mt-7 max-w-2xl font-sarabun text-lg leading-relaxed text-[#d1e6df]">Conheça o caminho completo, da visão do dia ao histórico de cuidados de cada animal.</p>
      </div>
      <div ref={showcaseRef} className="mx-auto max-w-6xl">
        <div className="lg:grid lg:items-start lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="sticky top-5 z-30 mb-8 pt-4 lg:top-6 lg:mb-0 lg:pt-6"><ScreenTabs activeScreen={activeScreen} onSelect={navigateToScreen} /></div>
          <div className="relative mb-10 flex min-h-[420px] items-center justify-center rounded-[2rem] bg-[#FF8B3E] p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] lg:hidden"><PhonePreview activeScreen={activeScreen} /></div>
          {screens.map((screen, index) => (
            <div key={screen.title} ref={(element) => { screenRefs.current[index] = element; }} className="flex min-h-[62vh] items-center lg:min-h-screen">
              <article className="max-w-md">
                <p className="font-sarabun text-sm font-bold tracking-[0.12em] text-[#FFCD52]">{screen.eyebrow}</p>
                <h3 className="mt-4 font-sarabun text-3xl font-semibold leading-tight text-white sm:text-4xl">{screen.title}</h3>
                <p className="mt-5 font-sarabun text-lg leading-relaxed text-[#d1e6df]">{screen.description}</p>
                <button onClick={() => navigateToScreen(index)} className="mt-7 font-sarabun text-base font-semibold text-white underline decoration-[#FFCD52] decoration-4 underline-offset-4 lg:hidden">Ver esta tela</button>
              </article>
            </div>
          ))}
        </div>
        <div className="sticky top-0 hidden h-screen self-start items-center justify-center lg:flex">
          <div className="relative flex h-[min(78vh,720px)] w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[3rem] bg-[#FF8B3E] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#FFCD52]/35 blur-3xl" />
            <div className="absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <PhonePreview activeScreen={activeScreen} />
          </div>
        </div>
        </div>
      </div>
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[#FF8B3E]" />
    </section>
  );
}
