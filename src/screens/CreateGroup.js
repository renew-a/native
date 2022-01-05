import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Background from '../components/Background'
import Logo from '../components/Logo'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import axios from "axios";
   
export default function CreateGroup({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [amount, setAmount] = useState({ value: 1, error: '' })
  const status= 'alive'

  const create = async () => {
    console.log('AAABBB', name, amount)
     navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    const users = await axios.post('http://localhost:3000/v1/group/create', {
      name: name.value,
      status: status,
      participants: amount.value,
      userId:1
    })
   
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <TextInput
        label="Group name"
        returnKeyType="next"
        value={name.value}
        error={!!name.error}
        errorText={name.error}
        onChangeText={(text) => setName({ value: text, error: '' })}
        autoCapitalize="none"
        autoCompleteType="name"
      />
      <TextInput
        label="Participants number"
        returnKeyType="done"
        value={amount.value}
        onChangeText={(text) => setAmount({ value: text, error: '' })}
        error={!!amount.error}
        errorText={amount.error}
      />
      <Button mode="contained" onPress={create}>
        Create Group
      </Button>
      
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
