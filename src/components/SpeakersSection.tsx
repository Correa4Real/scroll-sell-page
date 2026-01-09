import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
    bio: "Com mais de 20 anos no mercado financeiro, foi sócio relevante da XP Inc., liderando áreas de tesouraria, produtos e grandes relações comerciais.",
    image: rodrigoRegisImage,
  },
  {
    name: "Rafael Menezes",
    role: "Quantitative Trader",
    bio: "Doutorado em Matemática Financeira pela IMPA. Liderou por 7 anos a área de Quantitative Trading no BTG Pactual.",
    image: rafaelMenezesImage,
  },
  {
    name: "Richard Back",
    role: "Consultor BTG Pactual",
    bio: "Atuou na XP Investimentos criando e liderando a área de Análise Política e Estratégia Macro. Consultor da Necton/BTG.",
    image: richardBackImage,
  },
  {
    name: "Igor Barenboim",
    role: "PhD em Economia por Harvard",
    bio: "Formado pela PUC-Rio, com mestrado e Ph.D. em Economia por Harvard. Atuou no Ministério da Fazenda como secretário adjunto.",
    image: igorImage,
  },
  {
    name: "Aislan Menk",
    role: "CEO da Stars Aceleradora",
    bio: "Fundador e CEO da Stars Aceleradora, investidor de venture capital. Lidera a maior rede de aceleradoras de startups do Brasil.",
    image: aislanImage,
  },
  {
    name: "Alexandre Difini",
    role: "Diretor Comercial da Nelogica",
    bio: "Mais de dez anos apoiando traders e investidores com tecnologia e dados em tempo real para a profissionalização do mercado.",
    image: alexandreImage,
  },
  {
    name: "Bernardo Bonjean",
    role: "Fundador da Metrix",
    bio: "10 anos no Banco Pactual, passagem pela XP como Head de Sales & Trading. Criou a Metrix unindo experiência e inovação.",
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
      className="group relative"
    >
      {/* Card Container */}
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
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl animate-shimmer" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-1">
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            {/* Image */}
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

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Top Shine Effect */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: isHovered ? 0.3 : 0, x: isHovered ? "200%" : "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
            />

            {/* Bottom Info Section */}
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

              {/* Bio - Appears on Hover */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? "auto" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-slate-300 text-sm leading-relaxed mt-3 line-clamp-3">
                  {speaker.bio}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-bl-[100px]">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
        </div>

        {/* Bottom Glow */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/30 rounded-full blur-2xl"
        />
      </motion.div>

      {/* Shadow Effect */}
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

const SpeakersSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

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
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
