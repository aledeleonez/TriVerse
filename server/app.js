import express, { response } from "express";
import {
  createRun,
  createUser,
  getUserByEmail,
  getUserById,
  getUserCredentials,
} from "./database.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await createUser(name, email, password);
  res.status(201).send(user);
});

app.post("/runs", async (req, res) => {
  const { userId, triathlonId, time, distance, avgPace, map } = req.body;
  const run = await createRun(
    userId,
    triathlonId,
    time,
    distance,
    avgPace,
    map
  );
  res.status(201).send(run);
});

app.get("/users/:id", async (req, res) => {
  const user = await getUserById(req.params.id);
  res.status(200).send(user);
});

app.get("/users/:email", async (req, res) => {
  const user = await getUserByEmail(req.params.email);
  if (user) res.status(200);
});

app.get("/users", async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  const user = await getUserCredentials(email, password);
  if (user) {
    res.status(200).json({ message: `Email: ${email}, Password: ${password}` });
  } else {
    res
      .status(400)
      .json({ error: "El usuario o la contraseña son incorrectos" });
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
