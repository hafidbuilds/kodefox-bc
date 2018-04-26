/* eslint-disable */

import checkPassword from '../checkPassword.js'

it('should return FALSE for password LESS THAN 6 characters', () => {
  expect(checkPassword('abc')).toEqual({
    success: false, 
    messege: 'Your password is less than 6 character'
  })
})

it('should return FALSE for password LESS THAN 6 characters', () => {
  expect(checkPassword('AaC')).toEqual({
    success: false, 
    messege: 'Your password is less than 6 character'
  })
})

it('should return FALSE for password that doesnt contain UPPERCASE characters', () => {
  expect(checkPassword('abcdef')).toEqual({
    success: false, 
    messege: 'Your password must contain at least 1 char UPPERCASE & LOWERCASE'
  })
})

it('should return FALSE for password that doesnt contain LOWERCASE characters', () => {
  expect(checkPassword('ABCDEF')).toEqual({
    success: false, 
    messege: 'Your password must contain at least 1 char UPPERCASE & LOWERCASE'
  })
})

it('should return FALSE for password that doesnt contain LOWERCASE characters', () => {
  expect(checkPassword('abcDEF')).toEqual({
    succes: true, 
    reason: 'Welcome'
  })
})