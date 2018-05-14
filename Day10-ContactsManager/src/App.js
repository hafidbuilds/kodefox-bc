// @flow
/* eslint-disable */

import React, {Component} from 'react';
import FetchJson from './components/FetchJson';
import ContactsLists from './components/ContactsLists';
import ContactsDetails from './components/ContactsDetails';
// import axios from 'axios';

type GithubUser = {
  [string]: mixed,
};

type State = {
  githubUser: ?GithubUser,
  githubUserOrg: ?Array<GithubUser>,
};

type Props = {};

class App extends Component<State, Props> {
  state = {
    githubUser: null,
    githubUserOrg: null,
  };

  _fetchPersonDetails = (loginUser: string) => {
    //event.preventDefault()
    const fetchUser = (loginUser) => {
      const getGithubUser = `https://api.github.com/users/${loginUser}`;
      const getGithubUserOrg = `https://api.github.com/users/${loginUser}/orgs`;
      const urls = [getGithubUser, getGithubUserOrg];

      const arrOfPromises = urls.map((url) => {
        return fetch(url)
          .then((response) => response.json())
          .catch((error) => console.log(error));
      });

      return Promise.all(arrOfPromises).then((arrOfResult) => {
        let githubUser = arrOfResult[0]; //obj
        let githubUserOrg = arrOfResult[1]; //arr

        return {
          githubUser,
          githubUserOrg,
        };
      });
    };

    let val = fetchUser(loginUser);
    val.then((value) => {
      this.setState(({githubUser, githubUserOrg}) => ({
        githubUser: value.githubUser,
        githubUserOrg: value.githubUserOrg,
      }));
    });
  };

  componentDidMount() {
    this._fetchPersonDetails('hafidzpermana');
  }

  render() {
    const {githubUser} = this.state;
    const {githubUserOrg} = this.state;

    const Layout = {
      display: 'flex',
    };

    const ContactsListsStyle = {
      Container: {
        marginLeft: 50,
      },
    };

    return (
      <div style={Layout}>
        <FetchJson
          url={`https://api.github.com/orgs/kodefox/members`}
          render={({isLoading, data}) => {
            return (
              <div style={ContactsListsStyle.Container}>
                {isLoading
                  ? 'Loading...'
                  : data.map((orgMemberData, index) => (
                    <ContactsLists
                      index={index + 1}
                      key={index}
                      orgMemberData={orgMemberData}
                      fetchPersonDetails={this._fetchPersonDetails}
                      fetchedUserDetails={githubUser}
                    />
                  ))}
              </div>
            );
          }}
        />
        {githubUser ? (
          <ContactsDetails
            githubUser={githubUser}
            githubUserOrg={githubUserOrg}
          />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const Loading = () => <h1>Loading...</h1>;

export default App;

//?access_token=aec7fbdc7c6540fe9ef3b20d83ee3a273933e64b