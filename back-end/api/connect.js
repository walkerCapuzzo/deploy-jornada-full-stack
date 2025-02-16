import { MongoClient } from "mongodb";

const URI = "mongodb+srv://walkercapuzzo:bztOYSjR5eaGuYW4@walkercapuzzo.b6w5xcg.mongodb.net/?retryWrites=true&w=majority&appName=walkerCapuzzo"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();


// console.log(songCollection);


// import { MongoClient } from "mongodb";

// const URI = "mongodb+srv://walkercapuzzo:bztOYSjR5eaGuYW4@walkercapuzzo.b6w5xcg.mongodb.net/?retryWrites=true&w=majority&appName=walkerCapuzzo";

// const client = new MongoClient(URI);

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     const db = client.db("spotifyAula");
//     const songCollection = db.collection("songs").find({}).toArray();
//     console.log("Conectado ao banco de dados:", songCollection);
//   } catch (error) {
//     console.error("Erro ao conectar ao banco de dados:", error);
//   } finally {
//     await client.close();
//   }
// }

// connectToDatabase();