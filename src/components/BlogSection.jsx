import React from 'react';
import './BlogSection.css';
import { blogPosts } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaClock } from 'react-icons/fa';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}>{children}</div>;
};

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">📝 Travel Blog</span>
            <h2 className="section-title">Stories & Travel Tips</h2>
            <p className="section-subtitle">Insights, guides, and inspiration for your next adventure</p>
          </div>
        </AnimatedSection>

        <div className="blog__grid">
          {blogPosts.map((post) => (
            <AnimatedSection key={post.id}>
              <article className="blog__card card-hover-lift">
                <div className="blog__img-wrap">
                  <img src={post.image} alt={post.title} className="blog__img" loading="lazy" />
                  <span className="blog__category badge badge-primary">{post.category}</span>
                </div>
                <div className="blog__body">
                  <div className="blog__meta">
                    <span>{post.date}</span>
                    <span><FaClock /> {post.readTime}</span>
                  </div>
                  <h3 className="blog__title">{post.title}</h3>
                  <p className="blog__excerpt">{post.excerpt}</p>
                  <div className="blog__footer">
                    <div className="blog__author">
                      <img src={post.author.avatar} alt={post.author.name} className="blog__author-avatar" />
                      <span className="blog__author-name">{post.author.name}</span>
                    </div>
                    <span className="blog__read-more">Read More →</span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
