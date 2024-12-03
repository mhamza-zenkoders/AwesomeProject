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
    backgroundColor: "#b1ddb8",
    paddingHorizontal: 30,
    paddingVertical:10,
    borderRadius: 10,
    marginTop:20,
    justifyContent:'center'
  },

  buttonText:{
    color:'#000000',
    fontSize:18,
    fontWeight:'bold',
  },
});
