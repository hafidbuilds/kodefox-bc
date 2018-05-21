type Action =
  | {
      type: 'WAIT',
      ms: number,
    }
  | {
      type: 'FETCH',
      url: string,
    };

function* getUserRepos(userID) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  console.log(repos, 'ini repos');

  yield {type: 'WAIT', ms: 300};
  return repos.map((repo) => repo.name);
}

function run(genFunc, prevResult?) {
  let iterator = genFunc;

  let result = iterator.next();
  console.log(result);
  if (result.done === false) {
    if (result.value.type === 'WAIT') {
      setTimeout(() => {
        console.log('done waiting');
      }, result.value.ms);
      iterator.next();
    }
    if (result.value.type === 'FETCH') {
      let promise = fetch(result.value.url)
        .then((response) => response.json())
        .then((json) => json);
      promise.then((item) => {
        console.log(item, 'ini item');
        return item;
      });
    }
  }
}
let Step = getUserRepos('hafidzpermana');
run(Step);


let promise: Promise<mixed> = run(getUserRepos('hafidzpermana'));