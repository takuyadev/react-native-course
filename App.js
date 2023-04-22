import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-web";

function App() {
   const [name, setName] = useState("Test");

   const handleOnClick = () => {
      setName("Style Test");
   };

   return (
      <View style={styles.body}>
         <View style={styles.view4}>
            <View style={styles.view1}>
               <Text>1</Text>
            </View>
            <View style={styles.view2}>
               <Text>2</Text>
            </View>
            <View style={styles.view3}>
               <Text>3</Text>
            </View>
         </View>
         <View style={styles.view5}>
            <Text>4</Text>
         </View>
         <View style={styles.view6}>
            <Text>5</Text>
         </View>

         <View style={styles.view7}>
            <View style={styles.view1}>
               <Text>6</Text>
            </View>
            <View style={styles.view8}>
               <Text>1</Text>
            </View>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      alignItems: "stretch",
      justifyContent: "center",
      backgroundColor: "#000000",
      borderColor: "white",
   },
   view4: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#FFFF00",
      alignItems: "stretch",
      justifyContent: "center",
   },
   view1: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
   },
   view2: {
      flex: 1,
      backgroundColor: "#00FFFF",
      alignItems: "center",
      justifyContent: "center",
   },
   view3: {
      flex: 3,
      backgroundColor: "#EEEEEE",
      alignItems: "center",
      justifyContent: "center",
   },
   view5: {
      flex: 4,
      backgroundColor: "#FF0000",
      alignItems: "center",
      justifyContent: "center",
   },
   view6: {
      flex: 4,
      backgroundColor: "#00FF00",
      alignItems: "center",
      justifyContent: "center",
   },
   text: {
      color: "#FFFFFF",
      textTransform: "uppercase",
   },
   view7: {
      flex: 8,
      flexDirection: "row",
      backgroundColor: "#FFFF00",
      alignItems: "stretch",
      justifyContent: "center",
   },
   view8: {
      flex: 1,
      backgroundColor: "#000000",
      alignItems: "center",
      justifyContent: "center",
   },
   button: {
      width: 200,
   },
});

export default App;
