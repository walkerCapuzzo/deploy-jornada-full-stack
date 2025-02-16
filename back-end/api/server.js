import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url'; // Adicione esta linha

import { db } from "./connect.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url); // Adicione esta linha
const __dirname = path.dirname(__filename); // Adicione esta linha

app.use(cors());

app.get("/api/", (request, response) => {
    response.send("Só vamos trabalhr com os endpoints '/artis e /songs'");
})

app.get("/api/artists", async(request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
})

app.get("/api/songs", async(request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
})

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server está escutando a porta: ${PORT}`);
});
