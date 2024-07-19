import express from 'express';
import gameRoutes from './game';
import walletRoutes from './wallet';

const router = express.Router();

router.use('/game', gameRoutes);
router.use('/wallet', walletRoutes);

export default router;

