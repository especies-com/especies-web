import ResearchSections from "./components/ResearchSections";
import Image from "next/image";
import FeatureShowcase, { HeroPreview } from "./components/FeatureShowcase";
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
            <a href="#plataforma">O aplicativo</a>
            <a href="#equipe">Para sua equipe</a>
            <a href="#construcao">A pesquisa</a>
          </nav>
          <a className="button button-small" href={researchUrl}>
            Participar da pesquisa <span aria-hidden="true">↗</span>
          </a>
          <MobileNavigation />
        </div>
      </header>
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                O cuidado conecta.
                <br />
                <em>A especies reúne.</em>
              </h1>
              <p className="intro">
                Animais, pessoas e informações no mesmo lugar. Um aplicativo
                para aproximar o manejo diário, a equipe técnica e a gestão da
                sua instituição.
              </p>
              <div className="hero-actions">
                <a className="button" href={researchUrl}>
                  Ajude a construir a especies <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#plataforma">
                  Explore o aplicativo ↓
                </a>
              </div>
              <p className="availability">
                Em desenvolvimento para iOS, Android e Web.
              </p>
            </div>
            <HeroPreview />
          </div>
        </section>
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
        <FeatureShowcase />
        <section className="container section connection" id="equipe">
          <div>
            <p className="eyebrow">CADA PROFISSIONAL, UMA PARTE DA HISTÓRIA</p>
            <h2>
              O registro de um.
              <br />
              <em>O contexto de todos.</em>
            </h2>
          </div>
          <div>
            <p className="intro">
              Uma observação no recinto pode ser importante para a equipe
              veterinária. Um procedimento precisa chegar ao tratador. A gestão
              precisa enxergar o conjunto.
            </p>
            <p>
              A especies está sendo construída para aproximar essas rotinas, com
              informações que acompanham cada animal e ajudam a equipe a dar
              continuidade ao cuidado.
            </p>
          </div>
          <div className="workflow">
            Observar <span aria-hidden="true">→</span> Registrar{" "}
            <span aria-hidden="true">→</span> Compartilhar{" "}
            <span aria-hidden="true">→</span> Acompanhar
          </div>
        </section>
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
                Queremos ouvir tratadores, veterinários, biólogos, gestores e
                outros profissionais de instituições de fauna. Conte como sua
                equipe trabalha e ajude a definir o que vem primeiro.
              </p>
              <a className="button" href={researchUrl}>
                Participar da pesquisa <span aria-hidden="true">↗</span>
              </a>
              <p className="availability">
                8 a 12 minutos · Sem compromisso de contratação
              </p>
            </div>
            <aside>
              <span className="research-number">01 / ESCUTAR</span>
              <h3>
                Antes de propor,
                <br />
                entender.
              </h3>
              <p>
                Sua experiência orienta o desenvolvimento. Você escolhe se quer
                apenas responder, conversar com a equipe ou indicar interesse em
                um piloto.
              </p>
              <a className="text-link" href="#programa">
                Conheça o programa ↓
              </a>
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
        <p>Tecnologia para aproximar pessoas, dados e o cuidado com a vida.</p>
        <a href={researchUrl}>Contribuir com a pesquisa ↗</a>
        <small>© {new Date().getFullYear()} especies</small>
      </footer>
    </>
  );
}
