import React from "react";

import htmlIMG from "../../assets/SkillsImages/html.png";
import cssIMG from "../../assets/SkillsImages/css.png";
import jsIMG from "../../assets/SkillsImages/js.png";
import reactjsIMG from "../../assets/SkillsImages/reactjs.png";
import materialUI from "../../assets/SkillsImages/materialUI.png";
import node from "../../assets/SkillsImages/nodelogo.png";
import mongoLogo from "../../assets/SkillsImages/mongologo.png";

// IMPORTING SINGLE-EXP COMPONENT
import SingleExperience from "./SingleExperience";

function Experience() {
  let percentage = [90, 95, 90, 80, 80, 85, 80, 75];
  let [html, css, js, reactjs, materialui, mongoDb, nodejs, expressjs] =
    percentage;

  return (
    <div id="Experience" className="ExpContainer bg-white">
      <div className="container">
        <div class="section-title">
          <h2>
            <b>Experience</b>
          </h2>
        </div>
        <div className="row justify-content-center">
          <SingleExperience
            Title="HTML"
            Img={htmlIMG}
            Percentage={html}
            GradientC_1="#ff4100"
            GradientC_2="#ff9a78"
            TextColor="#ff6935"
          />
          <SingleExperience
            Title="CSS"
            Img={cssIMG}
            Percentage={css}
            GradientC_1="#008cfc"
            GradientC_2="#9bd2fe"
            TextColor="#008cfc"
          />
          <SingleExperience
            Title="JavaScript"
            Img={jsIMG}
            Percentage={js}
            GradientC_1="#fddb22"
            GradientC_2="#ffef96"
            TextColor="#fee03e"
          />

          <SingleExperience
            Title="React JS"
            Img={reactjsIMG}
            Percentage={reactjs}
            GradientC_1="#4da5bd"
            GradientC_2="#dbf7ff"
            TextColor="#c4e6f0"
          />
          <SingleExperience
            Title="Material UI"
            Img={materialUI}
            Percentage={materialui}
            GradientC_1="#005387"
            GradientC_2="#addfff"
            TextColor="#84bee3"
          />
          <SingleExperience
            className="mongoExpImage"
            Title="MongoDB"
            Img={mongoLogo}
            Percentage={mongoDb}
            GradientC_1="#27AE60"
            GradientC_2="#52BE80"
            TextColor="#84bee3"
          />
          <SingleExperience
            Title="NodeJS"
            Img={node}
            Percentage={nodejs}
            GradientC_1="#52BE80"
            GradientC_2="#27AE60"
            TextColor="#84bee3"
          />
          <SingleExperience
            Title="ExpressJS"
            Percentage={expressjs}
            GradientC_1="#85929E"
            GradientC_2="#2C3E50"
            TextColor="#84bee3"
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
