// Routing imports
import { Routes, Route } from "react-router-dom";

// Custom components imports
import Header from "../components/Header";

// Pages imports
import Home from "../pages/Home";
import AddPlayerDetail from "../pages/AddPlayerDetail";
import DetailOfPlayer from "../pages/DetailOfPlayer";
import EditPlayerDetail from "../pages/EditPlayerDetail";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPlayerDetail />} />
        <Route path="/profile/:id" element={<DetailOfPlayer />} />
        <Route path="/edit/:id" element={<EditPlayerDetail />} />
      </Routes>
    </>
  );
};

export default Routing;
