import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {transformer} from '../metro.config';
import {useNavigation} from '@react-navigation/native';

const NoteScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note 1',
      content: 'This is a sample note',
      date: '24 jan',
      pinned: false,
    },
    {
      id: 2,
      title: 'Note 2',
      content: 'This is another sample note',
      date: '20 feb',
      pinned: false,
    },
    {
      id: 3,
      title: 'Note 3',
      content: 'This is a third sample note',
      date: '15 mar',
      pinned: false,
    },
    {
      id: 4,
      title: 'Note 4',
      content: 'This is a fourth sample note',
      date: '25 may',
      pinned: false,
    },
    {
      id: 5,
      title: 'Note 5',
      content: 'This is a fifth sample note',
      date: '20 june',
      pinned: false,
    },
    {
      id: 6,
      title: 'Note 6',
      content: 'This is a sixth sample note',
      date: '20 sep',
      pinned: false,
    },
    {
      id: 7,
      title: 'Note 7',
      content: 'This is a seventh sample note',
      date: '7 oct',
      pinned: false,
    },
    {
      id: 8,
      title: 'Note 8',
      content: 'This is an eighth sample note',
      date: '18 oct',
      pinned: false,
    },
  ]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [quickSelectMode, setQuickSelectMode] = useState(false);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = useCallback(
    debounce(text => {
      setSearchQuery(text);
    }, 300),
    [],
  );

  const deleteNote = id => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const startEditing = note => {
    setEditingNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const saveEdit = id => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? {...note, title: editTitle, content: editContent}
          : note,
      ),
    );
    setEditingNoteId(null);
  };

  const cancelEdit = () => {
    setEditingNoteId(null);
  };

  const handleNoteSelect = id => {
    setSelectedNotes(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(noteId => noteId !== id)
        : [...prevSelected, id],
    );
  };

  const handleLongPress = id => {
    setQuickSelectMode(true);
    handleNoteSelect(id);
  };

  const handleTap = id => {
    if (quickSelectMode) {
      handleNoteSelect(id);
    }
  };

  const deleteSelectedNotes = () => {
    setNotes(prevNotes =>
      prevNotes.filter(note => !selectedNotes.includes(note.id)),
    );
    setSelectedNotes([]);
  };

  const pinNote = id => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? {...note, pinned: !note.pinned} : note,
      ),
    );
    setSelectedNotes([]);
  };

  const filteredNotes = notes.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedNotes = filteredNotes
    .slice() // Create a copy to avoid mutating the original notes array
    .sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  const AllSelect = () => {
    if (selectedNotes.length === notes.length) {
      setSelectedNotes([]);
    } else {
      const allNoteIds = notes.map(note => note.id);
      setSelectedNotes(allNoteIds);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={style.TopHeader}>
        {/* jdfhfhuh uehuif uihfuidf ufufy uf y */}
        {/* <TouchableOpacity onPress={()=> navigation.navigate('DrawerHome')}>
        <Icon
            name="bars"
            size={20}
            color="#000"
            
          />
        </TouchableOpacity> */}
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqErjmTym0abU5uzCaaxnHCVm0SakEAiyvg&s',
            }}
            style={{width: 35, height: 40,marginRight:20}}
          />
        </View>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
            Note App
          </Text>
        </View>
        <View>
          
          <Icon
            name="signal"
            size={20}
            color="#000"
            style={{transform: [{rotate: '90deg'}]}}
          />
        </View>
      </View>

      <View style={style.inputBox}>
        <TextInput
          placeholder="Search note...."
          style={style.SearchInput}
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <View style={style.actionBar}>
        {selectedNotes.length > 0 && (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={style.pinButton}
              onPress={() => selectedNotes.forEach(id => pinNote(id))}>
              <Text style={{color: '#000'}}>
                {notes.find(note => note.id === selectedNotes[0])?.pinned
                  ? 'Unpin'
                  : 'Pin'}{' '}
                Selected ({selectedNotes.length})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.deleteButton}
              onPress={deleteSelectedNotes}>
              <Text style={{color: '#000'}}>
                Delete Selected ({selectedNotes.length})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.selectButton} onPress={AllSelect}>
              <Text style={{color: '#000'}}>
                {selectedNotes.length === notes.length
                  ? 'Deselect All'
                  : 'Select All'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {notes.length === 0 ? (
        <View style={style.emptyMessageContainer}>
          <Image
            source={{
              uri: 'https://www.pngplay.com/wp-content/uploads/7/Note-Transparent-File.png',
            }}
            style={{width: 200, height: 200}}
          />
          <Text style={style.emptyMessage}>No cards available</Text>
        </View>
      ) : (
        <FlatList
          data={sortedNotes}
          renderItem={({item}) => (
            <TouchableOpacity
              onLongPress={() => handleLongPress(item.id)}
              onPress={() => {
                handleTap(item.id);
              }}
              style={{width: '50%'}}>
              <View
                style={[
                  style.noteBox,
                  selectedNotes.includes(item.id) && style.selectedNoteBox,
                ]}>
                {editingNoteId === item.id ? (
                  <>
                    <TextInput
                      style={style.editInput}
                      value={editTitle}
                      onChangeText={setEditTitle}
                      placeholder="Edit title"
                    />
                    <TextInput
                      style={style.editInput}
                      value={editContent}
                      onChangeText={setEditContent}
                      placeholder="Edit content"
                    />
                    <View
                      style={{
                        marginVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'green',
                          padding: 5,
                          borderRadius: 10,
                        }}
                        onPress={() => saveEdit(item.id)}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Save
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'red',
                          padding: 5,
                          borderRadius: 10,
                        }}
                        onPress={cancelEdit}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text style={{color: '#ffffff'}}>Hello</Text>
                      </View>
                      <View>
                        {/* Display pin icon if the note is pinned */}
                        {item.pinned && (
                          <Icon
                            name="map-pin"
                            size={20}
                            color="black"
                            style={{
                              marginRight: 5,
                              transform: [{rotate: '45deg'}],
                            }}
                          />
                        )}
                      </View>
                    </View>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 12,
                        textAlign: 'right',
                      }}>
                      {item.date}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 17,
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: 14,
                        textAlign: 'center',
                      }}>
                      {item.content}
                    </Text>
                    <View
                      style={{
                        marginVertical: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'green',
                          padding: 5,
                          borderRadius: 10,
                        }}
                        onPress={() => startEditing(item)}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Edit
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'lightblue',
                          padding: 5,
                          borderRadius: 10,
                        }}
                        onPress={() =>
                          navigation.navigate('NotesDetail', {note: item})
                        }>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          View
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'red',
                          padding: 5,
                          borderRadius: 10,
                        }}
                        onPress={() => deleteNote(item.id)}>
                        <Text style={{color: '#ffffff', textAlign: 'center'}}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </TouchableOpacity>
            
            
          )}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
        />
      )}
    
    <View style={{ position: 'absolute', bottom: 50, right: 40 ,backgroundColor:'gray',borderRadius:50,}}>
    <TouchableOpacity onPress={() => navigation.navigate('AddNote')} >
      <Icon name="plus-circle" style={{fontSize:50,color:'blue'}} />
    </TouchableOpacity>
  </View>

      

       
    </GestureHandlerRootView>
  );
};

// Styles remain unchanged
const style = StyleSheet.create({
  TopHeader: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  SearchInput: {
    width: '80%',
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: 'white',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  pinButton: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  selectButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  emptyMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 20,
    color: 'gray',
    marginTop: 10,
  },
  noteBox: {
    backgroundColor: '#bd8d00',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 100,
  },
  selectedNoteBox: {
    backgroundColor: 'gray', // Highlight selected note
  },
  editInput: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    backgroundColor: 'white',
  },
});

export default NoteScreen;
