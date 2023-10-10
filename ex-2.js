function countVowels(words) {
  // Start coding here
  let count = 0;
  for(let i = 0 ; i < words.length; i++) {

    if(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(words[i])) {
     count += 1
    }
  }
return count;
}


console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("TechUp")); // Output: 2
