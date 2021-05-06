import React from 'react'
import { Hero } from "./Hero";
import img from "../Images/contact-us.jpg"

export const Contact = () => {
    return (
        <div>
            <Hero src={img} />
            <div class="contact">
                <span class="head">Quick Enquiry</span>
                <div class="contact-box">
                    <div class="contact-content">
                        <p>Want to know more about LabInnovision or have any question for our team ? Fill out the form below to contact us. Our team is ready to answer your questions and happy to recieve your comments.</p>
                        <br />
                        <div class="form">
                            <form>
                                <table class="formTable">
                                    <tr>
                                        <td class="field">Full Name</td>
                                        <td><input type="text" name="name" id="name" /></td>
                                    </tr>
                                    <tr>
                                        <td class="field">Mobile No.</td>
                                        <td><input type="number" name="mob" id="mob" /></td>
                                    </tr>
                                    <tr>
                                        <td class="field">Email</td>
                                        <td><input type="email" name="email" id="email" /></td>
                                    </tr>
                                    <tr>
                                        <td class="field">Question / Comments</td>
                                        <td><input type="text" name="msg" id="msg" /></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" align="center"><input type="submit" value="Submit" name="submit" id="submit" /></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
