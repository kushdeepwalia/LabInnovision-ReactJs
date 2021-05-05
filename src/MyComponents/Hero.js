import React from 'react'

export const Hero = (props) => {
    return (
        <div>
            <div className="intro">
                <img src={props.src} alt="Hero Box"/>
                {props.text ? <div className="intro-box">
                <ul>
                    <li><strong>LABINNOVISION</strong> is a ISO 9001 : 2015 company  working with professional team of experienced  Project Directors, Engineers and Designers, registered under the American Biological Safety Association (ABSA).
                    </li><br />
                    <li>We are engaged in Construction, Testing, Validation and Maintenance of Biosafety Labs (BSL 2/3  &amp; ABSL 2/3), TB Containment Facility, Molecular Biology Lab that meet international guidelines.</li>
                </ul>
            </div>
            : ""}
            </div>
        </div>
    )
}
