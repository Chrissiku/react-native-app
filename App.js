import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-web";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState(["hello", "there"]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function AddGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
          />
          <Button title="Add goal" onPress={AddGoalHandler} />
        </View>
        <View style={styles.goalContainer}>
          <ScrollView style={styles.scroll}>
            {courseGoals.map((goal, index) => (
              <View style={styles.goalText} key={index}>
                <Text style={styles.goalTextItem}>
                  Goal {index + 1}
                  {": "}
                  {goal}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#1e2b48",
    height: "100vh",
  },

  appContainer: {
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
    padding: 20,
    gap: 20,
  },

  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8,
    fontSize: 18,
    color: "white",
    placeholderTextColor: "#cccccc",
  },

  goalContainer: {
    width: "100%",
    flex: 8,
    alignItems: "flex-start",
  },

  scroll: {
    width: "100%",
    padding: 15,
  },

  goalText: {
    backgroundColor: "#ffcb00",
    padding: 10,
    marginBottom: 10,
  },

  goalTextItem: {
    color: "#1e2b48",
    fontSize: 20,
    fontWeight: "bold",
  },
});
