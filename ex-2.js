function countVowels(words) {
  // Start coding here
  let count=0;
  for( let w of words){
    if(w=="a"||w=="e"||w=="i"||w=="o"||w=="u"||w=="A"||w=="E"||w=="I"||w=="O"||w=="U"){
      count++;
    }else{

    }
  }
  console.log(count++);
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2
