import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Don't Let Hurricane Season Catch You Off Guard: Essential Tree Services for Houston Homes",
      excerpt: "Living in Houston and the surrounding Harris County areas, we know the beauty and importance of our trees. Learn why professional tree services are essential for hurricane preparation.",
      date: "2025-08-15",
      readTime: "5 min read",
      author: "Tree Care Expert",
      category: "Hurricane Preparation",
      content: [
        {
          type: "paragraph",
          text: "Living in Houston and the surrounding Harris County areas, we know the beauty and importance of our trees. They provide crucial shade from the Texas heat, enhance our property value, and contribute to our vibrant urban ecosystem. However, our subtropical climate and the ever-present threat of hurricanes mean our trees require specialized care to stay healthy and safe."
        },
        {
          type: "paragraph",
          text: "Ignoring tree maintenance can lead to significant problems, especially when severe weather hits. That's why professional tree services in Houston are not just a luxury – they're a necessity."
        },
        {
          type: "paragraph",
          text: "Here are three critical reasons why hiring an experienced arborist in Houston is vital for your property."
        },
        {
          type: "heading",
          text: "1. Promote Robust Tree Health in Houston's Humid Climate"
        },
        {
          type: "paragraph",
          text: "Houston's hot and humid conditions can create a breeding ground for tree diseases and pests. Our professional tree trimming and pruning services are essential for maintaining healthy trees:"
        },
        {
          type: "list",
          items: [
            "**Removing Dead and Diseased Branches:** We expertly remove dead, dying, or diseased limbs, preventing the spread of problems that thrive in our moist environment. This also reduces the risk of branch failure during strong winds.",
            "**Improving Air Circulation:** Thinning the canopy allows for better airflow, which helps to dry out foliage and reduce the incidence of fungal diseases common in our area.",
            "**Structural Pruning for Young Trees:** Establishing a strong structure early in a tree's life is crucial for its long-term health and resilience against storms. Our arborists understand the specific needs of Houston's diverse tree species."
          ]
        },
        {
          type: "heading",
          text: "2. Minimize Hurricane Damage and Ensure Property Safety"
        },
        {
          type: "paragraph",
          text: "Hurricane season is a serious concern for Houston homeowners. Weak or overgrown trees pose a significant threat during high winds. Our Harris County tree services focus on mitigating these dangers:"
        },
        {
          type: "list",
          items: [
            "**Hazard Reduction Pruning:** We identify and remove branches that are weakly attached, overextended, or pose a risk to your home, power lines, or other structures. This proactive approach can significantly reduce storm damage.",
            "**Crown Reduction for Wind Resistance:** Properly reducing the crown of a tree can decrease wind resistance, making it less likely to be uprooted or suffer major branch damage during a hurricane or tropical storm. Important Note: This should only be done by qualified arborists to avoid harming the tree.",
            "**Emergency Tree Removal:** After a storm, we provide prompt and safe emergency tree removal services to clear fallen trees and debris, helping you recover quickly."
          ]
        },
        {
          type: "heading",
          text: "3. Enhance Your Houston Landscape and Property Value"
        },
        {
          type: "paragraph",
          text: "Well-maintained trees not only protect your property but also significantly enhance its beauty and value. Our skilled arborists prune with an understanding of tree aesthetics, ensuring a natural and pleasing shape. This professional care contributes to a well-manicured landscape, boosting your curb appeal in the competitive Houston real estate market."
        },
        {
          type: "paragraph",
          text: "**Protect your home and enhance your landscape with expert tree care.**"
        },
        {
          type: "paragraph",
          text: "Don't wait until hurricane season is upon us. Contact us today for a free consultation and estimate for all your tree care needs in Houston, Sugar Land, The Woodlands, and the surrounding Greater Houston area."
        }
      ]
    },
    {
      id: 2,
      title: "Is My Tree Sick? 5 Warning Signs Houston Homeowners Shouldn't Ignore",
      excerpt: "In Houston, our trees are magnificent assets. Learn to spot the subtle signs of tree distress before they become major hazards.",
      date: "2025-03-10",
      readTime: "4 min read",
      author: "Certified Arborist",
      category: "Tree Health",
      content: [
        {
          type: "paragraph",
          text: "In Houston, our trees are more than just landscape features; they are magnificent assets. From the majestic live oaks in River Oaks to the tall pines in The Woodlands, they provide essential shade, beauty, and value. But like any living thing, they can suffer from stress, disease, and pests, especially in our unique Gulf Coast climate."
        },
        {
          type: "paragraph",
          text: "Often, a tree will show subtle signs of distress long before it becomes a major hazard. Spotting these early warnings can be the difference between saving a beloved tree and facing a costly removal or property damage. As a leading Houston tree service, we want homeowners to know what to look for."
        },
        {
          type: "paragraph",
          text: "Here are five critical warning signs that your tree may need a professional health assessment."
        },
        {
          type: "heading",
          text: "1. Unusual Leaf Discoloration or Thinning Canopy"
        },
        {
          type: "paragraph",
          text: "Your tree's leaves are a primary indicator of its health. Pay close attention to:"
        },
        {
          type: "list",
          items: [
            "**Premature Leaf Drop:** Are leaves falling in spring or summer?",
            "**Discolored Leaves:** Yellowing (chlorosis), browning, or spotted leaves can signal nutrient deficiencies, pest issues, or fungal diseases common in Houston's humidity.",
            "**Thinning Canopy:** If you can see much more daylight through the tree's canopy than you used to, it's a sign of significant stress or dieback."
          ]
        },
        {
          type: "heading",
          text: "2. Deadwood in the Upper Crown"
        },
        {
          type: "paragraph",
          text: "Look up! The presence of dead, leafless branches, especially in the upper canopy, is a clear sign of a problem. This \"deadwood\" is not only an indicator of poor tree health but also poses a significant safety risk. These brittle branches are often the first to snap and fall during one of Houston's notorious thunderstorms or tropical storms."
        },
        {
          type: "paragraph",
          text: "Regular tree pruning by a professional arborist to remove deadwood is crucial for both the tree's health and your family's safety."
        },
        {
          type: "heading",
          text: "3. Trunk Damage and Fungal Growth"
        },
        {
          type: "paragraph",
          text: "The trunk is the tree's backbone. Any issues here can be serious. Be on the lookout for:"
        },
        {
          type: "list",
          items: [
            "**Deep Cracks or Splits:** These can compromise the tree's structural integrity.",
            "**Peeling Bark or Cankers:** Sunken or discolored areas of bark (cankers) can indicate a deep-seated infection.",
            "**Fungus or Mushrooms:** The appearance of mushrooms or other fungal bodies, especially near the base of the tree, is a strong indicator of internal rot and decay."
          ]
        },
        {
          type: "heading",
          text: "4. A Sudden Lean or Exposed Roots"
        },
        {
          type: "paragraph",
          text: "If your tree has started to lean, especially after a storm or period of heavy rain, it requires immediate attention. A sudden shift in posture, or the appearance of heaving soil and exposed roots on one side of the tree's base, could mean the root system is failing. This makes the tree a significant fall risk and may require emergency tree service."
        },
        {
          type: "heading",
          text: "5. Evidence of Pests"
        },
        {
          type: "paragraph",
          text: "While some insects are harmless, others can cause severe damage. Keep an eye out for:"
        },
        {
          type: "list",
          items: [
            "**Small Holes in the Bark:** This can be a sign of wood-boring insects.",
            "**Sawdust-like Material (Frass):** This material at the base of the tree or in bark crevices is a byproduct of insect activity.",
            "**Visible Infestations:** Large numbers of insects on the leaves or bark."
          ]
        },
        {
          type: "paragraph",
          text: "An expert arborist in Houston can identify the specific pest and recommend the most effective treatment plan."
        },
        {
          type: "heading",
          text: "Don't Wait – A Professional Assessment is Key"
        },
        {
          type: "paragraph",
          text: "If you notice any of these signs, don't attempt a DIY diagnosis. A Certified Arborist has the training and experience to accurately assess the tree's health, identify the root cause of the problem, and recommend a course of action—whether it's targeted pruning, treatment, or, if necessary, safe tree removal."
        },
        {
          type: "paragraph",
          text: "**Concerned about the health of a tree on your Houston property?**"
        },
        {
          type: "paragraph",
          text: "Protect your investment and ensure your peace of mind. Contact us today for a professional tree health inspection. We proudly serve homeowners throughout the Greater Houston area, including Sugar Land, Katy, The Woodlands, and Harris County."
        }
      ]
    }
  ];

  const renderContent = (content: any[]) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'heading':
          return (
            <h2 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4 first:mt-0">
              {block.text}
            </h2>
          );
        case 'paragraph':
          return (
            <p key={index} className="text-muted-foreground leading-relaxed mb-4" 
               dangerouslySetInnerHTML={{ __html: block.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          );
        case 'list':
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-6 ml-4">
              {block.items.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Layout hideCTA={true}>
      {/* SEO Meta Tags */}
      <div className="hidden">
        <h1>Houston Tree Service Blog - Expert Tree Care Tips & Insights</h1>
      </div>
      
      <div className="container-custom section-padding">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-section-title font-bold text-foreground mb-4">
            Tree Care Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights and tips for maintaining healthy trees in Houston's unique climate
          </p>
        </header>

        {/* Blog Posts */}
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="max-w-4xl mx-auto">
              {/* Centered Category Badge */}
              <div className="flex justify-center mb-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {post.category}
                </Badge>
              </div>
              
              <Card className="border-0 shadow-soft bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {post.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {post.excerpt}
                  </p>
                </CardHeader>
                
                <CardContent className="prose prose-lg max-w-none">
                  <div className="text-base leading-relaxed">
                    {renderContent(post.content)}
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16 p-8 rounded-lg bg-primary/5 border border-primary/10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Professional Tree Care?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our certified arborists are ready to help with all your tree care needs in Houston and surrounding areas.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-md hover:shadow-lg">
              Get Free Consultation
            </Button>
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;