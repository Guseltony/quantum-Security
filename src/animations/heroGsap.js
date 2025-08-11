import { gsap } from 'gsap';

export const animateHero = () => {
    const heroElement = document.querySelector('.hero');
    const overlayElement = document.querySelector('.overlay');

    gsap.fromTo(heroElement, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(overlayElement, 
        { scaleY: 0 }, 
        { scaleY: 1, duration: 1.5, ease: 'power2.out', transformOrigin: 'top' }
    );
};