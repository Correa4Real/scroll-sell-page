import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
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
            Macroeconomia, crypto, análise política e o futuro das plataformas de 
            negociação para quem quer se posicionar na próxima década.
          </motion.p>

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
