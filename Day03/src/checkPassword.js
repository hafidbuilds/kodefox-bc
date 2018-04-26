/* eslint-disable */
// @flow

const createContainsCharacter = (password: string) => {
  let isUpperCaseExist = false
  let isLowerCaseExist = false
  const passwordLetters = password.split('')

  return {
    isContainsUpperCase: (password): boolean => {
      passwordLetters.forEach(passwordCharacter => {
        let upperCaseLetters = passwordCharacter.toUpperCase()
        if (passwordCharacter === upperCaseLetters) {
          isUpperCaseExist = true
        }
      })
      return isUpperCaseExist
    },

    isContainsLowerCase: (password): boolean => {
      passwordLetters.forEach(passwordCharacter => {
        let lowerCaseLetters = passwordCharacter.toLowerCase()
        if (passwordCharacter === lowerCaseLetters) {
          isLowerCaseExist = true
        }
      })
      return isLowerCaseExist
    }
  }
}

const checkPassword = (password: string): {} => {
  const check = createContainsCharacter(password)
  if (password.length < 6) {
    return {
      success: false, 
      messege: 'Your password is less than 6 character'
    }
  } 
  if (!check.isContainsUpperCase() || !check.isContainsLowerCase()) {
    return {
      success: false, 
      messege: 'Your password must contain at least 1 char UPPERCASE & LOWERCASE'
    }
  }
  return {succes: true, reason: 'Welcome'}
}

export default checkPassword

// ALTERNATIF
/* 
const isContainsUpperCase = (password) => {
  const passwordLetters = password.split('')
  let isUpperCaseExist = false

  passwordLetters.forEach(passwordCharacter => {
    let upperCaseLetter = passwordCharacter.toUpperCase()
    if (passwordCharacter === upperCaseLetter) {
      isUpperCaseExist = true
    } 
  })
  return isUpperCaseExist
}

const isContainsLowerCase = (password) => {
  const passwordLetters = password.split('')
  let isLowerCaseExist = false

  passwordLetters.forEach(passwordCharacter => {
    let lowerCaseLetter = passwordCharacter.toLowerCase()
    if (passwordCharacter === lowerCaseLetter) {
      isLowerCaseExist = true
    } 
  })
  return isLowerCaseExist
}
*/
