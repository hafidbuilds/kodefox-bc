//@flow

// import * as fs from 'fs';
import denodeify from 'denodeify'

type PromiseFunc = (input: mixed) => Promise<mixed>;
type CallbackFunc = (input: mixed, callback: (err: ?Error, res: mixed) => void) => void

type Denodeify = (callbackFunc: CallbackFunc) => PromiseFunc;

const denodeify: Denodeify = global.denodeify

function getFilmByID(id: string, cb: (err: ?Error, res: Array<string>) => void) {
  setTimeout(() => {
    cb(null, ['Pirates', 'Kungfu Panda', 'Avengers'])
  }, 2000);
}

const film = denodeify(getFilmByID)
const result = getFilmByID('90')
result.then(item => console.log(item))