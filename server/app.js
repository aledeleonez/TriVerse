import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/usersRoutes.js";
import runRoutes from "./routes/runRoutes.js";
import cyclingRoutes from "./routes/cyclingsRoutes.js";
import swimsRoutes from "./routes/swimsRoutes.js";
import triathlonsRoutes from "./routes/triathlonRoutes.js";
import sequelize from "./config/database.js";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.use("/api", runRoutes);
app.use("/api", cyclingRoutes);
app.use("/api", swimsRoutes);
app.use("/api", triathlonsRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
