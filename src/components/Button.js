import React from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

export const Button = (props) => {
   return (
      <Pressable
         android_ripple={{ color: "#00f" }}
         onPress={props.onPress}
         style={styles.button}
      >
         <Text>{props.title}</Text>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   button: {
      backgroundColor: "#CCCCCC",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
   },
});
