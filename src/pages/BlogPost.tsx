import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, Calendar, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    slug: 'seo-strategies-2023',
    title: '10 SEO Strategies That Will Dominate in 2023',
    excerpt: 'Stay ahead of the competition with these cutting-edge SEO techniques that will help your website rank higher in search results.',
    category: 'SEO',
    author: 'Jessica Chen',
    authorPosition: 'SEO Director',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read',
    content: `<p>Search engine optimization (SEO) continues to evolve at a rapid pace. What worked a year ago may not be as effective today, and strategies that will drive results in 2023 require a fresh perspective. In this article, we'll explore ten SEO strategies that are poised to dominate the digital landscape in 2023.</p>

<h2>1. Focus on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness)</h2>

<p>Google has expanded its quality guidelines to include "Experience" as a key factor in how it evaluates content quality. In 2023, it's not enough to demonstrate expertise—you need to show first-hand experience with the topic you're writing about.</p>

<p>This means showcasing practical knowledge, case studies, and real-world applications of the concepts you discuss. Subject matter experts with direct experience in their field will have an advantage in search rankings.</p>

<h2>2. Optimize for Voice Search and Conversational Queries</h2>

<p>With the growing use of voice assistants like Alexa, Siri, and Google Assistant, optimizing for voice search is more important than ever. Voice searches tend to be longer and more conversational than typed queries.</p>

<p>To capitalize on this trend:</p>

<ul>
<li>Target long-tail keywords that mirror natural speech patterns</li>
<li>Create FAQ content that directly answers common questions</li>
<li>Focus on featured snippets, which are often used for voice search results</li>
<li>Optimize for local searches with phrases like "near me" or "in [location]"</li>
</ul>

<h2>3. Embrace AI Content Tools—But Keep Humans in the Loop</h2>

<p>AI content generation tools have become increasingly sophisticated, but Google has made it clear that they value human-first content. In 2023, the most effective strategy is to use AI as a collaborative tool rather than a replacement for human writers.</p>

<p>Use AI to:</p>
<ul>
<li>Generate content outlines and ideas</li>
<li>Help with research and data analysis</li>
<li>Draft initial content that human editors can refine</li>
<li>Scale content production while maintaining quality</li>
</ul>

<p>Always have human experts review, edit, and enhance AI-generated content to ensure it provides genuine value to users.</p>

<h2>4. Prioritize Core Web Vitals and Page Experience</h2>

<p>User experience signals continue to gain importance in SEO. Google's Core Web Vitals—which measure loading performance, interactivity, and visual stability—are now major ranking factors.</p>

<p>In 2023, focus on:</p>
<ul>
<li>Improving Largest Contentful Paint (LCP) to under 2.5 seconds</li>
<li>Reducing First Input Delay (FID) to less than 100 milliseconds</li>
<li>Minimizing Cumulative Layout Shift (CLS) to less than 0.1</li>
<li>Optimizing for mobile-first indexing</li>
<li>Ensuring HTTPS security</li>
<li>Eliminating intrusive interstitials</li>
</ul>

<h2>5. Create Content for Search Intent, Not Just Keywords</h2>

<p>In 2023, understanding and matching search intent is more critical than targeting specific keywords. Google's algorithms have become increasingly sophisticated at determining what users are actually looking for when they type a query.</p>

<p>Four main types of search intent to consider:</p>
<ul>
<li>Informational: Users seeking information or answers</li>
<li>Navigational: Users looking for a specific website</li>
<li>Commercial: Users researching products before making a purchase</li>
<li>Transactional: Users ready to make a purchase or complete an action</li>
</ul>

<p>Structure your content to align with the specific intent behind your target keywords for better rankings and engagement.</p>

<h2>6. Develop a Comprehensive Strategy for Video SEO</h2>

<p>Video content continues to dominate online engagement, and search engines are placing greater emphasis on video results. In 2023, having a dedicated video SEO strategy is essential.</p>

<p>Key video SEO tactics include:</p>
<ul>
<li>Creating detailed, keyword-rich video descriptions</li>
<li>Adding accurate timestamps for different sections</li>
<li>Uploading custom thumbnails that encourage clicks</li>
<li>Including transcripts for better accessibility and indexing</li>
<li>Optimizing video schema markup</li>
<li>Creating video sitemap files</li>
</ul>

<h2>7. Leverage Passage Indexing and FAQ Schema</h2>

<p>Google's passage indexing allows specific passages within a page to rank for relevant queries, even if the overall page has a different focus. To take advantage of this:</p>

<ul>
<li>Structure content with clear headings and subheadings</li>
<li>Create comprehensive, in-depth content that covers multiple related topics</li>
<li>Use FAQ schema to mark up question-and-answer content</li>
<li>Write concise, informative paragraphs that can stand alone as valuable information</li>
</ul>

<h2>8. Focus on Local SEO with Google Business Profile</h2>

<p>For businesses with physical locations, local SEO remains crucial in 2023. Google Business Profile (formerly Google My Business) is central to local search visibility.</p>

<p>Optimize your local presence by:</p>
<ul>
<li>Keeping your Google Business Profile complete and up-to-date</li>
<li>Encouraging and responding to customer reviews</li>
<li>Adding products, services, and posts regularly</li>
<li>Using local keywords in your website content</li>
<li>Building local backlinks and citations</li>
<li>Creating location-specific pages if you serve multiple areas</li>
</ul>

<h2>9. Build Topic Clusters Instead of Individual Pages</h2>

<p>Rather than creating standalone pages for each keyword, develop comprehensive topic clusters that establish your site as an authority in your niche.</p>

<p>A topic cluster consists of:</p>
<ul>
<li>A pillar page that broadly covers the main topic</li>
<li>Multiple cluster pages that explore specific aspects in more detail</li>
<li>Internal links that connect the pillar to cluster pages and vice versa</li>
</ul>

<p>This structure helps search engines understand the relationship between your content and positions your site as a comprehensive resource.</p>

<h2>10. Prioritize Link Building Quality Over Quantity</h2>

<p>In 2023, the quality of your backlinks matters far more than the quantity. Focus on earning links from relevant, authoritative sites in your industry rather than pursuing large numbers of low-quality links.</p>

<p>Effective link building strategies for 2023 include:</p>
<ul>
<li>Creating original research, studies, or data that others want to reference</li>
<li>Developing useful tools or resources that attract natural links</li>
<li>Building relationships with industry influencers and publications</li>
<li>Guest posting on high-authority sites (with a focus on value, not just link building)</li>
<li>Reclaiming unlinked mentions of your brand</li>
</ul>

<h2>Conclusion</h2>

<p>SEO in 2023 is less about technical tricks and more about delivering exceptional user experiences and valuable content. By focusing on these ten strategies—E-E-A-T, voice search optimization, human-refined AI content, Core Web Vitals, search intent, video SEO, passage indexing, local SEO, topic clusters, and quality link building—you'll position your website for success in an increasingly competitive digital landscape.</p>

<p>Remember that SEO is a long-term strategy, and consistent application of these principles will yield the best results over time.</p>`,
    relatedPosts: [2, 5, 6]
  },
  // Other blog posts would be defined here
];

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const postData = blogPosts.find(p => p.slug === slug);
    
    // Simulate loading
    setTimeout(() => {
      if (postData) {
        setPost(postData);
        
        // Get related posts
        const related = blogPosts
          .filter(p => postData.relatedPosts.includes(p.id))
          .slice(0, 3);
        
        setRelatedPosts(related);
      }
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-32 flex justify-center">
          <div className="animate-pulse max-w-3xl w-full">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
            <div className="h-96 bg-gray-200 rounded w-full mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="btn-primary inline-block">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-32 pb-8">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-agency-blue hover:text-agency-orange transition-colors mb-8">
            <ChevronLeft size={16} className="mr-1" /> Back to Blog
          </Link>
          
          <div className="mb-4">
            <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          
          <p className="text-lg text-gray-700 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8">
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-gray-600">{post.authorPosition}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-12">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="pb-16">
        <div className="container-custom max-w-4xl">
          <div className="prose lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          <div className="border-t border-b border-gray-200 py-6 mt-12 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-gray-700 font-medium">Share this article:</span>
              <div className="flex items-center gap-3">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-agency-gray p-6 rounded-lg mb-16">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-600 mb-4">
                  {post.authorPosition} at IGNITE Digital Marketing Agency with over 10 years of experience in SEO and content strategy. Specializes in helping businesses improve their search visibility and organic traffic.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-agency-blue hover:text-agency-orange transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-agency-blue hover:text-agency-orange transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-16 bg-agency-gray">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
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
                    <div className="flex items-center">
                      <img 
                        src={post.authorImage} 
                        alt={post.author} 
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      <span className="text-sm">{post.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-agency-blue text-white p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Want More Marketing Insights?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest marketing tips, strategies, and industry insights delivered to your inbox.
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

export default BlogPost;
