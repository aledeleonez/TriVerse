import express from "express";
import { createRun, createUser, getUserById } from "./database.js";
import cors from "cors";

const corsOptions = {
  methods: ["POST", "GET"],
  credentials: true,
};
const app = express();
app.use(express.json());
app.use(cors());

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

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
