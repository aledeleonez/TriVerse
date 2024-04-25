CREATE DATABASE triverse_db;

USE triverse_db;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255)
);

CREATE TABLE Triathlons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Runs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    triathlonId INT,
    time TIME,
    distance FLOAT,
    avgPace TIME,
    map VARCHAR(255),
    FOREIGN KEY (triathlonId) REFERENCES Triathlons(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Swims (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    triathlonId INT,
    time TIME,
    distance FLOAT,
    avgPace TIME,
    FOREIGN KEY (triathlonId) REFERENCES Triathlons(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Cyclings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    triathlonId INT,
    time TIME,
    distance FLOAT,
    avgSpeed FLOAT,
    map VARCHAR(255),
    FOREIGN KEY (triathlonId) REFERENCES Triathlons(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);
