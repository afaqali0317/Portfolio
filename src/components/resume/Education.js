import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2023 - present"
          title="Web Developer"
          subTitle="Upwork"
          des="Worked Remotely with international clients from different organizations with a 94% success rate."
        />
        <ResumeCard
          badge="2023 - present"
          title="Front-end Developer"
          subTitle="Upwork"
          des="Designed and developed user interfaces for web applications using Reactjs."
        />
        <ResumeCard
          badge="2023 - present"
          title="Senior Developer"
          subTitle="ReactBD.com."
          des="Same as above but with a little more responsibility and a little more pay. Hhh :)"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2022 - present"
          title="University of Engineering & Technology"
          subTitle="Peshawar"
          des="Studying Computer systems Engineering with increasing crave for innovation and creativity."
        />
        <ResumeCard
          badge="2023 - 2024"
          title="Beginner's guide to Becoming a complete python developer"
          subTitle="Coursera"
          des="Had exposure to a latest libraries and other programming technologies."
        />
        <ResumeCard
          badge="2023 - 2024"
          title="MERN Stack Developer"
          subTitle="Coursera"
          des="Practiced developing web applications using Express.js, React, and Node.js. Skilled in both client-side and server-side development, API integration, and state management with Redux. Committed to clean code practices and continuous learning."
        />
      </div>
    </div>
  );
};

export default Education;
