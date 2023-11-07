const Blockchain = require('./Blockchain');
const Block = require('./Block');

const bullShitCoin = new Blockchain();

bullShitCoin.addBlock(new Block(1, '10/01/2023', { amount: 4 }));
bullShitCoin.addBlock(new Block(2, '12/01/2023', { amount: 10 }));
bullShitCoin.addBlock(new Block(3, '16/01/2023', { amount: 1088 }));
bullShitCoin.addBlock(new Block(4, '19/01/2023', { amount: 983 }));

console.log(JSON.stringify(bullShitCoin, null, 4));

console.log('BlockChain valide ? ' + bullShitCoin.isChainValid());
console.log("Update du amount dans la data pour modifier la valeur du block dans la BC")

bullShitCoin.chain[1].data = { amount: 1000 };
bullShitCoin.chain[1].hash = bullShitCoin.chain[1].calculateHash();


console.log(JSON.stringify(bullShitCoin, null, 4));
console.log('BlockChain valide ? ' + bullShitCoin.isChainValid());


console.log("recalcul des hash après changement de l'amount")

for (let i = 1; i < bullShitCoin.chain.length; i++) {
    const currentBlock = bullShitCoin.chain[i];
    currentBlock.hash = currentBlock.calculateHash();
    if(i+1 < bullShitCoin.chain.length) {
        bullShitCoin.chain[i+1].previousHash = currentBlock.hash;
    }
}

console.log(JSON.stringify(bullShitCoin, null, 4));

console.log('Est-ce que la blockchain est valide ? ' + bullShitCoin.isChainValid());