// 1.Declare a variable named challenge and assign it to an initial value 'learn Javascript'.
var challenge = 'learn Javascript';

// 2.Print the string on the browser console using console.log()
var y="kathir";
console.log(y)
// 3.Print the length of the string on the browser console using console.log()
var c = 'learn Javascript';
console.log(c.length);

// c4.Change all the string characters to capital letters using toUpperCase() method
var challenge = 'learn Javascript';
var uppercaseChallenge = challenge.toUpperCase();
console.log(uppercaseChallenge);

5.
var challenge = 'Learn Javascript';
var lowercaseChallenge = challenge.toLowerCase();
console.log(lowercaseChallenge);

6.
var challenge = 'Learn Javascript';
var firstWord = challenge.substring(0, challenge.indexOf(' '));
console.log(firstWord);

7.
var challenge = 'learn Javascript';
var slicedPhrase = challenge.substring(challenge.indexOf('learn'), challenge.length);
console.log(slicedPhrase);

8.
var challenge = 'learn Javascript';

if (challenge.includes('Script')) {
  console.log('The string contains the word "Script".');
} else {
  console.log('The string does not contain the word "Script".');
}
9.
var challenge = 'learn Javascript';
var arrayChallenge = challenge.split(' ');
console.log(arrayChallenge);

10.
var challenge = 'learn Javascript';
var arrayChallenge = challenge.split(' ');
console.log(arrayChallenge);

11.
var companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companiesArray = companiesString.split(', ');
console.log(companiesArray);

12.
var challenge = 'learn Javascript';
var modifiedChallenge = challenge.replace('learn Javascript', '30 Days Of Python');
console.log(modifiedChallenge);

13.
var challenge = 'learn Javascript';
var characterAtIndex15 = challenge.charAt(15);
console.log(characterAtIndex15);

14.
var challenge = 'learn Javascript';
var charCodeOfJ = challenge.charCodeAt(challenge.indexOf('J'));
console.log(charCodeOfJ);

15.
var challenge = 'learn Javascript';
var positionOfA = challenge.indexOf('a');
console.log(positionOfA);

16.
var challenge = 'learn Javascript';
var lastPositionOfA = challenge.lastIndexOf('a');
console.log(lastPositionOfA);

17.
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.indexOf('because');
console.log(positionOfBecause);

18.
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var lastPositionOfBecause = sentence.lastIndexOf('because');
console.log(lastPositionOfBecause);

19.
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.search('because');
console.log(positionOfBecause);

20.
var stringWithWhitespace = ' learn Javascript ';
var trimmedString = stringWithWhitespace.trim();
console.log(trimmedString);

21.
var myString = "learn Javascript";
var isTrue = myString.startsWith("learn");

console.log(isTrue); // This will output true

22.
var myString = "learn Javascript";
var isTrue = myString.endsWith("Javascript");

console.log(isTrue); // This will output true

23.
var myString = "learn Javascript";
var matches = myString.match(/a/g);

console.log(matches); // This will output an array with all the 'a' occurrences

24.
var firstString = '30 Days of ';
var secondString = 'JavaScript';

var concatenatedString = firstString.concat(secondString);

console.log(concatenatedString); // This will output '30 Days of JavaScript'


var firstString = '30 Days of ';
var secondString = 'JavaScript';

var concatenatedString = firstString + secondString;

console.log(concatenatedString); // This will also output '30 Days of JavaScript'

25.
var originalString = "learn Javascript";
var repeatedString = originalString.repeat(2);

console.log(repeatedString);

// learn Javascriptlearn Javascript // this is a out put
