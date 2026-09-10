import Image from "next/image";
import { researchUrl } from "../lib/site";

const topics = [
  [
    "01",
    "Registros dos animais",
    "Cadastro, identificação, saúde e rastreabilidade de indivíduos ou grupos.",
  ],
  [
    "02",
    "Manejo e cuidados",
    "Alimentação, procedimentos, enriquecimento e acompanhamento de pendências.",
  ],
  [
    "03",
    "Comunicação da equipe",
    "Compartilhamento de informações entre tratadores, equipe técnica e gestão.",
  ],
  [
    "04",
    "Dados e relatórios",
    "Entradas, saídas, reprodução e informações para apoiar decisões.",
  ],
];
const faq = [
  [
    "Quem pode participar da pesquisa?",
    "Profissionais de zoológicos, criadouros, aquários, centros de triagem e reabilitação, mantenedouros, santuários e outras instituições de fauna. Queremos ouvir tanto quem cuida dos animais quanto quem gerencia a instituição.",
  ],
  [
    "A participação implica algum custo ou compromisso?",
    "Não. A pesquisa é gratuita e não implica compromisso de contratação. Conversas e testes são opcionais.",
  ],
  [
    "Quais são as condições de contratação para instituições participantes?",
    "O percentual de desconto, o período de vigência e os planos elegíveis serão informados antes da contratação. Para receber os detalhes, selecione a opção de novidades e condição de lançamento ao final do formulário. O desconto não depende da participação em conversas ou testes.",
  ],
  [
    "O aplicativo já está disponível?",
    "A plataforma está em desenvolvimento e ainda não há uma data de lançamento confirmada.",
  ],
  [
    "Posso participar apenas da pesquisa?",
    "Sim. Sua contribuição pode se encerrar no envio das respostas. Se quiser, ao final você pode indicar interesse em uma conversa ou em avaliar um piloto. Isso não confirma sua participação: os próximos passos serão combinados separadamente.",
  ],
];

export default function ResearchSections() {
  return (
    <div className="research-details">
        <section className="building section" id="temas">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">TEMAS DA PESQUISA</p>
                <h2>
                  Quais áreas fazem parte
                  <br />
                  <em>da sua rotina?</em>
                </h2>
              </div>
              <p>
                A pesquisa aborda quatro áreas da operação para identificar
                necessidades e definir prioridades de desenvolvimento.
              </p>
            </div>
            <div className="topic-grid">
              {topics.map(([number, title, description]) => (
                <article key={number}>
                  <span className="topic-number">
                    {number}
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section container benefits" id="beneficios">
          <div>
            <p className="eyebrow">PARTICIPAÇÃO NA PESQUISA</p>
            <h2>Como participar</h2>
            <div className="benefit-item">
              <span>01</span>
              <div>
                <h3>Compartilhe sua experiência</h3>
                <p>Responda sobre a rotina da sua instituição. Não é necessário preparar documentos.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span>02</span>
              <div>
                <h3>Defina suas preferências</h3>
                <p>Ao final, você pode optar por receber novidades, conversar com a equipe ou avaliar um piloto.</p>
              </div>
            </div>
            <div className="benefit-item">
              <span>03</span>
              <div>
                <h3>Envie suas respostas</h3>
                <p>O contato posterior será realizado apenas conforme as opções selecionadas.</p>
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
            </div>
            <h3>
              Condições especiais no lançamento
            </h3>
            <p>
              Sua instituição terá acesso a desconto pela participação na pesquisa.
            </p>
          </aside>
        </section>
        <section className="section container faq-section" id="duvidas">
          <div>
            <p className="eyebrow">ANTES DE COMEÇAR</p>
            <h2>
              Ficou alguma
              <br />
              <em>dúvida?</em>
            </h2>
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
              <p className="eyebrow">CONTRIBUA COM O DESENVOLVIMENTO</p>
              <h2>
                Sua experiência pode
                <br />
                ajudar a simplificar a gestão.
              </h2>
            </div>
            <a className="button button-yellow" href={researchUrl}>
              Participar da pesquisa <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
    </div>
  );
}
