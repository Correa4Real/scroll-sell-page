import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
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
    shortBio:
      "Com mais de 20 anos no mercado financeiro, foi sócio relevante da XP Inc., liderando áreas de tesouraria, produtos e grandes relações comerciais.",
    fullBio:
      "Com mais de 20 anos no mercado financeiro, foi sócio relevante da XP Inc., liderando áreas de tesouraria, produtos e grandes relações comerciais. Atualmente comanda uma das principais casas voltadas a traders e investidores de alta performance, integrando educação, mesa proprietária e tecnologia.",
    image: rodrigoRegisImage,
  },
  {
    name: "Rafael Menezes",
    role: "Quantitative Trader",
    shortBio:
      "Doutorado em Matemática Financeira pela IMPA. Liderou por 7 anos a área de Quantitative Trading no BTG Pactual.",
    fullBio:
      "Com doutorado em Matemática Financeira pela IMPA. Liderou por 7 anos a área de Quantitative Trading no BTG Pactual, desenvolvendo estratégias sistemáticas de alta frequência. Especialista em algoritmos, machine learning aplicado a mercados financeiros e gestão de risco, uma referência em trading quantitativo no Brasil.",
    image: rafaelMenezesImage,
  },
  {
    name: "Richard Back",
    role: "Consultor BTG Pactual",
    shortBio:
      "Atuou na XP Investimentos criando e liderando a área de Análise Política e Estratégia Macro. Consultor da Necton/BTG.",
    fullBio:
      "Graduado em História pela Universidade Católica, atuou por seis anos na Câmara dos Deputados como assessor da Vice-Presidência, Presidência e Liderança do Governo. Trabalhou por oito anos na XP Investimentos, onde criou e liderou a área de Análise Política e Estratégia Macro, além de chefiar por três anos a área de Institutional Macro Sales. Em 2023 assumiu a chefia de gabinete da Secretaria de Relações Institucionais da Presidência da República, permanecendo até março de 2025. Desde maio de 2025 é consultor da OPAS/OMS e, atualmente, também atua como consultor da Necton Corretora de Valores (Grupo BTG Pactual).",
    image: richardBackImage,
  },
  {
    name: "Igor Barenboim",
    role: "PhD em Economia por Harvard",
    shortBio:
      "Formado pela PUC-Rio, com mestrado e Ph.D. em Economia por Harvard. Atuou no Ministério da Fazenda como secretário adjunto.",
    fullBio:
      "Formado pela PUC-Rio, com mestrado e Ph.D. em Economia por Harvard, atuou no Ministério da Fazenda como secretário adjunto de política econômica, participando do CMN e da COMOC e sendo responsável por regulações de impacto microeconômico. Foi presidente do Conselho Fiscal do Banco de Investimentos do Banco do Brasil, membro do Conselho Fiscal do Itaú Unibanco e do Conselho de Administração de empresas como a FINEP S.A.",
    image: igorImage,
  },
  {
    name: "Aislan Menk",
    role: "CEO da Stars Aceleradora",
    shortBio:
      "Fundador e CEO da Stars Aceleradora, investidor de venture capital. Lidera a maior rede de aceleradoras de startups do Brasil.",
    fullBio:
      "Fundador e CEO da Stars Aceleradora, investidor de venture capital com foco em inovação e tech. Passou por Strategy&, Booz & Company e Merrill Lynch, acumulando expertise em gestão estratégica, valuation e corporate finance. Lidera a maior rede de aceleradoras de startups do Brasil, conectando capital, talento e visão de futuro para escalar negócios de alto impacto.",
    image: aislanImage,
  },
  {
    name: "Alexandre Difini",
    role: "Diretor Comercial da Nelogica",
    shortBio:
      "Mais de dez anos apoiando traders e investidores com tecnologia e dados em tempo real para a profissionalização do mercado.",
    fullBio:
      "Empresa responsável por uma das principais plataformas de negociação da B3, possui mais de dez anos de experiência apoiando traders e investidores com tecnologia e dados em tempo real, trazendo uma visão prática sobre o futuro das plataformas, automação de estratégias e a profissionalização do investidor pessoa física.",
    image: alexandreImage,
  },
  {
    name: "Bernardo Bonjean",
    role: "Fundador da Metrix",
    shortBio:
      "10 anos no Banco Pactual, passagem pela XP como Head de Sales & Trading. Criou a Metrix unindo experiência e inovação.",
    fullBio:
      "10 anos no Banco Pactual, onde formou sua base técnica e visão de mercado, e depois teve uma passagem rápida pela XP como Head de Sales & Trading. A imersão no OPM de Harvard impulsionou seu lado empreendedor, levando à criação da Avante, que o colocou entre os 20 empreendedores que estavam mudando o Brasil e o mundo. Na pandemia, reencontrou sua paixão por tecnologia e cripto e criou a Metrix, unindo experiência, inovação e visão de longo prazo.",
    image: bernardoImage,
  },
];

const SpeakerCard = ({
  speaker,
  index,
  onClick,
}: {
  speaker: (typeof speakers)[0];
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.95 }
      }
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl animate-shimmer" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl" />
        </div>

        <div className="relative z-10 p-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <motion.div
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{
                opacity: isHovered ? 0.3 : 0,
                x: isHovered ? "200%" : "-100%",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
            />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <motion.div
                animate={{ y: isHovered ? -8 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                  {speaker.name}
                </h3>
                <p className="text-primary text-sm font-semibold tracking-wide">
                  {speaker.role}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? "auto" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-slate-300 text-sm leading-relaxed mt-3 line-clamp-2">
                  {speaker.shortBio}
                </p>
                <span className="text-primary text-xs mt-2 inline-block">
                  Clique para ver mais →
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-bl-[100px]">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
        </div>

        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/30 rounded-full blur-2xl"
        />
      </motion.div>

      <motion.div
        animate={{
          opacity: isHovered ? 0.5 : 0.2,
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? 20 : 10,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10"
      />
    </motion.div>
  );
};

const SpeakerModal = ({
  speaker,
  onClose,
}: {
  speaker: (typeof speakers)[0];
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl animate-shimmer opacity-50" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-2/5 aspect-[3/4] md:aspect-auto">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative flex-1 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary/80">
                Speaker
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold gradient-text mt-2">
                {speaker.name}
              </h3>
              <p className="text-primary text-lg font-semibold mt-2">
                {speaker.role}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <h4 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-3">
                Sobre
              </h4>
              <p className="text-slate-300 leading-relaxed text-base">
                {speaker.fullBio}
              </p>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-accent mt-8 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SpeakersSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [selectedSpeaker, setSelectedSpeaker] = useState<
    (typeof speakers)[0] | null
  >(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hexagon-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

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
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={
              isHeaderInView
                ? { opacity: 1, letterSpacing: "0.4em" }
                : { opacity: 0, letterSpacing: "0.1em" }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-sm font-medium tracking-[0.4em] uppercase text-primary"
          >
            SPEAKERS
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text text-shadow-glow">
            FINTECH DAY
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os especialistas que vão compartilhar suas visões sobre o
            futuro do mercado financeiro
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* Speakers Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakers.slice(0, 4).map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={index}
                onClick={() => setSelectedSpeaker(speaker)}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-evenly">
            {speakers.slice(4).map((speaker, index) => (
              <div
                key={speaker.name}
                className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)]"
              >
                <SpeakerCard
                  speaker={speaker}
                  index={index + 4}
                  onClick={() => setSelectedSpeaker(speaker)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <SpeakerModal
            speaker={selectedSpeaker}
            onClose={() => setSelectedSpeaker(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpeakersSection;
