import React, { Component } from 'react'
import './Component2.css'
class Component2 extends Component {
    render() {
        return (
        <div className="Component2">
            <aside className="aside2">
                <img className="Img2" src={process.env.PUBLIC_URL+"/Images/Img2.jpg"} alt=""/>
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

export default Component2;
