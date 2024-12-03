import React, {useState} from 'react';
import {TaskListContainer} from './components/TaskListContainer';
import {InputSection} from './components/InputSection';
import {HeroSection} from './components/HeroSection';

import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';

interface Task {
  text: string;
  isCompleted: boolean;
}

export const ToDoHomeScreen: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const [tasks, setTasks] = useState<Task[]>([
    {text: 'Read 20 pages of a book', isCompleted: false},
    {text: 'Go for a 30-minute walk', isCompleted: false},
    {text: 'Prepare a healthy breakfast', isCompleted: false},
    {text: 'Respond to important emails', isCompleted: false},
    {text: 'Plan the schedule for tomorrow', isCompleted: false},
    {text: 'Complete 2 coding challenges', isCompleted: false},
    {text: 'Meditate for 15 minutes', isCompleted: false},
    {text: 'Organize workspace', isCompleted: false},
    {text: 'Research a topic of interest', isCompleted: false},
    {
      text: 'Call a family member or friend Call a family member or friend',
      isCompleted: true,
    },
  ]);

  const handleAdd = (): void => {
    if (task.trim() !== '') {
      if (currentTaskId !== null) {
        const newTasks = [...tasks];
        newTasks[currentTaskId] = {...newTasks[currentTaskId], text: task};
        setTasks(newTasks);
        setCurrentTaskId(null);
      } else {
        setTasks([...tasks, {text: task, isCompleted: false}]);
      }
      setTask('');
    }
  };

  const handleEdit = (index: number): void => {
    const taskToEdit = tasks[index];
    if (taskToEdit) {
      setTask(taskToEdit.text);
      setCurrentTaskId(index);
    }
  };

  const handleDelete = (index: number): void => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1), setTasks(newTasks);
  };

  const toggleCompleted = (index: number): void => {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      isCompleted: !newTasks[index].isCompleted,
    };
    setTasks(newTasks);
  };

  const taskCount = (): number => {
    return tasks.length;
  };
  const completeTaskCount = (): number => {
    const completedTasks = tasks.filter(task => task.isCompleted);
    return completedTasks.length;
  };

  return (
    <View style={styles.container}>
      <HeroSection />

      <InputSection
        task={task}
        setTask={setTask}
        handleAdd={handleAdd}
        currentTaskId={currentTaskId}
      />

      <View style={styles.countContainer}>
        <Text style={styles.taskCount}>Tasks: {taskCount()}</Text>
        <Text style={styles.taskCount}>
          Completed Tasks: {completeTaskCount()}
        </Text>
      </View>

      <TaskListContainer
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        toggleCompleted={toggleCompleted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },

  header: {
    alignItems: 'center',
    backgroundColor: 'white',
  },

  logo: {
    width: 250,
    resizeMode: 'contain',
  },

  countContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },

  taskCount: {
    fontSize: 16,
    color:'white'
  },
});
