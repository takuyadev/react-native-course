import React from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

export const PrimaryButton = (props) => {
   return (
      <Pressable
         hitSlop={{ top: 100, bottom: 10, right: 100, left: 10 }}
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
      width: 150,
      height: 50,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
   },
});
