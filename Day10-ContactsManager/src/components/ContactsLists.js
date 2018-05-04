import React, {Fragment, Component} from 'react';
import axios from 'axios';
import ContactsDetails from './ContactsDetails';
/* 
avatar_url
html_url
*/

/*
url
organizations_url
*/

  /*
    name
    company
    loction
    bio
    hireable
    public_repos
    followers
  */

const Loading = (props) => <h1>Loading...</h1>

const SelectPerson = (props) => {
  let {fetchPersonDetails, login} = props
  return (
    <li>
      <a onClick={() => fetchPersonDetails(login)}>{login}</a>
    </li>
  )
}

class ContactsLists extends Component {
  state = {
    contactLists: null,
    personDetails: {
      'githubUser': {},
      'githubUserOrg': {}
    } 
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.contactLists !== nextProps.data) {
      return { contactLists: nextProps.data }
    }
    return null
  }

  _fetchPersonDetails = (loginUser, event) => {
    //event.preventDefault()
    const fetchUser = (loginUser) => {
      const getGithubUser = loginUser => axios.get(`https://api.github.com/users/${loginUser}`)
      const getGithubUserOrg = loginUser => axios.get(`https://api.github.com/users/${loginUser}/orgs`)
    
      return axios.all([getGithubUser(loginUser), getGithubUserOrg(loginUser)])
      .then(arrOfResult => {
        let githubUser = arrOfResult[0].data    //obj
        let githubUserOrg = arrOfResult[1].data[0] //arr
        
        return { githubUser, githubUserOrg }
      })
    }

    let val = fetchUser(loginUser)
    val.then(value => {
      this.setState(
        () => ({
          personDetails: {
            githubUser: {...value.githubUser},
            githubUserOrg: {...value.githubUserOrg}
          }
        })
      )
    })
  }

  render() {
    const {login} = this.props.data
    const {githubUser, githubUserOrg} = this.state.personDetails

    const Layout = {
      display: 'flex'
    }

    return (
      <div style={Layout}>
        <SelectPerson
          fetchPersonDetails={this._fetchPersonDetails}
          login={login} />
        {
          githubUser ?
          <ContactsDetails 
            dataFromOrgMember={this.props.data}
            dataFromUserGh={githubUser}
            dataFromUserOrg={githubUserOrg}/>
          : <Loading />
        }
          
      </div>
    );
  }
}

export default ContactsLists;