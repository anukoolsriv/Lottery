const path = require('path');	//	 path from compile.js to lottery.js
const fs = require('fs');		//	file system module
const solc = require('solc');	


const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol'); //__dirname constant set to cwd
const source = fs.readFileSync(lotteryPath,'utf8');	// contains .sol code

//module.exports = solc.compile(source,1).contracts[':Lottery'];	// no of contracts trying to compile
 console.log(solc.compile(source,1));