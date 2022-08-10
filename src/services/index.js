import axios from "axios";

export const getAllPlayers = async () => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `http://localhost:3001/players`,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPlayerDetail = async (id) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `http://localhost:3001/players/${id}`,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addNewPlayer = async (playerData) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `http://localhost:3001/players`,
      data: playerData,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updatePlayer = async (playerData, id) => {
  try {
    const { data } = await axios({
      method: "PuT",
      url: `http://localhost:3001/players/${id}`,
      data: playerData,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deletePlayer = async (id) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `http://localhost:3001/players/${id}`,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const filterPlayer = async (campaign_name) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `http://localhost:3001/players?campaign_name=${campaign_name}`,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
