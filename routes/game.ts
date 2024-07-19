import express from 'express';
import { playGame, simulateGames, getRtp } from '../services/slotGame';
import { checkBalance, deductBalance, addWinnings } from '../services/wallet';

const router = express.Router();

router.post('/play', (req, res) => {
    const { bet } = req.body;
    if (!bet || bet <= 0 || !checkBalance(bet)) {
        return res.status(400).json({ error: 'Invalid bet amount or insufficient balance' });
    }

    deductBalance(bet);
    const result = playGame(bet);
    addWinnings(result.winnings);
    res.json(result);
});

router.post('/sim', (req, res) => {
    const { count, bet } = req.body;
    if (!count || count <= 0 || !bet || bet <= 0 || !checkBalance(bet * count)) {
        return res.status(400).json({ error: 'Invalid count or bet amount, or insufficient balance' });
    }

    deductBalance(bet * count);
    const result = simulateGames(count, bet);
    addWinnings(result.totalWinnings);
    res.json(result);
});

router.get('/rtp', (req, res) => {
    const rtp = getRtp();
    res.json({ rtp });
});

export default router;

