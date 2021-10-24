import express from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import cors from 'cors';

import { userSchema } from './schemas/userSchema.js';
import connection from './database.js';

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

        res.send("Usuário cadastrado com sucesso!").status(201);


    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default app;