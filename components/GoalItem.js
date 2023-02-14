import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalText}>
      <Pressable
        android_ripple={{ color: "#ff0000" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalTextItem}>
          Goal {props.index + 1}
          {": "}
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    backgroundColor: "#ffcb00",
    padding: 10,
    marginBottom: 10,
  },
  pressedItem: {
    color: "#ff0000",
  },
  goalTextItem: {
    color: "#1e2b48",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GoalItem;
