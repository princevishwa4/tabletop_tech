import * as React from "react";

// MUI imports
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// MUI icons imports
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

// Routing imports
import { Link } from "react-router-dom";

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom component imports
import Loader from "../../components/Loader";

// Services imports
import { getAllPlayers, deletePlayer } from "../../services";

import "./Home.css";

const Home = () => {
  const [allPlayers, setAllPlayers] = React.useState([]);
  const [isPending, setIsPending] = React.useState(true);
  const [res, setRes] = React.useState(false);

  React.useEffect(() => {
    const fetchAllPlayers = async () => {
      const data = await getAllPlayers();
      setAllPlayers(data);
      setIsPending(false);
      setRes(false);
    };
    fetchAllPlayers();

    setTimeout(() => setIsPending(false), 5000);
  }, [res]);

  const deleteSelectedPlayer = async (id) => {
    await deletePlayer(id);
    setRes(true);
    toast.success(`Player has been deleted successfully.`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Typography className="heading">List of all players</Typography>
      {!isPending ? (
        <Paper elevation={3} className="datatable_wrapper">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Game Session</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allPlayers.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">
                      {row.first_name + " " + row.last_name}
                    </TableCell>
                    <TableCell>{row.campaign_name}</TableCell>
                    <TableCell align="center">
                      <Button exact to={`/profile/${row.id}`} component={Link}>
                        <VisibilityOutlinedIcon />
                      </Button>
                      <Button exact to={`/edit/${row.id}`} component={Link}>
                        <EditOutlinedIcon style={{ color: "purple" }} />
                      </Button>
                      <Button onClick={() => deleteSelectedPlayer(row.id)}>
                        <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
