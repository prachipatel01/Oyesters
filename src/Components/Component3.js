import React, { Component } from 'react'
import CompanyLogo from './CompanyLogo';
import './Component3.css';
class Component3 extends Component {
    render() {
        return (
            <div className="Component3">
                <h2 className="title">Product and Service</h2>
                <ul className="card-list">
                    <li>
                        <img classname="small-Icon" src={process.env.PUBLIC_URL+"/Images/Icon1.jpg"} alt=""></img>
                        <h2 className="Red">Our Product</h2>
                        <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                        <button className="red-button">Read More</button>
                    </li>
                    
                    <li>
                        <img classname="small-Icon" src={process.env.PUBLIC_URL+"/Images/Icon2.jpg"} alt=""></img>
                        <h2 className="Red">Our Service</h2>
                        <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                        <button className="red-button">Read More</button>
                    </li>

                    <li>
                        <img classname="small-Icon" src={process.env.PUBLIC_URL+"/Images/Icon3.jpg"} alt=""></img>
                        <h2 className="Red">Our Technology</h2>
                        <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                        <button className="red-button">Read More</button>
                    </li>
                </ul>
                <ul className="card-2-list">
                    <li>
                        <CompanyLogo/>
                        <h5>PT Dwidasa Samsara Indonesia</h5>
                        <p>Ruko Jalur Sutera 29A No. 53
                        Alam Sutera Serpong, Tangerang 15323
                        </p>
                    </li>
                    <li>
                        <h5>Contact</h5>
                        <p>Phone : +62.21.5314.1135</p>
                        <p>Fax : +62.21.5314.1135</p>
                        <p>Email : community@dwidasa.com</p>
                        
                    </li>
                    <li>
                        <img classname="partner-icon" src={process.env.PUBLIC_URL+"/Images/partners.jpg"} alt=""></img>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Component3;
