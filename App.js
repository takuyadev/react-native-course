import React, { useState } from "react";
import { View, Text, SectionList, ScrollView, RefreshControl, FlatList } from "react-native";
import { StyleSheet } from "react-native";

function App() {
   const [refreshing, setRefreshing] = useState(false);
   const [count, setCount] = useState(2);
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

   return (
      <SectionList
         sections={list}
         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
         keyExtractor={(_item, index) => index.toString()}
         renderItem={({ item }) => {
            return <Text style={styles.text}>{item}</Text>;
         }}
         renderSectionHeader={({ section }) => {
            return (
               <View style={styles.item}>
                  <Text style={styles.text}>{section.title}</Text>
               </View>
            );
         }}
      />

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
