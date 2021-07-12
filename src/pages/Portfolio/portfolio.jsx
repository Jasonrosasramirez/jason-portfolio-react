import "./portfolio.css";
// importing screenshots
import picturePWGenerator from "./passwordGenerator.JPG";
import picturePokemon from "./gottaCatchaVibe.JPG";
import pictureProjectPlanner from "./projectPlanner.JPG";
import pictureWeddingPlanner from "./weddingPlannerScreenshot.JPG";
import pictureGenerationReadme from "./generationReadmeScreenshot.JPG";
import pictureFitnessTracker from "./fitnessTracker.JPG";



/* -- What is projected to the page -- */
const Portfolio = () => {
  return (
    <div id = "projects">
        <h1> Web Development Project </h1>

        <article>
            {/* -- Password Generator -- */} 
            <div class = "projectSection">
                <h3>Password Generator</h3>
                <p> The one and only password generator anyone will ever need. A password is randomly generated based on user criteria. 
                  Keep your projects and accounts secure with impossible to guess characters! </p>
                <img class = "screenCaptures" src = {picturePWGenerator} alt = "screenshot" />
                <p> </p> {/* Line Break Here */}   
                <a href="https://jasonrosasramirez.github.io/03-The-One-and-Only-Password-Generator/" target="_blank" class="btn btn-primary">Visit Deployed Page</a>
                <a href="https://github.com/Jasonrosasramirez/03-The-One-and-Only-Password-Generator" target="_blank" class="btn btn-primary">Visit gitHub Repo</a>
            </div>


            {/* -- Pokemon Project -- */} 
            <div class = "projectSection">
                <h3>Gotta Catch a Vibe</h3>
                <p> Determine the boosted Pokemon types for the next upcoming hours! Use the advantage others won't have.
                  Learn about the upcoming weather in any location you desire and hear about which pokemon will be boosted </p>
                <img class = "screenCaptures" src = {picturePokemon} alt = "screenshot" />
                <p> </p> {/* Line Break Here */}   
                <a href="https://jasonrosasramirez.github.io/Gotta-Catch-A-Vibe/" target="_blank" class="btn btn-primary">Visit Deployed Page</a>
                <a href="https://github.com/Jasonrosasramirez/Gotta-Catch-A-Vibe" target="_blank" class="btn btn-primary">Visit gitHub Repo</a>
            </div>


            {/* -- Project Planner -- */} 
            <div class = "projectSection">
              <h3>Project Planner</h3>
              <p> A simple and effective planner for your workday! Give it a go for daily tasks. Your calendar will update in live time. 
                Keep track of your tasks</p>
              <img class = "screenCaptures" src = {pictureProjectPlanner} alt = "screenshot" />
              <p> </p> {/* Line Break Here */}   
              <a href="https://jasonrosasramirez.github.io/05-Planner-for-Your-Work-Day/" target="_blank" class="btn btn-primary">Visit Deployed Page</a>
              <a href="https://github.com/Jasonrosasramirez/05-Planner-for-Your-Work-Day" target="_blank" class="btn btn-primary">Visit gitHub Repo</a>
            </div>

            {/* -- Wedding Planner -- */} 
            <div class = "projectSection">
              <h3>Wedding Planner</h3>
              <p> Create a wedding dashboard to view the important details all in one place. Planning that special day made easy!</p>
              <img class = "screenCaptures" src = {pictureWeddingPlanner} alt = "screenshot" />
              <p> </p> {/* Line Break Here */}   
              <a href="https://github.com/samersaemeldahr/Wedding-Planner/" target="_blank" class="btn btn-primary">Visit Deployed Page</a>
              <a href="https://github.com/samersaemeldahr/Wedding-Planner" target="_blank" class="btn btn-primary">Visit gitHub Repo</a>
            </div>
        
        
            {/* -- Generation Readme -- */} 
            <div class = "projectSection">
              <h3>Generation Readme</h3>
              <p> An easy to use readme generator for all of your best projects! Answer a short survey is all it takes.</p>
              <img class = "screenCaptures" src = {pictureGenerationReadme} alt = "screenshot" />
              <p> </p> {/* Line Break Here */}   
              <a href="https://github.com/samersaemeldahr/Wedding-Planner/" target="_blank" class="btn btn-primary">Visit Deployed Page</a>
              <a href="https://github.com/samersaemeldahr/Wedding-Planner" target="_blank" class="btn btn-primary">Visit gitHub Repo</a>
            </div>
        
            {/* -- Fitness Tracker -- */} 
            <div class = "projectSection">
              <h3>Fitness Tracker</h3>
              <p> Track the fitness you've done this far! .</p>
              <img class = "screenCaptures" src = {pictureFitnessTracker} alt = "screenshot" />
              <p> </p> {/* Line Break Here */}   
              <a href="https://workouttracker-jason.herokuapp.com/" target="_blank" class="btn btn-primary">Visit Deployed Page</a>
              <a href="https://github.com/Jasonrosasramirez/trackYourGains" target="_blank" class="btn btn-primary">Visit gitHub Repo</a>
            </div>
        </article>

    </div>
  )
};


/* -- exporting -- */
export default Portfolio;