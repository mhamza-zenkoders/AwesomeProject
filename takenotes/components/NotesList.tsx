import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { ScreenNavigationProp } from "../../types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllNotes, getNote, Note } from "../services/NoteStorageService";

export const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigation = useNavigation<ScreenNavigationProp>();
  
  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <FlatList
      keyExtractor={(note) => note.id}
      data={notes}
      style={{ width: "100%" }}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("EditNote", { noteId: item.id })}
          style={styles.notesContainer}
        >
          <Text style={styles.notesText}>
            {item.text.length == 0 ? "(Blank Note)" : item.text}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  notesContainer: {
    backgroundColor: "#222222",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 15,
    width: "100%",
    borderRadius: 15,
  },
  notesText: {
    fontSize: 18,
    color: "white",
  },
});
