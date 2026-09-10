"use client";
import { useState } from "react";
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
          {/* Retomar após validar as telas nas pesquisas.
          <a href="#plataforma" onClick={() => setOpen(false)}>
            O aplicativo
          </a>
          */}
          <a href="#equipe" onClick={() => setOpen(false)}>
            Para sua equipe
          </a>
          <a href="#construcao" onClick={() => setOpen(false)}>
            A pesquisa
          </a>
        </nav>
      )}
    </div>
  );
}
