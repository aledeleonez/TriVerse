import express, { response } from "express";
import {
  createCycling,
  createRun,
  createSwim,
  createTriathlon,
  createUser,
  getRunById,
  getUserByEmail,
  getUserById,
  getUserCredentials,
} from "./database.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const {
    name,
    email,
    password,
    birthDate,
    height,
    weight,
    gender,
    location,
    favouriteSport,
  } = req.body;
  const user = await createUser(
    name,
    email,
    password,
    birthDate,
    height,
    weight,
    gender,
    location,
    favouriteSport
  );
  res.status(201).send(user);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    password,
    birthDate,
    height,
    weight,
    gender,
    location,
    favouriteSport,
  } = req.body;

  try {
    const result = await updateUser(
      id,
      name,
      email,
      password,
      birthDate,
      height,
      weight,
      gender,
      location,
      favouriteSport
    );

    if (result.affectedRows === 0) {
      res.status(404).send({ message: "User not found" });
    } else {
      res.status(200).send({ message: "User updated successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error updating user", error });
  }
});

app.post("/triathlons", async (req, res) => {
  const { userId } = req.body;
  const triathlon = await createTriathlon(userId);
  res.status(201).send(triathlon);
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

app.post("/cyclings", async (req, res) => {
  const { userId, triathlonId, time, distance, avgSpeed, map } = req.body;
  const cycling = await createCycling(
    userId,
    triathlonId,
    time,
    distance,
    avgSpeed,
    map
  );
  res.status(201).send(cycling);
});

app.post("/swims", async (req, res) => {
  const { userId, triathlonId, time, distance, avgPace } = req.body;
  const swim = await createSwim(userId, triathlonId, time, distance, avgPace);
  res.status(201).send(swim);
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

app.get("/runs/:id", async (req, res) => {
  const run = getRunById(req.params.id);
  if (run) res.status(200).send(run);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
