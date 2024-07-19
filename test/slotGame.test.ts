import { playGame, simulateGames, getRtp } from '../services/slotGame';

describe('Slot Game Service', () => {
    it('should generate a 3x3 slot matrix', () => {
        const result = playGame(10);
        expect(result.matrix.length).toBe(3);
        result.matrix.forEach(row => {
            expect(row.length).toBe(3);
        });
    });

    it('should calculate winnings correctly', () => {
        const result = playGame(10);
        const winnings = result.winnings;
        const bet = 10;
        // Ensure winnings are a multiple of 5 * bet (0, 1, 2, or 3 rows matching)
        expect(winnings % (5 * bet)).toBe(0);
    });

    it('should simulate multiple games correctly', () => {
        const { totalWinnings, netResult } = simulateGames(10, 10);
        expect(totalWinnings).toBeGreaterThanOrEqual(0);
        expect(netResult).toBeGreaterThanOrEqual(-100);
    });

    it('should return correct RTP', () => {
        playGame(10);
        const rtp = getRtp();
        expect(rtp).toBeGreaterThanOrEqual(0);
    });
});

