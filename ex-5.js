function getLetterFrequency(words) {
  // Start coding here
  let count = {}
  for(let i = 0; i < words.length; i++) {
    let letter = words[i]
    if(count[letter] > 0) {
    count[letter]++;
    } else {
    count[letter] = 1;
    }
  }
  return count
}

const str = "techupth";

let a = getLetterFrequency(str);
console.log(a)
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
