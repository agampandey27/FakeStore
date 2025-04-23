import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {

  const aboutMePara = "Hello! I'm Agam Pandey, a full-stack web developer with a passion for building clean, scalable, and user-focused applications. This e-commerce website was created as a hands-on project using the FakeStore API, showcasing my ability to integrate real-time data, design intuitive interfaces, and manage state effectively. From crafting responsive UI components to handling API interactions and planning for backend extensions, this project highlights my end-to-end understanding of modern web development. I'm always excited to tackle new challenges and turn ideas into impactful digital experiences."
  
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        <Typewriter
          words={["ABOUT THE "]}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={70}
          delaySpeed={1000}
        /> 

        <span className="text-blue-600">
          <Typewriter
            words={['DEVELOPER']}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={70}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <div className="mx-7 my-5 text-2xl flex flex-col flex-wrap items-center justify-between">
        <a href="https://www.linkedin.com/in/agampandeyy/" target="_blank">
        <img className="h-64 m-3 rounded-full transform transition duration-300 hover:scale-95 active:scale-90" src="/myImg.jpeg" alt="" /></a>
        <h2 className="w-1/2 text-2xl text-center mt-2"> 
          <Typewriter
          words={[aboutMePara]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={45}
          delaySpeed={1000}
          />
        </h2>
      </div>
    </div>
  );
};

export default About;
