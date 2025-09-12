import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { Phone, Calendar } from "lucide-react";
const heroImage = "/assets/Hero_Page_Image.webp";
const licensedInsuredBadge = "/assets/b6487ebe-02dc-4ea5-b3fe-aa797a7b37d1.png";
const isaArbortistBadge = "/assets/9399cb6f-2ffd-4ab1-b2c8-5019766af479.png";
const fiveStarBadge = "/assets/be0e589b-9094-4e4f-8107-10a3c354efc0.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional tree service equipment - Gulf Coast Tree Removal truck with boom lift and wood chipper" className="w-full h-full object-cover object-center sm:object-center md:object-center" />
        <div className="absolute inset-0 bg-black/[0.11]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-10">
        <div className="max-w-4xl mx-auto w-full px-4">
          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-slide-up">
            Professional Tree Services in{" "}
            <span className="text-orange-400 whitespace-nowrap">{"{{CITY}}, {{STATE}}"}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto animate-slide-up">
            <span className="text-white font-bold">Expert tree trimming, removal, and emergency services.</span> 
            <span className="block mt-2 font-semibold">
              Same-day estimates • Free consultations • 15+ years experience
            </span>
          </p>

          {/* CTA Buttons - Positioned closer to text */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-[28rem] animate-scale-in">
            <CallButton variant="cta" size="xl" className="text-lg" showIcon={false}>
              Call Now
            </CallButton>
            <Button variant="cta" size="xl" className="text-lg" asChild>
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