"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

const screens = [
  {
    eyebrow: "01 · VISÃO GERAL",
    title: "Comece o dia com tudo sob controle.",
    description:
      "Na tela inicial, acompanhe os animais, os alertas e as tarefas prioritárias da sua equipe em uma só visão.",
    image: "/images/home_screen.svg",
    alt: "Tela inicial do aplicativo Espécies",
  },
  {
    eyebrow: "02 · PERFIL DO ANIMAL",
    title: "As informações de cada animal, sempre à mão.",
    description:
      "Ao selecionar um animal, consulte o seu perfil completo com dados de identificação, saúde e informações relevantes para o manejo.",
    image: "/images/animal_profile_screen.svg",
    alt: "Tela de perfil de animal do aplicativo Espécies",
  },
  {
    eyebrow: "03 · PROCEDIMENTOS",
    title: "Acompanhe o cuidado do início ao fim.",
    description:
      "Veja os procedimentos pendentes, o histórico de atendimentos e qual profissional realizou cada cuidado daquele animal.",
    image: "/images/procedures_profile_screen.svg",
    alt: "Tela de procedimentos e histórico de um animal no aplicativo Espécies",
  },
];

function ScreenTabs({
  activeScreen,
  onSelect,
}: {
  activeScreen: number;
  onSelect: (index: number) => void;
}) {
  const labels = ["Tela inicial", "Perfil do animal", "Procedimentos"];
  return (
    <div className="grid w-full grid-cols-3 rounded-2xl border border-white/20 bg-white/10 p-1 font-sarabun backdrop-blur-sm sm:max-w-xl">
      {labels.map((label, index) => (
        <button
          key={label}
          type="button"
          aria-pressed={index === activeScreen}
          onClick={() => onSelect(index)}
          className={`rounded-xl px-2 py-2 text-center text-xs font-bold transition-all sm:px-4 sm:py-3 sm:text-sm ${
            index === activeScreen
              ? "bg-[#FFCD52] text-[#123f3c] shadow-sm"
              : "text-white/75 hover:bg-white/10 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function PhonePreview({
  activeScreen,
  isMobile = false,
}: {
  activeScreen: number;
  isMobile?: boolean;
}) {
  const screen = screens[activeScreen];
  return (
    <div
      className={`relative z-10 rounded-[2.2rem] sm:rounded-[2.6rem] bg-[#202733] p-1.5 sm:p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all ${
        isMobile
          ? "h-[min(73dvh,640px)] w-auto aspect-[430/932] max-w-[94vw]"
          : "w-[236px] sm:w-[280px]"
      }`}
    >
      <div className="relative h-full w-full aspect-[430/932] overflow-hidden rounded-[1.7rem] sm:rounded-[2rem] bg-white">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={screen.image}
            src={screen.image}
            alt={screen.alt}
            className="absolute inset-0 z-10 h-full w-full object-cover"
            initial={{ opacity: 0, x: 24, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -24, scale: 0.98 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute left-1/2 top-2 sm:top-2.5 h-3 sm:h-3.5 w-16 sm:w-20 -translate-x-1/2 rounded-full bg-[#202733]" />
    </div>
  );
}

export default function FeatureShowcase() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [activeScreen, setActiveScreen] = useState(0);

  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.33) {
      setActiveScreen(0);
    } else if (progress < 0.66) {
      setActiveScreen(1);
    } else {
      setActiveScreen(2);
    }
  });

  useEffect(() => {
    const currentProgress = scrollYProgress.get();
    if (currentProgress < 0.33) {
      setActiveScreen(0);
    } else if (currentProgress < 0.66) {
      setActiveScreen(1);
    } else {
      setActiveScreen(2);
    }
  }, [scrollYProgress]);

  const navigateToScreen = (index: number) => {
    setActiveScreen(index);
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const showcaseTop = rect.top + scrollTop;
    const scrollableDistance = showcaseRef.current.offsetHeight - window.innerHeight;

    const targetOffset =
      index === 0
        ? 0
        : index === 1
        ? scrollableDistance * 0.5
        : scrollableDistance;

    window.scrollTo({
      top: showcaseTop + targetOffset,
      behavior: "smooth",
    });
  };

  return (
    <section id="sobre" className="overflow-x-clip bg-[#0b3b37] px-4 py-12 sm:px-10 lg:px-16 lg:py-0">
      {/* Header informativo */}
      <div className="mx-auto max-w-6xl py-12 text-center lg:py-28">
        <p className="font-sarabun text-sm font-bold tracking-[0.16em] text-[#FFCD52]">
          A PLATAFORMA EM AÇÃO
        </p>
        <h2 className="mx-auto mt-4 max-w-6xl text-balance font-sarabun text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
          Tudo o que sua equipe precisa, na palma da mão.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sarabun text-base leading-relaxed text-[#d1e6df] sm:text-lg lg:max-w-none lg:whitespace-nowrap">
          Conheça o caminho completo, da visão do dia ao histórico de cuidados de cada animal.
        </p>
      </div>

      {/* Container interativo com scroll */}
      <div ref={showcaseRef} className="relative h-[300vh] mx-auto max-w-6xl">
        {/* MOBILE VIEW (< lg): Viewport travada/sticky, centralizada, telas com altura máxima */}
        <div className="sticky top-0 flex h-dvh w-full flex-col items-center justify-center overflow-hidden px-3 py-1.5 sm:py-3 lg:hidden">
          {/* Abas no topo logo acima da tela */}
          <div className="w-full max-w-xs sm:max-w-sm shrink-0">
            <ScreenTabs activeScreen={activeScreen} onSelect={navigateToScreen} />
          </div>

          {/* Mockup do celular com altura máxima ocupando o espaço central */}
          <div className="relative my-1.5 sm:my-2 flex shrink-0 items-center justify-center">
            <PhonePreview activeScreen={activeScreen} isMobile />
          </div>

          {/* Descrição da tela ativa e indicadores com espaçamento compacto */}
          <div className="shrink-0 flex w-full max-w-sm flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center px-1"
              >
                <p className="font-sarabun text-[10px] sm:text-xs font-bold tracking-[0.12em] text-[#FFCD52]">
                  {screens[activeScreen].eyebrow}
                </p>
                <h3 className="mt-0.5 font-sarabun text-sm sm:text-base font-semibold leading-snug text-white">
                  {screens[activeScreen].title}
                </h3>
                <p className="mt-0.5 font-sarabun text-[11px] leading-relaxed text-[#d1e6df] sm:text-xs line-clamp-2">
                  {screens[activeScreen].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pontos indicadores de progresso */}
            <div className="mt-1.5 flex items-center gap-1.5">
              {screens.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => navigateToScreen(idx)}
                  aria-label={`Ir para tela ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeScreen ? "w-5 bg-[#FFCD52]" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (>= lg): 2 Colunas */}
        <div className="hidden lg:grid lg:items-start lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="sticky top-6 z-30 mb-0 pt-6">
              <ScreenTabs activeScreen={activeScreen} onSelect={navigateToScreen} />
            </div>
            {screens.map((screen) => (
              <div key={screen.title} className="flex min-h-screen items-center">
                <article className="max-w-md">
                  <p className="font-sarabun text-sm font-bold tracking-[0.12em] text-[#FFCD52]">
                    {screen.eyebrow}
                  </p>
                  <h3 className="mt-4 font-sarabun text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    {screen.title}
                  </h3>
                  <p className="mt-5 font-sarabun text-lg leading-relaxed text-[#d1e6df]">
                    {screen.description}
                  </p>
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

      {/* Barra de progresso fixa no topo */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[#FF8B3E]"
      />
    </section>
  );
}
