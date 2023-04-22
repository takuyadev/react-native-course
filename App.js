import React, { useState } from "react";
import { View, Button, Text, InputAccessoryView } from "react-native";
import { StyleSheet } from "react-native";
import { Linking } from "react-native";
import { TextInput } from "react-native-web";

function App() {
   const [name, setName] = useState("Mash");
   const [session, setSession] = useState({ number: 6, title: "state" });
   const [current, setCurrent] = useState(true);
   const [count, setCount] = useState(0);

   const handleOnClick = () => {
      setName("New State");
      setSession({ number: 7, title: "Style" });
      setCurrent(false);
   };

   return (
      <View style={styles.body}>
         {/* <Text style={styles.text}>{count * 5}</Text>
         <Button
            title="Add"
            onPress={() => {
               setCount((prev) => prev + 1);
            }}
         ></Button>
         <Text style={styles.text}>You clicked {count}times.</Text> */}


         <Text style={styles.text}>My name is {name}</Text>
         <Text style={styles.text}>
            This is session number {session.number} and about {session.title}
         </Text>
         <Text style={styles.text}>{current ? "current session" : "next session"}</Text>
         <Button title="Update state" onPress={handleOnClick} />
      </View>
   );
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#000000",
      alignItems: "center",
   },
   text: {
      color: "#FFFFFF",
   },
});

export default App;
