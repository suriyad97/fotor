import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = (locomotiveScroll: LocomotiveScroll) => {
  // Update ScrollTrigger when locomotive scroll updates
  locomotiveScroll.on('scroll', ScrollTrigger.update);

  // Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element
  ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
      if (arguments.length) {
        locomotiveScroll.scrollTo(0, { duration: 0, offset: value });
        return;
      }
      return (locomotiveScroll as any).scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: (document.querySelector('[data-scroll-container]') as HTMLElement)?.style.transform
      ? 'transform'
      : 'fixed',
  });

  // Fade in sections
  gsap.utils.toArray('[data-scroll-section]').forEach((section: any) => {
    gsap.from(section, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        scroller: '[data-scroll-container]',
        start: 'top 80%',
      },
    });
  });

  // Parallax images
  gsap.utils.toArray('[data-parallax]').forEach((element: any) => {
    const speed = element.getAttribute('data-parallax') || 0.5;
    gsap.to(element, {
      y: () => (element.offsetHeight * speed * -1),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        scroller: '[data-scroll-container]',
        scrub: true,
      },
    });
  });

  // Background color transitions
  const sections = document.querySelectorAll('[data-bg-color]');
  sections.forEach((section) => {
    const color = section.getAttribute('data-bg-color');
    if (color) {
      ScrollTrigger.create({
        trigger: section,
        scroller: '[data-scroll-container]',
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to('html', { backgroundColor: color as string, duration: 0.5 }),
        onEnterBack: () => gsap.to('html', { backgroundColor: color as string, duration: 0.5 }),
      });
    }
  });

  // Handle ScrollTrigger refresh
  const handleRefresh = () => {
    locomotiveScroll.update();
  };

  ScrollTrigger.addEventListener('refresh', handleRefresh);

  // After everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning
  ScrollTrigger.refresh();

  // Return cleanup function
  return () => {
    ScrollTrigger.removeEventListener('refresh', handleRefresh);
  };
};
