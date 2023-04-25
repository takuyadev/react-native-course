import React from 'react'
import { Text } from 'react-native'

const Header = (props) => {
  return (
   <Text>
      {props.children}
   </Text>
  )
}

export default Header