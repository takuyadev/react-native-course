import React, { useState } from "react";
import {
   View,
   Text,
   ToastAndroid,
   TouchableHighlight,
   Pressable,
   Button,
   TextInput,
   Modal,
} from "react-native";
import { StyleSheet } from "react-native";

function App() {
   const [refreshing, setRefreshing] = useState(false);
   const [name, setName] = useState("");
   const [count, setCount] = useState(2);
   const [submitted, setSubmitted] = useState(false);
   const [showWarning, setShowWarning] = useState(true);
   const [list, setList] = useState([
      {
         title: "Title 1",
         data: ["Item 1-1", "Item 1-2", "Item 1-3"],
      },
   ]);
   const [items, setItems] = useState([
      { key: 1, name: "Item 1" },
      { key: 2, name: "Item 2" },
      { key: 3, name: "Item 3" },
      { key: 4, name: "Item 4" },
      { key: 5, name: "Item 5" },
      { key: 6, name: "Item 6" },
      { key: 7, name: "Item 7" },
      { key: 8, name: "Item 8" },
   ]);

   const onRefresh = () => {
      setRefreshing(true);

      setList((prev) => [
         ...prev,
         {
            title: `Title ${count}`,
            data: [`Item ${count}-1`, `Item ${count}-2`, `Item ${count}-3`],
         },
      ]);

      setCount((prev) => ++prev);
      setRefreshing(false);
   };

   const onPressHandler = () => {
      if (name.length > 3) {
         setSubmitted(!submitted);
      } else {
         // Alert.alert(
         //    "WOOWOWOWWOO",
         //    "maybe read the fucking room once in a while huh buddy dick head sugma?",
         //    [
         //       { text: "uh huh", onPress: () => console.warn('OK pressed!')},
         //       { text: "NUH", onPress: () => console.warn('we are going to the based land')},
         //  ]
         // );
         ToastAndroid.showWithGravity(
            "The name must be longer than 3 characters",
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            100,
            200
         );
      }
   };

   return (
      <View style={styles.body}>
         <Modal
            onRequestClose={() => {
               setShowWarning(false);
            }}
            transparent
            visible={showWarning}
         >
            <View style={styles.warning_modal}>
               <Text>HELLo</Text>
            </View>
         </Modal>
         <Text style={styles.text}>Please write your name: {name}</Text>
         <TextInput
            secureTextEntry
            placeholder={"HEYYY"}
            onChangeText={(value) => {
               setName(value);
            }}
            style={styles.textInput}
         />
         <TouchableHighlight
            style={styles.button}
            underlayColor={"#FF0000"}
            onPress={onPressHandler}
         >
            <Text>{submitted ? "Clear" : "Submit"}</Text>
         </TouchableHighlight>
         <Button
            activeOpacity={0.9}
            title="Submit"
            onPress={onPressHandler}
            color={"#00f"}
         ></Button>
         <Pressable
            hitSlop={{ top: 100, bottom: 10, right: 100, left: 10 }}
            android_ripple={{ color: "#00f" }}
            onPress={onPressHandler}
            style={styles.button}
         >
            <Text>asdas</Text>
         </Pressable>
         {submitted && <Text>You are registered as {name}</Text>}
      </View>
      // <SectionList
      //    sections={list}
      //    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      //    keyExtractor={(_item, index) => index.toString()}
      //    renderItem={({ item }) => {
      //       return <Text style={styles.text}>{item}</Text>;
      //    }}
      //    renderSectionHeader={({ section }) => {
      //       return (
      //          <View style={styles.item}>
      //             <Text style={styles.text}>{section.title}</Text>
      //          </View>
      //       );
      //    }}
      // />

      // <FlatList
      //    data={items}
      //    keyExtractor={(item) => item.key}
      //    refreshControl={
      //       <RefreshControl onRefresh={onRefresh} refreshing={refreshing} colors={["#ff00ff"]} />
      //    }
      //    renderItem={({ item }) => (
      //       <View style={styles.item}>
      //          <Text style={styles.text}>{item.name}</Text>
      //       </View>
      //    )}
      // ></FlatList>

      // <View style={styles.body}>
      //    <View styles={styles.safeView} />

      //    <ScrollView
      //       styles={styles.list}
      //       refreshControl={
      //          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} colors={["#ff00ff"]} />
      //       }
      //    >
      //       {items.map((item) => {
      //          return (
      //             <View key={item.key} style={styles.item}>
      //                <Text style={styles.text}>{item.item}</Text>
      //             </View>
      //          );
      //       })}
      //    </ScrollView>
      // </View>
   );
}

const styles = StyleSheet.create({
   body: {
      flex: 1,
      margin: 20,
      alignItems: "center",
   },
   text: {
      marginBottom: 100,
   },
   textInput: {
      width: 200,
      borderWidth: 1,
      borderColor: "red",
      padding: 10,
      textAlign: "center",
   },
   button: {
      width: 150,
      height: 50,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",
   },
   warning_modal: {
      width: 300,
      height: 300,
      backgroundColor: "#FFFF00",
   },
});

export default App;
