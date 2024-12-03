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
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b1ddb8",
    paddingHorizontal: 30,
    paddingVertical:10,
    borderRadius: 10,
    marginBottom:20,
    justifyContent:'center'
  },

  buttonText:{
    color:'#000000',
    fontSize:18,
    fontWeight:'bold',
  },


});
