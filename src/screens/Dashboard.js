import React, { useState } from 'react'
import Background from '../components/Background'
import RightButton from '../components/RightButton'
import { Provider } from 'react-native-paper'
import Logo from '../components/Logo'
import { connect } from 'react-redux'
import Header from '../components/Header'

import Groups from './Groups'
import Button from '../components/Button'
import CustomAlert from '../components/Alert'

const Dashboard = ({ navigation, user }) => {
  const [showAlert, setShowAlert] = useState(false)
  const logout = () => {
    console.log(55566677)
    setShowAlert(true)
  }

  const action = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    })
  }

  const closeAlert = () => {
    setShowAlert(false)
  }
  return (
    <Background>
      <RightButton goRight={logout} />
      <Logo />
      
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('CreateGroup')}
      >
        Create Group
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('InviteScreen')}
      >
        Invites
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('UsersScreen')}
      >
        Users
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('UsersScreen')}
      >
        Friends
      </Button>
      <Provider>
        <Groups navigation={navigation} />
        <CustomAlert show={showAlert} setShow={closeAlert} action={action} />
      </Provider>
    </Background>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Dashboard)
