// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "./AddPlayerDetail.css";

const AddPlayerDetail = () => {
  return (
    <>
      <Typography className="text">Add New Player</Typography>
      <Container component={Paper} className="container" elevation={3}>
        <FormGroup component={Paper} className="form_group">
          <TextField
            helperText=""
            label="First Name"
            name="first_name"
            value="test"
            // onChange={(event) => onValueChange(event)}
          />
          <TextField
            helperText=""
            label="Last Name"
            name="last_name"
            value="test"
            // onChange={(event) => onValueChange(event)}
          />
          <TextField
            helperText=""
            label="Contact Number"
            name="contact"
            type="number"
            value="123"
            // onChange={(event) => onValueChange(event)}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Game Session
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value="Black Rain">Black Rain</MenuItem>
                <MenuItem value="One Last Riddle">One Last Riddle</MenuItem>
                <MenuItem value="The Burning Plague">
                  The Burning Plague
                </MenuItem>
                <MenuItem value="The Sea Witch">The Sea Witch</MenuItem>
                <MenuItem value="Tomb of Horrors">Tomb of Horrors</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => editUserDetails()}
          >
            Add
          </Button>
        </FormGroup>
      </Container>
    </>
  );
};

export default AddPlayerDetail;
