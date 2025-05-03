
import { Rocket, Target, BarChart, Globe, Search, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'We develop comprehensive digital strategies tailored to your unique business goals and target audience.',
      icon: <Target className="h-8 w-8 text-agency-blue" />,
    },
    {
      title: 'Search Engine Optimization',
      description: 'Our data-driven SEO services improve your visibility and drive qualified organic traffic to your website.',
      icon: <Search className="h-8 w-8 text-agency-blue" />,
    },
    {
      title: 'Paid Advertising',
      description: 'Maximize ROI with our targeted paid advertising campaigns across search, social, and display networks.',
      icon: <BarChart className="h-8 w-8 text-agency-blue" />,
    },
    {
      title: 'Social Media Management',
      description: 'We create engaging content and manage your social presence to build brand awareness and community.',
      icon: <Globe className="h-8 w-8 text-agency-blue" />,
    },
    {
      title: 'Content Creation',
      description: 'Our creative team produces high-quality, engaging content that resonates with your audience.',
      icon: <PenTool className="h-8 w-8 text-agency-blue" />,
    },
    {
      title: 'Growth Marketing',
      description: 'Data-driven strategies to accelerate business growth, acquire customers, and maximize lifetime value.',
      icon: <Rocket className="h-8 w-8 text-agency-blue" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-agency-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
          <p className="text-lg text-gray-700">
            Comprehensive solutions designed to help your business grow online and achieve measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md card-effect flex flex-col h-full"
            >
              <div className="mb-4 p-3 bg-agency-blue/10 rounded-lg w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-agency-blue">{service.title}</h3>
              <p className="text-gray-700 flex-grow">{service.description}</p>
              <a href="#contact" className="mt-4 text-agency-orange hover:text-agency-blueLight flex items-center gap-1 font-medium">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Get Started with a Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
