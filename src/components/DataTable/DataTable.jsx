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

// MUI icons imports
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

// Routing imports
import { Link } from "react-router-dom";

import "./DataTable.css";

const DataTable = ({ rows }) => {
  return (
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
          {rows.map((row) => (
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
                <Button>
                  <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
