import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const speakers = [
  {
    name: "Rodrigo Regis",
    role: "CEO e Fundador da 5P Investimentos",
    bio: "Com mais de 20 anos no mercado financeiro, foi sócio relevante da XP Inc., liderando áreas de tesouraria, produtos e grandes relações comerciais. Atualmente comanda uma das principais casas voltadas a traders e investidores de alta performance.",
  },
  {
    name: "Rafael Menezes",
    role: "Quantitative Trader",
    bio: "Doutorado em Matemática Financeira pela IMPA. Liderou por 7 anos a área de Quantitative Trading no BTG Pactual, desenvolvendo estratégias sistemáticas de alta frequência. Especialista em algoritmos e machine learning aplicado a mercados financeiros.",
  },
  {
    name: "Richard Back",
    role: "Consultor BTG Pactual",
    bio: "Trabalhou por oito anos na XP Investimentos, onde criou e liderou a área de Análise Política e Estratégia Macro. Em 2023 assumiu a chefia de gabinete da Secretaria de Relações Institucionais da Presidência da República.",
  },
  {
    name: "Igor Barenboim",
    role: "PhD em Economia por Harvard",
    bio: "Atuou no Ministério da Fazenda como secretário adjunto de política econômica. Foi presidente do Conselho Fiscal do Banco de Investimentos do Banco do Brasil e membro do Conselho Fiscal do Itaú-Unibanco.",
  },
  {
    name: "Aislan Menk",
    role: "CEO da Stars Aceleradora",
    bio: "Investidor de venture capital com foco em inovação e tech. Passou por Strategy&, Booz & Company e Merrill Lynch. Lidera a maior rede de aceleradoras de startups do Brasil, conectando capital, talento e visão de futuro.",
  },
  {
    name: "Alexandre Difini",
    role: "Diretor Comercial da Nelogica",
    bio: "Responsável por uma das principais plataformas de negociação da B3, possui mais de dez anos de experiência apoiando traders e investidores com tecnologia e dados em tempo real.",
  },
  {
    name: "Bernardo Bonjean",
    role: "Fundador da Metrix",
    bio: "10 anos no Banco Pactual, depois Head de Sales & Trading na XP. A imersão no OPM de Harvard impulsionou seu lado empreendedor, levando à criação da Avante e posteriormente da Metrix, unindo experiência e inovação.",
  },
];

const SpeakerCard = ({ speaker, index }: { speaker: typeof speakers[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Avatar placeholder */}
      <div className="relative flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden gradient-border">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
            <span className="font-display text-4xl font-bold text-primary/60">
              {speaker.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl -z-10" />
      </div>

      {/* Content */}
      <div className={`glass-card p-6 flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
        <h3 className="font-display text-xl md:text-2xl font-bold gradient-text mb-1">
          {speaker.name}
        </h3>
        <p className="text-primary text-sm font-medium mb-3">{speaker.role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{speaker.bio}</p>
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
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            Conheça os especialistas que vão compartilhar suas visões sobre o futuro do mercado financeiro
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
