import * as React from 'react';
import { Avatar, Button,Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CustomCard = ({ item, accept, reject }) => {

 return  <Card>
    <Card.Title title={item.issue} subtitle={item.description} left={LeftContent} />
    {!item.answer &&
      <Card.Actions>
        <TouchableOpacity onPress={reject} style={styles.container}>
          <>Reject</>
        </TouchableOpacity>

        <TouchableOpacity onPress={accept} style={styles.container}>
          <>Accept</>
        </TouchableOpacity>
      </Card.Actions>
    }
  </Card>
}
const styles = StyleSheet.create({
  container: {
    
  },
  image: {
   
  },
})


export default CustomCard