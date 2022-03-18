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
        </div>
      </div>
    </>
  );
}
