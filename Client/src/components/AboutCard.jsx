import { useState } from "react";

export default function AboutCard() {
  const [editToggle, setEditToggle] = useState(false);

  return (
    <>
      <div className="border rounded-xl shadow overflow-hidden">
        <h2 className="px-4 flex py-2 items-center font-medium text-lg border-b">
          About{" "}
          <button
            onClick={() => setEditToggle(true)}
            className="bg-gray-100 p-3 rounded-full ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
              ></path>
            </svg>
          </button>
        </h2>
        <p className="px-4 py-2">about the user</p>
      </div>

      {editToggle && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 grid p-4 place-items-center">
          <form
            action="post"
            className="w-full bg-white m-4 rounded-lg max-w-[800px] relative max-h-[600px] overflow-auto"
          >
            <legend className="py-2 sticky top-0 bg-white px-4 flex justify-between items-center border-b text-lg font-medium">
              About{" "}
              <button
                className="bg-gray-100 p-3 rounded-full"
                onClick={() => setEditToggle(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>{" "}
            </legend>
            <label
              htmlFor="about"
              className="border p-4 text-sm text-gray-600 grid gap-3"
            >
              You can write about your years of experience, industry, or skills.
              People also talk about their achievements or previous job
              experiences.
              <textarea
                name="about"
                id="about"
                cols="84"
                className="max-w-full p-3 border border-black rounded-lg"
                rows="20"
              ></textarea>
            </label>
            <div className="sticky bottom-0 bg-white px-6 py-3 border-t flex justify-end">
              <button className="text-lg bg-sky-600 rounded-full text-white w-32">
                save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
