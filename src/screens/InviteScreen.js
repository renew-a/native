import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import CustomCard from '../components/CustomCard'

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

const Item = ({ item, onPress, backgroundColor, textColor }) => {
  console.log('item',item)
  const accept = async () => {
    await axios.put('http://localhost:3000/v1/invite/replyInvite', {
      inviteId: item.id,
      fromId: item.from,
      answer: true,
    })
  }
  const reject = async () => {
    await axios.put('http://localhost:3000/v1/invite/replyInvite', {
      inviteId: item.id,
      fromId: item.from,
      answer: false,
    })
  }

  return (
    <CustomCard
      item={item}
      accept={accept}
      reject={reject}
    />
  )
}

const InviteScreen = ({ navigation, user }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      let invites = await axios.post(
        'http://localhost:3000/v1/invite/inviteSent',
        { id: user.id }
      )
      const data = invites.data.data.map((item) => {
        item.id = 'id' + item.id
        return item
      })

      setData(data)
    }
    getData()
  }, [navigation])

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#D8D7D6'
    const color = item.id === selectedId ? 'white' : 'black'

    return (
      <Item
        item={item}
        onPress={() => {}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    )
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
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
    fontSize: 10,
  },
})

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(InviteScreen)
