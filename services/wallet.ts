let balance = 1000;

function checkBalance(amount: number): boolean {
    return balance >= amount;
}

function deposit(amount: number): void {
    balance += amount;
}

function withdraw(amount: number): boolean {
    if (checkBalance(amount)) {
        balance -= amount;
        return true;
    }
    return false;
}

function getBalance(): number {
    return balance;
}

function deductBalance(amount: number): void {
    balance -= amount;
}

function addWinnings(amount: number): void {
    balance += amount;
}

export { checkBalance, deposit, withdraw, getBalance, deductBalance, addWinnings };

