const path = require('path');	//	 path from compile.js to lottery.js
const fs = require('fs');		//	file system module
const solc = require('solc');	


const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol'); //__dirname constant set to cwd
const source = fs.readFileSync(lotteryPath,'utf8');	// contains .sol code
// "source" variable is fetching the solidity code successfully as defined in the path location

module.exports = solc.compile(source,1).contracts[':Lottery'];	// no of contracts trying to compile


// Unable to understand why "solc.compile()" is returning "undefined" in the above code.
// I have another project with similar code to test using mocha. That project is running successfully during testing
//Im confused why this one isnt.
