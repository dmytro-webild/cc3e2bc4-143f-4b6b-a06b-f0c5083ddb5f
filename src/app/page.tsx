"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Zap, Sparkles, Crown, Star, Send, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmall"
      background="fluid"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="BeeSwarm Marketing"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "pricing" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Get Quote", id: "contact" }
          ]}
          bottomLeftText="Social Media Excellence"
          bottomRightText="hello@beeswarmarketing.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Your Social Media Success Takes Flight"
          description="We're the buzzing hive of expert social media strategists who craft campaigns that make your brand the center of attention. Let us help your business thrive in the digital landscape."
          tag="Social Media Marketing"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Request a Quote", href: "#contact" },
            { text: "Explore Services", href: "#pricing" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/selective-focus-bumblebee-feeding-yellow-sedum-rupestre-flower_181624-38042.jpg"
          imageAlt="bee flying yellow flowers nature"
          mediaAnimation="opacity"
          background={{ variant: "radial-gradient" }}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About Our Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="We're the Hive Behind Your Brand's Success"
          description="At BeeSwarm Marketing, we believe that exceptional social media marketing requires precision, creativity, and teamwork. Our dedicated team works tirelessly to ensure your brand messages resonate with your target audience."
          subdescription="With over a decade of combined experience in social media strategy, content creation, and community management, we've helped hundreds of brands build their online presence and drive meaningful engagement."
          icon={Zap}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-young-colleagues-sitting-office-coworking_171337-17660.jpg"
          imageAlt="modern office collaboration teamwork creative"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Service Packages Built for Your Success"
          description="Choose the perfect plan to grow your social media presence. All packages include strategy, content creation, and community management."
          tag="Our Services"
          tagIcon={Crown}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "starter",              title: "Starter Hive",              price: "$1,999",              period: "per month",              features: [
                "2 social media platforms",                "8 posts per week",                "Basic community management",                "Monthly performance report",                "Email support"
              ],
              button: { text: "Get Started", href: "#contact" }
            },
            {
              id: "growth",              title: "Growth Hive",              price: "$3,999",              period: "per month",              features: [
                "4 social media platforms",                "16 posts per week",                "Advanced community management",                "Video content creation (2 per month)",                "Bi-weekly strategy calls",                "Priority support"
              ],
              button: { text: "Boost Growth", href: "#contact" }
            },
            {
              id: "premium",              title: "Premium Hive",              price: "$6,999",              period: "per month",              features: [
                "All platforms covered",                "Daily posting schedule",                "Influencer partnerships",                "Professional video production (4 per month)",                "Paid advertising management ($2,000 budget)",                "Weekly strategy calls",                "24/7 dedicated account manager"
              ],
              button: { text: "Go Premium", href: "#contact" }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardSix
          title="What Our Clients Say"
          description="Real results from real businesses that trusted us with their social media strategy."
          tag="Client Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="opacity"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              handle: "@sarahsmile",              testimonial: "BeeSwarm transformed our social media presence in just 3 months. Our engagement rates tripled and we finally connected with our ideal customers.",              imageSrc: "http://img.b2bpic.net/free-photo/business-woman-working-home_23-2148162643.jpg",              imageAlt: "professional business woman portrait headshot",              icon: Heart
            },
            {
              id: "2",              name: "James Chen",              handle: "@jameschen_co",              testimonial: "Professional, creative, and results-driven. The team at BeeSwarm understood our brand vision immediately and executed flawlessly.",              imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-man-student-businessman-jacket-holds-his-arms-crossed-isolated-light-grey-wall_231208-6133.jpg",              imageAlt: "professional business man portrait headshot",              icon: Heart
            },
            {
              id: "3",              name: "Emma Rodriguez",              handle: "@emmaempowers",              testimonial: "I've worked with many marketing agencies, but BeeSwarm's attention to detail and strategic thinking is unmatched. Highly recommended!",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-suit-cross-arms-chest-looking-like-real-professional-smili_1258-122403.jpg",              imageAlt: "young professional woman business portrait",              icon: Heart
            },
            {
              id: "4",              name: "Marcus Thompson",              handle: "@marcus_grows",              testimonial: "From strategy to execution, BeeSwarm delivered everything we needed to scale our online presence. Fantastic partnership!",              imageSrc: "http://img.b2bpic.net/free-photo/executive-blue-suit-arms-crossed_1139-200.jpg",              imageAlt: "young professional man business portrait",              icon: Heart
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ready to Grow?"
          title="Request Your Custom Quote Today"
          description="Tell us about your brand and social media goals. Our team will create a personalized proposal tailored to your needs and budget."
          tagIcon={Send}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Get Quote"
          termsText="By submitting this form, you agree to receive communications from BeeSwarm Marketing about your quote and services."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="BeeSwarm Marketing"
          copyrightText="© 2025 BeeSwarm Marketing. All rights reserved."
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#pricing" },
                { label: "Testimonials", href: "#testimonial" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Blog", href: "#" },
                { label: "Social Media Tips", href: "#" },
                { label: "Case Studies", href: "#" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Email Us", href: "mailto:hello@beeswarmarketing.com" },
                { label: "Request Quote", href: "#contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}