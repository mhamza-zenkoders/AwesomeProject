import React from "react";
import { NotesList } from "../components/NotesList";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getAllNotes, Note } from "../services/NoteStorageService";

export const NotesHomeScreen: React.FC = () => {

  return (
    <>
      <View style={styles.container}>
        <NotesList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});
