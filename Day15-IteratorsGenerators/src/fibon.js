function* fib() {
  let current = 1;
  let prevNum = 1;
  let nextNum = 1;
  yield 1;
  while (true) {
    current = nextNum;
    nextNum = prevNum + nextNum;
    prevNum = current;
    yield current;
  }
}

let generator = fib();

let button = document.createElement('button');
button.appendChild(document.createTextNode('Start Fibbonaci'));
button.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    let value = generator.next();
    console.log('Value', value);
  }
});

document.body.appendChild(button);