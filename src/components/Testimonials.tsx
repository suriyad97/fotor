import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Professional Photographer",
    company: "Capture Studios",
    avatar: "/path-to-avatar1.jpg",
    content: "The AI enhancement feature has revolutionized my workflow. I can process hundreds of photos in minutes while maintaining consistent quality. It's a game-changer for professional photographers.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Manager",
    company: "StyleMart",
    avatar: "/path-to-avatar2.jpg",
    content: "The background removal tool is incredibly accurate. We've cut our product photo processing time by 80%. The batch processing feature is a lifesaver for large catalogs.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Digital Artist",
    company: "Creative Minds",
    avatar: "/path-to-avatar3.jpg",
    content: "The artistic style transfer feature is mind-blowing. It gives me endless possibilities for creative expression. The results are consistently impressive.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate section title
    gsap.fromTo(
      '.testimonials-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.testimonials-title',
          start: 'top 80%',
        },
      }
    );

    // Animate each testimonial
    testimonialRefs.current.forEach((testimonial, index) => {
      if (!testimonial) return;

      gsap.fromTo(
        testimonial,
        { 
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: testimonial,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const setTestimonialRef = (el: HTMLDivElement | null, index: number) => {
    testimonialRefs.current[index] = el;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section" ref={sectionRef} data-scroll-section>
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Users Say</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              ref={(el) => setTestimonialRef(el, index)}
            >
              <div className="testimonial-content">
                <p>{testimonial.content}</p>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="author-avatar" 
                />
                <div className="author-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
