import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper'

const CustomAlert = ({ show, setShow, action }) => {
  const dissmiss = () => {
    setShow(false)
  }
  return (
    <Portal>
      <Dialog visible={show}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>This is simple dialog</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={dissmiss}>Cancel</Button>
          <Button onPress={action}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

const styles = StyleSheet.create({
  elevatedElement: {
    zIndex: 3000000, // works on ios
    elevation: 3000000, // works on android
  },
})

export default CustomAlert
