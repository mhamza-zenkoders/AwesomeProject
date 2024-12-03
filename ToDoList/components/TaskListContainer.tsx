import React from "react";

import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import {TaskList} from "./TaskList";

interface Task {
  text: string;
  isCompleted: boolean;
}

interface TaskListContainerProps {
  tasks: Task[];
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  toggleCompleted: (index: number) => void;
}

export const TaskListContainer: React.FC<TaskListContainerProps> = ({tasks,handleEdit,handleDelete,toggleCompleted})=>{
    return(
        <View style={{ flex: 1 }}>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
                <TaskList item={item} index={index} handleEdit={handleEdit} handleDelete={handleDelete} toggleCompleted={toggleCompleted} />
            );
          }}
        />
      </View>
    );
}
