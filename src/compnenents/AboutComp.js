import React from "react";
import "./styles/About.css"

const AboutComp = () => {
  return (
    <article className="row single-post mt-5 no-gutters">
      <div className="col-12">
        <div className="image-wrapper float-left pr-3">
        </div>
        <div className="single-post-content-wrapper p-3">
          <h1 id="introtext">
            Hi, my name is Dwight</h1><h1 id="introtext2">I am a Full-Stack Developer from Atlanta, GA.
          </h1>
          <p>
          Hello World! My name is Dwight Huggins and I am originally from
              small town Bartow, GA. I moved to the Atlanta area back in 2008 
              and it's been home since. I hold a Bachelor's of Interdisplinary 
              Studies from Georgia Southern Univeristy with concentrations in
              Business Management, Public Policy, and Public Administration. 
              For the last five years I have been an employee of Apple, Inc.
              I have held numerous roles there over the course of my career from 
              customer facing/business sales to technical support. For the last year 
              I have held the title of "Genius" where I focused on hardware and software 
              support for all Apple machines and devices. However, I have been wanting to 
              enter the software industry and I was able to recently enroll with GA Tech's 
              Full Stack Web Development Program. Post graduation I will be seeking software 
              development roles far and wide. I'm super excited to be on this journey!
          </p>

          <p>
            I have always had a love for problem solving, analyzing data, and
            creating projects. I never found the perfect way to implement those
            skills and interests in a career. After months of research, soul
            searching, <i>and Googling</i>, I discovered coding bootcamps. I
            utilized CodeAcademy for a while to see if I would enjoy coding, and
            I became obsessed. I am looking forward to building my coding skill
            set, and finding a career as a developer.
          </p>
        </div>
      </div>
    </article>
  );
};

export default AboutComp;