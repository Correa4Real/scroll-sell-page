import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import rodrigoRegisImage from "@/assets/personas/Rodrigo_Regis.png";
import rafaelMenezesImage from "@/assets/personas/Rafael_Menezes.png";
import richardBackImage from "@/assets/personas/Richard_Back.png";
import igorImage from "@/assets/personas/Igor.png";
import aislanImage from "@/assets/personas/aislan.png";
import alexandreImage from "@/assets/personas/alexandre.png";
import bernardoImage from "@/assets/personas/bernardo.png";

const speakers = [
  {
    name: "Rodrigo Regis",
    role: "CEO e Fundador da 5P Investimentos",
    bio: "Com mais de 20 anos no mercado financeiro, foi sócio relevante da XP Inc., liderando áreas de tesouraria, produtos e grandes relações comerciais. Atualmente comanda uma das principais casas voltadas a traders e investidores de alta performance, integrando educação, mesa proprietária e tecnologia.",
    image: rodrigoRegisImage,
  },
  {
    name: "Rafael Menezes",
    role: "Quantitative Trader",
    bio: "Com doutorado em Matemática Financeira pela IMPA. Liderou por 7 anos a área de Quantitative Trading no BTG Pactual, desenvolvendo estratégias sistemáticas de alta frequência. Especialista em algoritmos, machine learning aplicado a mercados financeiros e gestão de risco, uma referência em trading quantitativo no Brasil.",
    image: rafaelMenezesImage,
  },
  {
    name: "Richard Back",
    role: "Consultor BTG Pactual",
    bio: "Graduado em História pela Universidade Católica, atuou por seis anos na Câmara dos Deputados como assessor da Vice-Presidência, Presidência e Liderança do Governo. Trabalhou por oito anos na XP Investimentos, onde criou e liderou a área de Análise Política e Estratégia Macro, além de chefiar por três anos a área de Institutional Macro Sales. Em 2023 assumiu a chefia de gabinete da Secretaria de Relações Institucionais da Presidência da República, permanecendo até março de 2025. Desde maio de 2025 é consultor da OPAS/OMS e, atualmente, também atua como consultor da Necton Corretora de Valores (Grupo BTG Pactual).",
    image: richardBackImage,
  },
  {
    name: "Igor Barenboim",
    role: "PhD em Economia por Harvard",
    bio: "Formado pela PUC-Rio, com mestrado e Ph.D. em Economia por Harvard, atuou no Ministério da Fazenda como secretário adjunto de política econômica, participando do CMN e da COMOC e sendo responsável por regulações de impacto microeconômico. Foi presidente do Conselho Fiscal do Banco de Investimentos do Banco do Brasil, membro do Conselho Fiscal do Itaú Unibanco e do Conselho de Administração de empresas como a FINEP S.A.",
    image: igorImage,
  },
  {
    name: "Aislan Menk",
    role: "CEO da Stars Aceleradora",
    bio: "Fundador e CEO da Stars Aceleradora, investidor de venture capital com foco em inovação e tech. Passou por Strategy&, Booz & Company e Merrill Lynch, acumulando expertise em gestão estratégica, valuation e corporate finance. Lidera a maior rede de aceleradoras de startups do Brasil, conectando capital, talento e visão de futuro para escalar negócios de alto impacto.",
    image: aislanImage,
  },
  {
    name: "Alexandre Difini",
    role: "Diretor Comercial da Nelogica",
    bio: "Empresa responsável por uma das principais plataformas de negociação da B3, possui mais de dez anos de experiência apoiando traders e investidores com tecnologia e dados em tempo real, trazendo uma visão prática sobre o futuro das plataformas, automação de estratégias e a profissionalização do investidor pessoa física.",
    image: alexandreImage,
  },
  {
    name: "Bernardo Bonjean",
    role: "Fundador da Metrix",
    bio: "10 anos no Banco Pactual, onde formou sua base técnica e visão de mercado, e depois teve uma passagem rápida pela XP como Head de Sales & Trading. A imersão no OPM de Harvard impulsionou seu lado empreendedor, levando à criação da Avante, que o colocou entre os 20 empreendedores que estavam mudando o Brasil e o mundo. Na pandemia, reencontrou sua paixão por tecnologia e cripto e criou a Metrix, unindo experiência, inovação e visão de longo prazo.",
    image: bernardoImage,
  },
];

const SpeakerCard = ({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row items-center gap-6 overflow-visible ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="relative flex-shrink-0 z-30 overflow-visible">
        <div
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl"
          style={{ overflow: "visible" }}
        >
          <div
            className="w-32 h-32 md:w-40 md:h-40 rounded-xl gradient-border bg-gradient-to-br from-primary/30 to-secondary/30"
            style={{ clipPath: "inset(0 -100% 0 -100%)" }}
          />
          {speaker.image ? (
            speaker.name === "Igor Barenboim" ? (
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div
                  className="h-full w-full"
                  style={{
                    overflowX: "hidden",
                    overflowY: "visible",
                    position: "relative",
                  }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="pointer-events-none object-cover object-center"
                    style={{
                      transform: "translateY(-17px) scale(1.2)",
                      width: "100%",
                      height: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>
            ) : (
              <div
                className="absolute left-0 right-0 bottom-0"
                style={{ width: "100%" }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="object-contain object-bottom pointer-events-none"
                  style={{
                    transform:
                      speaker.name === "Aislan Menk"
                        ? "translateY(-69px) translateX(9px) scale(2)"
                        : speaker.name === "Bernardo Bonjean" ||
                          speaker.name === "Richard Back"
                        ? "translateY(-58px) translateX(12px) scale(2)"
                        : "translateY(-69px) scale(2)",
                    width: "100%",
                    height: "180%",
                    maxWidth: "100%",
                    paddingRight:
                      speaker.name === "Bernardo Bonjean" ||
                      speaker.name === "Richard Back"
                        ? "15%"
                        : "0",
                    overflow: "hidden",
                  }}
                />
              </div>
            )
          ) : (
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-primary/60">
                  {speaker.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
          )}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl -z-10" />
        </div>
      </div>
      <div
        className={`glass-card p-6 flex-1 relative z-10 ${
          isEven ? "md:text-left" : "md:text-right"
        } text-center`}
      >
        <h3 className="font-display text-xl md:text-2xl font-bold gradient-text mb-1">
          {speaker.name}
        </h3>
        <p className="text-primary text-sm font-medium mb-3">{speaker.role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {speaker.bio}
        </p>
      </div>
    </motion.div>
  );
};

const SpeakersSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hexagon-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
            S P E A K E R S
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text text-shadow-glow">
            FINTECH DAY
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os especialistas que vão compartilhar suas visões sobre o
            futuro do mercado financeiro
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
