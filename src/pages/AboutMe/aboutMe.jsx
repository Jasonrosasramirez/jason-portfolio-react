import React from "react";
import "./aboutMe.css"; // styling 
import picture from "./jasonPortrait.jpg"; 



/* -- What will be displayed on screen --*/
const About = () => {
    return (
        <div class = "section" id = "about">
            <h1 class = "sectionTitle">About Me</h1>


            <article>
                <img id = "portraitOfJason" src = {picture} alt = "picture of Jason" />

                <p>
                    Hello There, 

                    I’m Jason. I am currently finishing up my web development bootcamp at the University of Minnesota - 
                    Twin Cities school of Continuing education. Science, technology, engineering, and mathematics have 
                    been interests throughout my life. After gaining hardware experience as an undergraduate physics major, 
                    I still yearned for more. 
                </p>
                <br/>

                <p>
                    After years of working in a professional lab setting, I still wanted to grow my skill set. Enrolling in the 
                    coding boot camp has rekindled my love for S.T.E.M. that I felt as a child and in my academic years. The course 
                    is a challenge I enjoy overcoming. The obstacles remind me I have so much to look forward to in learning. 
                </p>
                <br/>

                <p>
                    Programming is something I have done on the side as part of my passion projects. Configuring microcontrollers to 
                    perform basic testing and programming a video game are the joys that inspired me to go back. My current web development 
                    skill set involves HTML, CSS, Javascript, React, Bootstrap, and utilizing APIs. I prefer working on front end development.  
                </p>
                <br/>

            </article>

        </div>
    )
}


/* -- Exporting -- */
export default About // referenced by app.js