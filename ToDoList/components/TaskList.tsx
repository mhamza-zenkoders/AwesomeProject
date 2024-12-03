import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

interface Task {
  text: string;
  isCompleted: boolean;
}

interface TaskListContainerProps {
  item: Task;
  index: number;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  toggleCompleted: (index: number) => void;
}

export const TaskList: React.FC<TaskListContainerProps> = ({
  item,
  index,
  handleEdit,
  handleDelete,
  toggleCompleted,
}) => {
  return (
    <View
      style={[
        styles.taskContainer,
        item.isCompleted ? styles.completedTask : null,
      ]}>
      {/* <CheckBox
        style={styles.checkbox}
        value={item.isCompleted}
        onValueChange={() => toggleCompleted(index)}
        boxType="square"
        tintColors={{ true: '#6E52B2', false: '#C4C4C4' }}
      /> */}
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleEdit(index)} style={styles.icon}>
        <Image
          style={styles.icon}
          source={require('../../images/edit.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(index)} style={styles.icon}>
        <Image
          style={styles.icon}
          source={require('../../images/delete.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#222222',
    marginVertical: 5,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkbox: {
    marginRight: 10,
  },

  taskText: {
    fontSize: 17,
    flex: 1,
    color: 'white',
  },

  // icon: {
  //   marginLeft: 10,
  // },

  completedTask: {
    opacity: 0.5,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});
