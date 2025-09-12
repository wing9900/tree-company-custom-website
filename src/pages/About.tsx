import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="text-hero mb-6">
            About {"{{COMPANY_NAME}}"}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional tree services with over 15 years of experience serving the Houston area. 
            Licensed, insured, and dedicated to keeping your property safe and beautiful.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section-title mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2009, {"{{COMPANY_NAME}}"} began as a small family-owned business with a simple mission: 
                provide honest, professional tree services to homeowners and businesses throughout the Houston area.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over the years, we've grown to become one of the most trusted tree service companies in the region, 
                completing thousands of successful projects while maintaining our commitment to safety, quality, and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" asChild>
                  <a href="tel:+19253894584">
                    <Phone className="h-4 w-4" />
                    Call Today
                  </a>
                </Button>
                <Button variant="cta" asChild>
                  <Link to="/contact">
                    Get Free Estimate
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                  <div className="text-sm text-muted-foreground">Trees Serviced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Safety */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Certifications & Safety</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of safety and professionalism through ongoing training, 
              proper certifications, and comprehensive insurance coverage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">Fully licensed and insured with comprehensive liability coverage</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ISA Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Our arborist is certified by the International Society of Arboriculture
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Trained Team</h3>
                <p className="text-sm text-muted-foreground">
                  All team members receive ongoing safety and technical training
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Emergency Ready</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 emergency response team for storm damage and hazardous situations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </Layout>;
};
export default About;