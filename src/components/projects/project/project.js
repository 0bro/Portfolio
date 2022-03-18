import { React } from "react";
import { Link } from "react-router-dom";
import "./project.css";
export function Project({ title, body, imgUrl, githubLink }) {
  return (
    <>
      <div className="card size">
        {imgUrl && (
          <img
            className="card-img-top"
            src={imgUrl}
            alt="Screenshot of Project"
          />
        )}
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="proj-text card-text ">{body}</p>
          {githubLink && (
            <Link to="githubLink" className="btn btn-primary">
              Link to Github
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
