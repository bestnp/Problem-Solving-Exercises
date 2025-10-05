function isPalindrome (word) {
 if (typeof word !== 'string') {
    throw new Error('พารามิเตอร์ต้องเป็น string เท่านั้น');
 }

 return word === word.split('').reverse().join('');
}

console.log(isPalindrome('level'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('racecar'));