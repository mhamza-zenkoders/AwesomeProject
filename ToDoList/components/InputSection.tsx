import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";


interface Task {
  text: string;
  isCompleted: boolean;
}

interface InputProps {
  task: string;
  setTask: ( task: string) => void;
  handleAdd: () => void;
  currentTaskId: number| null;
}

export const InputSection: React.FC<InputProps> =({task,setTask,handleAdd, currentTaskId})=>{
    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>{currentTaskId ? 'Save' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
    );
}



const styles = StyleSheet.create({
inputContainer: {
    flexDirection: "row",
  },


  input: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#B1DDB8",
    fontSize: 15,
    color:'white'
  },


  addButton: {
    justifyContent: "center",
    width: 60,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: "#B1DDB8",
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    borderColor: "#B1DDB8",
  },


  addButtonText: {
    color: "black",
    fontSize: 15,
  },
})