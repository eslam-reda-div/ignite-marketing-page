
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      content: 'Working with IGNITE has been transformative for our business. Their strategic approach to digital marketing helped us increase our online sales by 200% within just six months. The team is responsive, creative, and truly passionate about helping businesses grow.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      name: 'David Chen',
      position: 'Marketing Director, Retail Plus',
      content: 'The IGNITE team delivered exceptional results for our multi-location retail business. Their SEO and local marketing strategies have significantly increased foot traffic to our stores and improved our online visibility. I highly recommend their services.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, Bloom Cosmetics',
      content: 'Since working with IGNITE, our social media presence has exploded. Their content strategy and community management have helped us build a loyal customer base. Their team truly understands our brand and consistently delivers creative campaigns that resonate with our audience.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-agency-blue text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-80">
            We're proud to have helped businesses of all sizes achieve their marketing goals and grow their online presence
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                      />
                      <div>
                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                        <p className="text-white/70">{testimonial.position}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-agency-orange' : 'text-gray-300'}`}
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-lg md:text-xl italic">"{testimonial.content}"</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white text-agency-blue rounded-full p-2 shadow-lg hover:bg-agency-orange hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white text-agency-blue rounded-full p-2 shadow-lg hover:bg-agency-orange hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === activeIndex ? 'bg-agency-orange' : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
