import React from "react";
import {
  StyledDiv,
  StyledH1,
  SpanColorized,
  DivCenter,
  AboutMe,
  DivTypical,
} from "../styles/Home";
import Typical from "react-typical";
import Social from "./Social";

const Home = () => {
  return (
    <StyledDiv>
      <DivCenter>
        <DivTypical>
          <Typical
            steps={[
              "Hi, I am Fabrício Souza",
              1500,
              "A React Web Developer",
              1500,
              "Let's Thrive Together",
              1500,
              "Learn Together",
              1500,
              "Develop Together",
              1500,
            ]}
            loop={Infinity}
            wrapper={StyledH1}
          />
        </DivTypical>
        <AboutMe>
          <p>
            Hi, how you doing? I am Fabrício, i've been studying web development
            for a while. I have studied HTML5, CSS3, JavaScript. Now, i'm
            studing React.js and Node.js. I have done some personal projects
            since then. Come check, ah... and don't forget to take a look on my
            social medias as well, which are here, down below.
          </p>
        </AboutMe>
        <Social />
      </DivCenter>
    </StyledDiv>
  );
};

export default Home;
