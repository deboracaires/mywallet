import express from 'express';

import { userSchema } from './schemas/userSchema.js';
import connection from './database.js';

const app = express();
app.use(express.json());


app.get("/users", async (req,res) => {
    try {
        const result = await connection.query(`SELECT * FROM users`);
        res.send(result.rows);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post("/users", async (req, res) => {
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

        const verifyEmail = await connection.query(`select * from users where email = $1`, [email]);

        if(verifyEmail.rows.length > 0){
            return res.sendStatus(409);
        }

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);

        res.send("Usuário cadastrado com sucesso!").status(201);


    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default app;