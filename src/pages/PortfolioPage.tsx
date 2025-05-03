
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const categories = ['All', 'SEO', 'Social Media', 'Web Design', 'PPC', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Growth Campaign',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '350% increase in organic traffic and 200% growth in online sales',
      client: 'FashionStyle.com',
    },
    {
      id: 2,
      title: 'Tech Startup Rebrand',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete brand identity system with 40% improvement in brand recognition',
      client: 'CloudTech Solutions',
    },
    {
      id: 3,
      title: 'Restaurant Social Campaign',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '250% increase in social engagement and 45% growth in reservations',
      client: 'Urban Plate Restaurant Group',
    },
    {
      id: 4,
      title: 'Financial Services Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern, user-friendly website design with 60% improvement in conversion rate',
      client: 'SecureFinance Partners',
    },
    {
      id: 5,
      title: 'B2B SaaS Lead Generation',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'PPC campaign that reduced cost per lead by 40% and increased qualified leads by 75%',
      client: 'EnterpriseCore Software',
    },
    {
      id: 6,
      title: 'Healthcare Digital Presence',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive SEO strategy that resulted in first-page rankings for 50+ keywords',
      client: 'MediHealth Providers',
    },
    {
      id: 7,
      title: 'Luxury Real Estate Marketing',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Social media strategy that increased property inquiries by 180% and accelerated sales cycle',
      client: 'Elite Properties Group',
    },
    {
      id: 8,
      title: 'Education Platform UX Design',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete UX overhaul resulting in 55% increased student engagement and 40% lower bounce rate',
      client: 'LearnHub Academy',
    },
    {
      id: 9,
      title: 'Retail Chain Local Campaign',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Local SEO and PPC campaign driving 300% ROI and 80% increase in store visits',
      client: 'HomeStyle Furnishings',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Our Portfolio"
        subtitle="Explore our successful marketing campaigns and projects that have delivered measurable results for our clients"
      />
      
      {/* Filter */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-agency-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group rounded-lg overflow-hidden shadow-md card-effect"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full text-sm font-medium text-agency-blue">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-agency-blue">{project.title}</h3>
                  <p className="text-sm mb-2 text-agency-orange">Client: {project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    to={`/case-study/${project.id}`}
                    className="text-agency-orange hover:text-agency-blueLight font-medium"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-16 bg-agency-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Brands</h2>
            <p className="text-lg text-gray-700">
              We're proud to work with amazing clients across industries
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">MICROSOFT</span>
            </div>
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">GOOGLE</span>
            </div>
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">AMAZON</span>
            </div>
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">SLACK</span>
            </div>
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">ADOBE</span>
            </div>
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">SALESFORCE</span>
            </div>
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">SPOTIFY</span>
            </div>
            <div className="h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-bold text-gray-500">NETFLIX</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-agency-blue text-white p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Partner with IGNITE to achieve breakthrough results and transform your digital presence.
            </p>
            <Link to="/contact" className="btn-primary-light inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
