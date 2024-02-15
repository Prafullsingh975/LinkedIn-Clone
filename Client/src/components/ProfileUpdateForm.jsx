// pronounes,
//       heading,
//       city,
//       country,
//       industry,

import { useState } from "react";

export default function ProfileUpdateForm({ setVisible }) {
  const [firstName, setFirstName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [lastName, setLastName] = useState("");
  const [heading, setHeading] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");
  const [education, setEducation] = useState("");

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 grid p-4 place-items-center">
      <form
        action="post"
        className="w-full bg-white m-4 rounded-lg max-w-[800px] relative  max-h-[600px] overflow-auto"
      >
        <legend className="sticky bg-white top-0 left-0 px-6 py-3 border-b font-medium text-xl flex items-center justify-between">
          Edit intro
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
          <h3 className="text-black text-2xl">Basic info</h3>
          <label htmlFor="">
            First name
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>
          <label htmlFor="">
            Last name
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>
          <label htmlFor="">
            Enter custom pronouns
            <input
              type="text"
              onChange={(e) => setPronouns(e.target.value)}
              value={pronouns}
              className="border border-black rounded px-2 py-1 w-full"
              placeholder="eg: he/him"
            />
          </label>
          <label htmlFor="">
            Headline
            <input
              onChange={(e) => setHeading(e.target.value)}
              value={heading}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>

          <h3 className="text-black text-2xl">Current Position</h3>
          <label htmlFor="">
            Industry
            <input
              onChange={(e) => setIndustry(e.target.value)}
              value={industry}
              type="text"
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>
          <h3 className="text-black text-2xl">Education</h3>
          <label htmlFor="">
            Education
            <input
              type="text"
              onChange={(e) => setEducation(e.target.value)}
              value={education}
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>
          <h3 className="text-black text-2xl">Location</h3>
          <label htmlFor="">
            Country/Region
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className="border border-black rounded px-2 py-1 w-full"
            />
          </label>
          <label htmlFor="">
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-black rounded px-2 py-1 w-full"
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
