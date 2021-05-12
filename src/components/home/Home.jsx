import React from 'react'
import foot from "./img/Footbal.svg"
import "./styles.css"
import ring from "./img/Ring.svg"
const Home = () => {
    return (
        <>
        <span class="p2">Fixing your matches</span>
        <h1 className="p1">
            Never miss a match!
        </h1>
        <div className="imghome">
            <img src={foot} alt="Home" />
        </div>
        <div className="lefthome">
        <span class="p3">Lorem ipsum dolor sit amet, consect
        etur adipiscing elit. Aliquet suspendisse magna et purus hac
        et vitae morbi at. Porttitor diam nisl feugiat posuere. Pos
        uere sed est, risus, et etiam turpis eget in. Et gravida nec du
        is ultrices bibendum.</span>

        </div>
        <div className="ringcenter">
            <img src={ring} alt="ring"/>
        </div>
        <div className="righthome">  
            "npo"
        </div>
        
        </>
    )
}

export default Home
