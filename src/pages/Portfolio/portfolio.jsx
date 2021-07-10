import "./portfolio.css";
import picturePWGenerator from "./passwordGenerator.JPG"


const Portfolio = () => {
  return (
    <div id = "projects">
        <h1> Web Development Project </h1>

        <article>
            <div>
                <h3>Password Generator</h3>
                <img class = "screenCaptures" src = {picturePWGenerator} alt = "screenshort" />
                

            </div>
        
        


        </article>


    </div>
  )
};


/* -- exporting -- */
export default Portfolio;