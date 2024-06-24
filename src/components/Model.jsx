import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import { useEffect, useRef, useState } from "react";

import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
import { yellowImg } from "../utils";
import ModelView from "./ModelView";

const Model = () => {
    useGSAP(() => {
        gsap.to('#heading', { opacity:1, y: 0 });
    }, []);

    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8f8a81', '#ffe7b9', '#6f6c64'],
        img: yellowImg,
    });

    // camera control for model
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //  rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();
    
    useEffect(() => {
        if (size === 'large') {
            animateWithGsapTimeline(
                tl, 
                small, 
                smallRotation, 
                '#view1', 
                '#view2', 
                {
                    transform: 'translateX(-100%)',
                    duration: 2
                }
            );
        }

        if (size === 'small') {
            animateWithGsapTimeline(
                tl, 
                large, 
                largeRotation, 
                '#view2', 
                '#view1', 
                {
                    transform: 'translateX(0)',
                    duration: 2
                }
            );
        }

    }, [size]);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">Take a closer look.</h1>

                <div className="flex flex-col items-center mt-5">
                    <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">
                        <ModelView 
                        index={1}
                        groupRef={small}
                        gsapType='view1'
                        controlRef={cameraControlSmall}
                        setRotationState={setSmallRotation}
                        item={model}
                        size={size}
                        />

                        <ModelView 
                        index={2}
                        groupRef={large}
                        gsapType='view2'
                        controlRef={cameraControlLarge}
                        setRotationState={setLargeRotation}
                        item={model}
                        size={size}
                        />

                        <Canvas 
                        className="w-full h-full"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            overflow: 'hidden'
                        }}
                        eventSource={document.getElementById('root')}>
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className="w-full mx-auto">
                        <p className="text-sm font-light text-center mb-5">{model.title}</p>

                        <div className="flex-center">
                            <ul className="color-container">
                                {models.map((item, i) => (
                                    <li 
                                    key={i }
                                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                                    style={{
                                        backgroundColor: item.color[0]
                                    }}
                                    onClick={() => setModel(item)} 
                                    />
                                ))}
                            </ul>

                            <button className="size-btn-container">
                                {sizes.map(({ label, value }) => (
                                    <span 
                                    key={label}
                                    className="size-btn"
                                    style={{
                                        backgroundColor: size === value ? 'white' : 'transparent',
                                        color: size === value ? 'black' : 'white'
                                    }}
                                    onClick={() => setSize(value)}>
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Model;