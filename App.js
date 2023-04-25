import React from "react";
import { ScreenA } from "./src/screens/ScreenA";
import { ScreenB } from "./src/screens/ScreenB";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

function App() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, size, color }) => {
                  let iconName;
                  size = focused ? 25 : 20;

                  if (route.name === "Screen_A") {
                     iconName = "closecircle";
                  }

                  if (route.name === "Screen_B") {
                     iconName = "exclamationcircle";
                  }

                  return <AntDesign name={iconName} color="black" size={size} />;
               },
            })}
         >
            <Tab.Screen
               options={{ tabBarBadge: 3 }}
               name="Screen_A"
               component={ScreenA}
            ></Tab.Screen>
            <Tab.Screen
               name="Screen_B"
               options={{ tabBarBadge: 3 }}
               component={ScreenB}
            ></Tab.Screen>
         </Tab.Navigator>
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
