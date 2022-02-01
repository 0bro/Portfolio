import React from "react";
import "./about.css";
import BaseImage from "./../../BlurredBack.png";
import { Dropdown } from "./dropdown";

export function About() {
  return (
    <>
      <div id="fade-to-color"></div>
      <div id="BG">
        <div id="mainContainer">
          <div id="about">
            <h1 className="underline">About me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum massa velit, convallis eu dui ut, condimentum
              condimentum metus. Donec lobortis accumsan leo, in gravida dui
              elementum laoreet. Suspendisse potenti. Quisque suscipit pulvinar
              ligula, at semper nunc posuere eu. Ut maximus dui quis odio cursus
              aliquet. Maecenas dapibus sodales odio at hendrerit. In viverra,
              turpis quis tincidunt hendrerit, augue orci pretium arcu, sed
              tristique nisi arcu in augue. Donec ullamcorper molestie sodales.
              Nunc orci lorem, vestibulum aliquam egestas ac, ultrices in ex.
            </p>
          </div>

          <h1 className="underline">Education and Training</h1>

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

          <h1 className="underline">Experience</h1>
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
