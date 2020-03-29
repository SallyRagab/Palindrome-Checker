function palindrome(str) {
  
  let word = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().replace(/\s/g, '');

  let dic = [];
  
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    dic.push(letter);
    
  }
  
  let newWord = dic.join("");
  
  if (newWord === word){
  return true;
  } else{
    return false;
  }
}

console.log(palindrome("eye"));
console.log(palindrome("racecar"));
console.log(palindrome("RaceCar"));
console.log(palindrome("RaceCar"));
console.log(palindrome("race CAR"));
console.log(palindrome("hello"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("2A3 3a2"));
