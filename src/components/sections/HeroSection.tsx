import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { Phone, Calendar } from "lucide-react";
const heroImage = "/assets/Website_Background.webp";
const HeroSection = () => {
  return <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-green-900 sm:bg-green-900 md:bg-green-900 lg:bg-transparent xl:bg-transparent">
        <img 
          src={heroImage} 
          alt="Professional tree service equipment - Leading Care Tree Service truck with boom lift and wood chipper" 
          className="w-full h-full object-contain object-center
            sm:object-cover sm:object-center
            md:object-cover md:object-center
            lg:object-cover lg:object-center
            xl:object-cover xl:object-center" 
        />
        <div className="absolute inset-0 bg-black/[0.11]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-4xl mx-auto w-full px-4">
          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-slide-up" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            Professional Tree Services in{" "}
            <span className="text-orange-400 whitespace-nowrap">{"Pasadena, TX"}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto animate-slide-up">
            <span className="text-white font-bold tracking-wide" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Expert tree trimming, removal, and emergency services.</span> 
            <span className="block mt-2 font-bold tracking-wide" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Same-day estimates • Free consultations • 27+ years experience
            </span>
          </p>

          {/* CTA Buttons - Positioned closer to text */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-scale-in">
            <CallButton variant="cta" size="xl" className="text-lg" showIcon={false} style={{boxShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
              Call Now
            </CallButton>
            <Button variant="cta" size="xl" className="text-lg" asChild style={{boxShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
              <a href="/contact">
                <Calendar className="h-6 w-6" />
                Get Free Estimate
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        
      </div>
    </section>;
};
export default HeroSection;