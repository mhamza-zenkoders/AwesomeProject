import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types";;
import { Note, saveNote } from "../services/NoteStorageService";
import { Text } from "@react-navigation/elements";

export const SaveNoteButton: React.FC<Note> = ({ text, id }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleNoteSaveAndGoBack = async () => {
    await saveNote(text, id);
    navigation.navigate('NotesHomeScreen');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleNoteSaveAndGoBack}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingRight: 20,
  },

  buttonText:{
    color:'#B1DDB8',
  },

});
