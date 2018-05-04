import React from 'react';

const ContactsDetails = (props) => {
  const {dataFromOrgMember, dataFromUserGh, dataFromUserOrg} = props
  const {avatar_url, html_url, login} = dataFromOrgMember
  const {name, company, location, bio, hirable, public_repos, followers} = dataFromUserGh
  const {} = dataFromUserOrg
  
  return (
    <div>
      <li></li>
    </div>
  )
}
  
export default ContactsDetails;