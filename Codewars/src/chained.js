// https://www.codewars.com/kata/54ca3e777120b56cb6000710/train/javascript
// chained([a,b,c,d])(input)
// should same result d(c(b(a(input))))

function f1(x) {
  return x * 2;
}
function f2(x) {
  return x + 2;
}
function f3(x) {
  return Math.pow(x, 2);
}

function f4(x) {
  return x
    .split('')
    .concat()
    .reverse()
    .join('')
    .split(' ');
}
function f5(xs) {
  return xs.concat().reverse();
}
function f6(xs) {
  return xs.join('_');
}

function chained(arrOfFunc) {
  return function(input) {
    for (let func of arrOfFunc) {
      input = func(input);
    }
    return input;
  };
}

const a = chained([f1, f2, f3])(2);
a;
