
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Alex Morgan',
      position: 'CEO & Founder',
      bio: 'Digital marketing veteran with 15+ years of experience helping businesses grow online.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Jessica Chen',
      position: 'SEO Director',
      bio: 'SEO specialist with a proven track record of driving organic growth for enterprise clients.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Michael Roberts',
      position: 'Creative Director',
      bio: 'Award-winning creative with a passion for developing impactful brand experiences.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Sophia Patel',
      position: 'Paid Media Specialist',
      bio: 'Data-driven marketer specialized in creating high-ROI paid advertising campaigns.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700">
            Our talented team of marketing experts is dedicated to helping your business succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow card-effect"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agency-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a 
                      href={member.social.twitter} 
                      className="bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full text-white"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      className="bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full text-white"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-agency-blue">{member.name}</h3>
                <p className="text-agency-orange font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-agency-gray rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-gray-700 mb-4">
                We're always looking for talented individuals passionate about digital marketing to join our team. If you're creative, data-driven, and results-oriented, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full">SEO Specialist</span>
                <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full">Content Writer</span>
                <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full">PPC Manager</span>
                <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full">Social Media Coordinator</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <a href="#" className="btn-primary inline-block">View Open Positions</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
