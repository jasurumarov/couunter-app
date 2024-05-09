import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Star from '../../images/star.png'

const Anim = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    
    useGSAP(() => {
        gsap.to(".box2", {
            scrollTrigger: {
                trigger: ".box2",
                start: "top 90%",
                end: "top 100px",
                scrub: 1,
                markers: false,
                toggleActions: "restart pause reverse pause"
            },
            x: 500,
            rotation: 360,
            ease: "none",
            duration: 3
        });
        gsap.to(".ghost", {
            scrollTrigger: {
                trigger: ".box2",
                start: "top 90%",
                end: "top 100px",
                scrub: true,
                markers: false,
                toggleActions: "restart pause reverse pause"
            },
            x: 500,
            rotation: 360,
            ease: "none",
            duration: 3
        });
        gsap.to(".box3", {
            scrollTrigger: {
                trigger: ".box1",
                start: "top bottom",
                end: "400% top",
                markers: false,
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            rotation: 360,
            ease: "none",
            duration: 1
        });
    }); 
  return (
      <div className='gsap'>
        <div className="container">
        <div className="box3"><img src={Star} alt="" /></div>
        <h2>GSAP</h2>
            <div className="gsap__content">
                <div className="box1">A</div>
                <div className="box2">B</div>
                <div className="ghost">B</div>
                <div className="box4">C</div>
                <div className="box5">D</div>
            </div>
        </div>
    </div>
  )
}

export default Anim