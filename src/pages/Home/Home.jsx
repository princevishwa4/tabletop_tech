import * as React from "react";

// MUI imports
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Custom component imports
import DataTable from "../../components/DataTable";
import Loader from "../../components/Loader";

// Services imports
import { getAllPlayers } from "../../services";

import "./Home.css";

const Home = () => {
  const [allPlayers, setAllPlayers] = React.useState([]);
  const [isPending, setIsPending] = React.useState(true);

  React.useEffect(() => {
    const fetchAllPlayers = async () => {
      const data = await getAllPlayers();
      setAllPlayers(data);
      setIsPending(false);
    };
    fetchAllPlayers();

    setTimeout(() => setIsPending(false), 5000);
  }, []);

  return (
    <>
      <Typography>List of all players</Typography>
      {!isPending ? (
        <Paper elevation={3} className="datatable_wrapper">
          <DataTable rows={allPlayers} />
        </Paper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
