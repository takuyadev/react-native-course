import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { PrimaryButton } from "./CustomButton";

const Stack = createStackNavigator();

const ScreenA = ({ navigation }) => {
   const onPressHandler = () => {
      navigation.replace("Screen_B");
   };

   return (
      <View style={styles.body}>
         <Text style={styles.text}>Screen A</Text>
         <PrimaryButton title="Screen B" onPress={onPressHandler} />
      </View>
   );
};

const ScreenB = ({ navigation }) => {
   const onPressHandler = () => {
      navigation.replace("Screen_A");
   };
   return (
      <View style={styles.body}>
         <Text style={styles.text}>Screen B</Text>
         <PrimaryButton onPress={onPressHandler} title="Go back to Screen A" />
      </View>
   );
};

function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               header: () => null,
            }}
         >
            <Stack.Screen
               name="Screen_A"
               component={ScreenA}
               options={{ header: () => null }}
            ></Stack.Screen>
            <Stack.Screen name="Screen_B" component={ScreenB}></Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      fontSize: 50,
      fontWeight: 900,
   },
});

export default App;
