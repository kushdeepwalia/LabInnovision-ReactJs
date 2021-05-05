import React from 'react'
import img from '../Images/certificate-logo.JPG'

export const Footer = () => {
    return (
        <div>
            <footer className="footer bg-grey">
            <div className="biosafety">
                <h3>Quality Control Certification</h3>
                <img src={img} alt="" />
            </div>
            <div className="contactUs">
                <h3>Contact Us</h3>
                <div className="information"><i className="fa fa-address-card fa-2x" aria-hidden="true"></i><span className="content">24/44B, Tilak Nagar, New Delhi, Delhi 110018</span></div>
                <div className="information"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i><span className="content"> support@labinnovision.com</span></div>
                <div className="information"><i className="fa fa-phone fa-2x" aria-hidden="true"></i><span className="content"> +91-9818044200</span></div>
            </div>
            </footer>
        </div>
    )
}
