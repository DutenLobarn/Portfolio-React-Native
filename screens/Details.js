import React from 'react'
import { View, Button, Text } from 'react-native'

export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate('Home')}>Details View</Text>


    </View>
  )
}