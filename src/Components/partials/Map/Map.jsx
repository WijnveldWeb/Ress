import { Link } from '@inertiajs/inertia-react'
import React, { createRef, useEffect, useRef } from 'react'
import './Map.scss'
import mapImage from '../../../assets/images/map.png'
import { gsap } from "gsap";
import parse from 'html-react-parser';

const Map = ({fields, key}) => {
    const boxRef = createRef();

    useEffect(() => {
        gsapAnimations();
    });
    
    function gsapAnimations() {
        gsap.to(boxRef.current, {
            repeat: -1,
            opacity: 0,
            duration: 1.5,
            ease: "power1",
            width: '80px',
            height: '80px'
        });
    }

    return (
        <section className="map" key={key}>
            <div className="map__wrap container">
                <div className="map-wrapper flex justify-center items-center">
                    <div className="pulsedot" ref={boxRef}></div>
                    <div className="map__image">
                        <img src={mapImage} alt="" />
                    </div>
                </div>
                <div className="text-wrapper flex justify-between">
                    <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="800" data-aos-anchor-placement="top-bottom" className="title-wrapper">
                            <h1 dangerouslySetInnerHTML={{__html: fields.title}}/>
                            <Link href={fields?.link?.url}>{fields?.link?.title}</Link>
                    </div>
                    <div className="text-paragraph flex justify-start">
                        <div className="text-line"></div>
                        {parse(fields.text)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map