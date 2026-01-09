import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCheckout = () => {
    window.location.href = "https://seu-checkout.com";
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 wave-lines" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Vagas Limitadas
            </span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Garanta Sua Vaga</span>
            <br />
            <span className="text-foreground">no Fintech Day 2026</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Um dia inteiro de conteúdo exclusivo com os maiores especialistas do
            mercado financeiro. Não perca essa oportunidade única de networking
            e conhecimento.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <p className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
              R$ 5.000,00
            </p>
            <p className="text-sm text-muted-foreground">Investimento único</p>
          </motion.div>

          <motion.button
            onClick={handleCheckout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl font-display font-bold text-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(200 80% 50%) 50%, hsl(190 95% 50%) 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

            <span className="relative text-primary-foreground">
              GARANTIR MINHA VAGA
            </span>
            <ArrowRight className="relative w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />

            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
          </motion.button>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Pagamento 100% Seguro</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
