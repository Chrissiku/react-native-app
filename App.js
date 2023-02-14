import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function AddGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.appContainer}>
        <GoalInput onAddGoal={AddGoalHandler} />
        <View style={styles.goalContainer}>
          <FlatList
            style={styles.scroll}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  index={itemData.index}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
          {/* <ScrollView style={styles.scroll}>
            {courseGoals.map((goal, index) => (
              <View style={styles.goalText} key={index}>
                <Text style={styles.goalTextItem}>
                  Goal {index + 1}
                  {": "}
                  {goal}
                </Text>
              </View>
            ))}
          </ScrollView> */}
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

  goalContainer: {
    width: "100%",
    flex: 8,
    alignItems: "flex-start",
  },

  scroll: {
    width: "100%",
    padding: 15,
  },
});
