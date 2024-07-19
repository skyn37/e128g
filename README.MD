
Its a a standart typescript project so i will assume that the person looking at this knows how to set it up

There maybe bugs ... 
 

 Soma test cmds to get you going: 
 

1. Deposit Money to Wallet
```bash
curl -X POST http://localhost:3000/wallet/deposit -H "Content-Type: application/json" -d '{"amount": 100}'
```

2. Withdraw Money from Wallet
```bash
curl -X POST http://localhost:3000/wallet/withdraw -H "Content-Type: application/json" -d '{"amount": 50}'
```

3. Get Wallet Balance
```bash
curl -X GET http://localhost:3000/wallet/balance
```
4. Play a Game
```bash
curl -X POST http://localhost:3000/game/play -H "Content-Type: application/json" -d '{"bet": 10}'
```
5. Simulate Multiple Games
```bash
curl -X POST http://localhost:3000/game/sim -H "Content-Type: application/json" -d '{"count": 10, "bet": 10}'
```
6. Get RTP (Return to Player)
```bash
curl -X GET http://localhost:3000/game/rtp
```