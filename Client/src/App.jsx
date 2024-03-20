import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Network from "./pages/Network";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route path="/" element={<Layout />}>
          {/* home */}
          {/* profile */}
          <Route path="/feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/mynetwork" element={<Network />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
