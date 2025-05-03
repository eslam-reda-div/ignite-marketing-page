
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-agency-blue/5 to-agency-blue/10"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your <span className="heading-gradient">Digital Presence</span> & Grow Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              We're a full-service digital marketing agency that helps ambitious companies reach their full potential online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                Get Free Consultation <ChevronRight size={16} />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center gap-2">
                Explore Services <ChevronRight size={16} />
              </a>
            </div>
            <div className="pt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-agency-blue flex items-center justify-center text-white text-sm font-semibold">98%</div>
                <div className="w-10 h-10 rounded-full bg-agency-orange flex items-center justify-center text-white text-sm font-semibold">4.9</div>
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold">ROI</div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Trusted by 500+ businesses</span> with 98% client satisfaction
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Marketing Team Meeting" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-agency-blue">250%</h4>
                  <p className="text-sm text-gray-600">Average Growth in Digital Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-16 md:mt-24 pt-8 border-t">
        <p className="text-center text-gray-500 font-medium mb-6">Trusted by leading companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          <div className="h-8 flex items-center">
            <span className="text-xl font-bold text-gray-400">MICROSOFT</span>
          </div>
          <div className="h-8 flex items-center">
            <span className="text-xl font-bold text-gray-400">GOOGLE</span>
          </div>
          <div className="h-8 flex items-center">
            <span className="text-xl font-bold text-gray-400">AMAZON</span>
          </div>
          <div className="h-8 flex items-center">
            <span className="text-xl font-bold text-gray-400">SLACK</span>
          </div>
          <div className="h-8 flex items-center">
            <span className="text-xl font-bold text-gray-400">ADOBE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
