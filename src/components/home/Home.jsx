import React from "react";
import Button from "../button/Button";
import ComputerPhoto from "../../photos/computerPhoto.png";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <div className="home-left-side">
          <h1>how to start your own bussiness ! Will you ready ?</h1>
          <p>
            WE help individuals or Organizations to start their business or
            start-up by giving them indepth theory and practical sessions.
          </p>
          <Button text="Join Now" margin="35px" />
        </div>
        <div className="computer-photo-wrapper">
          <img src={ComputerPhoto} alt="Computer" />
        </div>
      </div>
    </>
  );
}

export default Home;
