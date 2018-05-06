// @flow

type GithubUser = {
  [string]: mixed
}

type PersonDetails = {
  githubUser: GithubUser,
  githubUserOrg: Array<Object>,
};

export type AppState = {
  PersonDetails: PersonDetails,
};