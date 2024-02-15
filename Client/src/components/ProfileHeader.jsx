import { useState } from "react";
import ProfileUpdateForm from "./ProfileUpdateForm";

export default function ProfileHeader({
  profilePicUrl,
  coverPicUrl,
  userName,
  pronouns,
  heading,
  city,
  country,
  followerCount,
  connectionCount,
}) {
  const [profilePic, setProfilePic] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [editFormVisible, setEditFormVisible] = useState(false);

  return (
    <div className="border rounded-xl overflow-hidden shadow">
      <div className="pb-16">
        <div className="relative h-min">
          <img
            src={coverPicUrl}
            className="aspect-[4/1] w-full object-cover"
            alt="user's cover photo"
          />
          <label
            htmlFor="cover"
            className="h-10 w-10 grid place-items-center bg-white text-sky-600 rounded-full absolute top-4 right-4"
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
          </label>
          <input
            onChange={(e) => {
              setCoverImage(e.target.value);
            }}
            className="h-0 w-0 absolute"
            type="file"
            id="cover"
            name="cover"
          />
          <div className="w-[20%] aspect-square rounded-full object-cover absolute top-[50%] border-[4px] border-white left-10 overflow-hidden">
            <label htmlFor="profile">
              <img
                className="absolute inset-0 object-cover"
                src={profilePicUrl}
                alt="user's profile photo"
              />
            </label>
            <input
              onChange={(e) => {
                setProfilePic(e.target.value);
              }}
              className="h-0 w-0"
              id="profile"
              name="profile"
              type="file"
            />
          </div>

          <button
            className="absolute right-4 -bottom-14 bg-gray-200 h-10 w-10 rounded-full grid place-items-center"
            onClick={() => setEditFormVisible(true)}
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
        </div>
      </div>
      <div className="p-6 pt-0">
        <div>
          <div className="flex items-end gap-3">
            <h2 className="text-4xl font-bold">{userName}</h2>
            <span className="text-gray-500">({pronouns})</span>
          </div>
          <p className="text-xl">{heading}</p>
          <div className="text-gray-500 text-lg">
            {city}, {country}
          </div>
          <div className="text-sky-700 gap-1 flex items-center font-medium text-sm">
            <span>{followerCount} followers </span>
            <span className="text-black text-xl block -mt-2">.</span>
            <span> {connectionCount} connections</span>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="rounded-full bg-sky-700 text-white font-medium w-56 py-1">
            Open to
          </button>
          <button className="rounded-full border-2 border-sky-700 bg-white text-sky-700 font-medium w-56 py-1">
            Add Profile section
          </button>
          <button className="rounded-full border-2 border-gray-500 bg-white text-gray-500 font-medium w-32 py-1">
            More
          </button>
        </div>
      </div>
      {editFormVisible && <ProfileUpdateForm setVisible={setEditFormVisible} />}
    </div>
  );
}
