import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Intro: undefined;
  HomeScreen: undefined;
  Login: undefined;
  Signup: undefined;
  Stopwatch: undefined;
  Calculator: undefined;
  NotesHomeScreen: undefined;
  EditNote: { noteId: string | undefined };
  ToDoHomeScreen: undefined;
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;


export type EditScreenRouteProp = RouteProp<RootStackParamList, "EditNote">;
