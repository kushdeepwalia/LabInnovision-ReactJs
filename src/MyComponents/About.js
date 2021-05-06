import React from 'react'
import { Hero } from "./Hero";
import img from "../Images/wallpaper.jpg"
import { AboutBox } from './AboutBox';

export const About = () => {
    return (
        <div>
            <Hero src={img} />
            <AboutBox/>
        </div>
    )
}
