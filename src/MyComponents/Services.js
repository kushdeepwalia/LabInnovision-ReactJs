import React from 'react'
import { Hero } from "./Hero";
import img from "../Images/services.jpg"
import { Box } from './Box';

export const Services = (props) => {
    return (
        <div>
            {
                props.horizontal ?
                <div className="service">
                    <span className="head">SERVICES</span>
                    <div className="service-box">
                        <Box color="blue" text="Consultancy service for BSL &amp; ABSL facility design as per international guidelines."/>
                        <Box color="green" text="Annual Maintenance for BSL/ABSL facility."/>
                        <Box color="grey" text="Laboratory validation services."/>
                    </div>
                </div>
                : ""
            }
            {
                props.vertical ?
                <>
                    <Hero src={img} />
                    <div class="about">
                        <span class="head">Services</span>
                        <div class="about-box">
                            <div class="about-content">
                                <p>&gt; Consultancy service for BSL &amp; ABSL facility design as per international guidelines.</p>
                                <p>&gt; Annual Maintenance for BSL/ABSL facility.</p>
                                <p>&gt; Laboratory validation services.</p>
                            </div>
                        </div>
                    </div>
                </>
                : ""
            }
        </div>
    )
}
