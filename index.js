const uuidv4 = require('uuid/v4');

function generateKey(minLength, maxLength) {
    let raw = getRawBits(minLength, maxLength);
    console.log('raw bits', raw);
// define random (1-5) bit to be replaced by random special character
    let specialBitLength = getRandomNumber(1, 5);
    console.log('will replace', specialBitLength, 'special characters');
    return replaceRandomSpecialCharacters(raw, specialBitLength);
}

/**
 * sub string random (10-20) bit
 * @returns {string}
 */
function getRawBits(minLength, maxLength) {
    let guid = uuidv4();
    let shortGuid = guid.toString().replace(new RegExp(/-/, 'g'), '');
    console.log('from guid', shortGuid);
    let bitLength = getRandomNumber(minLength, maxLength);
    console.log(`bit length (${minLength}-${maxLength}):`, bitLength);
    let bitStart = getRandomNumber(0, shortGuid.length - bitLength);
    console.log('bit start:', bitStart);
    return shortGuid.substr(bitStart, bitLength);
}


function replaceRandomSpecialCharacters(str, specialBitLength) {
    while (specialBitLength > 0) {
        let index = getRandomNumber(0, str.length);
        let specialChar = getRandomSpecialCharacter();
        console.log('replace char at:', index, 'to char', specialChar);
        str = str.replaceAt(index, specialChar);
        specialBitLength = specialBitLength - 1;
    }
    return str;
}

function getRandomSpecialCharacter() {
    let specialCharacters = "!@#$%^&*()_+{}|~`';:-=[]/?"
    let index = getRandomNumber(0, specialCharacters.length);
    return specialCharacters.charAt(index);
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

let length = 12;

let keys = [];
while (length > 0) {
    console.log();
    console.log('new key: ');
    let key = generateKey(10, 20);
    console.log(key);
    keys.push(key);
    length = length - 1;
}

console.log(keys);