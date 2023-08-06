import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Listings from "./Listings/Listings";
import Details from "./Details/Details";
import Card from "./Card/Card";
import Video from "./Video/Video";
import Advice from "./Advice/Advice";
import Contact from "./Contact/Contact";
import { Routes } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/ititit"
          element={[
            <Navbar p="/" />,
            <Hero />,
            <Services />,
            <Listings />,
            <Details />,
            <Card />,
            <Video />,
            <Advice />,
            <Contact />,
          ]}
        ></Route>
        <Route
          path="/contact"
          element={[<Navbar p="/contact" />, <Contact />]}
        ></Route>
        <Route
          path="/listings"
          element={[<Navbar p="/listings" />, <Listings />]}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
