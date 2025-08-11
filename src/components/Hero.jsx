import React, { useEffect, useRef } from 'react'
// import { animateHero } from '../animations/heroGsap'
import { images } from '../assets/imageAssets'
// import {useGSAP} from 'gsap'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const Hero = () => {

    const heroTitle = useRef(null)

    const styles = {
        // backgroundImage: 'url(/src/assets/images/hero-bg.png',
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                    url(/src/assets/images/hero-bg.png) bottom/cover no-repeat`,
    }

    useEffect(() => {
        if (heroTitle.current) {
        // Create a timeline for sequenced animations
        const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
        
        // First animate the container
        tl.fromTo(heroTitle.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8 }
        );
        
        // Then animate each character individually
            const split = new SplitText(heroTitle.current, { type: "chars" });
        
        tl.from(split.chars, {
            opacity: 0,
            y: 30,
            rotationX: 90,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(3)"
        }, "+=0.2"); // slight delay after container animation
        
        // Add a subtle glow/pulse effect that loops
        tl.to(heroTitle.current, {
            duration: 2,
            textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 200, 255, 0.5)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        }, "-=0.5"); // overlap with previous animation
        
        // Cleanup function
        return () => {
            split.revert(); // Important for cleanup
        };
        }
  }, []);




    return (
    <div className='h-[80dvh] relative hero' style={styles}>
        <div className='z-20 relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-[90%] mx-auto md:p-8 h-[100%] '>
    {/* Left Text */}
            <div className='flex-1 min-w-full md:min-w-[50%]'>
                <h1 className='z-20 uppercase text-6xl font-extrabold opacity-0' ref={heroTitle}>Quantum Security</h1>
                <p className='header-p z-30 mt-8 text-base max-w-[90%] leading-relaxed'>
                    Protecting your digital world from an ever-evolving landscape of cyber threats. 
                    Our cutting-edge quantum security framework ensures your data remains safe, even 
                    against next-generation hacking techniques. From enterprise networks to personal 
                    devices, we deliver advanced, reliable solutions designed for resilience, 
                    scalability, and the challenges of tomorrow’s connected world.
                </p>
                <div className="mt-8 flex flex-wrap gap-10">
                    <button
                        className="clip-path-button py-2.5 px-4 border-2 border-[#2563eb] hover:bg-blue-700 hover:border-[#0ff4c6] text-white font-semibold transition-all rounded-xl duration-500 ease-in-out hover:clip-path-rectangle"
                        >
                        Get Started
                    </button>
                        
                    <button
                        className="clip-path-button py-2.5 px-4 border-2 border-[#FF2E88] hover:bg-[#ff2e88] hover:border-[#2563eb] text-white font-semibold transition-all rounded-xl duration-500 ease-in-out hover:clip-path-rectangle"
                        >
                        Learn More
                    </button>
                </div>
            </div>

    {/* Right Side with Circle + Shield */}
            <div className='flex-1 min-w-full md:min-w-[50%] h-[100%] relative flex justify-center items-center overflow-visible pb-32'>

      {/* Circle image pushed down */}
                <img
                    src={images.heroRightImg}
                    alt="quantum-circle"
                    className='w-[90%] translate-y-14 absolute bottom-48'
                />
                    
                      {/* Back Glow (behind shield) */}
                <img
                    src={images.glowCircle}
                    alt="glow-back"
                    className="absolute top-1/12 -translate-x-1/12 w-[28rem] z-0 rotate-[50deg]"
                    style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', // Bottom half hidden
                    }}
                />
                <img
                    src={images.redGlowingCircle}
                    alt="glow-back"
                    className="absolute top-1/12 translate-x-1/12 w-[28rem] z-0 -rotate-[50deg]"
                    style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', // Bottom half hidden
                    }}
                />

                {/* Shield (middle layer) */}
                <img
                    src={images.shield}
                    alt="cyber-shield"
                    className="absolute top-1/6 w-[40%] z-10"
                />

                {/* Front Glow (above shield) */}
                <img
                    src={images.glowCircle}
                    alt="glow-front"
                    className="absolute top-1/12 -translate-x-1/12 w-[28rem] z-20 rotate-[50deg]"
                    style={{
                    clipPath: 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)', // Top half hidden
                    }}
                />
                <img
                    src={images.redGlowingCircle}
                    alt="glow-front"
                    className="absolute top-1/12 translate-x-1/12 w-[28rem] z-20 -rotate-[50deg]"
                    style={{
                    clipPath: 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)', // Top half hidden
                    }}
                />
            </div>
        </div>
    </div>
)
}

export default Hero