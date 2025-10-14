const countVowels = (text) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
};

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2
