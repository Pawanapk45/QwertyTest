import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import { useRoute } from '@react-navigation/native'; 
import { TouchableOpacity,GestureHandlerRootView } from "react-native-gesture-handler";

const NotesDetail = () => {
  const route = useRoute(); 
  const { note } = route.params; 

  // State for tracking edit mode and the content being edited
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note.content); // Initial content of the note

  // Function to handle edit button click
  const startEditing = () => {
    setIsEditing(true);
  };

  // Function to save the note
  const saveNote = () => {
    // Logic to save the edited note
    // You can update the state or call an API to save the note here
    note.content = editedNote; // For now, directly updating the note content
    setIsEditing(false); // Exit edit mode after saving
  };

  // Function to cancel editing
  const cancelEditing = () => {
    setEditedNote(note.content); // Reset to original content
    setIsEditing(false); // Exit edit mode
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 , backgroundColor:'lightpink'}}>
    <View style={styles.container}>
      {/* Edit and Save/Cancel buttons */}
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={saveNote}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={cancelEditing}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={startEditing}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.dateText}>{note.date}</Text>

      <View>
        <Text style={styles.titleText}>{note.title}</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.TextContent}>
          {isEditing ? (
          
            <TextInput
              style={styles.textInput}
              value={editedNote}
              onChangeText={setEditedNote}
              multiline
              autoFocus
            />
          ) : (
           
            <Text style={styles.noteText}>{note.content}</Text>
          )}
        </View>
      </ScrollView>
    </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  editButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  dateText: {
    color: 'black',
    textAlign: 'right',
    margin: 15,
  },
  titleText: {
    color: '#000',
    fontSize: 25,
    margin: 15,
    textAlign: 'center',
    fontWeight: '800',
  },
  scrollContainer: {
    flex: 1,
  },
  noteText: {
    color: '#000',
    fontSize: 15,
    margin: 15,
    textAlign: 'justify',
  },
  textInput: {
    color: '#000',
    fontSize: 15,
    margin: 15,
    textAlign: 'justify',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    minHeight: 100,
    backgroundColor:'#ffffff'
  },
});

export default NotesDetail;
