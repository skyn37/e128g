import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import routes from '../routes/index';

const app = express();
app.use(bodyParser.json());
app.use(routes);

describe('Slot Game API', () => {
    it('should deposit money to the wallet', async () => {
        const response = await request(app)
            .post('/wallet/deposit')
            .send({ amount: 100 });
        expect(response.status).toBe(200);
        expect(response.body.balance).toBe(1100);
    });

    it('should withdraw money from the wallet', async () => {
        const response = await request(app)
            .post('/wallet/withdraw')
            .send({ amount: 50 });
        expect(response.status).toBe(200);
        expect(response.body.balance).toBe(1050);
    });

    it('should return wallet balance', async () => {
        const response = await request(app)
            .get('/wallet/balance');
        expect(response.status).toBe(200);
        expect(response.body.balance).toBe(1050);
    });

    it('should play a game', async () => {
        const response = await request(app)
            .post('/game/play')
            .send({ bet: 10 });
        expect(response.status).toBe(200);
        expect(response.body.winnings).toBeGreaterThanOrEqual(0);
    });

    it('should simulate multiple games', async () => {
        const response = await request(app)
            .post('/game/sim')
            .send({ count: 10, bet: 10 });
        expect(response.status).toBe(200);
        expect(response.body.totalWinnings).toBeGreaterThanOrEqual(0);
    });

    it('should return RTP', async () => {
        const response = await request(app)
            .get('/game/rtp');
        expect(response.status).toBe(200);
        expect(response.body.rtp).toBeGreaterThanOrEqual(0);
    });
});

