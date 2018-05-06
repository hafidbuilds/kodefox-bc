// @flow

import React, {Fragment, Component} from 'react';
import ContactsDetails from './ContactsDetails';

type ContactsListsState = {
  contactLists: mixed
}

type Props = {
  [string]: mixed
}

const Person = (props) => {
  const {fetchPersonDetails, index} = props
  let isSelected = props.fetchedUserDetails.login === props.login ? {color: 'red'} : {color: 'black'}

  const PersonStyle = {
    listStyleType: 'none'
  }

  return (
    <li style={{...isSelected,...PersonStyle}}>
      <a onClick={() => fetchPersonDetails(props.login)}>{index}. {props.login}</a>
    </li>
  )
}

class ContactsLists extends Component<ContactsListsState, Props> {
  state = {
    contactLists: null,
  }
  
  static getDerivedStateFromProps(nextProps: Props, prevState: ContactsListsState) {
    if (prevState.contactLists !== nextProps.orgMemberData) {
      return { contactLists: nextProps.data }
    }
    return null
  }

  render() {
    const {login} = this.props.orgMemberData   
    const {fetchPersonDetails, fetchedUserDetails, index} = this.props

    const ContactsListsStyle = {
      Person: {
        margin: 10,
        cursor: 'pointer',
        fontWeight: 700,
      }
    }

    return (
      <div style={ContactsListsStyle.Person}>
        <Person
          index={index}
          fetchPersonDetails={fetchPersonDetails}
          login={login}
          fetchedUserDetails={fetchedUserDetails}/>
      </div>
    );
  }
}

export default ContactsLists;