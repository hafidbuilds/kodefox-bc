/* eslint-disable */
// @flow

/*
Given a string made of digits [0-9], 
return a string where each digit is repeated a number of times 
equals to its value.
digitsExplode('312') => '333122'
*/

function digitsExplode(stringOfInteger: string): string {
  let str = "";
  let arr = stringOfInteger.split('');
  for(let char of arr){
    str += char.repeat(Number(char));
  }
  return str;
}

export default digitsExplode



