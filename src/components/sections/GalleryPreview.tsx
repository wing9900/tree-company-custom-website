import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Link } from "react-router-dom";
import { Eye, ArrowRight, Image as ImageIcon, MapPin } from "lucide-react";

const GalleryPreview = () => {
  const galleryItems = [
    {
      title: "Professional Trimming",
      category: "Hedge Shaping",
      image: "/assets/11a3b252-343e-454b-8e6e-cd2af1d8bd6a.png",
      description: "Large hedge trimming completed for a resident in Katy, TX",
      detailedDescription: "In the well-manicured neighborhoods of Katy, a crisp, clean hedge line is essential for curb appeal. This client's boxwood hedge had become overgrown and uneven due to the intense Texas summer sun and rapid growth. Our team performed a professional shaping and trimming, restoring sharp, geometric lines and uniform height. We carefully removed all clippings, leaving the property looking pristine.\n\nThe result: A perfectly sculpted hedge that dramatically enhances the home's aesthetic, promotes healthier, denser growth, and restores a sense of order and elegance to the landscape.",
      project: "Hedge Shaping in Katy, TX",
    },
    {
      title: "Emergency Storm Response",
      category: "Emergency Services",
      image: "/assets/7813c07a-6621-4cf6-81ab-1687b9dcd97d.png",
      description: "Emergency storm damage cleanup project in Sugar Land, TX",
      detailedDescription: "After a violent thunderstorm swept through Sugar Land, this homeowner was faced with a massive oak tree that had fallen on their house. Our 24/7 emergency crew responded immediately to assess the hazard. We safely dismantled the tree using specialized rigging to prevent further damage, cleared all debris from the property, and secured the area.\n\nThe result: The client's property was made safe and accessible in a matter of hours, providing immediate peace of mind and preventing a prolonged, stressful disruption.",
      project: "Emergency Storm Response in Sugar Land, TX",
      location: "Sugar Land, TX",
      service: "Emergency Storm Damage Cleanup"
    },
    {
      title: "Safe Tree Removal",
      category: "Tree Removal", 
      image: "/assets/5cc39ea9-d1d2-4f97-a49f-a63c91e470f0.png",
      description: "Removal of a hazardous tree in Pasadena, TX",
      detailedDescription: "A large, mature pine tree on this Pasadena property had died, becoming a significant threat to the client's home with every gust of wind. Due to its proximity to the house, this was a highly technical removal. Our certified professionals used our bucket truck and rigging gear to carefully dismantle the tree from the top down, safely lowering each section into a designated drop zone.\n\nThe result: A major hazard was completely eliminated, protecting the client's home and family. The entire removal was executed with precision and zero impact on the surrounding property.",
      project: "Safe Tree Removal in Pasadena, TX",
      location: "Pasadena, TX",
      service: "Hazardous Tree Removal"
    },
    {
      title: "Stump Grinding Service",
      category: "Stump Grinding",
      image: "/assets/83e4a60f-a3ad-4031-b013-6de73703af69.png",
      description: "Large stump removal and cleanup in Conroe, TX",
      detailedDescription: "Following the removal of a large tree, this Conroe homeowner was left with a stubborn, oversized stump in their backyard. It was a constant obstacle for mowing and a tripping hazard for their children. Our team brought in a powerful stump grinder and obliterated the stump, grinding it well below the ground's surface. We then raked the area clean, hauled away the excess debris, and filled the hole with topsoil.\n\nThe result: The yard space was completely reclaimed. The lawn is now level, safe, and easy to maintain, with no trace that a large tree and stump were ever there.",
      project: "Stump Grinding in Conroe, TX",
      location: "Conroe, TX",
      service: "Stump Grinding Service"
    },
    {
      title: "Professional Tree Pruning",
      category: "Tree Pruning",
      image: "/assets/9b457fbe-2c47-4b38-a85e-5b87bc017dec.png",
      description: "Crown thinning and elevation project in Houston, TX",
      detailedDescription: "The magnificent live oak on this Houston property was casting dense shade, causing the lawn below to struggle. Its lower branches were also encroaching on the driveway. Following ISA and ANSI A300 standards, our trained crew performed a thorough crown thinning, selectively removing branches to improve airflow and allow dappled sunlight to penetrate the canopy. We also elevated the crown, providing ample clearance for vehicles and pedestrians.\n\nThe result: A healthier, more beautiful tree that is now more resilient to Houston's high winds, a brighter lawn that can thrive, and safe, usable space beneath the canopy.",
      project: "Professional Tree Pruning in Houston, TX",
      location: "Houston, TX",
      service: "Crown Thinning & Elevation"
    },
    {
      title: "Professional Lot Clearing",
      category: "Lot Clearing",
      image: "/assets/f9d7952b-990f-4d19-85ca-4612d04564da.png",
      description: "Comprehensive lot clearing project in Houston, TX",
      detailedDescription: "This client was preparing to build a new house on a densely forested and unusable section of their large Houston lot. The area was covered with underbrush, invasive species, and small, undesirable trees. Our crew brought in specialized equipment to clear the entire footprint of the new project. We cleared, chipped, and hauled away all debris, leaving a clean, graded site.\n\nThe result: An unusable, overgrown area was transformed into a build-ready site in just a few days, allowing the client to move forward with their construction project on a clean, professional foundation.",
      project: "Professional Lot Clearing in Houston, TX",
      location: "Houston, TX",
      service: "Comprehensive Lot Clearing"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ImageIcon className="h-4 w-4" />
            Our Work Gallery
          </div>
          <h2 className="text-section-title mb-6">
            See Our Professional Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a look at our recent projects and see the quality workmanship that has made us 
            the trusted choice for tree services throughout the Houston area.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <Card 
                  className="group overflow-hidden hover-lift animate-fade-in cursor-pointer border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={item.image}
                      alt={`${item.title} - ${item.description}`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      lazy={true}
                      aspectRatio="16/9"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Eye className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-sm font-medium">View Details</div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-card-title mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-0" style={{ border: 'none', boxShadow: 'none' }}>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {item.project}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4" style={{ border: 'none', padding: '0', margin: '16px 0 0 0' }}>
                  <div className="w-full" style={{ border: 'none', boxShadow: 'none', outline: 'none', background: 'transparent' }}>
                    <OptimizedImage
                      src={item.image}
                      alt={`${item.title} - ${item.description}`}
                      className="w-full h-auto max-h-[70vh] object-contain mb-6"
                      lazy={false}
                      priority={false}
                    />
                  </div>
                  <DialogDescription className="text-base leading-relaxed whitespace-pre-line">
                    {item.detailedDescription}
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Before & After Transformations</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the dramatic difference our professional tree services make. From overgrown trees 
              to clean, healthy landscapes - we transform properties throughout Houston.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-4">
                <h4 className="text-lg font-semibold text-red-800 mb-2">Before</h4>
                <p className="text-red-600 text-sm">
                  Overgrown, hazardous trees blocking sunlight and threatening property
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 mb-4">
                <h4 className="text-lg font-semibold text-green-800 mb-2">After</h4>
                <p className="text-green-600 text-sm">
                  Professional trimming creates safe, beautiful landscapes with proper clearance
                </p>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-4">
            <em>Note: Actual before/after photos would be displayed here with real project images</em>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/gallery">
                <Eye className="h-5 w-5" />
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Get Your Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;