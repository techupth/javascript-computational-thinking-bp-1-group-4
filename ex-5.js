function getLetterFrequency(words) {
  // Start coding here
  let charCount={}
  for (var i = 0; i < words.length; i++) {
    var char = words[i].toLowerCase();
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

const str = "Techupth";

console.log(getLetterFrequency(str));


/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
