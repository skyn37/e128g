import express from 'express';
import { deposit, withdraw, getBalance } from '../services/wallet';

const router = express.Router();

router.post('/deposit', (req, res) => {
    const { amount } = req.body;
    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Invalid deposit amount' });
    }

    deposit(amount);
    res.json({ balance: getBalance() });
});

router.post('/withdraw', (req, res) => {
    const { amount } = req.body;
    if (!amount || amount <= 0 || !withdraw(amount)) {
        return res.status(400).json({ error: 'Invalid withdraw amount or insufficient balance' });
    }

    res.json({ balance: getBalance() });
});

router.get('/balance', (req, res) => {
    res.json({ balance: getBalance() });
});

export default router;

