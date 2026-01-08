import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Users, Lightbulb, BarChart3, Globe } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Macroeconomia",
    description: "Análises profundas sobre cenários econômicos e tendências globais que impactam seus investimentos.",
  },
  {
    icon: Shield,
    title: "Gestão de Risco",
    description: "Estratégias avançadas para proteger e maximizar seus retornos em qualquer cenário de mercado.",
  },
  {
    icon: Users,
    title: "Networking Premium",
    description: "Conecte-se com outros investidores e profissionais de alto nível do mercado financeiro.",
  },
  {
    icon: Lightbulb,
    title: "Teses de Investimento",
    description: "Descubra as oportunidades que os maiores gestores estão identificando para os próximos anos.",
  },
  {
    icon: BarChart3,
    title: "Trading Quantitativo",
    description: "Aprenda sobre algoritmos, machine learning e automação aplicados ao mercado financeiro.",
  },
  {
    icon: Globe,
    title: "Crypto & Blockchain",
    description: "Explore o futuro das finanças digitais com especialistas em criptoativos e tecnologia blockchain.",
  },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <benefit.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {benefit.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">O que você vai </span>
            <span className="gradient-text">aprender</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Um programa completo desenvolvido por quem vive o mercado todos os dias
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
