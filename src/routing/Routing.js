// Routing imports
import { Routes, Route, Navigate } from "react-router-dom";

// Custom components imports
import Header from "../components/Header";

// Pages imports
import Home from "../pages/Home";
import DetailOfPlayer from "../pages/DetailOfPlayer";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/1" element={<DetailOfPlayer />} />
      </Routes>
    </>
  );
};

export default Routing;
