"use client";
import { useState } from "react";
import { researchUrl } from "../lib/site";
export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="mobile-navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          event.currentTarget.querySelector("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Fechar ×" : "Menu ☰"}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Navegação móvel">
          <a href="#plataforma" onClick={() => setOpen(false)}>
            O aplicativo
          </a>
          <a href="#equipe" onClick={() => setOpen(false)}>
            Para sua equipe
          </a>
          <a href="#construcao" onClick={() => setOpen(false)}>
            Construção conjunta
          </a>
          <a href={researchUrl}>Participar da pesquisa ↗</a>
        </nav>
      )}
    </div>
  );
}
