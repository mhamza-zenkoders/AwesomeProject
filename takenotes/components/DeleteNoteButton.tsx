import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types";
import { deleteNote } from "../services/NoteStorageService";

type Props = {
  noteId: string;
};

export const DeleteNoteButton: React.FC<Props> = ({ noteId }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleDeleteNode = async () => {
    await deleteNote(noteId);
    navigation.navigate('NotesHomeScreen');
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleDeleteNode}
    >
      <Text style={styles.buttonText}>Delete</Text>
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
