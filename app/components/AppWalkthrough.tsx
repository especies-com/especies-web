"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Screen sequence recovered from 1a6f83c268cd7b0c22265ea9bed07641d23815f7.
const screens = [
  {
    label: "Tela inicial",
    title: "Um ponto de partida para a rotina.",
    description: "Uma visão dos animais e das atividades ajuda a equipe a se situar antes do próximo cuidado.",
    image: "/images/home_screen.svg",
    alt: "Prévia da tela inicial da especies, com animais e atividades",
  },
  {
    label: "Perfil do animal",
    title: "Cada animal tem uma história.",
    description: "A identificação e as informações do animal reunidas em um perfil, para dar contexto a quem cuida.",
    image: "/images/animal_profile_screen.svg",
    alt: "Prévia do perfil de um animal na especies",
  },
  {
    label: "Procedimentos",
    title: "O registro ajuda o cuidado a continuar.",
    description: "Os procedimentos do animal em uma mesma tela, para acompanhar os cuidados e consultar o que foi registrado.",
    image: "/images/procedures_profile_screen.svg",
    alt: "Prévia dos procedimentos de um animal na especies",
  },
];

export default function AppWalkthrough() {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const panel = panelRef.current;
    if (!track || !panel) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (getComputedStyle(panel).position !== "sticky") return;
      const top = Number.parseFloat(getComputedStyle(panel).top) || 0;
      const distance = track.offsetHeight - panel.offsetHeight;
      if (distance <= 0) return;
      const progress = (top - track.getBoundingClientRect().top) / distance;
      setActive(Math.max(0, Math.min(screens.length - 1, Math.floor(progress * screens.length))));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const measure = () => {
      track.style.setProperty("--walkthrough-height", `${panel.offsetHeight}px`);
      schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="walkthrough section" id="previa" aria-labelledby="walkthrough-title">
      <div className="container">
        <div className="walkthrough-heading">
          <p className="eyebrow">UM POUCO DO QUE ESTAMOS CONSTRUINDO</p>
          <h2 id="walkthrough-title">Da rotina ao registro.<br /><em>Um olhar para o aplicativo.</em></h2>
          <p>Conheça três telas da especies em desenvolvimento. A pesquisa vai ajudar a orientar os próximos passos.</p>
        </div>
        <div className="walkthrough-track" ref={trackRef}>
          <div className="walkthrough-panel" ref={panelRef}>
            <div className="walkthrough-copy">
              <div className="walkthrough-descriptions">
                {screens.map((screen, index) => (
                  <motion.div key={screen.label} aria-hidden={active !== index}
                    initial={false} animate={{ opacity: active === index ? 1 : 0, y: reducedMotion || active === index ? 0 : 12 }}
                    transition={{ duration: reducedMotion ? 0 : 0.3 }}>
                    <h3>{screen.title}</h3>
                    <p>{screen.description}</p>
                  </motion.div>
                ))}
              </div>
              <p className="walkthrough-note">Prévia em desenvolvimento · Dados ilustrativos.</p>
            </div>
            <div className="walkthrough-stage" id="walkthrough-preview">
              <div className="walkthrough-phone">
                <div className="walkthrough-display">
                  {screens.map((screen, index) => (
                    <motion.div key={screen.image} aria-hidden={index !== active}
                      initial={false} animate={{ opacity: index === active ? 1 : 0, x: reducedMotion || index === active ? 0 : index < active ? -12 : 12 }}
                      transition={{ duration: reducedMotion ? 0 : 0.3 }}>
                      <Image src={screen.image} alt={screen.alt} width={430} height={932} unoptimized />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="walkthrough-progress" aria-hidden="true">
              <motion.div initial={false} animate={{ scaleX: (active + 1) / screens.length }} transition={{ duration: reducedMotion ? 0 : 0.3 }} />
            </div>
          </div>
        </div>
        <div className="walkthrough-static">
          {screens.map((screen) => (
            <article className="walkthrough-panel" key={screen.image}>
              <div className="walkthrough-copy">
                <div className="walkthrough-descriptions">
                  <div><h3>{screen.title}</h3><p>{screen.description}</p></div>
                </div>
                <p className="walkthrough-note">Prévia em desenvolvimento · Dados ilustrativos.</p>
              </div>
              <div className="walkthrough-stage">
                <div className="walkthrough-phone">
                  <div className="walkthrough-display">
                    <Image src={screen.image} alt={screen.alt} width={430} height={932} unoptimized />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
