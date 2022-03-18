import { React } from "react";
import { Project } from "./project/project";
import "./projects.css";

export function Projects() {
  return (
    <>
      <div id="ProjectsContainer">
        <h1 id="subHeading">Projects</h1>
        <div className="projects">
          <ul className="grid">
            <li>
              <Project
                title="Back-end Data Analysis:"
                body="I joined a start-up company founded at Ryerson University called Freestyle Social, that wanted to understand how information, guest speakers, and a welcoming environment impacted the opinions of the audience, in an interactive method. Working independently, I applied my knowledge of express.js and JavaScript to create an API that queried the database for their recent event data, and applied algorithm to analyze when there was the most change in user states. Using a complex JSON input, I would identify peak times of traffic for interaction by the users. The Front-end team was then able to work with me to visualize the data for the end user to understand."
              />
            </li>
            <li>
              <Project
                title="Personal Portfolio Full Stack Website:"
                body="To practice my own skills, and to challenge myself, I self-started my learning with React, I applied the learning to create a portfolio where I’ll be able to showcase my projects. Using the strengths of React to create components that are dynamic based on the properties that are passed. I can now use the same components within other projects to speed up production and decrease amount of work spent on commonly used components. I started my styling for mobile first, of which allowed me to apply less modifications to the CSS as I worked towards desktop interface. I applied a express.js backend of which will maintain all my project data, so that I can make changes like adding, and deleting and updating the information that I have about my projects. If I change the user interface, I will simply query the database of projects instead of having to maintain a JSON stored on the server. Speeding up future changes by 50%."
              />
            </li>
            <li>
              <Project
                title="NASA API Front End Tile Component"
                body="To practice React.js, I developed a component, that would both fetch data from and display a random NASA fact, with a picture, title, and body paragraph. I fetched the data from the NASA API, then used the result, and object destructuring to display the information within a tile component. I added multi-functionality the component so that in the future, the client can change what data shows up and how it shows up. The Component was also interactable, with a randomize button, and hover action that would increase the size of the image. I effectively used this component to practice, and documeneted all functionality to test personal understanding."
              />
            </li>
            <li>
              <Project
                title="Employee Management and Onboarding Back End Application"
                body="Working on my final assignment, I developed a Employee Management System, using React.js, Express.js, Bootstrap, and MongoDB to Query, Create, Delete and Update employee data. This web application also had log-in accessibilty for admin users, of which could be registered, encrypting their passwored to the database. The web application allowed for an admin to submit forms to create an employee, or update an employee by loading a form with the current employee information to be changed. I was able to design the database structure in to then apply to the Mongo database. Using express.js, data was passed between pages through routing to API routes that sent requests to the database, and respond the user with a data filled page."
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// Employee Management and Onboarding Back End Application
// • Developed a Web Application to be used to manage employee information efficiently using handlebar.js templates to minimize HTML code and express.js to route between API and custom views.
// • Wrote algorithms to let client query for employees with any data provided, to update and persist changes to employee’s credentials
// • Made future development 65% more efficient with effective templating and future proof practices
