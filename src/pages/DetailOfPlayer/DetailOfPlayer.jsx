// MUI imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import "./DetailOfPlayer.css";

const DetailOfPlayer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Typography className="heading">My Profile</Typography>
      <Container className="container">
        <Grid container spacing={2} className="child_container">
          <Grid item className="item_container">
            <Item className="text">
              <Typography className="text">
                <b>First Name : </b>
              </Typography>
              <Typography className="text">
                <b>Last Name : </b>
              </Typography>
              <Typography className="text">
                <b>Contact Number : </b>
              </Typography>
              <Typography className="text">
                <b>Game Session : </b>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailOfPlayer;
