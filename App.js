import { View, StyleSheet, Text, ScrollView, Image, Pressable, Alert, ActivityIndicator } from "react-native"
import { StatusBar } from "expo-status-bar"
import react from "react"




export default function App() {
  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Image source={require("./images/konexio-logo_1.png")} style={{ width: 300, height: 100, }} />

      <View style={styles.container2}>

        <Text style={styles.Text1}>Hello</Text>
        <Text style={styles.Text2}>world</Text>
        <Text style={styles.Text3}>bouya</Text>


      </View>

      {/* <Image source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }} style={{ width: 300, height: 100 }} /> */}
      <Image source={require("./images/konexio-logo_1.png")} style={{ width: 300, height: 100, }} />

      <Pressable onPress={() => {
        Alert.alert('bouyya', 'salut ça boum')
      }}>
        <Text>Hello</Text>
        <ActivityIndicator size="large" color="black" />
      </Pressable>

    </ScrollView>
  )
}





const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    backgroundColor: "white"
  },

  Text1: {
    marginTop: 80,
    marginBottom: 80
  },

  Text2: {
    textAlign: "center",
  },

  Text3: {
    fontWeight: "bold"
  }


})