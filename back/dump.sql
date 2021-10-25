CREATE DATABASE mywallet;

CREATE TABLE users (id SERIAL, name TEXT, email TEXT, 'password' TEXT);

CREATE TABLE sessions (id SERIAL, userId INTEGER, token TEXT);

CREATE TABLE transactions (id SERIAL, userId INTEGER, value NUMERIC, date DATE, description TEXT, signal TEXT);

