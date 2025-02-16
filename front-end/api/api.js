import "dotenv/config";
import axios from "axios";

const { NODE_ENV } = process.env;
const URL = NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
// import axios from "axios";

// const URL = "http://localhost:3000";

// let artistArray = [];
// let songsArray = [];

// const fetchData = async () => {
//   try {
//     const responseArtists = await axios.get(`${URL}/artists`);
//     artistArray = responseArtists.data;
//   } catch (error) {
//     console.error("Erro ao buscar artistas:", error);
//   }

//   try {
//     const responseSongs = await axios.get(`${URL}/songs`);
//     songsArray = responseSongs.data;
//   } catch (error) {
//     console.error("Erro ao buscar músicas:", error);
//   }
// };

// fetchData();

// export { artistArray, songsArray };

// Fetch (nativo) ou Axios (biblioteca) para fazer requisições HTTP


