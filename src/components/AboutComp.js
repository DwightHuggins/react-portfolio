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
                 I am originally from
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

        </div>
      </div>
    </article>
  );
};

export default AboutComp;