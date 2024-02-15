// email, password, firstName, lastName, mobile;

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="bg-[#f3f2f0] h-screen">
      <nav className="h-10 flex items-center px-4">
        <div className="text-sky-700 font-bold text-xl">Linkedin</div>
      </nav>
      <section className="flex items-center justify-center flex-col py-10">
        <form
          action="post"
          className="bg-white flex flex-col gap-2 w-80 p-4 rounded-md"
        >
          <h1 className="text-xl font-medium">Sign in</h1>
          <p className="text-sm mb-3">
            Stay updated on your professional world
          </p>
          <div className="flex flex-col mb-3">
            <label className="text-xs font-bold text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              className="border border-black rounded mt-1 p-1"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              className="text-xs font-bold text-gray-500"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-black rounded mt-1 p-1"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <span className="text-xs text-center">
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <a href="#" className="text-sky-600">
              User Agreement
            </a>
            ,{" "}
            <a href="#" className="text-sky-600">
              Privacy Policy
            </a>
            , and{" "}
            <a href="#" className="text-sky-600">
              Cookie Policy
            </a>
            .
          </span>
          <button
            className="bg-sky-700 rounded-full py-2 text-sm text-white px-4 mt-3"
            type="submit"
          >
            Sign in
          </button>
          <div className="text-center text-xs mt-2">
            new on LinedIn?{" "}
            <Link to="signup" className="text-sky-600">
              Sign up
            </Link>
          </div>
        </form>
      </section>
      <footer className="text-xs bg-white xl:gap-0 absolute bottom-0 px-3 py-2 grid w-full grid-cols-2 gap-3 font-bold text-gray-500  xl:grid-cols-11">
        <div className="text-black text-base">Linkedin</div>
        <a href="#">About</a>
        <a href="#">Accessibility</a>
        <a href="#">User Agreement</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Copyright Policy</a>
        <a href="#">Brand Policy</a>
        <a href="#">Guest Controls</a>
        <a href="#">Community Guidelines</a>
        <a href="#">Language</a>
      </footer>
    </main>
  );
}
