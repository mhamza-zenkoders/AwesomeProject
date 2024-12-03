import React, { useEffect, useLayoutEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { getNote, saveNote } from "../services/NoteStorageService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types";
import { SaveNoteButton } from "./SaveNoteButton";

type Props = {
  noteId: string | undefined;
};

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [text, setText] = useState<string>("");

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <SaveNoteButton id={noteId ?? ""} text={text} />,
  //   });
  // }, [navigation, text, noteId]);

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);

  return (
    <>
      <TextInput
        multiline
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <SaveNoteButton id={noteId ?? ""} text={text} />
    </>
  );
};

const styles = StyleSheet.create({

  input: {
    backgroundColor: "#141414",
    width: "100%",
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 40,
    textAlignVertical: "top",
    fontSize: 18,
    color: "white",
  },
});
