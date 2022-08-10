// MUI imports
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Custom component imports
import DataTable from "../../components/DataTable";

// Services imports
import { getAllPlayers } from "../../services";

import "./Home.css";

const Home = () => {
  const rows = [
    {
      first_name: "Joe",
      last_name: "Caputo",
      contact_number: "07658312387",
      campaign_name: "Black Rain",
    },
    {
      first_name: "Piper",
      last_name: "Chapman",
      contact_number: "07142548798",
      campaign_name: "Black Rain",
    },
    {
      first_name: "Tasha",
      last_name: "Jefferson",
      contact_number: "07998987220",
      campaign_name: "Black Rain",
    },
    {
      first_name: "Gloria",
      last_name: "Mendoza",
      contact_number: "07512645873",
      campaign_name: "Black Rain",
    },
    {
      first_name: "Theodore",
      last_name: "Bagwell",
      contact_number: "07561384896",
      campaign_name: "One Last Riddle",
    },
    {
      first_name: "Brad",
      last_name: "Bellick",
      contact_number: "07883256418",
      campaign_name: "One Last Riddle",
    },
    {
      first_name: "Lincoln",
      last_name: "Burrows",
      contact_number: "07112356983",
      campaign_name: "One Last Riddle",
    },
    {
      first_name: "Fernando",
      last_name: "Sucre",
      contact_number: "07963212321",
      campaign_name: "One Last Riddle",
    },
    {
      first_name: "Sara",
      last_name: "Tancredi",
      contact_number: "07954186684",
      campaign_name: "One Last Riddle",
    },
    {
      first_name: "Daryl",
      last_name: "Dixon",
      contact_number: "07325649845",
      campaign_name: "The Burning Plague",
    },
    {
      first_name: "Maggie",
      last_name: "Greene",
      contact_number: "07459832185",
      campaign_name: "The Burning Plague",
    },
    {
      first_name: "Carol",
      last_name: "Peletier",
      contact_number: "07124979566",
      campaign_name: "The Burning Plague",
    },
    {
      first_name: "Eugene",
      last_name: "Porter",
      contact_number: "07223654987",
      campaign_name: "The Burning Plague",
    },
    {
      first_name: "Billy",
      last_name: "Cranston",
      contact_number: "07985645784",
      campaign_name: "The Sea Witch",
    },
    {
      first_name: "Kimberly",
      last_name: "Hart",
      contact_number: "07815307459",
      campaign_name: "The Sea Witch",
    },
    {
      first_name: "Trini",
      last_name: "Kwan",
      contact_number: "07548755285",
      campaign_name: "The Sea Witch",
    },
    {
      first_name: "Tommy",
      last_name: "Oliver",
      contact_number: "07989444568",
      campaign_name: "The Sea Witch",
    },
    {
      first_name: "Jason",
      last_name: "Scott",
      contact_number: "07774854987",
      campaign_name: "The Sea Witch",
    },
    {
      first_name: "Zack",
      last_name: "Taylor",
      contact_number: "07845222547",
      campaign_name: "The Sea Witch",
    },
    {
      first_name: "Joyce",
      last_name: "Byers",
      contact_number: "07954668187",
      campaign_name: "Tomb of Horrors",
    },
    {
      first_name: "Dustin",
      last_name: "Henderson",
      contact_number: "07889554857",
      campaign_name: "Tomb of Horrors",
    },
    {
      first_name: "Jim",
      last_name: "Hopper",
      contact_number: "07954845148",
      campaign_name: "Tomb of Horrors",
    },
    {
      first_name: "Nancy",
      last_name: "Wheeler",
      contact_number: "07445845711",
      campaign_name: "Tomb of Horrors",
    },
  ];

  return (
    <>
      <Typography>List of all players</Typography>
      <Paper elevation={3} className="datatable_wrapper">
        <DataTable rows={rows} />
      </Paper>
    </>
  );
};

export default Home;
