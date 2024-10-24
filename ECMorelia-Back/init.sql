-- Create DB
CREATE DATABASE ecmorelia_db;

\c ecmorelia_db;

-- Tabla: doctor
CREATE TABLE doctor (
    id_doctor SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    licencia_medica VARCHAR(255),
    password VARCHAR(50)
);

-- Tabla: hospitales
CREATE TABLE hospitales (
    id_hospitales SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    direccion VARCHAR(255),
    password VARCHAR(50)
);

-- Tabla: operador
CREATE TABLE operador (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    licencia_medica VARCHAR(50),
    password VARCHAR(50)
);

-- Tabla: paramedicos
CREATE TABLE paramedicos (
    id_paramedicos SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    licencia_medica VARCHAR(255),
    certificado VARCHAR(255),
    licencia_conducir VARCHAR(255),
    password VARCHAR(50)
);

-- Tabla: ambulancias
CREATE TABLE ambulancias (
    numero_placa_sm SERIAL PRIMARY KEY,
    id_paramedicos INT,
    id_hospitales INT,
    FOREIGN KEY (id_paramedicos) REFERENCES paramedicos(id_paramedicos),
    FOREIGN KEY (id_hospitales) REFERENCES hospitales(id_hospitales)
);

-- Tabla: ambulancias_doctor
CREATE TABLE ambulancias_doctor (
    id_doctor SERIAL,
    numero_placa_sm INT,
    reporte_doctor VARCHAR(255),
    PRIMARY KEY (id_doctor, numero_placa_sm),
    FOREIGN KEY (id_doctor) REFERENCES doctor(id_doctor),
    FOREIGN KEY (numero_placa_sm) REFERENCES ambulancias(numero_placa_sm)
);

-- Tabla: ambulancias_hospitales
CREATE TABLE ambulancias_hospitales (
    id_hospitales SERIAL,
    numero_placa_sm INT,
    reporte_servicio VARCHAR(255),
    PRIMARY KEY (id_hospitales, numero_placa_sm),
    FOREIGN KEY (id_hospitales) REFERENCES hospitales(id_hospitales),
    FOREIGN KEY (numero_placa_sm) REFERENCES ambulancias(numero_placa_sm)
);

-- Tabla: ambulancias_paramedicos
CREATE TABLE ambulancias_paramedicos (
    id_ambulancias_paramedicos SERIAL PRIMARY KEY,
    id_paramedicos INT,
    numero_placa_sm INT,
    reporte_inicial VARCHAR(255),
    fecha TIMESTAMP,
    estado VARCHAR(50),
    FOREIGN KEY (id_paramedicos) REFERENCES paramedicos(id_paramedicos),
    FOREIGN KEY (numero_placa_sm) REFERENCES ambulancias(numero_placa_sm)
);
