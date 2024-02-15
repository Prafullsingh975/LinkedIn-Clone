// title,
// empType,
// start,
// end,
// isWorking,
// desc,
// companyName,
// skills,
// locationType,
// location,

import { useState } from "react";
import ExperienceAddForm from "./ExperienceAddForm";

const Experience = [
  {
    image:
      "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
    title: "React Developer",
    companyName: "Company Name",
    empType: "Full Time",
    start: "dec 2023",
    end: "jan 2025",
    location: "Mumbai, Maharastra, India",
    locationType: "On-site",
    skills: ["github", "react js", "git", "css", "html"],
  },
];

export default function ExperienceCard() {
  const [toggleAdd, setToggleAdd] = useState(false);
  return (
    <>
      <div className="border grid gap-3 p-4 rounded-xl shadow">
        <h2 className="text-lg flex justify-between items-center font-medium">
          Experience{" "}
          <button className="" onClick={() => setToggleAdd(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18z"
              ></path>
            </svg>
          </button>
        </h2>
        {Experience.map((exp, idx) => (
          <Card data={exp} key={idx} />
        ))}
      </div>
      {toggleAdd && <ExperienceAddForm setVisible={setToggleAdd} />}
    </>
  );
}

const Card = ({ data }) => (
  <div className="flex gap-3">
    <img
      className="h-14 w-14 rounded-full"
      src={data.image}
      alt="company logo"
    />
    <div className="text-sm text-gray-600 grid">
      <h4 className="font-medium text-base text-black">{data.title}</h4>
      <p className="text-black text-base">
        {data.companyName} - {data.empType}
      </p>
      <span>
        {data.start}-{data.end}
      </span>
      <span>
        {data.location} . {data.locationType}
      </span>
      <div className="flex gap-1">
        <span className="font-medium text-black">Skills:</span>
        <span className="flex gap-2">
          {data.skills.map((skill, idx) => (
            <span key={`dsfd${idx}`}>{skill}</span>
          ))}
        </span>
      </div>
    </div>
  </div>
);
