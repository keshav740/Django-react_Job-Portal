import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Categories from "./Components/CategoriesSection/Categories";
import MiddSection from "./Components/MiddSection/MiddSection";
import MiddSection11 from "./Components/MiddSection/MiddSection11";
import MiddSection111 from "./Components/MiddSection/MiddSection111";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/Auth/SignIn/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import PostJob from "./Components/PostJob/PostJob";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        {/* <NavBar /> */}


        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>

        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/postjob" element={<PostJob />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
