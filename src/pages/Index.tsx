import HeroSection from "@/components/HeroSection";
import SpeakersSection from "@/components/SpeakersSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <SpeakersSection />
      <CTASection />

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-xl font-bold gradient-text mb-2">
            FINTECH DAY
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Stars Aceleradora. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
