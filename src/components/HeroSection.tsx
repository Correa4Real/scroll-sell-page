import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleCheckout = () => {
    window.location.href = "https://seu-checkout.com";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 hexagon-pattern opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30"
          >
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Encontro Exclusivo
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="gradient-text text-shadow-glow">FINTECH DAY</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-display text-foreground/90 max-w-4xl mx-auto"
          >
            Aprenda as Teses que Vão Liderar 2026 e Além
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Macroeconomia, crypto, análise política e o futuro das plataformas
            de negociação para quem quer se posicionar na próxima década.
          </motion.p>

          {/* Price and CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-8 space-y-4"
          >
            <div>
              <p className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                R$ 5.000,00
              </p>
              <p className="text-sm text-muted-foreground">
                Investimento único
              </p>
            </div>

            <motion.button
              onClick={handleCheckout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-display font-bold text-base md:text-lg overflow-hidden mt-4"
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
          </motion.div>

          {/* Event Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8"
          >
            <div className="glass-card px-6 py-4 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Data</p>
                <p className="font-semibold">22 de Janeiro</p>
              </div>
            </div>

            <div className="glass-card px-6 py-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Local</p>
                <p className="font-semibold">São Paulo</p>
              </div>
            </div>

            <div className="glass-card px-6 py-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Horário</p>
                <p className="font-semibold">9h às 20h</p>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full flex justify-center"
            >
              <motion.div
                className="w-1.5 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
