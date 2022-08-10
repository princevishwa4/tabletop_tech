import * as React from "react";

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Routing imports
import { useNavigate, useParams } from "react-router-dom";

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Services imports
import { getPlayerDetail, updatePlayer } from "../../services";

// Validations imports
import * as Validation from "../../validation/Validation";

import "./EditPlayerDetail.css";

const EditPlayerDetail = () => {
  const [playerDetail, setPlayerDetail] = React.useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    campaign_name: "",
  });
  const [playerDetailErr, setPlayerDetailErr] = React.useState({
    first_nameErr: "",
    last_nameErr: "",
    contact_numberErr: "",
    campaign_nameErr: "",
  });
  const params = useParams();
  let navigate = useNavigate();

  React.useEffect(() => {
    const fetchPlayerDetails = async () => {
      const data = await getPlayerDetail(params.id);
      setPlayerDetail(data);
    };
    fetchPlayerDetails();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPlayerDetail((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setPlayerDetailErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  const editUserDetails = () => {
    let formIsValid = true;
    if (Validation.validateName(playerDetail.first_name).length > 0) {
      handleFormFieldsErr(
        "first_nameErr",
        Validation.validateName(playerDetail.first_name)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("first_nameErr", "");
    }

    if (Validation.validateName(playerDetail.last_name).length > 0) {
      handleFormFieldsErr(
        "last_nameErr",
        Validation.validateName(playerDetail.last_name)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("last_nameErr", "");
    }

    if (
      Validation.validateMobileNumber(playerDetail.contact_number).length > 0
    ) {
      handleFormFieldsErr(
        "contact_numberErr",
        Validation.validateMobileNumber(playerDetail.contact_number)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("contact_numberErr", "");
    }

    if (Validation.validateDropdown(playerDetail.campaign_name).length > 0) {
      handleFormFieldsErr(
        "campaign_nameErr",
        Validation.validateDropdown(playerDetail.campaign_name)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("campaign_nameErr", "");
    }

    if (formIsValid) {
      submitFormData();
    }
  };

  const submitFormData = async () => {
    const response = await updatePlayer(playerDetail, params.id);
    if (response.id) {
      toast.success(
        `${playerDetail.first_name}'s details has been updated successfully.`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setTimeout(() => navigate("/", { replace: true }), 4000);
    } else {
      toast.error(`Please try again later.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
      <Box className="edit_players">
        <Typography className="heading">Edit Player Details</Typography>
        <Container component={Paper} className="container" elevation={3}>
          <FormGroup component={Paper} className="form_group">
            <FormControl fullWidth>
              <TextField
                helperText=""
                label="First Name"
                name="first_name"
                value={playerDetail.first_name}
                onChange={handleChange}
              />
              {playerDetailErr.first_nameErr ? (
                <FormHelperText error className="err">
                  {playerDetailErr.first_nameErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                helperText=""
                label="Last Name"
                name="last_name"
                value={playerDetail.last_name}
                onChange={handleChange}
              />
              {playerDetailErr.last_nameErr ? (
                <FormHelperText error className="err">
                  {playerDetailErr.last_nameErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                helperText=""
                label="Contact Number"
                name="contact_number"
                type="number"
                value={playerDetail.contact_number}
                onChange={handleChange}
              />
              {playerDetailErr.contact_numberErr ? (
                <FormHelperText error className="err">
                  {playerDetailErr.contact_numberErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Game Session
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="campaign_name"
                value={playerDetail.campaign_name}
                label="Game Session"
                onChange={handleChange}
              >
                <MenuItem value="Black Rain">Black Rain</MenuItem>
                <MenuItem value="One Last Riddle">One Last Riddle</MenuItem>
                <MenuItem value="The Burning Plague">
                  The Burning Plague
                </MenuItem>
                <MenuItem value="The Sea Witch">The Sea Witch</MenuItem>
                <MenuItem value="Tomb of Horrors">Tomb of Horrors</MenuItem>
              </Select>
              {playerDetailErr.campaign_nameErr ? (
                <FormHelperText error className="err">
                  {playerDetailErr.campaign_nameErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={editUserDetails}
            >
              Update
            </Button>
          </FormGroup>
        </Container>
      </Box>
    </>
  );
};

export default EditPlayerDetail;
