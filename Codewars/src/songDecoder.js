/* eslint-disable */
/*
https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
*/

const songDecoder = (randomWord) => {
  const word = randomWord.replace(/wub/gi, ' ');
  return word;
};

const res = songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');

export default songDecoder;
