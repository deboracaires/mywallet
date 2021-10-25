import supertest from 'supertest';
import app from '../src/app.js';
import connection from '../src/database.js';


describe('POST /sign-up', () => {

    afterAll(async () => {
        await connection.query(`DELETE FROM users`);
        connection.end();
      });
    
    it('returns status 200', async ()=> {
        
        const body = {
            name: 'teste',
            email: 'teste@teste.com',
            password: 'teste'
        }

        const result = await supertest(app).post('/sign-up').send(body);
        expect(result.status).toEqual(200);
    })

    it('returns status 409', async ()=> {
        
        const body = {
            name: 'teste',
            email: 'teste@teste.com',
            password: 'teste'
        }

        const result = await supertest(app).post('/sign-up').send(body);
        expect(result.status).toEqual(409);
    })

    it('returns status 400', async ()=> {
        
        const body = {
            name: 27,
            email: 'teste@teste.com',
            password: 'teste'
        }

        const result = await supertest(app).post('/sign-up').send(body);
        expect(result.status).toEqual(400);
    })



})