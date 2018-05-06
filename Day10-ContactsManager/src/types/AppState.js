// @flow

type PersonDetails = {
  githubUser: mixed,
  githubUserOrg: mixed,
};

export type AppState = {
  [string]: PersonDetails,
};