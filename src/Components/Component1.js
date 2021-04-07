import React, { Component } from 'react'
import './Component1.css';

class Component1 extends Component {
    render() {
        return (
            <div className="Component1">
                <aside className="aside1">
                    <img className="Img1" src={process.env.PUBLIC_URL+"/Images/Img1.jpg"} alt=""/>
                </aside>
                <div className="content">
                    <h1>Making the most of the ever-growing</h1>
                    <h1 className="Red">Information Technology</h1>
                    <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <button className="red-button">Read More</button>
                </div>
            </div>
        )
    }
}

export default Component1;
