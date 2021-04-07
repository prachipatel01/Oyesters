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
                <h1>Welcome to <i className="Red">Dwidasa Samsara Indonesia (DSI)</i></h1>
                <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.
                </p>
                <br/>
                <p>
                Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                
            </div>
        
        </div>
        )
    }
}

export default Component2;
