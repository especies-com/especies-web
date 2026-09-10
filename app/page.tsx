import ResearchSections from "./components/ResearchSections";
import AppWalkthrough from "./components/AppWalkthrough";
import Image from "next/image";
import { HeroPreview } from "./components/FeatureShowcase";
// import FeatureShowcase from "./components/FeatureShowcase";
import MobileNavigation from "./components/MobileNavigation";
import { researchUrl } from "./lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" aria-label="especies — início">
            <Image
              src="/images/full_logo.svg"
              width={140}
              height={40}
              alt="especies"
              priority
            />
          </a>
          <nav aria-label="Navegação principal">
            {/* Retomar após validar as telas nas pesquisas.
            <a href="#plataforma">O aplicativo</a>
            */}
            <a href="#equipe">Para sua equipe</a>
            <a href="#construcao">A pesquisa</a>
          </nav>
          <MobileNavigation />
        </div>
      </header>
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                Gestão de fauna simples.
                <br />
                <em>Mais tempo para cuidar.</em>
              </h1>
              <p className="intro">
                Uma plataforma de tecnologia para instituições de fauna,
                reunindo informações, processos e operações em uma experiência
                simples e intuitiva.
              </p>
              <div className="hero-actions">
                <a className="button" href={researchUrl}>
                  Participar da pesquisa <span aria-hidden="true">↗</span>
                </a>
                {/* Retomar junto com a seção Conheça o aplicativo.
                <a className="text-link" href="#plataforma">
                  Explore o aplicativo ↓
                </a>
                */}
              </div>
              <p className="availability">
                Em desenvolvimento para iOS, Android e Web.
              </p>
            </div>
            <HeroPreview />
          </div>
        </section>
        <div className="audiences-band">
        <section className="audiences container" aria-label="Instituições">
          <p>
            Diferentes instituições.{" "}
            <strong>O mesmo compromisso com a vida.</strong>
          </p>
          <div>
            Zoológicos <span>·</span> Aquários <span>·</span> Criadouros{" "}
            <span>·</span> Centros de reabilitação <span>·</span> Instituições
            de fauna
          </div>
        </section>
        </div>
        {/* Conheça o aplicativo: aguarda validação das telas nas pesquisas.
        <FeatureShowcase />
        */}
        <section className="container section connection" id="equipe">
          <div>
            <p className="eyebrow">DA OPERAÇÃO À TECNOLOGIA</p>
            <h2>
              Informações conectadas.
              <br />
              <em>Uma operação integrada.</em>
            </h2>
          </div>
          <div>
            <p className="intro">
              A especies nasceu de uma necessidade real: simplificar a gestão
              de fauna. Por isso, desenvolvemos nossa tecnologia a partir da
              operação das instituições.
            </p>
            <p>
              Do manejo diário às decisões da gestão, conectamos os registros
              e as atividades das equipes para apoiar a continuidade do cuidado.
            </p>
          </div>
          <div className="workflow">
            Observar <span aria-hidden="true">→</span> Registrar{" "}
            <span aria-hidden="true">→</span> Compartilhar{" "}
            <span aria-hidden="true">→</span> Acompanhar
          </div>
        </section>
        <AppWalkthrough />
        <section className="research-section" id="construcao">
          <div className="container research-grid">
            <div>
              <p className="eyebrow">FEITO COM QUEM CUIDA</p>
              <h2>
                A próxima melhoria
                <br />
                começa na <em>sua rotina.</em>
              </h2>
              <p>
                Compartilhe os processos e desafios da sua instituição.
                Suas respostas ajudarão a definir as próximas prioridades
                de desenvolvimento da especies.
              </p>
              <a className="button" href={researchUrl}>
                Participar da pesquisa <span aria-hidden="true">↗</span>
              </a>
              <p className="availability">
                8 a 12 minutos · Sem compromisso de contratação
              </p>
            </div>
            <aside>
              <span className="research-number">QUEM PODE PARTICIPAR</span>
              <h3>
                Profissionais de instituições de fauna.
              </h3>
              <p>
                Tratadores, veterinários, biólogos, gestores e demais
                profissionais envolvidos no cuidado e na operação.
              </p>
            </aside>
          </div>
        </section>
        <ResearchSections />
      </main>
      <footer className="container footer">
        <Image
          src="/images/full_logo.svg"
          width={128}
          height={37}
          alt="especies"
        />
        <p>Tecnologia para simplificar a gestão de fauna e dedicar mais tempo ao cuidado.</p>
        <small>© {new Date().getFullYear()} especies</small>
      </footer>
    </>
  );
}
