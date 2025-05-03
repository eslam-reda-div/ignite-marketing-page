
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Rocket, Target, BarChart, Globe, Search, PenTool, TrendingUp, Monitor } from 'lucide-react';
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: "digital-strategy",
      title: 'Digital Strategy',
      description: 'We develop comprehensive digital strategies tailored to your unique business goals and target audience.',
      icon: <Target className="h-12 w-12 text-agency-blue" />,
      features: [
        "Competitive landscape analysis",
        "Target audience research and personas",
        "Channel selection and prioritization",
        "Custom KPIs and measurement framework",
        "Budget allocation recommendations",
        "Quarterly strategy reviews"
      ],
      caseStudy: "How we helped a B2B tech company increase qualified leads by 150% through strategic channel optimization."
    },
    {
      id: "seo",
      title: 'Search Engine Optimization',
      description: 'Our data-driven SEO services improve your visibility and drive qualified organic traffic to your website.',
      icon: <Search className="h-12 w-12 text-agency-blue" />,
      features: [
        "Technical SEO audits and implementation",
        "Keyword research and content strategy",
        "On-page optimization",
        "Content creation and optimization",
        "Link building campaigns",
        "Local SEO optimization"
      ],
      caseStudy: "How our SEO strategy helped an e-commerce store increase organic traffic by 220% and sales by 75% in 6 months."
    },
    {
      id: "paid-advertising",
      title: 'Paid Advertising',
      description: 'Maximize ROI with our targeted paid advertising campaigns across search, social, and display networks.',
      icon: <BarChart className="h-12 w-12 text-agency-blue" />,
      features: [
        "Google Ads campaign management",
        "Social media advertising (Meta, LinkedIn, Twitter)",
        "Display and remarketing campaigns",
        "Advanced audience targeting",
        "A/B testing and optimization",
        "Cross-channel attribution"
      ],
      caseStudy: "How our PPC strategy reduced cost-per-acquisition by 45% while increasing conversion volume for a SaaS company."
    },
    {
      id: "social-media",
      title: 'Social Media Management',
      description: 'We create engaging content and manage your social presence to build brand awareness and community.',
      icon: <Globe className="h-12 w-12 text-agency-blue" />,
      features: [
        "Social media strategy development",
        "Content calendar creation",
        "Community management and engagement",
        "Influencer partnership management",
        "Paid social campaigns",
        "Performance reporting and analytics"
      ],
      caseStudy: "How our social media strategy helped a retail brand increase engagement by 300% and drive a 45% increase in website traffic."
    },
    {
      id: "content-creation",
      title: 'Content Creation',
      description: 'Our creative team produces high-quality, engaging content that resonates with your audience.',
      icon: <PenTool className="h-12 w-12 text-agency-blue" />,
      features: [
        "Blog posts and articles",
        "Whitepapers and ebooks",
        "Social media content",
        "Email newsletters",
        "Video production",
        "Infographics and visual content"
      ],
      caseStudy: "How our content strategy helped a B2B company establish thought leadership and generate 200+ marketing qualified leads per month."
    },
    {
      id: "growth-marketing",
      title: 'Growth Marketing',
      description: 'Data-driven strategies to accelerate business growth, acquire customers, and maximize lifetime value.',
      icon: <Rocket className="h-12 w-12 text-agency-blue" />,
      features: [
        "Growth experimentation framework",
        "Conversion rate optimization",
        "Customer lifecycle marketing",
        "Retention and loyalty programs",
        "Marketing automation",
        "Referral program development"
      ],
      caseStudy: "How our growth marketing approach helped a startup achieve 30% month-over-month user growth for 8 consecutive months."
    },
    {
      id: "analytics-reporting",
      title: 'Analytics & Reporting',
      description: 'Gain actionable insights with our comprehensive analytics and custom reporting solutions.',
      icon: <TrendingUp className="h-12 w-12 text-agency-blue" />,
      features: [
        "Google Analytics setup and configuration",
        "Custom dashboard development",
        "Regular performance reporting",
        "Data analysis and insights",
        "Attribution modeling",
        "Conversion tracking implementation"
      ],
      caseStudy: "How our analytics implementation helped a multi-channel retailer identify their most valuable customer segments and increase ROAS by 85%."
    },
    {
      id: "web-design",
      title: 'Web Design & Development',
      description: 'We create beautiful, functional websites that drive conversions and deliver exceptional user experiences.',
      icon: <Monitor className="h-12 w-12 text-agency-blue" />,
      features: [
        "Custom website design",
        "User experience (UX) design",
        "Responsive development",
        "E-commerce development",
        "Landing page optimization",
        "Website maintenance and support"
      ],
      caseStudy: "How our website redesign increased conversion rates by 75% and reduced bounce rates by 40% for a B2C service provider."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive digital marketing solutions designed to help your business grow online"
      />
      
      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md card-effect flex flex-col h-full"
              >
                <div className="mb-4 p-3 bg-agency-blue/10 rounded-lg w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-agency-blue">{service.title}</h3>
                <p className="text-gray-700 flex-grow">{service.description}</p>
                <a href={`#${service.id}`} className="mt-4 text-agency-orange hover:text-agency-blueLight flex items-center gap-1 font-medium">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-16 border-t border-gray-200">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 p-3 bg-agency-blue/10 rounded-lg w-fit">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-agency-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-agency-gray p-4 rounded-md mb-6">
                  <h3 className="font-semibold">Case Study Highlight:</h3>
                  <p className="text-gray-700">{service.caseStudy}</p>
                </div>
                
                <Link to="/contact" className="btn-primary inline-block">
                  Request a Quote
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Our {service.title} Process</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-agency-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-lg">Discovery & Analysis</h4>
                      <p className="text-gray-700">We begin by understanding your business goals, target audience, and current performance.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-agency-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-lg">Strategy Development</h4>
                      <p className="text-gray-700">Our team creates a customized strategy tailored to your specific needs and objectives.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-agency-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-lg">Implementation</h4>
                      <p className="text-gray-700">We execute the strategy with precision, following industry best practices.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-agency-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-lg">Monitoring & Optimization</h4>
                      <p className="text-gray-700">Continuous performance tracking and optimization to maximize results.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-agency-blue text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-lg">Reporting & Analysis</h4>
                      <p className="text-gray-700">Regular reporting with actionable insights to drive ongoing improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* FAQ Section */}
      <section className="section-padding bg-agency-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Common questions about our services and approach
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">How do you measure success for your clients?</h3>
                <p className="text-gray-700">
                  We establish clear KPIs tied to your business objectives at the beginning of our engagement. These may include metrics such as conversion rates, lead quality, traffic growth, or return on ad spend. We track these metrics through regular reporting and adjust our strategies as needed to ensure optimal results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What industries do you specialize in?</h3>
                <p className="text-gray-700">
                  While we've worked across numerous industries, we have particularly deep expertise in e-commerce, SaaS, healthcare, finance, and professional services. That said, our data-driven approach allows us to deliver results regardless of industry, as we focus on understanding your unique business challenges and opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">How long does it take to see results?</h3>
                <p className="text-gray-700">
                  The timeline varies depending on the service and your current situation. While some paid advertising campaigns can drive results almost immediately, strategies like SEO typically take 3-6 months to show significant impact. During our initial consultation, we'll provide you with a realistic timeline based on your specific goals and market conditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What makes IGNITE different from other agencies?</h3>
                <p className="text-gray-700">
                  We differentiate ourselves through our deep expertise, transparent reporting, data-driven approach, and focus on measurable business outcomes rather than vanity metrics. We view ourselves as a strategic partner invested in your long-term success, not just a service provider.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Do you offer customized packages?</h3>
                <p className="text-gray-700">
                  Absolutely! We understand that every business has unique needs and challenges. After understanding your goals and current situation, we'll create a tailored proposal that addresses your specific requirements and budget constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-agency-blue text-white p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our digital marketing services can help you achieve your business goals and drive measurable results.
            </p>
            <Link to="/contact" className="btn-primary-light inline-block">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
