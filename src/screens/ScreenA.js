import { View, Text, StyleSheet} from "react-native";
import { Button } from "../components/Button";


export const ScreenA = ({ navigation }) => {
   const onPressHandler = () => {
      navigation.replace("Screen_B");
   };

   return (
      <View style={styles.body}>
         <Text style={styles.text}>Screen A</Text>
         <Button title="Screen B" onPress={onPressHandler} />
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
