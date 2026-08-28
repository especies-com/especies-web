import Image from "next/image";
import Link from "next/link";
import Zookeeper from "@/public/images/zookeeper.png";
import ScreenModel from "@/public/images/screen_model.png";
import Logo from "@/public/images/full_logo.svg";
import Apple from "@/public/images/apple.svg";
import GooglePlay from "@/public/images/google_play.svg";
import FeatureShowcase from "./components/FeatureShowcase";
import MobileNavigation from "./components/MobileNavigation";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <section className="relative min-h-screen overflow-hidden bg-[#e7f4ed]">
        <Image src="/images/background.svg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between py-6 text-lg sm:py-8">
            <Image src={Logo} alt="Espécies" />
            <nav className="hidden font-sarabun text-[18px] font-semibold text-[#0F766E] md:flex md:gap-8">
              <a href="#sobre">Sobre</a><a href="#preco">Preço</a>
            </nav>
            <div className="hidden items-center gap-3 font-sarabun text-sm font-semibold md:flex md:gap-6 md:text-[18px]">
              <Link href="/signup" className="text-[#323B4B] sm:text-white">Entrar</Link>
              <Link href="/login" className="rounded-sm bg-[#FFCD52] px-4 py-2 text-[#323B4B] sm:px-6 sm:py-3">Inscreva-se</Link>
            </div>
            <MobileNavigation />
          </header>
          <div className="flex w-full flex-1 flex-col justify-center pb-12 pt-8 lg:w-[46%] lg:justify-start lg:pt-[10vh]">
            <div className="flex flex-col gap-6 font-sarabun font-semibold">
              <p className="w-fit rounded-lg bg-white px-5 py-3 text-base text-[#0F766E] shadow-[0_1px_3px_rgb(0_180_169_/_0.16)]">Inscreva-se para testar</p>
              <h1 className="text-4xl font-semibold leading-none text-[#323B4B] sm:text-5xl">Plataforma inteligente para manejo de animais</h1>
              <p className="max-w-xl text-lg font-normal leading-relaxed text-[#323B4B]">Centralize as informações da sua equipe, registre todas as atividades de manejo e tenha acesso às informações dos animais onde estiver.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 font-circular text-base font-semibold">
              <div className="flex w-fit items-center justify-center gap-3 rounded-lg bg-black px-4 py-3 shadow-md"><Image src={Apple} alt="Logotipo da Apple Store" /><a href="#" className="text-white">Apple Store</a></div>
              <div className="flex w-fit items-center justify-center gap-3 rounded-lg bg-white px-4 py-3 shadow-md"><Image src={GooglePlay} alt="Logotipo do Google Play" /><a href="#" className="text-gray-600">Google Play</a></div>
            </div>
          </div>
        </div>
        <Image alt="Tratadora de animais" src={Zookeeper} className="pointer-events-none absolute bottom-0 right-[16%] hidden h-[78%] w-auto lg:block" />
        <Image alt="Exemplo de tela do aplicativo" src={ScreenModel} className="pointer-events-none absolute bottom-[19%] right-[2%] hidden scale-75 lg:block" />
      </section>
      <FeatureShowcase />
      <footer id="preco" className="relative z-10 bg-[#FF8B3E] px-6 py-12 text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div><Image src={Logo} alt="Espécies" className="brightness-0 invert" /><p className="mt-5 max-w-md font-sarabun text-base leading-relaxed text-white/75 lg:max-w-none lg:whitespace-nowrap">Tecnologia para aproximar pessoas, dados e o cuidado com cada animal.</p></div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-sarabun font-semibold text-white/90"><a href="#sobre">Sobre a plataforma</a><Link href="/login">Entrar</Link><Link href="/signup">Inscreva-se</Link></div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-6 font-sarabun text-sm text-white/60">© {new Date().getFullYear()} Espécies. Todos os direitos reservados.</div>
      </footer>
    </main>
  );
}
