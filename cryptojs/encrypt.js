var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('sample message', 'secret key').toString(); //nilagay ko yung toString() para mabasa ng console.log
console.log(ciphertext.key);
console.log(ciphertext.iv);
console.log(ciphertext);


// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'

//merong progressive way of ciphering sa documentation ng crypto-js pero di ko alam ano use nun vs etong ginawa ko
//di ko rin alam use ng pagrandomize ng key at iv since wala ako knowledge abt cryptography and wala ako gets sa nabasa ko

