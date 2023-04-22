import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { StyleSheet } from "react-native";

function App() {
   const [name, setName] = useState("Test");

   const handleOnClick = () => {
      setName("Style Test");
   };

   return (
      <View style={styles.body}>
         <Text style={styles.text}>{name}</Text>
         <View style={styles.button}>
            <Button style={styles.button} title="Update state" onPress={handleOnClick} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#000000",
      alignItems: "center",
      borderWidth: 10,
      borderColor: "white",
   },
   text: {
      color: "#FFFFFF",
      textTransform: "uppercase",
   },
   button: {
      width: 200,
   },
});

export default App;
