import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
)

const Groups = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null)
  const [data, setData] = useState([])
  useEffect(() => {
    
    const getData = async () => {

      let groups = await axios.get('http://localhost:3000/v1/group/', {})
      if (groups.data.data) {
        const data = groups.data.data.map((item) => {
          item.id = 'id' + item.id
          return item
        })
        setData(data)
      }
    }
    getData()
  }, [navigation])

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#D8D7D6'
    const color = item.id === selectedId ? 'white' : 'black'

    const goToGroup = () => {
      setSelectedId(item.id)
      navigation.navigate('GroupScreen')
    }

    return (
      <Item
        item={item}
        onPress={goToGroup}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
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
})

export default Groups
