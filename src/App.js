import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Movies from "./Pages/Movies";
import User from "./Pages/User";
import About from "./Pages/About";
import UserView from "./components/UserView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/blog4" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Users/:id" element={<User />}></Route>
        <Route path="/About/:id" element={<About />}></Route>
        <Route path="/UserView" element={<UserView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
