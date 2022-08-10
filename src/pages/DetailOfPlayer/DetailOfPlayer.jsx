import * as React from "react";

// MUI imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// MUI icons imports
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Routing imports
import { useNavigate, useParams } from "react-router-dom";

// Services imports
import { getPlayerDetail } from "../../services";

import "./DetailOfPlayer.css";

const DetailOfPlayer = () => {
  const [playerDetail, setPlayerDetail] = React.useState([]);
  const params = useParams();
  let navigate = useNavigate();

  React.useEffect(() => {
    const fetchPlayerDetails = async () => {
      const data = await getPlayerDetail(params.id);
      setPlayerDetail(data);
    };
    fetchPlayerDetails();
  }, [params.id]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box className="detail_of_players">
        <Box className="heading_wrapper">
          <ArrowBackIcon onClick={() => navigate(-1)} />
          <Typography className="heading">My Profile</Typography>
        </Box>
        <Container className="container">
          <Grid container className="child_container">
            <Grid item className="item_container">
              <Item className="text">
                <Typography className="text">
                  <b>First Name : </b>
                  {playerDetail.first_name}
                </Typography>
                <Typography className="text">
                  <b>Last Name : </b>
                  {playerDetail.last_name}
                </Typography>
                <Typography className="text">
                  <b>Contact Number : </b>
                  {playerDetail.contact_number}
                </Typography>
                <Typography className="text">
                  <b>Game Session : </b>
                  {playerDetail.campaign_name}
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DetailOfPlayer;
