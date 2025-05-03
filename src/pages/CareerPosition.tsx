import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, MapPin, Clock, Briefcase, CheckCircle } from 'lucide-react';

// Sample job positions data
const positions = [
  {
    id: "1",
    title: 'SEO Specialist',
    location: 'San Francisco, CA',
    department: 'Marketing',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: "We're looking for an experienced SEO specialist to develop and implement search strategies for our clients.",
    responsibilities: [
      "Develop and execute comprehensive SEO strategies for clients across various industries",
      "Perform keyword research and competitive analysis to identify opportunities",
      "Conduct technical SEO audits and implement recommendations",
      "Create and optimize content for search engines",
      "Set up and maintain tracking systems to monitor SEO performance",
      "Generate regular performance reports and provide insights to clients",
      "Stay current with industry trends and algorithm updates",
      "Collaborate with content, development, and paid media teams for integrated campaigns"
    ],
    requirements: [
      "3+ years of experience in SEO, preferably in an agency environment",
      "Proven track record of improving organic rankings and driving traffic growth",
      "Strong knowledge of technical SEO, on-page optimization, and link building tactics",
      "Experience with SEO tools like Semrush, Ahrefs, Screaming Frog, and Google Search Console",
      "Proficient in analyzing data and generating actionable insights",
      "Excellent written and verbal communication skills",
      "Bachelor's degree in Marketing, Communications, or related field (or equivalent experience)",
      "Google Analytics certification is a plus"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible remote work options",
      "Professional development budget",
      "Paid time off and company holidays",
      "Team building events and company outings"
    ]
  },
  // Other positions would be defined here
];

const CareerPosition = () => {
  const { id } = useParams();
  const [position, setPosition] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: null,
    linkedin: ''
  });
  
  useEffect(() => {
    // In a real app, this would be an API call
    const jobData = positions.find(pos => pos.id === id);
    
    // Simulate loading
    setTimeout(() => {
      setPosition(jobData);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    
    if (files) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Application submitted:', formData);
    // Show success message
    alert('Application submitted successfully! We will be in touch soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: null,
      linkedin: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-32 flex justify-center">
          <div className="animate-pulse max-w-4xl w-full">
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-12"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!position) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Position Not Found</h1>
          <p className="mb-8">The job position you're looking for doesn't exist or has been removed.</p>
          <Link to="/careers" className="btn-primary inline-block">
            View All Positions
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-12">
        <div className="container-custom max-w-4xl">
          <Link to="/careers" className="inline-flex items-center text-agency-blue hover:text-agency-orange transition-colors mb-8">
            <ChevronLeft size={16} className="mr-1" /> Back to Careers
          </Link>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-6">{position.title}</h1>
            
            <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{position.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                <span>{position.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{position.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" stroke-linejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{position.salary}</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg">{position.description}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {position.responsibilities.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-agency-orange flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {position.requirements.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-agency-blue flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Benefits</h2>
              <ul className="space-y-2">
                {position.benefits.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-12 bg-agency-gray">
        <div className="container-custom max-w-3xl">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-agency-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-agency-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-agency-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="linkedin">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-agency-blue"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="resume">
                    Resume/CV (PDF) *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-agency-blue"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="coverLetter">
                    Cover Letter (Optional)
                  </label>
                  <input
                    type="file"
                    id="coverLetter"
                    name="coverLetter"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-agency-blue"
                  />
                  <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="h-4 w-4 text-agency-blue focus:ring-agency-blue border-gray-300 rounded"
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  I consent to IGNITE storing my data for recruitment purposes in accordance with the Privacy Policy.
                </label>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="btn-primary w-full"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Other Positions */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Other Open Positions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-agency-blue mb-2">Content Writer</h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>Remote</span>
                    <span>Content</span>
                    <span>Full-time</span>
                  </div>
                </div>
                <div>
                  <Link to="/careers/2" className="btn-secondary whitespace-nowrap">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-agency-blue mb-2">PPC Manager</h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>San Francisco, CA</span>
                    <span>Marketing</span>
                    <span>Full-time</span>
                  </div>
                </div>
                <div>
                  <Link to="/careers/3" className="btn-secondary whitespace-nowrap">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-agency-blue mb-2">Social Media Coordinator</h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>Remote</span>
                    <span>Social Media</span>
                    <span>Full-time</span>
                  </div>
                </div>
                <div>
                  <Link to="/careers/4" className="btn-secondary whitespace-nowrap">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/careers" className="text-agency-blue hover:text-agency-orange font-medium transition-colors">
              View All Positions →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CareerPosition;
