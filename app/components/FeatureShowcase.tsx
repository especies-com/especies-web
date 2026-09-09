"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";


const profiles = [
  {
    label: "Gestão",
    title: "Uma equipe inteira. Uma visão compartilhada.",
    description:
      "Acompanhe quem está em atividade e conecte os responsáveis aos cuidados de cada animal.",
    features: [
      "Profissionais em atividade",
      "Responsáveis por cada procedimento",
      "Visão da rotina da equipe",
    ],
    screen: "Funcionários ativos",
    node: "14799:18883",
  },
  {
    label: "Veterinária",
    title: "O próximo cuidado começa com contexto.",
    description:
      "Consulte o animal, identifique cuidados especiais e acompanhe os procedimentos previstos.",
    features: [
      "Procedimentos agendados",
      "Identificação do animal",
      "Alertas de cuidados especiais",
    ],
    screen: "Procedimentos",
    node: "14804:45637",
  },
  {
    label: "Biologia",
    title: "Cada observação ajuda a entender melhor.",
    description:
      "Registre as interações e os sinais observados para dar continuidade ao acompanhamento do bem-estar animal.",
    features: [
      "Interações individuais ou em grupo",
      "Registro de sinais de estresse",
      "Observações de comportamento",
    ],
    screen: "Interação animal",
    node: "14799:17822",
  },
  {
    label: "Manejo e nutrição",
    title: "O cuidado diário também merece memória.",
    description:
      "Organize o registro das refeições com o animal, o colaborador e a aceitação do alimento no mesmo fluxo.",
    features: [
      "Animal e colaborador",
      "Tipo e quantidade de alimento",
      "Registro de alimento rejeitado",
    ],
    screen: "Adicionar refeição",
    node: "14799:19599",
  },
];
const people = [
  ["amanda", "Amanda Ribeiro", "Gifa · Vacina"],
  ["leonardo", "Leonardo Vieira", "Caco · Vermifugação"],
  ["bruna", "Bruna Pereira", "Zazu · Tosa"],
];

function TeamRows() {
  return (
    <div className="team-rows">
      {people.map(([image, name, task]) => (
        <div className="team-row" key={name}>
          <Image src={`/images/figma/${image}.png`} width={48} height={48} alt="" />
          <div><strong>{name}</strong><span>{task}</span></div>
          <span className="app-chip">Em atividade</span>
        </div>
      ))}
    </div>
  );
}

function ProcedureCard() {
  return (
    <div className="procedure-card" data-node-id="14804:45637">
      <Image
        src="/images/figma/sosa.png"
        width={144}
        height={177}
        alt="Onça-pintada Sosa"
      />
      <strong>Sosa</strong>
      <span>Espécie</span>
      <div className="procedure-data">
        <div>
          Procedimento<b>Vacina</b>
        </div>
        <div>
          Data<b>26/02 · 10h00</b>
        </div>
      </div>
    </div>
  );
}
function AnimalCard() {
  return (
    <div className="animal-card" data-node-id="14799:19055">
      <Image
        src="/images/figma/sosa-profile.png"
        width={382}
        height={382}
        alt="Sosa, onça-pintada"
      />
      <div>
        <strong>Sosa</strong>
        <span>Panthera onca</span>
        <small>Recinto L11 · Fêmea</small>
      </div>
    </div>
  );
}
function Choice({ label, options }: { label: string; options: string[] }) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <fieldset className="demo-choice">
      <legend>{label}</legend>
      <div>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            aria-pressed={selected === option}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
function ScreenContent({ active }: { active: number }) {
  if (active === 0) return <><TeamRows /><div className="screen-note">Pessoas e cuidados, lado a lado.</div></>;
  if (active === 1)
    return (
      <>
        <div className="app-alert">
          Em tratamento e requer cuidados especiais.
        </div>
        <ProcedureCard />
        <AnimalCard />
      </>
    );
  if (active === 2)
    return (
      <>
        <Choice label="Público" options={["Individual", "Grupo"]} />
        <Choice
          label="Animal apresentou sinais de estresse?"
          options={["Sim", "Moderado", "Não"]}
        />
        <label className="demo-observation">
          Observação
          <textarea
            placeholder="Experimente registrar uma observação…"
            maxLength={300}
          />
        </label>
        <p className="demo-footnote">
          Demonstração. Nenhum registro é salvo no aplicativo.
        </p>
      </>
    );
  return (
    <>
      <div className="demo-field">
        <span>Colaborador</span>
        <strong>Jeffers...</strong>
      </div>
      <div className="demo-field">
        <span>Animal (apelido)</span>
        <strong>Zazu</strong>
      </div>
      <Choice label="Alimento rejeitado" options={["Não", "Sim"]} />
      <Choice
        label="Tipo de alimento"
        options={["Vivo", "Abatido", "Preparado"]}
      />
      <div className="food-row">
        <span>Quantidade de alimento</span>
        <strong>
          Manga <small>100 g</small>
        </strong>
      </div>
    </>
  );
}
export function HeroPreview() {
  return (
    <div className="hero-keeper">
      <Image
        src="/images/zookeeper.png"
        width={727}
        height={935}
        alt="Tratadora consultando informações no celular"
        priority
        sizes="(max-width: 900px) 90vw, 48vw"
        className="hero-keeper-image"
      />
      <Image
        src="/images/screen_model.png"
        width={458}
        height={234}
        alt="Histórico de manejos no aplicativo especies"
        priority
        sizes="(max-width: 900px) 75vw, 32vw"
        className="hero-management-history"
      />
    </div>
  );
}
export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const profile = profiles[active];
  return (
    <section className="showcase section" id="plataforma">
      <div className="container">
        <div className="showcase-heading">
          <p className="eyebrow">CONHEÇA O APLICATIVO</p>
          <h2>
            Muitos olhares.
            <br />
            <em>O mesmo cuidado.</em>
          </h2>
          <p>
            Explore as prévias e descubra como diferentes rotinas se encontram
            na especies.
          </p>
        </div>
        <div
          className="profile-tabs"
          aria-label="Escolha um perfil profissional"
        >
          {profiles.map((p, i) => (
            <button
              type="button"
              key={p.label}
              aria-pressed={i === active}
              aria-controls="profile-preview"
              onClick={() => setActive(i)}
            >
              {p.label}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div className="showcase-grid" id="profile-preview">
          <div className="feature-copy" aria-live="polite">
            <span className="feature-index">
              0{active + 1} / {profile.label.toUpperCase()}
            </span>
            <h3>{profile.title}</h3>
            <p>{profile.description}</p>
            <ul>
              {profile.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="preview-disclaimer">
              Prévia do produto em desenvolvimento.
              <br />
              Dados ilustrativos do design.
            </p>
          </div>
          <div className="demo-stage">
            <motion.div
              key={active}
              className="app-window"
              data-node-id={profile.node}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="app-topline">
                <Image
                  src="/images/full_logo.svg"
                  width={96}
                  height={28}
                  alt="especies"
                />
                <span>PRÉVIA INTERATIVA</span>
              </div>
              <h4>{profile.screen}</h4>
              <ScreenContent active={active} />
            </motion.div>
            <span className="stage-caption">
              DO REGISTRO À CONTINUIDADE DO CUIDADO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
