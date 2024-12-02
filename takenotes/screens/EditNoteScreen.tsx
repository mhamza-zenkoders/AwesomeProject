import React, { useLayoutEffect } from "react";
import { NoteTakingInput } from "../components/NoteTakingInput";
import { ScreenNavigationProp } from "../../types";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EditScreenRouteProp } from "../../types";
import { DeleteNoteButton } from "../components/DeleteNoteButton";

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit Note" : "New Note",
      headerTitleStyle: styles.headerTitle,
      headerRight: () =>
        noteId ? <DeleteNoteButton noteId={noteId} /> : <></>,
    });
  }, [navigation]);

  return <NoteTakingInput noteId={noteId} />;
};

const styles = StyleSheet.create({
  headerTitle: {
    color: "white",
    fontSize: 25,
  },
});
