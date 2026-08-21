"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#0F766E]/25 bg-white/80 text-[#0F766E] shadow-sm backdrop-blur"
      >
        <span className="sr-only">Menu</span>
        <span className="flex w-5 flex-col gap-1.5">
          <span className={`h-0.5 w-full rounded bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-full rounded bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-full rounded bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>
      {open && (
        <div className="absolute inset-x-0 top-0 z-20 rounded-b-3xl bg-[#f7fbfa] px-6 pb-8 pt-24 shadow-xl">
          <nav className="flex flex-col gap-1 font-sarabun text-lg font-semibold text-[#323B4B]">
            <a href="#sobre" onClick={close} className="rounded-xl px-4 py-3 hover:bg-[#dff1ea]">Sobre</a>
            <a href="#preco" onClick={close} className="rounded-xl px-4 py-3 hover:bg-[#dff1ea]">Preço</a>
            <Link href="/signup" onClick={close} className="rounded-xl px-4 py-3 hover:bg-[#dff1ea]">Entrar</Link>
            <Link href="/login" onClick={close} className="mt-2 rounded-xl bg-[#FFCD52] px-4 py-3 text-center text-[#323B4B]">Inscreva-se</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
