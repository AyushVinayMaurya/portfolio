import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ayush
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A Frontend Developer based in India, specializing in technical
          education through hands through hands-on learning and building
          applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl " />
              <div
                className="btn-front rounded-xl flex justify-center
                items-center"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">About Myself</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am currently learning and exploring frontend development as a
            future career. If you need any assistance or resources, feel free to
            ask. I am focusing on various areas and technologies within frontend
            development to build a solid foundation and enhances my skills.
          </p>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;

