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

// MUI icons imports
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Routing imports
import { useNavigate } from "react-router-dom";

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Services imports
import { addNewPlayer } from "../../services";

// Validations imports
import * as Validation from "../../validation/Validation";

import "./AddPlayerDetail.css";

const AddPlayerDetail = () => {
  const [addPlayerDetail, setAddPlayerDetail] = React.useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    campaign_name: "",
  });
  const [addPlayerDetailErr, setAddPlayerDetailErr] = React.useState({
    first_nameErr: "",
    last_nameErr: "",
    contact_numberErr: "",
    campaign_nameErr: "",
  });
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddPlayerDetail((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setAddPlayerDetailErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  const addPlayer = () => {
    let formIsValid = true;
    if (Validation.validateName(addPlayerDetail.first_name).length > 0) {
      handleFormFieldsErr(
        "first_nameErr",
        Validation.validateName(addPlayerDetail.first_name)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("first_nameErr", "");
    }

    if (Validation.validateName(addPlayerDetail.last_name).length > 0) {
      handleFormFieldsErr(
        "last_nameErr",
        Validation.validateName(addPlayerDetail.last_name)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("last_nameErr", "");
    }

    if (
      Validation.validateMobileNumber(addPlayerDetail.contact_number).length > 0
    ) {
      handleFormFieldsErr(
        "contact_numberErr",
        Validation.validateMobileNumber(addPlayerDetail.contact_number)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("contact_numberErr", "");
    }

    if (Validation.validateDropdown(addPlayerDetail.campaign_name).length > 0) {
      handleFormFieldsErr(
        "campaign_nameErr",
        Validation.validateDropdown(addPlayerDetail.campaign_name)
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
    const response = await addNewPlayer(addPlayerDetail);
    if (response.id) {
      toast.success(`New player has been added successfully.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <Box className="add_players">
        <Box className="heading_wrapper">
          <ArrowBackIcon onClick={() => navigate(-1)} />
          <Typography className="heading">Add New Player</Typography>
        </Box>
        <Container component={Paper} className="container" elevation={3}>
          <FormGroup component={Paper} className="form_group">
            <FormControl fullWidth>
              <TextField
                helperText=""
                label="First Name"
                name="first_name"
                value={addPlayerDetail.first_name}
                onChange={handleChange}
              />
              {addPlayerDetailErr.first_nameErr ? (
                <FormHelperText error className="err">
                  {addPlayerDetailErr.first_nameErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                helperText=""
                label="Last Name"
                name="last_name"
                value={addPlayerDetail.last_name}
                onChange={handleChange}
              />
              {addPlayerDetailErr.last_nameErr ? (
                <FormHelperText error className="err">
                  {addPlayerDetailErr.last_nameErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                helperText=""
                label="Contact Number"
                name="contact_number"
                type="text"
                value={addPlayerDetail.contact_number}
                onChange={handleChange}
              />
              {addPlayerDetailErr.contact_numberErr ? (
                <FormHelperText error className="err">
                  {addPlayerDetailErr.contact_numberErr}
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
                value={addPlayerDetail.campaign_name}
                label="Game Session"
                name="campaign_name"
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
              {addPlayerDetailErr.campaign_nameErr ? (
                <FormHelperText error className="err">
                  {addPlayerDetailErr.campaign_nameErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <Button variant="contained" color="primary" onClick={addPlayer}>
              Add
            </Button>
          </FormGroup>
        </Container>
      </Box>
    </>
  );
};

export default AddPlayerDetail;
