
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Award, BarChart, CheckCircle, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="About IGNITE"
        subtitle="We're a team of passionate digital marketers dedicated to helping businesses grow online"
      />
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, IGNITE began with a simple mission: to provide businesses with results-driven digital marketing solutions that actually generate growth. Frustrated with the industry's lack of transparency and focus on vanity metrics, our founders set out to create an agency that prioritizes measurable results and genuine business impact.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've grown from a small team of three to a full-service digital marketing agency with over 50 specialists across various disciplines. What hasn't changed is our commitment to transparency, innovation, and delivering exceptional results for our clients.
              </p>
              <p className="text-gray-700">
                Today, we're proud to work with businesses of all sizes, from ambitious startups to established enterprises, helping them achieve and exceed their marketing goals.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="IGNITE team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section-padding bg-agency-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-700">
              We're driven by a core set of principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="mb-4 p-3 bg-agency-blue/10 rounded-full w-fit">
                <CheckCircle className="h-8 w-8 text-agency-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity & Transparency</h3>
              <p className="text-gray-700">
                We believe in complete transparency with our clients, from our processes to our pricing. No hidden costs, no obscure metrics—just clear communication and honest results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="mb-4 p-3 bg-agency-blue/10 rounded-full w-fit">
                <BarChart className="h-8 w-8 text-agency-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven Approach</h3>
              <p className="text-gray-700">
                We make decisions based on data, not hunches. Our strategies are continuously optimized based on performance metrics and analytics to ensure the best possible results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-effect">
              <div className="mb-4 p-3 bg-agency-blue/10 rounded-full w-fit">
                <Award className="h-8 w-8 text-agency-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence & Innovation</h3>
              <p className="text-gray-700">
                We're never satisfied with the status quo. We continuously push boundaries, stay ahead of industry trends, and implement innovative solutions to drive exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the experts guiding our strategy and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team members */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Alex Morgan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-agency-blue">Alex Morgan</h3>
                <p className="text-agency-orange font-medium mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Digital marketing veteran with 15+ years of experience helping businesses grow online. Previously led marketing at major tech companies.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Jessica Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-agency-blue">Jessica Chen</h3>
                <p className="text-agency-orange font-medium mb-2">Chief Operating Officer</p>
                <p className="text-gray-600 text-sm">
                  Operations expert who ensures our agency runs smoothly and delivers excellence to every client. Former management consultant.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Michael Roberts" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-agency-blue">Michael Roberts</h3>
                <p className="text-agency-orange font-medium mb-2">Creative Director</p>
                <p className="text-gray-600 text-sm">
                  Award-winning creative with a passion for developing impactful brand experiences and visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-agency-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-agency-orange mb-2">10+</div>
              <p className="text-lg">Years in Business</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-agency-orange mb-2">500+</div>
              <p className="text-lg">Clients Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-agency-orange mb-2">50+</div>
              <p className="text-lg">Marketing Experts</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-agency-orange mb-2">25</div>
              <p className="text-lg">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose IGNITE?</h2>
            <p className="text-lg text-gray-700">
              What sets us apart from other marketing agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-agency-blue/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Specialized Expertise</h3>
                  <p className="text-gray-700">
                    Our team includes specialists in every discipline, from SEO and PPC to content and social media, ensuring expert execution across all your marketing channels.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-agency-blue/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Results-Focused Approach</h3>
                  <p className="text-gray-700">
                    We define clear KPIs tied to your business objectives and report on them regularly, focusing on metrics that actually matter to your bottom line.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-agency-blue/10 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Reporting</h3>
                  <p className="text-gray-700">
                    Our custom dashboards provide real-time insights into your campaign performance, with regular reports that clearly explain what's working and why.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-agency-blue/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-agency-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategic Partners</h3>
                  <p className="text-gray-700">
                    We view ourselves as an extension of your team, working collaboratively to understand your business and develop strategies that align with your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-agency-gray">
        <div className="container-custom">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data-driven marketing strategies can help you achieve your business goals and drive measurable results.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
