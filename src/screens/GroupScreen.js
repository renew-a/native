import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Background from '../components/Background'
import Logo from '../components/Logo'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import axios from "axios";
   
export default function GroupScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
