// @flow

import React, {Component, Fragment} from 'react';
import FetchJson from './components/FetchJson';
import ContactsLists from './components/ContactsLists';
import ContactsDetails from './components/ContactsDetails';
import type {AppState} from './types/AppState'
// import axios from 'axios';

type Props = {
  [string]: mixed
};

class App extends Component<AppState, Props> {
  state = {
    personDetails: {
      githubUser: null,
      githubUserOrg: null,
    },
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
      this.setState(() => ({
        personDetails: {
          githubUser: value.githubUser,
          githubUserOrg: value.githubUserOrg,
        },
      }));
    });
  };

  componentDidMount() {
    this._fetchPersonDetails('hafidzpermana');
  }

  render() {
    const {githubUser, githubUserOrg} = this.state.personDetails;

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
          url={`https://api.github.com/orgs/kodefox/members?access_token=3f8db74cef7387cbaeb5edaeb2226826157b0909`}
          render={({isLoading, data}) => {
            return (
              <div style={ContactsListsStyle.Container}>
                {isLoading
                  ? 'Loading...'
                  : data.map((person, index) => (
                    <ContactsLists
                      index={index + 1}
                      key={index}
                      orgMemberData={person}
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
