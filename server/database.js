import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//Crear usuario
export async function createUser(
  name,
  email,
  password,
  birthDate,
  height,
  weight,
  gender,
  location,
  favouriteSport
) {
  const [result] = await pool.query(
    `INSERT INTO Users (name, email, password, birthDate, height, weight, gender, location, favouriteSport) values (?,?,?,?,?,?,?,?,?)`,
    [
      name,
      email,
      password,
      birthDate,
      height,
      weight,
      gender,
      location,
      favouriteSport,
    ]
  );
  return result[0];
}

//Actualizar usuario
export async function updateUser(
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
) {
  const [result] = await pool.query(
    `UPDATE Users 
     SET name = ?, email = ?, password = ?, birthDate = ?, height = ?, weight = ?, gender = ?, location = ?, favouriteSport = ?
     WHERE id = ?`,
    [
      name,
      email,
      password,
      birthDate,
      height,
      weight,
      gender,
      location,
      favouriteSport,
      id,
    ]
  );
  return result;
}

//Crear Triatlon
export async function createTriathlon(userId) {
  const [result] = await pool.query(
    `INSERT INTO Triathlons (userId) values (?)`,
    [userId]
  );
  return result[0];
}

//Crear carrera
export async function createRun(
  userId,
  triathlonId,
  time,
  distance,
  avgPace,
  map
) {
  const [result] = await pool.query(
    `INSERT INTO Runs (userId, triathlonId, time, distance, avgPace, map) values (?,?,?,?,?,?)`,
    [userId, triathlonId, time, distance, avgPace, map]
  );
}

//Crear natacion
export async function createSwim(userId, triathlonId, time, distance, avgPace) {
  const [result] = await pool.query(
    `INSERT INTO Swims (userId, triathlonId, time, distance, avgPace) values (?,?,?,?,?)`,
    [userId, triathlonId, time, distance, avgPace]
  );
}

//Crear ciclismo
export async function createCycling(
  userId,
  triathlonId,
  time,
  distance,
  avgSpeed,
  map
) {
  const [result] = await pool.query(
    `INSERT INTO Cyclings (userId, triathlonId, time, distance, avgSpeed, map) values (?,?,?,?,?,?)`,
    [userId, triathlonId, time, distance, avgSpeed, map]
  );
}

//Obtener usuario por id
export async function getUserById(id) {
  const [row] = await pool.query(`SELECT * FROM Users WHERE id = ?`, [id]);
  return row[0];
}

//Obtener usuario por email
export async function getUserByEmail(email) {
  const [row] = await pool.query(`SELECT * FROM Users WHERE email = ?`, [
    email,
  ]);
  return row[0];
}

//Obtener usuario por email y contraseña
export async function getUserCredentials(email, password) {
  const [row] = await pool.query(
    `SELECT * FROM Users WHERE email = ? AND password = ? `,
    [email, password]
  );
  return row[0];
}

//Obtener carrera por id
export async function getRunById(id) {
  const [row] = await pool.query(`SELECT * FROM Runs WHERE id = ?`, [id]);
  return row[0];
}
