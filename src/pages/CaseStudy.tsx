import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, BarChart2, Users, TrendingUp, Target, CheckCircle } from 'lucide-react';

// Sample case studies data
const caseStudies = [
  {
    id: "1",
    title: "E-commerce Growth Campaign",
    client: "FashionStyle.com",
    industry: "E-commerce / Fashion Retail",
    services: ["SEO", "Content Marketing", "PPC"],
    heroImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    challenge: "FashionStyle.com, an emerging online fashion retailer, was struggling to gain visibility in a highly competitive market. Their organic traffic was stagnant, conversion rates were below industry average, and customer acquisition costs through paid channels were unsustainably high.",
    approach: "We implemented a comprehensive digital strategy focusing on technical SEO improvements, content optimization, and targeted paid campaigns. Our approach included:\n\n1. Technical SEO audit and implementation of fixes to improve site performance\n2. Keyword research and on-page optimization for key product categories\n3. Content strategy focusing on fashion guides and seasonal trends\n4. Restructured PPC campaigns with improved targeting and bidding strategies\n5. Implementation of structured data for enhanced search visibility",
    results: [
      "350% increase in organic search traffic over 6 months",
      "200% growth in online sales year-over-year",
      "43% decrease in cost-per-acquisition from paid channels",
      "65% improvement in conversion rate from organic traffic",
      "First page rankings for 75+ high-value keywords"
    ],
    testimonial: {
      quote: "IGNITE completely transformed our digital presence. Their strategic approach to SEO and paid advertising has resulted in substantial growth for our business. What sets them apart is their focus on measurable results and transparent communication.",
      author: "Sarah Johnson",
      position: "Marketing Director, FashionStyle.com"
    },
    visualResults: {
      trafficGrowth: 350,
      salesGrowth: 200,
      cpaReduction: 43,
      conversionImprovement: 65
    }
  },
  // Other case studies would be defined here
];

const CaseStudy = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const studyData = caseStudies.find(study => study.id === id);
    
    // Simulate loading
    setTimeout(() => {
      setCaseStudy(studyData);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-32 flex justify-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-96 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-64 mb-12"></div>
            <div className="h-80 bg-gray-200 rounded w-full mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Link to="/portfolio" className="btn-primary inline-block">
            Return to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-agency-blue/5 to-agency-blue/10">
        <div className="container-custom">
          <Link to="/portfolio" className="inline-flex items-center text-agency-blue hover:text-agency-orange transition-colors mb-8">
            <ChevronLeft size={16} className="mr-1" /> Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-4">
                <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm font-medium">
                  Case Study
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h1>
              <div className="mb-6">
                <p className="text-xl text-gray-700">Client: <span className="font-medium">{caseStudy.client}</span></p>
                <p className="text-gray-600">Industry: {caseStudy.industry}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Services Provided:</h2>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.services.map((service: string) => (
                    <span key={service} className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-agency-orange font-bold text-3xl">
                    {caseStudy.visualResults.trafficGrowth}%
                  </div>
                  <p className="text-sm text-gray-600">Increase in Traffic</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-agency-orange font-bold text-3xl">
                    {caseStudy.visualResults.salesGrowth}%
                  </div>
                  <p className="text-sm text-gray-600">Growth in Sales</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={caseStudy.heroImage} 
                alt={caseStudy.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenge Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <Target className="h-8 w-8 text-agency-blue mr-3 flex-shrink-0" />
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 whitespace-pre-line">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 bg-agency-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <Users className="h-8 w-8 text-agency-blue mr-3 flex-shrink-0" />
              Our Approach
            </h2>
            <div className="text-lg text-gray-700 whitespace-pre-line">
              {caseStudy.approach}
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <BarChart2 className="h-8 w-8 text-agency-blue mr-3 flex-shrink-0" />
              The Results
            </h2>
            
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {caseStudy.results.map((result: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-agency-orange flex-shrink-0" />
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Results Visualization */}
            <div className="bg-white rounded-lg p-6 shadow-md mb-10">
              <h3 className="text-xl font-semibold mb-6 text-center">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Traffic Growth</span>
                    <span className="text-sm font-medium">{caseStudy.visualResults.trafficGrowth}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-agency-blue h-2 rounded-full" 
                      style={{ width: `${Math.min(caseStudy.visualResults.trafficGrowth / 4, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Sales Growth</span>
                    <span className="text-sm font-medium">{caseStudy.visualResults.salesGrowth}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-agency-orange h-2 rounded-full" 
                      style={{ width: `${Math.min(caseStudy.visualResults.salesGrowth / 2.5, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">CPA Reduction</span>
                    <span className="text-sm font-medium">{caseStudy.visualResults.cpaReduction}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(caseStudy.visualResults.cpaReduction, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Conversion Improvement</span>
                    <span className="text-sm font-medium">{caseStudy.visualResults.conversionImprovement}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(caseStudy.visualResults.conversionImprovement, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-agency-blue text-white p-6 rounded-xl">
              <div className="mb-4">
                <svg width="45" height="36" className="text-agency-orange fill-current opacity-50">
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
              </div>
              <p className="text-lg mb-4">{caseStudy.testimonial.quote}</p>
              <div>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-white/80">{caseStudy.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Steps CTA */}
      <section className="py-16 bg-agency-gray">
        <div className="container-custom">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data-driven marketing strategies can help your business grow and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="pb-20 pt-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This would dynamically show related case studies based on industry or service */}
            <div className="rounded-lg overflow-hidden shadow-md card-effect">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="B2B SaaS Lead Generation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-agency-blue">B2B SaaS Lead Generation</h3>
                <p className="text-gray-600 mb-4">PPC campaign that reduced cost per lead by 40% and increased qualified leads by 75%</p>
                <Link 
                  to="/case-study/5"
                  className="text-agency-orange hover:text-agency-blueLight font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md card-effect">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare Digital Presence" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-agency-blue">Healthcare Digital Presence</h3>
                <p className="text-gray-600 mb-4">Comprehensive SEO strategy that resulted in first-page rankings for 50+ keywords</p>
                <Link 
                  to="/case-study/6"
                  className="text-agency-orange hover:text-agency-blueLight font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md card-effect">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tech Startup Rebrand" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-agency-blue">Tech Startup Rebrand</h3>
                <p className="text-gray-600 mb-4">Complete brand identity system with 40% improvement in brand recognition</p>
                <Link 
                  to="/case-study/2"
                  className="text-agency-orange hover:text-agency-blueLight font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
