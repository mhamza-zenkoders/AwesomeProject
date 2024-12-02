import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types";
import { Text } from "@react-navigation/elements";

export const AddNoteButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate("EditNote", { noteId: undefined });
      }}
    >
      <Text style={styles.buttonText}>Add</Text>
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
