import { checkBalance, deposit, withdraw, getBalance } from '../services/wallet';

describe('Wallet Service', () => {
    it('should deposit money correctly', () => {
        deposit(100);
        expect(getBalance()).toBe(1100);
    });

    it('should withdraw money correctly', () => {
        const result = withdraw(50);
        expect(result).toBe(true);
        expect(getBalance()).toBe(1050);
    });

    it('should not allow withdrawal if balance is insufficient', () => {
        const result = withdraw(2000);
        expect(result).toBe(false);
        expect(getBalance()).toBe(1050);
    });

    it('should check balance correctly', () => {
        expect(checkBalance(1000)).toBe(true);
        expect(checkBalance(2000)).toBe(false);
    });
});

