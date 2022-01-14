
import React from 'react'
import { View, Text } from 'react-native'

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate('Details')}>Home View</Text>

    </View>
  )
}

export default Home