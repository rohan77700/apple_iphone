import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2 });
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
    }, []);

    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    );

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    }

    useEffect(() => {
       return window.addEventListener('resize', handleVideoSrcSet);
    }, []);

    return (
        <section className="relative w-full nav-height bg-black">
            <div className="flex-center flex-col w-full h-5/6">
                <div id="hero" className="hero-title">iPhone 15 Pro</div>
                <div className="w-9/12 md:w-10/12">
                    <video 
                    className="pointer-events-none"
                    autoPlay 
                    muted 
                    playsInline={true} 
                    key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div
            id="cta" 
            className="flex flex-col items-center opacity-0 translate-y-20">
                <a href="#highlights" className="btn">Buy</a>
                <p className="font-normal text-xl">From $999 or $41.62/mo. for 24 mo.</p>
            </div>
        </section>
    );
}
 
export default Hero;