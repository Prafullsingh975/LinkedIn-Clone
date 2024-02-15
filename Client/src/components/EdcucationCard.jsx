//  school,
//       grade,
//       start,
//       end,
//       field,
//       desc,
//       degree,

import { useState } from "react";
import EducationAddForm from "./EducationAddForm";

const Education = [
  {
    school: "school name",
    grade: "7.8 CGPA",
    start: "1 jan, 2023",
    end: "1 jan, 2027",
    field: "cse",
    desc: "",
    degree: "Btech",
  },
];

export default function EducationCard() {
  const [toggleAdd, setToggleAdd] = useState(false);
  return (
    <>
      <div className="border grid gap-3 p-4 rounded-xl shadow">
        <h2 className="text-lg flex justify-between items-center font-medium">
          Education{" "}
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
        {Education.map((edu, idx) => (
          <Card data={edu} key={idx} />
        ))}
      </div>
      {toggleAdd && <EducationAddForm setVisible={setToggleAdd} />}
    </>
  );
}

const Card = ({ data }) => (
  <div className="flex gap-3">
    <div className="text-sm text-gray-600 grid">
      <h4 className="font-medium text-base text-black">{data.school}</h4>
      <p className="text-black text-base">
        {data.degree}, {data.field}
      </p>
      <span>
        {data.start}-{data.end}
      </span>
      <div className="flex gap-1">
        <span className="font-medium text-black">Grade:</span>
        <span className="flex gap-2">{data.grade}</span>
      </div>
    </div>
  </div>
);
