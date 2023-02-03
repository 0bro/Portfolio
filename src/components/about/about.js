import React from "react";
import "./about.css";
import { Dropdown } from "./dropdown";

export function About() {
  return (
    <>
      <div id="fade-to-color"></div>
      <div id="BG">
        <div id="mainContainer">
          <h2 className="underline">About me</h2>
          <p>
            A tireless developer that works against the clock to squeeze as much
            learning into a day, I have explored software development and web
            development very early into my life. At the age of 15, I explored
            DOS operating system, in high school I taught myself Java to
            experiment in game development, and app development. I was able to
            create a simple craps game with a open source game engine. Coming
            into College my previous experince with DOS helped me with the
            Linux/Unix operating system, and my experience with Java put me
            ahead of my peers, which made me more passionate to fill the gaps in
            my knowledge. With my work experience I developed team building,
            team leadership, analytical thinking, problem solving, and pattern
            recognition skills, which put me on the right path to help peers
            with their own technical developement.
            <br />
          </p>

          <h2 className="underline">Education and Training</h2>

          <Dropdown
            title="Computer Programming & Analysis Program"
            subtitle="Seneca Newnham"
            duration="Sept 2019 - Present"
            items={[
              "Developed websites with a focus on, Front end, Back End and Full Stack independently to build on each sector",
              "Worked with large databases understanding features of entities that can help organize and make queries efficient",
              "Applied Object Oriented Fundamentals to my work to have code that is dynamic and advanced",
            ]}
          />

          <Dropdown
            title="Team Leadership and Management Seminar"
            subtitle="Mcdonalds Canada"
            duration="Oct 2017"
            items={[
              "Applying the emotional intelligence to create open and safe environments",
              "Recognizing and encouraging participation within each person’s behavioural style",
              "Tracking progress and areas of improvement for myself, peers, and employees",
            ]}
          />

          <Dropdown
            title="React.js Developer Certificate "
            subtitle="Linked in-Learning"
            duration="Dec 2021"
            items={[
              "Developing modular programming practices to create websites that are highly dynamic and interactive",
              "Practiced fast tracking projects by learning to work in an agile workflow outside of school to achieve personal success",
              "Designed components that are highly flexible",
            ]}
          />

          <h2 className="underline">Experience</h2>
          <Dropdown
            title="Data Analyst Intern"
            subtitle="Freestyle Social"
            duration="Jan 2021 – Jun 2021"
            items={[
              "Developed software that queried an SQL database to present the effect that added information has on the opinions of an audience throughout a fluid debate",
              "Contributed to weekly meetings with an interdisciplinary team to identify and present new features, bugs, or opportunities for improvement",
              "Translated the functions/problems of programs into non-technical terms, to be understood by team members from various departments",
            ]}
          />
          <Dropdown
            title="Junior Software Developer Intern"
            subtitle="PWC Technology Services Inc	"
            duration="August 2022 - December 2022"
            items={[
              "Contributed to the development and deployment of a cross-platform mobile application using Native React and Typescript, resulting in successful updates to production pipeline on both Android and iOS",
              "Developed and optimized front-end components for a web application using React.js and TypeScript, reducing development time by 60% for subsequent developers",
              "Actively led interdisciplinary team meetings to strategize, design and execute solutions for application improvement, resulting in efficient project execution and timely completion of deliverables",
              "Consistently managed and documented GIT pushes, providing clear project history and complying to productive development cycle resulting in a reliable repository ",
              "Proactively overhauled company workflow by implementing project management tools like Jira and Confluence, of which streamlined project organization, resulting in a 70% improvement in performance for upper management",
            ]}
          />
          <Dropdown
            title="Shift Manager"
            subtitle="McDonalds Canada"
            duration="Oct 2017 – June 2019"
            items={[
              "Successfully implement new products and sale methods from regular trainings",
              "Build strong connections within a large team to empower employees and increase morale throughout difficult periods",
              "Oversee proper execution of promotions to maximize sales building potential",
              "Instrumental in leading team to maintain daily tasks completion and surpass targets",
            ]}
          />
          <h2 className="underline">Projects</h2>
          <Dropdown
            title="Capstone Project: Project X: "
            subtitle="Role: Project Lead"
            duration="Summer 2022 - Winter 2023"
            items={[
              "Led the development of a highly engaging interactive game using Unity and C#, handling user data through RESTFul API requests to a backend server running express, accessing a MongoDB server",
              "Proactively and independently learned C#, Unity’s C# framework and the Unity Editor, to provide myself an advantage within the timeline of the project causing my team to trust my leadership when dealing with problems and tackling solutions",
              "Procedurally generated game assets, and 2D Sprites with implemented box colliders, and raycasting to better manipulate game assets within Unity’s 2D environment for a more interactive game",
              "Maintained effective project management using Notion and GitHub Projects to ensure that the team was fully informed about deliverables and deadlines that conformed to an agile workflow of which led to early project completion",
              "Developed a scalable structure to game elements using class inheritance and polymorphism resulting in a considerably faster integration of features",
              "Communicated creative ideas in concrete terms through a detailed project proposal, showcasing the strategy for a capstone project that would both challenge and optimize my team’s strengths to build a fully developed desktop game, resulting in a prepared and predictive timeline",
            ]}
          />
          <Dropdown
            title="Cloud-Based AWS Microservices"
            subtitle="Independant Project"
            duration="Winter 2023"
            items={[
              "Developed a multi-platform app for both IOS and Android on the .NET Framework using Xamarin, MongoDB and local storage persistence to track users’ daily fitness progress and graph their progress onto a Google Graph.",
              "40% fewer operations occur within the User Experience thread, from having all UI rendering and data collection moved to individual threads.",
              "Incorporated an effective UML (Unified Modeling Language) diagram that was used to visualize how our Mongo Database schema would work to allow for scalability while also defining the scope of the project ",
              "Used Figma to design a user interface that was open and accessible to users, making the user experience 60% simpler.",
              "Supported an effective teamworking environment by outlining an Agile workflow using a detailed Gantt chart to keep my team on track and accountable for their contributions, and visualizing the importance of deadlines ",
            ]}
          />
          <Dropdown
            title="Fitty Social Media Fitness App"
            subtitle="Role: Group Lead"
            duration="Summer 2022"
            items={[
              "Developed a multi-platform app for both iOS and Android on the .NET Framework using Xamarin, MongoDB and local storage persistence to track users’ daily fitness progress and graph their progress resulting in more interpersonal communication between trainer and client",
              "Incorporated an effective UML (Unified Modeling Language) diagram that was used to visualize how our Mongo Database schema would work to allow for scalability while also defining the scope of the project ",
              "Designed a user interface using Photoshop that was open and accessible to users, making the user experience 60% simpler and development 50% more proactive ",
              "Generated an effective Gantt chart to outline agile workflow for team members to individually track deliverables and their own performance ",
            ]}
          />
          <Dropdown
            title="Java Socket Client and Server Messaging Desktop Application"
            subtitle="Independent Project"
            duration="Summer 2022"
            items={[
              "Leveraged Java sockets to allow two-way communication between a server and multiple clients ",
              "Designed and asynchronously maintained a JavaFx window using multi-threading to ensure the client was able to send and receive data at the same time instead of waiting for a response after every request",
              "Structured server development and classes to keep scalability in mind, ensuring that server performance is exponentially proportionally to the server’s hardware",
            ]}
          />
          <Dropdown
            title="NASA API Front End Tile Component"
            subtitle="Independent Project"
            duration="Summer 2022"
            items={[
              "Implemented a NASA’s Satellite API into a React component that organized the incoming JSON data into a dynamically designed user interface",
              "Added multi-functionality within a single component to dynamically change based on information that is passed",
              "Developed an interactable component that had like and dislike features that can be toggled by the client based on the intended purpose",
              "Documented to full detail the purpose of all fun¬¬¬ctions, defining full usability and future scalability",
              "Gained a greater understanding of CSS, its structure, and methods to manipulate the appearance of components",
            ]}
          />
        </div>
      </div>
    </>
  );
}
