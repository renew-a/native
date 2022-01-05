import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Searchbar, IconButton, Colors } from 'react-native-paper'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import axios from 'axios'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

const sendInviteFrienly = async (item, currentUser) => {
  console.log('ITEM', item, currentUser)
  let invite = await axios.post(
    'http://localhost:3000/v1/users/sendInviteFrienly',
    {
      from: currentUser.id,
      to: item.id,
      issue: 'Invite Friend',
      description: 'do you want to be my friend?',
      status: 'alive',
    }
  )
  console.log(invite)
}

const Item = ({ item, onPress, backgroundColor, textColor, user }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>
      {item.name}
      {!item.hasInvite ? (
        <IconButton
          icon="camera"
          color={Colors.red500}
          size={20}
          style={[styles.right]}
          onPress={() => sendInviteFrienly(item, user)}
        />
      ) : (
        <></>
      )}
    </Text>
  </TouchableOpacity>
)

const UsersScreen = ({ navigation, user }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = (query) => {
    setUsers([])
    setSearchQuery(query)
  }

  useEffect(() => {
    const getData = async () => {
      let invites = await axios.post(
        'http://localhost:3000/v1/invite/inviteSent',
        { id: user.id }
      )

      console.log('searchQuery', searchQuery)
      let users = await axios.get('http://localhost:3000/v1/users/search', {
        params: { data: searchQuery },
      })

      const data = users.data.data.map((item) => {
        item.id = 'id' + item.id
        if(invites.data.data)
          item.hasInvite = invites.data.data.some((inv) => inv.to === item.id)
        return item
      })
      setUsers(data)
    }
    if (searchQuery !== '') {
      getData()
    }
  }, [searchQuery])

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#D8D7D6'
    const color = item.id === selectedId ? 'white' : 'black'

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        user={user}
      />
    )
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Text>{'Users'}</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    width: '300px',
  },
  title: {
    fontSize: 32,
  },
  right: {
    float: 'right',
  },
})

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(UsersScreen)
