/**
 * Step 1: Verify 'crypto-js' module is installed for your project
 * After verifying it is installed, move on to Step 2. No code needs to be written here.
 */

/**
 * Step 2: Import from crypto-js module the sha265 library
 */
var SHA256 = require("crypto-js/sha256");// for using SHA256("message") function
var CryptoJS = require("crypto-js");// If we use this then the hashing function we will be using is CryptoJS.SHA256("Message")

/**
 * Variables: Do not change variable values to be able to answer the quiz
 */

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

/**
 * Step 3: Add code to the `generate hash function
 * Function that generate the SHA256 Hash
 * @param {*} obj 
 */

function generateHash(obj) {
	 var b=JSON.stringify(obj);//used to convert object into string
	 var a=SHA256(b);//used to create hash 
	 return a;
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);

/**
 * whenever you load or require any dependencies we will write command npm-install in the cmd
 * Run your application using `node app.js`
 */
