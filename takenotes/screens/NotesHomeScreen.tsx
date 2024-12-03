import React from 'react';
import {NotesList} from '../components/NotesList';
import {StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getAllNotes, Note} from '../services/NoteStorageService';
import {AddNoteButton} from '../components/AddNoteButton';

export const NotesHomeScreen: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <NotesList />
        <AddNoteButton />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
