import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";

const ServiceAreasSection = () => {
  const serviceAreas = [
    { name: "Houston", href: "/areas/houston" },
    { name: "Katy", href: "/areas/katy" },
    { name: "Sugar Land", href: "/areas/sugar-land" },
    { name: "Richmond", href: "/areas/richmond" },
    { name: "Rosenberg", href: "/areas/rosenberg" },
    { name: "Fulshear", href: "/areas/fulshear" },
    { name: "Cypress", href: "/areas/cypress" },
    { name: "Pasadena", href: "/areas/pasadena" },
    { name: "Baytown", href: "/areas/baytown" },
    { name: "Pearland", href: "/areas/pearland" },
    { name: "League City", href: "/areas/league-city" },
    { name: "Galveston", href: "/areas/galveston" },
    { name: "Texas City", href: "/areas/texas-city" },
    { name: "The Woodlands", href: "/areas/the-woodlands" },
    { name: "Conroe", href: "/areas/conroe" },
    { name: "Missouri City", href: "/areas/missouri-city" },
    { name: "Friendswood", href: "/areas/friendswood" },
    { name: "Humble", href: "/areas/humble" }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4">
            Service Areas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional tree services throughout Greater Houston
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {serviceAreas.map((area, index) => (
            <Link
              key={area.name}
              to={area.href}
              className="group p-6 bg-card rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-200 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-accent/10 group-hover:bg-accent-foreground/10 rounded-lg w-fit mx-auto mb-3 transition-colors">
                <MapPin className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-sm">{area.name}</h3>
            </Link>
          ))}
        </div>

        {/* Coverage Map Placeholder */}
        <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
          <h3 className="text-xl font-bold mb-4">
            Complete Houston Metro Coverage
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Serving Harris County and Fort Bend County. Don't see your area? Call us - we likely serve your location!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" asChild>
              <Link to="/service-areas">
                View All Service Areas
              </Link>
            </Button>
            <Button variant="accent" asChild>
              <a href="tel:+19163822904">
                <Phone className="h-4 w-4" />
                Call to Confirm Coverage
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;