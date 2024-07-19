const symbols = ['A', 'B', 'C', 'D', 'E'];
let totalBets = 0;
let totalWinnings = 0;

function getRandomSymbol(): string {
    const index = Math.floor(Math.random() * symbols.length);
    return symbols[index];
}

function generateSlotMatrix(): string[][] {
    const matrix: string[][] = [];
    for (let i = 0; i < 3; i++) {
        const row: string[] = [];
        for (let j = 0; j < 3; j++) {
            row.push(getRandomSymbol());
        }
        matrix.push(row);
    }
    return matrix;
}

function calculateWinnings(matrix: string[][], bet: number): number {
    let winnings = 0;
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
            winnings += 5 * bet;
        }
    }
    return winnings;
}

function playGame(bet: number): { matrix: string[][], winnings: number } {
    const slotMatrix = generateSlotMatrix();
    const winnings = calculateWinnings(slotMatrix, bet);
    totalBets += bet;
    totalWinnings += winnings;
    return { matrix: slotMatrix, winnings };
}

function simulateGames(count: number, bet: number): { totalWinnings: number, netResult: number } {
    let totalWinnings = 0;
    for (let i = 0; i < count; i++) {
        const result = playGame(bet);
        totalWinnings += result.winnings;
    }
    return {
        totalWinnings,
        netResult: totalWinnings - (bet * count)
    };
}

function getRtp(): number {
    return totalBets === 0 ? 0 : (totalWinnings / totalBets) * 100;
}

export { playGame, simulateGames, getRtp };

