import EventEmitter from '../eventEmitter.js';
// Simon's Approach
// @flow

it('should add and execute listeners', () => {
  let emitter = new EventEmitter();
  let count = 0;

  emitter.addListener('user_login', () => {
    count += 1;
  });

  emitter.addListener('user_login', () => {
    count += 1;
  });

  emitter.emit('user_login');
  expect(count).toEqual(2);

  emitter.emit('user_login');
  expect(count).toEqual(4);
});

it('should do nothing for non-existant events', () => {
  let emitter = new EventEmitter();
  let count = 0;

  emitter.addListener('user_login', () => {
    count += 1;
  });

  emitter.emit('asd');
  expect(count).toEqual(0);
});

xit('should remove listener using return value', () => {
  let emitter = new EventEmitter();
  let count = 0;

  let subscription = emitter.addListener('user_login', () => {
    count += 1;
  });

  subscription.remove();

  emitter.emit('asd');
  expect(count).toEqual(0);
});

it('should remove listener by ID', () => {
  let emitter = new EventEmitter();
  let count = 0;

  let id = emitter.addListener('user_login', () => {
    count += 1;
  });

  // emitter.emit('user_login');
  // expect(count).toEqual(1);

  emitter.removeListenerByID(id);

  emitter.emit('user_login');
  expect(count).toEqual(0);
});