import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Slider() {
    const [visibleWordIndex, setVisibleWordIndex] = useState(0);
    const words = ['Freight', `Carriers`, 'Shipping','Truckers'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 2 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [words.length]);

    return (
        <div className="slider-area slider-style-1 variation-default slider-bg-shape" data-black-overlay="1">
            <div className="bg-blend-top bg_dot-mask"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <h1 className="title display-one">Securing the future of</h1>
                            <div className="header-caption" >
                                <span className="cd-headline rotate-1">
                                    <span className="cd-words-wrapper">
                                        {words.map((word, index) => (
                                            <b 
                                                key={index} 
                                                className={`theme-gradient ${index === visibleWordIndex ? 'is-visible' : 'is-hidden'}`}
                                            >
                                                {word}
                                            </b>
                                        ))}
                                    </span>
                                </span>
                            </div>
                            <p className="description">Recently lost a shipment? Reach out and we can help create a 100% free fraud and risk consultation for your company</p>
                            <div className="inner-shape">
                                <img src="/images/bg/icon-shape/icon-shape-one.png" alt="Icon Shape" className="iconshape iconshape-one" />
                                <img src="/images/bg/icon-shape/icon-shape-two.png" alt="Icon Shape" className="iconshape iconshape-two" />
                                <img src="/images/bg/icon-shape/icon-shape-three.png" alt="Icon Shape" className="iconshape iconshape-three" />
                                <img src="/images/bg/icon-shape/icon-shape-four.png" alt="Icon Shape" className="iconshape iconshape-four" />
                            </div>
                            <Link to="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                                <a className="btn-default btn-border">Contact us today</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-11 col-xl-11 justify-content-center">
                        <div className="slider-frame">
                            <img className="slider-image" src="/images/landing-page/loader.png" alt="Banner Images" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape">
                <img className="bg-shape-one" src="/images/bg/bg-shape-four.png" alt="Bg Shape" />
                <img className="bg-shape-two" src="/images/bg/bg-shape-five.png" alt="Bg Shape" />
            </div>
        </div>
    );
}

export default Slider;