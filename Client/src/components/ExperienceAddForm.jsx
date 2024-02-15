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

export default function ExperienceAddForm({ setVisible }) {
  const [title, setTitle] = useState("");
  const [empType, setEmpType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [education, setEducation] = useState("");
  const [desc, setDesc] = useState("");
  const [isWorking, setIsWorking] = useState(true);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 grid p-4 place-items-center">
      <form
        action="post"
        className="w-full bg-white m-4 rounded-lg max-w-[800px] relative  max-h-[600px] overflow-auto"
      >
        <legend className="sticky bg-white top-0 left-0 px-6 py-3 border-b font-medium text-xl flex items-center justify-between">
          Add Experience
          <button type="button" onClick={() => setVisible(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
              ></path>
            </svg>
          </button>
        </legend>
        <div className="p-6 grid gap-4 h-max">
          <label htmlFor="">
            Title
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>
          <label htmlFor="">
            Employement type
            <select
              onChange={(e) => {
                setEmpType(e.target.value);
              }}
              value={empType}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            >
              <option value="Full-time">Full time</option>
              <option value="Part-time">Part time</option>
              <option value="self-employed">Self employed</option>
              <option value="fleelance">Freelance</option>
              <option value="internship">Internship</option>
              <option value="trainee">Trainee</option>
            </select>
          </label>
          <label htmlFor="">
            Company name
            <input
              type="text"
              onChange={(e) => setEmpType(e.target.value)}
              value={empType}
              className="border border-black rounded px-2 py-1 w-full"
              placeholder="eg: he/him"
            />
          </label>
          <label htmlFor="">
            Location
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>

          <label htmlFor="">
            Location Type
            <select
              onChange={(e) => {
                setLocationType(e.target.value);
              }}
              value={locationType}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            >
              <option value="on-site">On site</option>
              <option value="hybrid">Hybrid</option>
              <option value="remote">remote</option>
            </select>
          </label>

          <label htmlFor="" className="flex gap-3">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setIsWorking(true);
                } else {
                  setIsWorking(false);
                }
              }}
              value={education}
              className="h-6 accent-sky-600 w-6"
            />
            I am currently working at this position
          </label>
          <label htmlFor="">
            Start date
            <input
              type="date"
              onChange={(e) => setStart(e.target.value)}
              value={start}
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>

          <label htmlFor="">
            End Date
            <input
              onChange={(e) => setEnd(e.target.value)}
              value={end}
              type="date"
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>
          <label htmlFor="">
            Description
            <textarea
              className="border border-black rounded px-2 py-1 w-full"
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
        </div>
        <div className="sticky bottom-0 bg-white px-6 py-3 border-t flex justify-end">
          <button className="text-lg bg-sky-600 rounded-full text-white w-32">
            save
          </button>
        </div>
      </form>
    </div>
  );
}
