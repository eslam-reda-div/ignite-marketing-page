
import { useState } from 'react';

const Portfolio = () => {
  const categories = ['All', 'SEO', 'Social Media', 'Web Design', 'PPC', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: 'E-commerce Growth Campaign',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '350% increase in organic traffic and 200% growth in online sales',
    },
    {
      title: 'Tech Startup Rebrand',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete brand identity system with 40% improvement in brand recognition',
    },
    {
      title: 'Restaurant Social Campaign',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '250% increase in social engagement and 45% growth in reservations',
    },
    {
      title: 'Financial Services Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern, user-friendly website design with 60% improvement in conversion rate',
    },
    {
      title: 'B2B SaaS Lead Generation',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'PPC campaign that reduced cost per lead by 40% and increased qualified leads by 75%',
    },
    {
      title: 'Healthcare Digital Presence',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive SEO strategy that resulted in first-page rankings for 50+ keywords',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Work</h2>
          <p className="text-lg text-gray-700">
            Explore our portfolio of successful marketing campaigns and projects that have delivered measurable results for our clients
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-agency-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
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
                <p className="text-gray-600">{project.description}</p>
                <a 
                  href="#" 
                  className="mt-4 inline-block text-agency-orange hover:text-agency-blueLight font-medium"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
