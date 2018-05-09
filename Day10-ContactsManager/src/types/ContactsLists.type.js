// @flow

export type Props = {
  index: number,
  key: number,
  orgMemberData: OrgData,
  fetchPersonDetails: FetchPersonFunc,
  fetchedUserDetails: UserData,
};

type FetchPersonFunc = (loginUser: string) => void;

type OrgData = {
  [string]: mixed,
};

type UserData = {
  [string]: mixed,
};

export type PersonProps = {
  index: number,
  fetchPersonDetails: FetchPersonFunc,
  login: string,
  fetchedUserDetails: UserData,
};
