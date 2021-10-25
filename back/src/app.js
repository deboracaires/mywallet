import express from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import cors from 'cors';

import { userSchema } from './schemas/userSchema.js';
import connection from './database.js'
import dayjs from 'dayjs';

const app = express();

app.use(cors());
app.use(express.json());


app.post("/sign-in", async (req,res) => {
    try {

        const { email, password } = req.body;

        const result = await connection.query(`SELECT * FROM users WHERE email = $1`, [email]);

        const user = result.rows[0];

        if(user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();
        
            await connection.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2)`, [user.id, token]);

            res.send(token).status(200);
        } else {
            res.send("Dados incorretos! Tente novamente").status(401);
        }

        res.send(result.rows);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/sign-up", async (req, res) => {
    try{

        const {
            name, 
            email,
            password
        } = req.body;

        const error = userSchema.validate(req.body).error;
        if(error){
           return res.sendStatus(400);
        }

        const passwordHash = bcrypt.hashSync(password, 10);

        const verifyEmail = await connection.query(`select * from users where email = $1`, [email]);

        if(verifyEmail.rows.length > 0){
            return res.sendStatus(409);
        }

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, passwordHash]);

        res.send("Usuário cadastrado com sucesso!").status(200);


    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get("/transactions", async(req, res) => {
    try{

        const authorization = req.header("Authorization");
        const token = authorization?.replace("Bearer ", "");

        const session = await connection.query(`SELECT * FROM sessions WHERE token = $1`, [token]);

        if(session.rowCount === 0){
            return res.send("Sessão inválida, efetue o login novamente").status(401);
        }
        
        const user = session.rows[0];

        const result = await connection.query(`SELECT * FROM transactions WHERE "userId" = $1`, [user.userId]);

        res.send(result.rows);

    }catch (error){
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/transactions", async(req, res) => {
    try{

        const authorization = req.header("Authorization");
        const token = authorization?.replace("Bearer ", "");

        const session = await connection.query(`SELECT * FROM sessions WHERE token = $1`, [token]);

        if(session.rowCount === 0){
            return res.send("Sessão inválida, efetue o login novamente").status(401);
        }
        
        const user = session.rows[0];

        const {
            value, 
            description,
            signal
        } = req.body;

        const date = dayjs().format('DD/MM/YYYY');

        await connection.query(`INSERT INTO transactions ("userId", value, date, description, signal) VALUES ($1, $2, $3, $4, $5)`, [user.userId, value, date, description, signal]);

        res.send("Transação cadastrada com sucesso!").status(201);

    }catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default app;