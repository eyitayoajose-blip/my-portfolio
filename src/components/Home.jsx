import React from "react";
import "./home.css";
import heroImage from "../assets/hero-pic.jpeg";

function Home() {
    return (
        <div className="Home">
            <img src="{heroImage}" alt="hero" />
            <h2><span>Hello, I'm Emmanuel</span></h2>
            <p>A passionate web developer creating clean and functional design</p>
    
            <button
                className="btn"
                onClick={() =>
                    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                }>

                View Projects
            </button>

            <button
            className="btn"
            onClick={() =>
            document.getElementById("Contact").scrollIntoView({ behavior: "smooth"})
            }>Contact Me</button>
        </div>
    ); 
            
}
export default Home;