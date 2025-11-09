import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Calendar, MapPin } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getHeaderOffset = () => {
    const stickyHeader = document.querySelector<HTMLElement>(".sticky-header");
    const topBar = document.getElementById("top-contact-bar");
    const headerHeight = stickyHeader?.offsetHeight ?? 0;
    const topBarHeight = topBar?.offsetHeight ?? 0;
    return headerHeight + topBarHeight + 8;
  };
  const getScrollAdjustment = (element: HTMLElement) => {
    const adjust = element.getAttribute("data-scroll-adjust");
    const value = adjust ? parseInt(adjust, 10) : 0;
    return isNaN(value) ? 0 : value;
  };
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const target = section.querySelector<HTMLElement>("[data-scroll-target]") ?? section;
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    const effectiveOffset = Math.max(getHeaderOffset() - getScrollAdjustment(target), 0);
    const targetOffset = Math.max(absoluteTop - effectiveOffset, 0);
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
  };
  const isActive = (path: string) => {
    // If we have a hash in the URL, only hash-based navigation should be active
    if (location.hash) {
      return path === `/${location.hash}`;
    }
    // If no hash, check normal path matching
    if (path.startsWith('/#')) {
      return false; // Hash-based paths are not active when there's no hash
    }
    return location.pathname === path;
  };
  const navigationItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Services",
    href: "/#services"
  }, {
    name: "Gallery",
    href: "/gallery"
  }, {
    name: "Areas We Serve",
    href: "/#service-areas"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <>
      {/* Top Contact Bar */}
      <div id="top-contact-bar" className="bg-primary text-primary-foreground py-2 px-4 text-base">
        <div className="container-custom flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{"123-456-7890"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{"Pasadena, TX"}</span>
            </div>
            <div className="text-base">
              Licensed & Insured • Emergency Services Available 24/7
            </div>
          </div>
          <div className="ml-auto">
            
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-soft sticky top-0 z-50 sticky-header">
        <div className="container-custom lg:px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer" 
              onClick={() => {
                // If already on home page with no hash, scroll to top
                if (location.pathname === '/' && !location.hash) {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                } else {
                  // Navigate to home page
                  navigate('/', { replace: false });
                }
              }}
            >
              <div 
                className="text-2xl font-bold tracking-wide text-orange-500"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  textShadow: '1.25px 1.25px 1.5px rgba(0,0,0,0.9)'
                }}
              >
                {"Leading Care Tree Service"}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(item => {
              if (item.href === "/#services") {
                return <button key={item.name} onClick={e => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    navigate('/#services');
                  } else {
                    scrollToSection('services');
                  }
                }} className={`text-base font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-gray-700"}`}>
                      {item.name}
                    </button>;
              }
              return <Link key={item.name} to={item.href} onClick={e => {
                // If already on this page, scroll to top
                if (location.pathname === item.href) {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }
              }} className={`text-base font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary" : "text-gray-700"}`}>
                    {item.name}
                  </Link>;
            })}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3 lg:ml-6">
              <CallButton variant="cta" size="sm" showIcon={true} className="shadow-lg">
                Call Now
              </CallButton>
              <Button variant="cta" size="sm" asChild className="shadow-lg">
                <Link to="/contact" onClick={e => {
                // If already on contact page, scroll to top
                if (location.pathname === '/contact') {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }
              }}>
                  <Calendar className="h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-300 [&_[data-radix-sheet-close]]:text-gray-950 [&_[data-radix-sheet-close]]:hover:text-gray-800 [&_[data-radix-sheet-close]_svg]:h-7 [&_[data-radix-sheet-close]_svg]:w-7"
                onOpenAutoFocus={event => event.preventDefault()}
              >
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map(item => {
                  if (item.href === "/#services") {
                    return <Link key={item.name} to={item.href} onClick={e => {
                      setIsOpen(false);
                      if (location.pathname === '/') {
                        e.preventDefault();
                        scrollToSection('services');
                      }
                    }} className={`text-[1.02rem] font-medium transition-colors hover:text-primary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isActive(item.href) ? "text-primary" : "text-gray-800"}`}>
                          {item.name}
                        </Link>;
                  }
                  return <Link key={item.name} to={item.href} onClick={e => {
                    setIsOpen(false);
                    // If already on this page, scroll to top
                    if (location.pathname === item.href) {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });
                    }
                  }} className={`text-[1.02rem] font-medium transition-colors hover:text-primary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isActive(item.href) ? "text-primary" : "text-gray-800"}`}>
                        {item.name}
                      </Link>;
                })}
                  
                  <div className="pt-4 border-t space-y-3">
                    <CallButton variant="cta" className="w-full shadow-lg text-[1.01rem]" showIcon={false}>
                      Call Now
                    </CallButton>
                    <Button variant="cta" className="w-full shadow-lg text-[1.01rem]" asChild>
                      <Link to="/contact" onClick={e => {
                      setIsOpen(false);
                      // If already on contact page, scroll to top
                      if (location.pathname === '/contact') {
                        e.preventDefault();
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                        });
                      }
                    }}>
                        <Calendar className="h-4 w-4" />
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

    </>;
};
export default Header;