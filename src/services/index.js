import axios from "axios";

export const getAllPlayers = async () => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/all`,
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
      url: `${process.env.REACT_APP_BASE_URL}/all/${id}`,
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
      url: `${process.env.REACT_APP_BASE_URL}/add`,
      body: playerData,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updatePlayer = async (playerData, id) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/update/${id}`,
      body: playerData,
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
      url: `${process.env.REACT_APP_BASE_URL}/${id}`,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
