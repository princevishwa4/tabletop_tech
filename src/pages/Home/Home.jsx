import * as React from "react";

// MUI imports
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Custom component imports
import DataTable from "../../components/DataTable";

// Services imports
import { getAllPlayers } from "../../services";

import "./Home.css";

const Home = () => {
  const [allPlayers, setAllPlayers] = React.useState([]);

  React.useEffect(() => {
    const fetchAllPlayers = async () => {
      const data = await getAllPlayers();
      setAllPlayers(data);
    };
    fetchAllPlayers();
  }, []);

  return (
    <>
      <Typography>List of all players</Typography>
      <Paper elevation={3} className="datatable_wrapper">
        <DataTable rows={allPlayers} />
      </Paper>
    </>
  );
};

export default Home;
