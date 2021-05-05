import React from 'react'
import img from "../Images/welcome-li.jpg"

export const StartBox = (props) => {
    return (
        <div>
            <div className="start">
                <span className="head">WELCOME TO LABINNOVISION</span>
                <div className="start-box">
                    {props.img ? <div className="imag"><img src={img} alt="a" /></div> : ""}
                    <div className="start-content">
                        <p>LabInnovision provides an integrated approach to designing, planning and construction of biosafety laboratories (BSL1-4, ABSL1-4) that meets international guidelines. Our goal is to construct a facility on-time and in budget that provides a safe work environment for people working in the facility, the community and the environment.</p>
                        <p>We put our customer’s need first and take pride in our work. Service and support is customer focused. We develop the right solution according to the customer needs and requirements.</p>
                        <p>LabInnovision provides a wide range of Biotech Instruments. We are associated with leading international companies for ensuring optimum range of products and services in the field of Biotechnology Research.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
