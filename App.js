import React, { useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { StyleSheet } from "react-native";

function App() {
   const [refreshing, setRefreshing] = useState(false);
   const [items, setItems] = useState([
      { key: 1, item: "Item 1" },
      { key: 2, item: "Item 2" },
      { key: 3, item: "Item 3" },
      { key: 4, item: "Item 4" },
      { key: 5, item: "Item 5" },
      { key: 6, item: "Item 6" },
      { key: 7, item: "Item 7" },
      { key: 8, item: "Item 8" },
   ]);

   const onRefresh = () => {
      setRefreshing(true);
      setItems([...items, { key: 69, item: "item" }]);
      setRefreshing(false);
   };

   return (
      <View style={styles.body}>
         <View styles={styles.safeView} />

         <ScrollView
            styles={styles.list}
            refreshControl={
               <RefreshControl onRefresh={onRefresh} refreshing={refreshing} colors={["#ff00ff"]} />
            }
         >
            {items.map((item) => {
               return (
                  <View key={item.key} style={styles.item}>
                     <Text style={styles.text}>{item.item}</Text>
                  </View>
               );
            })}
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   safeView: {
      marginVertical: "10",
   },
   body: {
      flex: 1,
      margin: 20,
   },
   text: {
      fontSize: 50,
      textAlign: "center",
   },
   item: {
      fontSize: 20,
      padding: 10,
      backgroundColor: "#00FF00",
      marginVertical: 10,
      color: "#000000",
      borderRadius: 10,
   },
   list: {
      gap: 8,
   },
});

export default App;
