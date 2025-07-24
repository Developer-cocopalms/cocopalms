import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Helmet } from 'react-helmet';

const supabaseUrl = 'https://gfwjcallemugxqdweuuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmd2pjYWxsZW11Z3hxZHdldXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MDIxMzEsImV4cCI6MjA2NTQ3ODEzMX0.kvaYhV4DTNcyix7PzjF9N9XYxzA3bK0nx3mT8bsHqTo'
const supabase = createClient(supabaseUrl, supabaseKey);

// Blog post structure (commented for reference)
// {
//   id: number,
//   title: string,
//   content: string,
//   excerpt: string,
//   image_url: string,
//   published_at: string,
//   slug: string,
//   tags?: string[],
//   meta_description?: string,
//   featured?: boolean
// }

const BlogList = ({ onBlogSelect }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Canonical URL for blog list page
  const canonicalUrl = "https://cocopalms.io/blog";

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  // Add canonical URL management
  useEffect(() => {
    // Remove any existing canonical links
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create and add new canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalUrl;
    document.head.appendChild(canonicalLink);

    // Add robots meta tag if missing
    if (!document.querySelector("meta[name='robots']")) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    // Cleanup function
    return () => {
      const canonical = document.querySelector("link[rel='canonical']");
      if (canonical && canonical.href === canonicalUrl) {
        canonical.remove();
      }
    };
  }, [canonicalUrl]);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, image_url, published_at, slug, meta_description')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '6rem 2rem 2rem 2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const headerTitleStyle = {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '1rem',
    fontWeight: '700'
  };

  const headerSubtitleStyle = {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden'
  };

  const imageContainerStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const contentStyle = {
    padding: '1.5rem'
  };

  const dateStyle = {
    color: '#007171',
    fontSize: '0.9rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#2c3e50',
    margin: '0.5rem 0 1rem 0',
    fontWeight: '600',
    lineHeight: '1.3'
  };

  const excerptStyle = {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  };

  const buttonStyle = {
    background: '#007171',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'background 0.3s ease'
  };

  const loadingStyle = {
    textAlign: 'center',
    padding: '3rem',
    color: '#666'
  };

  const errorStyle = {
    textAlign: 'center',
    padding: '3rem',
    color: '#e74c3c'
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <Helmet>
          <title>Blog | Cocopalms - Latest Insights & Tech Updates</title>
          <meta name="description" content="Stay updated with the latest insights, tech trends, and industry updates from Cocopalms. Explore our blog for expert articles on IT solutions and digital transformation." />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div style={loadingStyle}>
          <h2>Loading blog posts...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <Helmet>
          <title>Blog | Cocopalms - Latest Insights & Tech Updates</title>
          <meta name="description" content="Stay updated with the latest insights, tech trends, and industry updates from Cocopalms. Explore our blog for expert articles on IT solutions and digital transformation." />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div style={errorStyle}>
          <h2>Error loading blog posts</h2>
          <p>{error}</p>
          <button onClick={fetchBlogPosts} style={buttonStyle}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Helmet>
        <title>Blog | Cocopalms - Latest Insights & Tech Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest insights, tech trends, and industry updates from Cocopalms. Explore our blog for expert articles on IT solutions and digital transformation." 
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blog | Cocopalms - Latest Insights & Tech Updates" />
        <meta property="og:description" content="Stay updated with the latest insights, tech trends, and industry updates from Cocopalms. Explore our blog for expert articles on IT solutions and digital transformation." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cocopalms" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Cocopalms - Latest Insights & Tech Updates" />
        <meta name="twitter:description" content="Stay updated with the latest insights, tech trends, and industry updates from Cocopalms. Explore our blog for expert articles on IT solutions and digital transformation." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Cocopalms" />
        <meta name="keywords" content="tech blog, IT insights, software development blog, digital transformation, Kuwait tech blog, programming tips" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>

      <div style={headerStyle}>
        <h1 style={headerTitleStyle}>Our Blog</h1>
        <p style={headerSubtitleStyle}>Stay updated with the latest insights and trends</p>
      </div>
      
      <div style={gridStyle}>
        {blogPosts.map(post => (
          <article 
            key={post.id} 
            style={cardStyle}
            onClick={() => onBlogSelect(post.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={imageContainerStyle}>
              <img src={post.image_url} alt={post.title} style={imageStyle} />
            </div>
            <div style={contentStyle}>
              <span style={dateStyle}>{formatDate(post.published_at)}</span>
              <h2 style={titleStyle}>{post.title}</h2>
              <p style={excerptStyle}>{post.excerpt}</p>
              <button 
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.background = 'rgba(0, 113, 113, 0.9)'}
                onMouseLeave={(e) => e.target.style.background = '#007171'}
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const BlogPost = ({ 
  postId, 
  onNavigate, 
  onNavigateHome 
}) => {
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dynamic canonical URL for individual blog posts
  const canonicalUrl = `https://cocopalms.io/blog/${postId}`;

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      setPost(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Post not found');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, published_at')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setAllPosts(data || []);
    } catch (err) {
      console.error('Error fetching all posts:', err);
    }
  };

  useEffect(() => {
    fetchBlogPost();
    fetchAllPosts();
  }, [postId]);

  // Add canonical URL management for individual blog posts
  useEffect(() => {
    // Remove any existing canonical links
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create and add new canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalUrl;
    document.head.appendChild(canonicalLink);

    // Add robots meta tag if missing
    if (!document.querySelector("meta[name='robots']")) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    // Cleanup function
    return () => {
      const canonical = document.querySelector("link[rel='canonical']");
      if (canonical && canonical.href === canonicalUrl) {
        canonical.remove();
      }
    };
  }, [canonicalUrl]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Styles
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '6rem 2rem 2rem 2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const backButtonStyle = {
    background: '#95a5a6',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '2rem',
    transition: 'background 0.3s ease'
  };

  const postStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const postImageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover'
  };

  const postMetaStyle = {
    padding: '2rem'
  };

  const postDateStyle = {
    color: '#007171',
    fontSize: '0.9rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const postTitleStyle = {
    fontSize: '2.5rem',
    color: '#2c3e50',
    margin: '1rem 0',
    fontWeight: '700',
    lineHeight: '1.2'
  };

  const postContentStyle = {
    padding: '0 2rem 2rem 2rem'
  };

  const paragraphStyle = {
    color: '#444',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    fontSize: '1.1rem'
  };

  const navigationStyle = {
    padding: '2rem',
    background: '#f8f9fa',
    borderTop: '1px solid #e9ecef'
  };

  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem'
  };

  const navButtonStyle = {
    flex: '1',
    maxWidth: '300px',
    background: 'white',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    padding: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left'
  };

  const navLabelStyle = {
    display: 'block',
    color: '#007171',
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.5rem'
  };

  const navTitleStyle = {
    display: 'block',
    color: '#2c3e50',
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '1.3'
  };

  const loadingStyle = {
    textAlign: 'center',
    padding: '3rem',
    color: '#666'
  };

  const errorStyle = {
    textAlign: 'center',
    padding: '3rem',
    color: '#e74c3c'
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <Helmet>
          <title>Loading... | Cocopalms Blog</title>
          <meta name="description" content="Loading blog post..." />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div style={loadingStyle}>
          <h2>Loading blog post...</h2>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div style={containerStyle}>
        <Helmet>
          <title>Blog Post Not Found | Cocopalms Blog</title>
          <meta name="description" content="The requested blog post could not be found." />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div style={errorStyle}>
          <h2>Blog post not found</h2>
          <p>{error}</p>
          <button onClick={onNavigateHome} style={backButtonStyle}>
            Back to Blog List
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = allPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Generate description from content or use meta_description
  const description = post.meta_description || 
    (post.excerpt || post.content.substring(0, 160).replace(/\n/g, ' ')) + '...';

  return (
    <div style={containerStyle}>
      <Helmet>
        <title>{post.title} | Cocopalms Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${post.title} | Cocopalms Blog`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Cocopalms" />
        <meta property="og:image" content={post.image_url} />
        <meta property="article:published_time" content={post.published_at} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Cocopalms Blog`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={post.image_url} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Cocopalms" />
        <meta name="keywords" content={post.tags ? post.tags.join(', ') : 'tech blog, IT insights, software development'} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>

      <button 
        style={backButtonStyle}
        onClick={onNavigateHome}
        onMouseEnter={(e) => e.target.style.background = '#7f8c8d'}
        onMouseLeave={(e) => e.target.style.background = '#95a5a6'}
      >
        ← Back to Blog List
      </button>
      
      <article style={postStyle}>
        <div>
          <img src={post.image_url} alt={post.title} style={postImageStyle} />
          <div style={postMetaStyle}>
            <span style={postDateStyle}>{formatDate(post.published_at)}</span>
            <h1 style={postTitleStyle}>{post.title}</h1>
          </div>
        </div>
        
        <div style={postContentStyle}>
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} style={paragraphStyle}>
              {paragraph.trim()}
            </p>
          ))}
        </div>
        
        <div style={navigationStyle}>
          <div style={navContainerStyle}>
            {prevPost && (
              <button 
                onClick={() => onNavigate(prevPost.id)} 
                style={{...navButtonStyle, marginRight: 'auto'}}
                onMouseEnter={(e) => {
                  const target = e.target;
                  target.style.borderColor = '#007171';
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 4px 12px rgba(0, 113, 113, 0.15)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target;
                  target.style.borderColor = '#e9ecef';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                <span style={navLabelStyle}>← Previous</span>
                <span style={navTitleStyle}>{prevPost.title}</span>
              </button>
            )}
            
            {nextPost && (
              <button 
                onClick={() => onNavigate(nextPost.id)} 
                style={{...navButtonStyle, marginLeft: 'auto', textAlign: 'right'}}
                onMouseEnter={(e) => {
                  const target = e.target;
                  target.style.borderColor = '#007171';
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 4px 12px rgba(0, 113, 113, 0.15)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target;
                  target.style.borderColor = '#e9ecef';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = 'none';
                }}
              >
                <span style={navLabelStyle}>Next →</span>
                <span style={navTitleStyle}>{nextPost.title}</span>
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // URL handling functions
  const getBlogIdFromUrl = () => {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(part => part.length > 0);
    
    if (pathParts.length === 0 || (pathParts.length === 1 && pathParts[0] === 'blog')) {
      return null;
    }
    
    if (pathParts.length >= 2 && pathParts[0] === 'blog') {
      const blogId = parseInt(pathParts[1]);
      if (!isNaN(blogId)) {
        return blogId;
      }
    }
    
    if (pathParts.length === 1) {
      const blogId = parseInt(pathParts[0]);
      if (!isNaN(blogId)) {
        return blogId;
      }
    }
    
    return null;
  };

  const updateURL = (blogId) => {
    const newUrl = blogId === null ? '/blog' : `/blog/${blogId}`;
    if (window.location.pathname !== newUrl) {
      window.history.pushState({}, '', newUrl);
    }
    setSelectedBlog(blogId);
  };

  useEffect(() => {
    const blogId = getBlogIdFromUrl();
    setSelectedBlog(blogId);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const blogId = getBlogIdFromUrl();
      setSelectedBlog(blogId);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleBlogSelect = (blogId) => {
    updateURL(blogId);
  };

  const handleNavigate = (blogId) => {
    updateURL(blogId);
  };

  const handleNavigateHome = () => {
    updateURL(null);
  };

  if (selectedBlog) {
    return (
      <BlogPost 
        postId={selectedBlog} 
        onNavigate={handleNavigate} 
        onNavigateHome={handleNavigateHome} 
      />
    );
  }

  return (
    <BlogList onBlogSelect={handleBlogSelect} />
  );
};

export default Blog;