import React, { useState } from 'react'
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native'

import { getStatusBarHeight } from 'react-native-status-bar-height'
import CustomAlert from './Alert'

export default function RightButton({ goRight }) {
  const [show, setShow] = useState(false)
  const action = () => {
    console.log('77777888999')
    setShow(true)
    goRight()
  }

  return (
    <div>
      <TouchableOpacity onPress={action} style={styles.container}>
        <Image style={styles.image} source={require('../assets/right.jpeg')} />
      </TouchableOpacity>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})
