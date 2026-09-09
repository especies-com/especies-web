import Image from "next/image";
import { researchUrl } from "../lib/site";

const topics = [
  [
    "01",
    "A história de cada animal",
    "Cadastro, identificação, saúde e rastreabilidade. Informações que precisam acompanhar cada indivíduo ou grupo.",
  ],
  [
    "02",
    "O cuidado de todos os dias",
    "Alimentação, procedimentos, enriquecimento e pendências. A rotina vista por quem está perto dos animais.",
  ],
  [
    "03",
    "Uma equipe conectada",
    "A passagem de informações entre tratadores, equipe técnica e gestão, no campo e no escritório.",
  ],
  [
    "04",
    "Dados que fazem sentido",
    "Entradas, saídas, reprodução e relatórios. Menos tempo para reunir dados, mais clareza para decidir.",
  ],
];
const faq = [
  [
    "Quem pode participar da pesquisa?",
    "Profissionais de zoológicos, criadouros, aquários, centros de triagem e reabilitação, mantenedouros, santuários e outras instituições de fauna. Queremos ouvir tanto quem cuida dos animais quanto quem gerencia a instituição.",
  ],
  [
    "Preciso pagar ou contratar alguma coisa?",
    "Não. Responder à pesquisa é gratuito e não cria compromisso de compra, assinatura ou participação em testes. Queremos conhecer sua realidade, inclusive se as ferramentas atuais já atendem bem.",
  ],
  [
    "Como funciona o desconto no lançamento?",
    "Quem responder e optar por receber novidades será informado sobre uma condição especial de assinatura no lançamento. O percentual, os planos elegíveis e a duração do desconto ainda serão definidos e comunicados antes de qualquer contratação.",
  ],
  [
    "O aplicativo já está disponível?",
    "A plataforma está em desenvolvimento. O projeto contempla iOS, Android e Web, com prioridades orientadas pelas necessidades das instituições. Ainda não há uma data de lançamento confirmada.",
  ],
  [
    "Responder me compromete com o programa de testes?",
    "Não. Ao final, você pode indicar interesse em uma conversa ou em avaliar um piloto. Escopo, disponibilidade da equipe, duração e condições serão combinados separadamente antes de qualquer teste.",
  ],
];

export default function ResearchSections() {
  return (
    <div className="research-details">
        <section className="section container program-section" id="programa">
          <div className="program-image">
            <div className="image-orbit" />
            <Image
              src="/images/zookeeper.png"
              width={625}
              height={802}
              alt="Tratadora consultando informações no celular"
              className="keeper"
            />
            <div className="image-label">
              <span className="status-dot" /> TECNOLOGIA A SERVIÇO DO CUIDADO
            </div>
          </div>
          <div className="program-text">
            <p className="eyebrow">CONSTRUIR JUNTOS FAZ MAIS SENTIDO</p>
            <h2>
              A melhor ferramenta
              <br />
              começa com uma
              <br />
              <em>boa conversa.</em>
            </h2>
            <p>
              Uma planilha aqui. Uma anotação ali. Um histórico que precisa
              chegar à pessoa certa. Cada instituição tem sua forma de trabalhar
              — e seus próprios desafios.
            </p>
            <p>
              Antes de propor soluções, queremos entender essa realidade. Sua
              participação ajuda a construir uma plataforma que faça sentido
              dentro dos recintos, na rotina da equipe e nas decisões da gestão.
            </p>
            <a className="text-link" href={researchUrl}>
              Quero compartilhar minha experiência{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section className="building section" id="temas">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">UM OLHAR PARA A ROTINA INTEIRA</p>
                <h2>
                  Muitas necessidades.
                  <br />
                  <em>Uma construção em conjunto.</em>
                </h2>
              </div>
              <p>
                Estas são algumas das áreas que estamos explorando. A sua
                experiência vai nos ajudar a descobrir o que realmente precisa
                vir primeiro.
              </p>
            </div>
            <div className="topic-grid">
              {topics.map(([number, title, description]) => (
                <article key={number}>
                  <span className="topic-number">
                    {number}
                    <span aria-hidden="true">↗</span>
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="platform-note">
              <span className="status-dot" />
              <p>
                Em desenvolvimento para <strong>iOS, Android e Web.</strong>
              </p>
              <span className="platform-note-end">
                Do manejo no campo à gestão no escritório.
              </span>
            </div>
          </div>
        </section>
        <section className="section container benefits" id="beneficios">
          <div>
            <p className="eyebrow">SUA PARTICIPAÇÃO FAZ DIFERENÇA</p>
            <h2>
              Você contribui com a experiência.
              <br />
              <em>A gente constrói com você.</em>
            </h2>
            <p className="benefit-intro">
              Uma troca para aproximar a tecnologia das necessidades reais de
              quem cuida da fauna.
            </p>
            <div className="benefit-item">
              <span>01</span>
              <div>
                <h3>Sua rotina orienta nossas prioridades</h3>
                <p>
                  Conte o que funciona, o que atrapalha e o que merece mudar.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <span>02</span>
              <div>
                <h3>Acompanhe os próximos passos</h3>
                <p>
                  Escolha receber novidades, conversar ou avaliar um piloto com
                  a equipe.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <span>03</span>
              <div>
                <h3>Uma condição especial no lançamento</h3>
                <p>
                  Receba a proposta de desconto na assinatura quando os planos
                  forem definidos, se optar pelo contato.
                </p>
              </div>
            </div>
          </div>
          <aside className="benefit-card">
            <div className="benefit-card-top">
              <Image
                src="/images/full_logo.svg"
                width={118}
                height={32}
                alt="Espécies"
              />
              <span>VAMOS CONSTRUIR JUNTOS</span>
            </div>
            <span className="big-percent" aria-hidden="true">
              %
            </span>
            <p>
              Quem ajuda a construir
              <br />
              <strong>merece fazer parte.</strong>
            </p>
            <div className="benefit-divider" />
            <h3>
              Condição especial
              <br />
              para quem participa.
            </h3>
            <p className="benefit-fineprint">
              Percentual, duração e planos elegíveis serão informados antes da
              contratação. Responder não garante vaga em um piloto e não gera
              cobrança.
            </p>
            <a href={researchUrl} className="button button-teal">
              Participar da pesquisa <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>
        <section className="how-section">
          <div className="container">
            <p className="eyebrow">SIMPLES, DO COMEÇO AO PRÓXIMO PASSO</p>
            <h2>Como participar</h2>
            <div className="how-grid">
              {[
                [
                  "01",
                  "Conte sua realidade",
                  "Reserve de 8 a 12 minutos para responder. Não precisa preparar nenhum documento.",
                ],
                [
                  "02",
                  "Escolha como se envolver",
                  "Só responder, conversar ou avaliar testes. Você decide o que cabe na sua rotina.",
                ],
                [
                  "03",
                  "Ajude a orientar o futuro",
                  "Vamos analisar as contribuições e entrar em contato conforme sua escolha.",
                ],
              ].map(([n, title, text]) => (
                <div key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section container faq-section" id="duvidas">
          <div>
            <p className="eyebrow">ANTES DE COMEÇAR</p>
            <h2>
              Ficou alguma
              <br />
              <em>dúvida?</em>
            </h2>
            <p>
              Transparência também faz parte
              <br />
              dessa construção.
            </p>
          </div>
          <div className="faq-list">
            {faq.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="closing">
          <div className="container">
            <div>
              <p className="eyebrow">O FUTURO DO CUIDADO É COLETIVO</p>
              <h2>
                A próxima boa ideia pode
                <br />
                vir da sua rotina.
              </h2>
            </div>
            <a className="button button-yellow" href={researchUrl}>
              Quero contribuir <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
    </div>
  );
}
