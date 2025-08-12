import React, { useEffect, useRef } from 'react'
// import { animateHero } from '../animations/heroGsap'
import { images } from '../assets/imageAssets'
// import {useGSAP} from 'gsap'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';

// Register SplitText plugin
gsap.registerPlugin(SplitText);

const Hero = () => {

const heroTitle = useRef(null);
  const heroParagraph = useRef(null);
  const heroButton = useRef(null);

  const containerRef = useRef();


    const styles = {
        // backgroundImage: 'url(/src/assets/images/hero-bg.png',
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                    url(/src/assets/images/hero-bg.png) bottom/cover no-repeat`,
    }

useEffect(() => {
  if (heroTitle.current && heroParagraph.current && heroButton.current) {
    const titleNode = heroTitle.current;
    const paragraphNode = heroParagraph.current;
    const buttonNode = heroButton.current;

    // Split header text
    const headerSplit = new SplitText(titleNode, { type: "chars" });
    gsap.set(titleNode, { opacity: 0 });

    // Split paragraph into lines
    const paraSplit = new SplitText(paragraphNode, { 
      type: "lines",
      linesClass: "line-child" 
    });
    gsap.set(paraSplit.lines, { opacity: 0, y: 40 });

    // Timeline
    const masterTL = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Header animation
    masterTL
      .fromTo(titleNode, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 })
      .from(headerSplit.chars, {
        opacity: 0,
        y: 30,
        rotationX: 90,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(3)"
      }, "-=0.3");

    // Paragraph animation
    masterTL
      .fromTo(paragraphNode, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 })
      .to(paraSplit.lines, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out"
    }, "+=0.2");

    // Button animation
    masterTL.fromTo(buttonNode, {
      opacity: 0,
      scale: 0.8,
      y: 30
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.3");

    // Hover effect
    const mouseEnterHandler = () => {
      gsap.to(buttonNode, {
        scale: 1.05,
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
        duration: 0.3
      });
    };
    const mouseLeaveHandler = () => {
      gsap.to(buttonNode, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3
      });
    };

    buttonNode.addEventListener("mouseenter", mouseEnterHandler);
    buttonNode.addEventListener("mouseleave", mouseLeaveHandler);

    // Cleanup
    return () => {
      headerSplit.revert();
      paraSplit.revert();
      buttonNode.removeEventListener("mouseenter", mouseEnterHandler);
      buttonNode.removeEventListener("mouseleave", mouseLeaveHandler);
      gsap.killTweensOf([titleNode, paragraphNode, buttonNode]);
    };
  }
}, []);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Target elements inside container
        const circleImg = gsap.utils.selector(containerRef)('img[alt="quantum-circle"]');
        const backGlows = gsap.utils.selector(containerRef)('img[alt="glow-back"]');
        const redBackGlows = gsap.utils.selector(containerRef)('img[alt="glow-back"]:nth-of-type(3)');
        const shield = gsap.utils.selector(containerRef)('img[alt="cyber-shield"]');
        const frontGlows = gsap.utils.selector(containerRef)('img[alt="glow-front"]');

        // Circle image animation
        tl.from(circleImg, {
          y: 80,
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
          ease: "power3.out"
        });

        // Back glow animation
        tl.from(backGlows, {
          opacity: 0,
          scale: 0.9,
          rotate: 30,
          duration: 1,
          stagger: 0.2
        }, "-=0.8");

        // Red back glow animation
        tl.from(redBackGlows, {
          opacity: 0,
          scale: 0.9,
          rotate: -30,
          duration: 1
        }, "-=0.8");

        // Shield pop-in
        tl.from(shield, {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=0.5");

        // Front glow animation
        tl.from(frontGlows, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          stagger: 0.2
        }, "-=0.5");

      }, containerRef);

      return () => ctx.revert();
    }
  }, []);





    return (
    <div className='h-[80dvh] relative hero' style={styles}>
        <div className='z-20 relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-[90%] mx-auto md:p-8 h-[100%] '>
    {/* Left Text */}
            <div className='flex-1 min-w-full md:min-w-[50%]'>
                <h1 className='z-20 uppercase text-6xl font-extrabold opacity-0' ref={heroTitle}>Quantum Security</h1>
                <p className='header-p z-30 mt-8 text-base max-w-[90%] opacity-0' ref={heroParagraph}>
                    Protecting your digital world from an ever-evolving landscape of cyber threats. 
                    Our cutting-edge quantum security framework ensures your data remains safe, even 
                    against next-generation hacking techniques. From enterprise networks to personal 
                    devices, we deliver advanced, reliable solutions designed for resilience, 
                    scalability, and the challenges of tomorrow’s connected world.
                </p>
                <div className="mt-8 flex flex-wrap gap-10">
                    <button
                        className="clip-path-button py-2.5 px-4 border-2 border-[#2563eb] hover:bg-blue-700 hover:border-[#0ff4c6] text-white font-semibold transition-all rounded-xl duration-500 ease-in-out hover:clip-path-rectangle"
ref={heroButton}>
                        Get Protected
                    </button>
                    <button
                        className="clip-path-button py-2.5 px-4 border-2 border-[#2563eb] hover:bg-blue-700 hover:border-[#0ff4c6] text-white font-semibold transition-all rounded-xl duration-500 ease-in-out hover:clip-path-rectangle"
ref={heroButton}>
                        Learn More
                    </button>
                </div>
            </div>

    {/* Right Side with Circle + Shield */}
            <div className='flex-1 min-w-full md:min-w-[50%] h-[100%] relative flex justify-center items-center overflow-visible pb-32' ref={containerRef}>

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