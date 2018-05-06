import React from 'react';

const ContactsDetails = (props) => {
  let orgAvatar = []
  let orgName = []
  for (let org of props.githubUserOrg) {
    orgAvatar.push(org.avatar_url)
    orgName.push(org.login)
  }

  const {name, company, location, bio, hireable, public_repos, followers, avatar_url: userAvatar} = props.githubUser

  const ContactsDetailsStyle = {
    main: {
      padding: 0, 
      margin: 'auto',
    },
    userAvatar: {
      listStyleType: 'none',
      width: 300,
      borderRadius: 150,
      display: 'block',
      margin: 'auto'
    },
    orgAvatar: {
      width: 75,
      borderRadius: 150,
    },
    org: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    li: {
      marginTop: 5,
      marginBottom: 5
    }
  }

  return (
    <ul style={ContactsDetailsStyle.main}>
      <img style={ContactsDetailsStyle.userAvatar} src={userAvatar} alt=""/>
      <div style={{marginTop: 20}}>
        <li style={ContactsDetailsStyle.li}><b>Name :</b> {name}</li>
        <li style={ContactsDetailsStyle.li}><b>Repositries :</b> {public_repos}</li>
        <li style={ContactsDetailsStyle.li}><b>Bio :</b> {bio}</li>
        <li style={ContactsDetailsStyle.li}><b>Location :</b> {location}</li>
        <li style={ContactsDetailsStyle.li}><b>Company :</b> {company}</li>
        <li style={ContactsDetailsStyle.li}><b>Followers :</b> {followers}</li>
        <li style={ContactsDetailsStyle.li}><b>Hireable :</b> {hireable ? 'Yes' : 'No'}</li>
        <li style={ContactsDetailsStyle.li}><b>Organizations :</b> </li>
        <li style={ContactsDetailsStyle.org}>{orgAvatar.map((avatar, index) => <span key={index}><img style={ContactsDetailsStyle.orgAvatar} src={avatar} alt=""/></span>)}</li>
        <li style={ContactsDetailsStyle.org}>{orgName.map((orgname, index) => <span key={index}>{orgname}  </span>)}</li>
      </div>
    </ul>
  )
}
  
export default ContactsDetails;