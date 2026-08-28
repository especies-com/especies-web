"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import Logo from "@/public/images/full_logo.svg";

const navLinks = [
  { href: "#sobre", label: "Sobre a plataforma" },
  { href: "#preco", label: "Preço" },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Botão Hamburger / Fechar estilo Apple */}
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-[#0F766E]/20 text-[#0F766E] shadow-sm backdrop-blur-md transition-all active:scale-95"
      >
        <span className="sr-only">Menu</span>
        <div className="flex h-3 w-4 flex-col items-center justify-between">
          <span
            className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
              open ? "translate-y-[5.25px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ${
              open ? "-translate-y-[5.25px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay Fullscreen estilo Apple */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex h-dvh w-screen flex-col bg-[#eef7f3]/95"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-6 sm:py-8">
              <Link href="/" onClick={close} className="relative z-50">
                <Image src={Logo} alt="Espécies" priority />
              </Link>
            </div>

            {/* Menu Links com animação cascata (staggered) */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-1 flex-col justify-between px-7 pb-10 pt-4 overflow-y-auto"
            >
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="block py-4 font-sarabun text-2xl font-semibold tracking-tight text-[#163f3a] transition-colors border-b border-[#0F766E]/10 hover:text-[#0F766E] active:text-[#0F766E]"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link
                    href="/login"
                    onClick={close}
                    className="block py-4 font-sarabun text-2xl font-semibold tracking-tight text-[#163f3a] transition-colors border-b border-[#0F766E]/10 hover:text-[#0F766E] active:text-[#0F766E]"
                  >
                    Entrar
                  </Link>
                </motion.div>
              </div>

              {/* Botão de Destaque no Rodapé */}
              <motion.div variants={itemVariants} className="pt-6">
                <Link
                  href="/signup"
                  onClick={close}
                  className="flex w-full items-center justify-center rounded-2xl bg-[#FFCD52] py-4 text-center font-sarabun text-lg font-bold text-[#163f3a] shadow-md transition-transform active:scale-[0.98]"
                >
                  Inscreva-se
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
