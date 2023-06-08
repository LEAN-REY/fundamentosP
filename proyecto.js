function palindrome(str) {
 
    str = str.toLowerCase().replace(/[\W_]/g, '');
    return str === str.split('').reverse().join('');
  }
  
  console.log(palindrome("race car")); //true
  console.log(palindrome("not a palindrome")); //false