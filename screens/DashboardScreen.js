import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const DashboardScreen = () => {
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      enableOnAndroid={true}
      extraScrollHeight={100}
    >
      <Text style={styles.title}>Welcome, Admir</Text>
      <Text style={styles.subtitle}>Number of active tasks is: 3</Text>

      {/* First Container */}
      <View style={styles.taskContainer}>
        <Button title="Delete All Tasks" onPress={() => {}} color="#dc3545" />
        <Text style={styles.sectionTitle}>All Tasks to do</Text>
        {/* Render tasks here */}
      </View>

      {/* Second Container */}
      <View style={styles.taskContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue=""
          onValueChange={() => {}}
        >
          <Picker.Item label="Predefined Task 1" value="task1" />
          <Picker.Item label="Predefined Task 2" value="task2" />
          {/* Add more predefined tasks here */}
        </Picker>
      </View>

      {/* Third Container */}
      <View style={styles.taskContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          // Handle input change
        />
        <View style={styles.buttonRow}>
          <Button title="Add Task" onPress={() => {}} color="#28a745" />
          <Button
            title="Add and Save Task"
            onPress={() => {}}
            color="#007bff"
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#adb5bd",
    marginBottom: 20,
    textAlign: "center",
  },
  taskContainer: {
    backgroundColor: "#343a40",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    borderColor: "#ffffff",
    borderWidth: 5,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  dropdown: {
    backgroundColor: "#ffffff",
    color: "#000",
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DashboardScreen;
