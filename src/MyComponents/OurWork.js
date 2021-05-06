import React from 'react'
import work17 from "../Images/work-17.jpg";
import work16 from "../Images/work-16.jpg";
import work13 from "../Images/work-13.jpg";
import work12 from "../Images/work-12.jpg";
import work11 from "../Images/work-11.jpg";
import work10 from "../Images/work-10.png";
import work8 from "../Images/work-8.png";
import work3 from "../Images/work-3.jpg";
import work2 from "../Images/work-2.jpg";
import work1 from "../Images/work-1.jpg";

export const OurWork = () => {
    return (
        <div>
            <div class="container" id="introDivElement">
                <div class="slides">
                <img src={work17} alt="work" className="width-60 height-80" />
                <img src={work16} alt="work" className="width-60 height-80" />
                <img src={work13} alt="work" className="width-60 height-80" />
                <img src={work12} alt="work" className="width-60 height-80" />
                <img src={work11} alt="work" className="width-60 height-80" />
                <img src={work10} alt="work" className="width-60 height-80" />
                <img src={work8} alt="work" className="width-60 height-80" />
                <img src={work3} alt="work" className="width-60 height-80" />
                <img src={work2} alt="work" className="width-60 height-80" />
                <img src={work1} alt="work" className="width-60 height-80" />
                </div>
            </div>
            <div class="about">
                <span class="head">Our Work</span>
                <div class="about-box">
                    <div class="about-content">
                        <p><strong>WORK HIGHLIGHTS</strong></p>
                        <p>
                            •   We are expert in designing Biosafety lab as per available space.<br/>
                            •   Project completion time is of the essence, we have completed all Biosafety Lab projects on time.<br/>
                            •   We have dedicated service team to provide immediate response for any kind of service support.<br/>
                            •   We have AMC &amp; CMC from some of the premier institutes in India for BSL 3.

                        </p>
                        <p><strong>BSL-3 lab Client List</strong></p>
                        <p> •    ICMR – National Institute for Research in Tuberculosis, Chennai<br/>
                            •    National Centre for Disease Control ( NCDC ), Delhi<br/>
                            •    ICMR-Regional Medical Research Centre, Dibrugarh, Assam<br/>
                            •    Central Drug Research Institute, Lucknow<br/>
                            •    Central Animal House , Jawaharlal Nehru University ( JNU), New Delhi<br/>
                            •    Indian Veterinary Research Institute (IVRI), Izatnagar<br/>
                            •    Dr. Lal Path Labs Ltd (DLPL), New Town, Kolkata<br/>
                            •    Guru Govind Singh Medical College, Sadiq Road, Faridkot, Punjab<br/>
                            •    Shiv Nadar University, Dadri, U.P<br/>
                            •    Maharaja Agrasen Hospital, New Delhi<br/>
                            •    Saral Diagnostics, New Delhi<br/>
                            •    Life line Laboratory, New Delhi
                            </p>
                    </div>
                </div>
            </div>  
        </div>
    )
}
