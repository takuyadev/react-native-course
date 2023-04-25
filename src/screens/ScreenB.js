import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";

export const ScreenB = ({ navigation }) => {
   const onPressHandler = () => {
      navigation.replace("Screen_A");
   };
   return (
      <View style={styles.body}>
         <Text style={styles.text}>Screen B</Text>
         <Button onPress={onPressHandler} title="Go back to Screen A" />
      </View>
   );
};

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
