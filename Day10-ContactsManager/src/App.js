

import React, {Component, Fragment} from 'react';
import FetchJson from './components/FetchJson';
import ContactsLists from './components/ContactsLists'

class App extends Component {
  
  render() {
    return (
      <Fragment>
        <FetchJson
          url={`https://api.github.com/orgs/kodefox/members?access_token=bc1882d9ed133a69aff21b0cf20e3adb4ba40579`}
          render={ ({ isLoading, data }) => {
            return <div>
                    {isLoading ? 'Loading...' 
                    : data.map((person, index) => <ContactsLists key={index} data={person}/>)}
                    </div>
          }}
        />
      </Fragment>
    );
  }
}

export default App;