// @flow
/* eslint-disable */

import React, {Fragment, Component} from 'react';
import ContactsDetails from './ContactsDetails';
import type {Props, PersonProps} from '../types/ContactsLists.type'


const Person = (props: PersonProps) => {
  const {fetchPersonDetails, index} = props;
  let isSelected = props.fetchedUserDetails.login === props.login ? {color: 'red'} : {color: 'black'};

  const PersonStyle = {
    listStyleType: 'none',
  };

  return (
    <li style={{...isSelected, ...PersonStyle}}>
      <a onClick={() => fetchPersonDetails(props.login)}>{index}. {props.login}</a>
    </li>
  );
};

class ContactsLists extends Component<Props> {

  render() {
    const {login} = this.props.orgMemberData;
    const {fetchPersonDetails, fetchedUserDetails, index} = this.props;

    const ContactsListsStyle = {
      Person: {
        margin: 10,
        cursor: 'pointer',
        fontWeight: 700,
      },
    };

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
