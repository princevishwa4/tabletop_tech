// Routing imports
import { Routes, Route, Navigate } from "react-router-dom";

// Custom components imports
import Header from "../components/Header";

// Pages imports
import Home from "../pages/Home";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routing;
