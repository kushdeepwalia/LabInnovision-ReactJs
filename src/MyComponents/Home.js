import React from 'react'
import { Hero } from "./Hero";
import img from "../Images/intro-pic-dna.jpg"
import { StartBox } from './StartBox';
import { Services } from './Services';
import { Products } from './Products';

export const Home = () => {
    return (
        <div>
            <Hero text src={img} />
            <StartBox img />
            <Services horizontal/>
            <Products title="PRODUCT RANGE"/>
        </div>
    )
}
