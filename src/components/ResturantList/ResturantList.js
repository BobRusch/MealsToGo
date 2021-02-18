import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ResturantList = () => {
  return (
    <>
      <View style={styles.searchContainer}>
        <Text>Reaturant List</Text>
      </View>
      <View style={styles.listContainer}>
        <Text>lixt</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: { padding: 10, backgroundColor: "green" },
  listContainer: { flex: 1, padding: 16, backgroundColor: "blue" },
});
