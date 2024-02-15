import { useState } from "react";

export default function CerficateAddForm({ setVisible }) {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [date, setDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [url, setUrl] = useState("");
  const [skill, setSkill] = useState("");
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 grid p-4 place-items-center">
      <form
        action="post"
        className="w-full bg-white m-4 rounded-lg max-w-[800px] relative  max-h-[600px] overflow-auto"
      >
        <legend className="sticky bg-white top-0 left-0 px-6 py-3 border-b font-medium text-xl flex items-center justify-between">
          Add Certificate
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
        {/* url,skill, expiry, issueDate, orginazation, name, //
        doc: req.file?.filename, */}
        <div className="p-6 grid gap-4 h-max">
          <label className="grid gap-2 text-slate-700" htmlFor="name">
            Name
            <input
              className="border border-black rounded px-3 py-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Ex: microsoft certified netwerk associate"
            />
          </label>
          <label className="grid gap-2 text-slate-700" htmlFor="org">
            Organization
            <input
              className="border border-black rounded px-3 py-1"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              type="text"
              id="org"
              placeholder="Ex: microsoft"
            />
          </label>
          <label className="grid gap-2 text-slate-700" htmlFor="issue-date">
            Issue Date
            <input
              className="border border-black rounded px-3 py-1"
              type="date"
              name="issue-date"
              id="issue-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label
            className="grid gap-2 text-slate-700"
            htmlFor="expiration-date"
          >
            Expiration Date
            <input
              className="border border-black rounded px-3 py-1"
              type="date"
              name="expiration-date"
              id="expiration-date"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
            />
          </label>
          <label className="grid gap-2 text-slate-700" htmlFor="url">
            Credential URL
            <input
              className="border border-black rounded px-3 py-1"
              type="text"
              name="urk"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <label className="grid gap-2 text-slate-700" htmlFor="skil">
            Skill
            <input
              className="border border-black rounded px-3 py-1"
              type="text"
              name="skill"
              id="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
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
