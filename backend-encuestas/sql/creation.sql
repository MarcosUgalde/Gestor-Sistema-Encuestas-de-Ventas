DROP TABLE IF EXISTS encuestas;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    edit_access BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS encuestas (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_dni TEXT NOT NULL UNIQUE,
    product TEXT NOT NULL,
    subproduct_gas TEXT DEFAULT NULL,
    subproduct_light TEXT DEFAULT NULL,
    maintenance_gas TEXT DEFAULT NULL,
    maintenance_light TEXT DEFAULT NULL,
    estado TEXT NOT NULL
)