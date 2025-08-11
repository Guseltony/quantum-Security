import React, { useEffect } from 'react'
import { animateHero } from '../animations/heroGsap'
import { images } from '../assets/imageAssets'

const Hero = () => {

    const styles = {
        // backgroundImage: 'url(/src/assets/images/hero-bg.png',
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                    url(/src/assets/images/hero-bg.png) bottom/cover no-repeat`,
    }

    useEffect(() => {
        animateHero();
    }, [])


    return (
    <div className='h-[80dvh] relative hero' style={styles}>
        <div className='z-20 relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-[90%] mx-auto p-4 md:p-8 h-[100%] border-2 border-green-700'>
    {/* Left Text */}
            <div className='flex-1 min-w-full md:min-w-[50%]'>
                <h1 className='z-20 uppercase text-7xl font-extrabold'>Quantum Security</h1>
                <p className='z-30 mt-8 text-base max-w-[90%] leading-relaxed'>
                    Protecting your digital world from an ever-evolving landscape of cyber threats. 
                    Our cutting-edge quantum security framework ensures your data remains safe, even 
                    against next-generation hacking techniques. From enterprise networks to personal 
                    devices, we deliver advanced, reliable solutions designed for resilience, 
                    scalability, and the challenges of tomorrow’s connected world.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                    <button
                        style={{
                            clipPath: 'polygon(0 0, 75% 0%, 100% 50%, 100% 100%, 20% 100%, 0 50%)',
                                boxShadow: '0 0 0 2px #2563eb', // blue-600
                            border: '2px solid #2563eb'
                        }}
                        className=" py-2 px-4 hover:bg-blue-700 text-white font-semibold transition-all duration-500 ease-in-out flex justify-center items-center text-center"
                        >
                        Get Started
                    </button>
                    <button className="border border-blue-500 text-blue-500 hover:bg-[#FF2E88] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-500 ease-in-out">
                        Learn More
                    </button>
                </div>
            </div>

    {/* Right Side with Circle + Shield */}
            <div className='flex-1 min-w-full md:min-w-[50%] h-[100%] relative flex justify-center items-center overflow-visible border-2 border-red-800 pb-32'>

      {/* Circle image pushed down */}
                <img
                    src={images.heroRightImg}
                    alt="quantum-circle"
                    className='w-[100%] translate-y-16 self-end'
                />

                {/* Shield above circle */}
                <img
                    src={images.shield}
                    alt="cyber-shield"
                    className='absolute top-1/5 w-[40%] animate-bounce-slow'
                />
            </div>
        </div>
    </div>
)
}

export default Hero