import "./contact.css"

const Contact = () => {
    return (
        <div class = "section" id = "contact">
            <h1 class = "sectionTitle" > Contact Me </h1>
            <h3> Let's Collaborate Sometime</h3>

            <div> 
                <a href = "https://www.linkedin.com/in/jason-rosas-ramirez/" target="_blank" class="btn btn-primary"> Linkedin </a>
                <a href = "https://github.com/Jasonrosasramirez" target="_blank" class="btn btn-primary"> gitHub </a>
               
                <p>email | jrosasrjf@gmail.com</p>
                <p>phone number | (763) 501-1701</p>
            </div>
        </div>
    );
};

/* exporting */
export default Contact // will be referenced by ../App.js