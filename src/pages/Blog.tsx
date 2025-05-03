
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Blog = () => {
  const categories = ['All', 'SEO', 'Social Media', 'Content Marketing', 'PPC', 'Analytics', 'Strategy'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      slug: 'seo-strategies-2023',
      title: '10 SEO Strategies That Will Dominate in 2023',
      excerpt: 'Stay ahead of the competition with these cutting-edge SEO techniques that will help your website rank higher in search results.',
      category: 'SEO',
      author: 'Jessica Chen',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read'
    },
    {
      id: 2,
      slug: 'social-media-roi',
      title: 'Measuring Social Media ROI: A Complete Guide',
      excerpt: 'Learn how to effectively measure the return on investment of your social media marketing efforts and prove the value to stakeholders.',
      category: 'Social Media',
      author: 'Michael Roberts',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      date: 'May 28, 2023',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '10 min read'
    },
    {
      id: 3,
      slug: 'content-marketing-strategy',
      title: 'Building a Content Marketing Strategy That Converts',
      excerpt: 'Discover how to create a content marketing strategy that not only engages your audience but also drives conversions and business growth.',
      category: 'Content Marketing',
      author: 'Sophia Patel',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      date: 'May 12, 2023',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '12 min read'
    },
    {
      id: 4,
      slug: 'google-ads-tips',
      title: '7 Advanced Google Ads Tips to Lower Your CPA',
      excerpt: 'Implement these advanced PPC techniques to reduce your cost per acquisition and maximize your advertising budget efficiency.',
      category: 'PPC',
      author: 'Alex Morgan',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      date: 'April 30, 2023',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '9 min read'
    },
    {
      id: 5,
      slug: 'analytics-mistakes',
      title: '5 Common Google Analytics Mistakes and How to Fix Them',
      excerpt: 'Avoid these critical errors in your Google Analytics setup to ensure you're getting accurate data for making marketing decisions.',
      category: 'Analytics',
      author: 'Jessica Chen',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      date: 'April 18, 2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read'
    },
    {
      id: 6,
      slug: 'digital-marketing-strategy',
      title: 'Creating a Comprehensive Digital Marketing Strategy for 2023',
      excerpt: 'Learn how to develop an integrated digital marketing strategy that aligns with your business goals and drives measurable results.',
      category: 'Strategy',
      author: 'Alex Morgan',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      date: 'April 5, 2023',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '15 min read'
    }
  ];

  const filtered = blogPosts
    .filter(post => activeCategory === 'All' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Marketing Insights"
        subtitle="Expert tips, strategies, and industry trends to help you grow your business online"
      />
      
      {/* Search and Filter */}
      <section className="py-12 bg-agency-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-agency-blue"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 flex items-center">
              <div className="text-sm font-medium text-gray-500 mr-3">Filter:</div>
              <select 
                value={activeCategory} 
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-agency-blue"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16">
        <div className="container-custom">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(post => (
                <Link 
                  to={`/blog/${post.slug}`} 
                  key={post.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-agency-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <img 
                        src={post.authorImage} 
                        alt={post.author} 
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for</p>
              <button 
                className="btn-secondary"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-agency-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8 opacity-90">
              Get the latest marketing insights, strategies, and tips delivered straight to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-md flex-grow focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="btn-primary-light"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
