import "./titleSection.css";
import React from "react";
import Lottie from "lottie-react";
import programmingComputer from "../src/assets/lottieAnimation/programmingComputer.json";
import { Typewriter } from "react-simple-typewriter";

export const TitleSection = () => {
  return (
    <div className="container">
      <div className="heroInner">
        <div className="heroText">
          <h3>Hi, I'm</h3>
          <h1>Kyle Sanders</h1>

          <h2>
            <Typewriter
              words={[
                "Full Stack Developer",
                "Web Developer",
                "Mobile Developer",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </div>
        <div>
          <Lottie
            className="heroLottie"
            animationData={programmingComputer}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
};
