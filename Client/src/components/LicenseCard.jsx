import { useState } from "react";
import CerficateAddForm from "./CerficateAddForm";

const Certificate = [
  {
    name: "certificate name",
    url: "/",
    skill: "react",
    issueDate: "1 jan, 2023",
    expiry: "1 jan, 2027",
    organization: "name of the organization",
    doc: "",
  },
];

export default function LicenseCard() {
  const [toggleAdd, setToggleAdd] = useState(false);
  return (
    <>
      <div className="border grid gap-3 p-4 rounded-xl shadow">
        <h2 className="text-lg flex justify-between items-center font-medium">
          Licenses & Certificate{" "}
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
        {Certificate.map((cert, idx) => (
          <Card data={cert} key={idx} />
        ))}
      </div>
      {toggleAdd && <CerficateAddForm setVisible={setToggleAdd} />}
    </>
  );
}

// url,
//     skill,
//     expiry,
//     issueDate,
//     orginazation,
//     name,
//     doc: req.file?.filename,

const Card = ({ data }) => (
  <div className="grid gap-1">
    <a className="text-lg font-medium" href={data.url}>
      {data.name}
    </a>
    <p className="font">{data.organization}</p>
    <span className="text-sm text-slate-700">issued {data.issueDate}</span>
    <a
      className="rounded-full w-fit px-3 border-2 border-slate-400 flex items-center gap-2"
      href={data.url}
    >
      Show credential
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
        ></path>
      </svg>
    </a>
    <span>Skill: {data.skill}</span>
  </div>
);
