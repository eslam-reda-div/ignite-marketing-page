import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, CheckCircle, Users } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'SEO Specialist',
      location: 'San Francisco, CA',
      department: 'Marketing',
      type: 'Full-time',
      description: 'We\'re looking for an experienced SEO specialist to develop and implement search strategies for our clients.',
    },
    {
      id: 2,
      title: 'Content Writer',
      location: 'Remote',
      department: 'Content',
      type: 'Full-time',
      description: 'Join our team as a content writer creating engaging, SEO-optimized content for various industries.',
    },
    {
      id: 3,
      title: 'PPC Manager',
      location: 'San Francisco, CA',
      department: 'Marketing',
      type: 'Full-time',
      description: 'Manage and optimize paid search campaigns across Google, Meta, and other advertising platforms.',
    },
    {
      id: 4,
      title: 'Social Media Coordinator',
      location: 'Remote',
      department: 'Social Media',
      type: 'Full-time',
      description: 'Create and manage social media content and campaigns for our diverse clients.',
    },
    {
      id: 5,
      title: 'Digital Marketing Intern',
      location: 'San Francisco, CA',
      department: 'Marketing',
      type: 'Internship',
      description: 'Gain hands-on experience in various aspects of digital marketing in our 3-month internship program.',
    },
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      items: [
        'Comprehensive health, dental, and vision insurance',
        'Mental health support and resources',
        'Flexible wellness stipend',
        'Gym membership reimbursement'
      ]
    },
    {
      title: 'Work-Life Balance',
      items: [
        'Flexible working hours',
        'Remote work options',
        'Unlimited PTO policy',
        'Paid parental leave'
      ]
    },
    {
      title: 'Growth & Development',
      items: [
        'Professional development budget',
        'Conference and event attendance',
        'Internal mentorship program',
        'Learning library and resources'
      ]
    },
    {
      title: 'Culture & Perks',
      items: [
        'Regular team events and outings',
        'Catered lunches twice weekly',
        'Dog-friendly office',
        'Casual dress code'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Careers at IGNITE"
        subtitle="Join our team of passionate digital marketers and help businesses achieve exceptional growth online"
      />
      
      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Join IGNITE?</h2>
              <p className="text-lg text-gray-700 mb-6">
                At IGNITE, we're more than just a digital marketing agency—we're a team of passionate marketers dedicated to helping businesses thrive online. We foster a collaborative, innovative culture where your ideas matter and your growth is prioritized.
              </p>
              <p className="text-gray-700 mb-6">
                When you join our team, you'll work with industry-leading clients across various sectors, collaborate with talented professionals, and have opportunities to continuously develop your skills and advance your career.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-agency-blue flex-shrink-0" />
                  <span>Collaborative work environment</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-agency-blue flex-shrink-0" />
                  <span>Professional growth opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-agency-blue flex-shrink-0" />
                  <span>Competitive compensation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-agency-blue flex-shrink-0" />
                  <span>Diverse client portfolio</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-agency-blue flex-shrink-0" />
                  <span>Work-life balance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-agency-blue flex-shrink-0" />
                  <span>Supportive team culture</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="IGNITE team working together" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-agency-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-700">
              The core principles that guide how we work together and serve our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-agency-blue/10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-agency-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-700">
                We believe the best results come from working together. We foster an environment where diverse perspectives are valued and team success is celebrated.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-agency-blue/10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-agency-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                Digital marketing is constantly evolving, and so are we. We encourage creative thinking, experimentation, and staying ahead of industry trends.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-agency-blue/10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-agency-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We operate with transparency and honesty in all interactions. We take responsibility for our work and prioritize our clients' best interests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-agency-blue/10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-agency-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-700">
                We're committed to growth and development, both individually and as a company. We invest in our team's skills and knowledge to deliver exceptional results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-agency-blue/10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-agency-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-700">
                We focus on delivering measurable outcomes that drive real business growth. We take pride in our clients' success and make data-informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-agency-blue/10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-agency-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-700">
                We build strong relationships with our clients by understanding their unique challenges and goals. Their success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-700">
              We believe in taking care of our team with competitive benefits and a supportive work environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-agency-blue">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-agency-orange flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-16 bg-agency-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-700">
              Join our team and help businesses achieve exceptional results through innovative digital marketing strategies
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-agency-blue mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700">{position.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link to={`/careers/${position.id}`} className="btn-primary whitespace-nowrap">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
            </p>
            <Link to="/contact" className="btn-secondary">
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Life at IGNITE</h2>
            <p className="text-lg text-gray-700">
              Hear from our team members about their experience working at IGNITE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg width="45" height="36" className="text-agency-orange fill-current opacity-50">
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6">
                "Working at IGNITE has been an incredible journey. I've had the opportunity to work with amazing clients and learn from talented colleagues. The collaborative culture and focus on professional development have been instrumental to my growth."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Employee" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">SEO Specialist, 3 years at IGNITE</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg width="45" height="36" className="text-agency-orange fill-current opacity-50">
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6">
                "What I love most about IGNITE is the emphasis on innovation and continuous learning. We're always exploring new strategies and technologies to deliver the best results for our clients. The support from management has been outstanding."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Employee" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">David Chen</div>
                  <div className="text-sm text-gray-600">PPC Manager, 2 years at IGNITE</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <svg width="45" height="36" className="text-agency-orange fill-current opacity-50">
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
              </div>
              <p className="text-gray-700 mb-6">
                "I started as an intern and grew into a full-time role at IGNITE. The mentorship I've received has been invaluable, and the work-life balance is genuinely respected here. It's a place where your contributions are recognized and your growth is supported."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Employee" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">Emily Rodriguez</div>
                  <div className="text-sm text-gray-600">Content Strategist, 4 years at IGNITE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="bg-agency-blue text-white p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Explore our current openings and take the next step in your digital marketing career with IGNITE.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#openPositions" className="btn-primary-light">
                View Open Positions
              </a>
              <Link to="/contact" className="btn-outline-light">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
