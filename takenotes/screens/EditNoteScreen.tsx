import React, {useLayoutEffect} from 'react';
import {NoteTakingInput} from '../components/NoteTakingInput';
import {ScreenNavigationProp} from '../../types';
import {StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {EditScreenRouteProp} from '../../types';
import {DeleteNoteButton} from '../components/DeleteNoteButton';

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const noteId = route.params.noteId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? 'Edit Note' : 'New Note',
      headerTitleStyle: styles.headerTitle,
      headerRight: () =>
        noteId ? <DeleteNoteButton noteId={noteId} /> : <></>,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <NoteTakingInput noteId={noteId} />
      {noteId && <DeleteNoteButton noteId={noteId} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
  },
});
