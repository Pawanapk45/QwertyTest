import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Button, Alert, Image, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import TextIcon from 'react-native-vector-icons/Foundation';
import { ColorPicker } from 'react-native-color-picker';


const Addnote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [imageUris, setImageUris] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenUri, setFullScreenUri] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedBgColor, setSelectedBgColor] = useState('#FFFFFF');
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [isBgColorPickerVisible, setIsBgColorPickerVisible] = useState(false);

  const handleSaveNote = () => {
    if (title.trim() === '' || note.trim() === '') {
      Alert.alert("Both title and note must be filled!");
      return;
    }

    const newNote = { title, note, imageUris };
    setSavedNotes([...savedNotes, newNote]);
    setTitle('');
    setNote('');
    setImageUris([]);

    Alert.alert("Note saved successfully!");
  };

  const handleSelectImages = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 0,
      includeBase64: false,
    });

    if (!result.didCancel && result.assets && result.assets.length > 0) {
      const selectedImages = result.assets.map(asset => asset.uri);
      setImageUris([...imageUris, ...selectedImages]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = imageUris.filter((_, i) => i !== index);
    setImageUris(updatedImages);
  };

  const handleViewFullImage = (uri) => {
    setFullScreenUri(uri);
    setIsFullScreen(true);
  };

  const handleCloseFullImage = () => {
    setIsFullScreen(false);
  };

  const handleTextColorChange = () => {
    setIsColorPickerVisible(true);
  };

  const handleBgColorChange = () => {
    setIsBgColorPickerVisible(true);
  };

  const applyTextColor = (color) => {
    setSelectedColor(color);
    setIsColorPickerVisible(false);
  };

  const applyBgColor = (color) => {
    setSelectedBgColor(color);
    setIsBgColorPickerVisible(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon
            name="chevron-circle-left"
            size={30}
            color="black"
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon
              name="thumb-tack"
              size={20}
              color="black"
              style={{ marginRight: 10, transform: [{ rotate: '45deg' }] }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="bell"
              size={20}
              color="black"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.container}>
        <TextInput
          style={[styles.titleInput, { color: selectedColor, backgroundColor: selectedBgColor }]}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.noteInput, { color: selectedColor, backgroundColor: selectedBgColor }]}
          placeholder="Write a note..."
          value={note}
          onChangeText={setNote}
          multiline
        />

        <ScrollView style={styles.imageScrollContainer}>
          {imageUris.map((uri, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity onPress={() => handleViewFullImage(uri)}>
                <Image source={{ uri: uri }} style={styles.thumbnailImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveImage(index)} style={styles.removeButton}>
                <Icon name="times-circle" size={25} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={handleSelectImages}>
          <Icon
            name="plus-circle"
            size={25}
            color="black"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSelectImages}>
          <Icon
            name="camera"
            size={25}
            color="black"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTextColorChange}>
          <TextIcon
            name="text-color"
            size={25}
            color="black"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBgColorChange}>
          <TextIcon
            name="background-color"
            size={25}
            color="black"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
      </View>

      <Button title="Save Note" onPress={handleSaveNote} />

      <Modal visible={isFullScreen} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={handleCloseFullImage} style={styles.fullscreenImageClose}>
            <Icon name="times-circle" size={30} color="white" />
          </TouchableOpacity>
          <Image source={{ uri: fullScreenUri }} style={styles.fullscreenImage} />
        </View>
      </Modal>

      <Modal visible={isColorPickerVisible} transparent={true}>
        <View style={styles.colorPickerContainer}>
          <ColorPicker
            onColorSelected={(color) => applyTextColor(color)}
            style={{ flex: 1 }}
          />
          <Button title="Close" onPress={() => setIsColorPickerVisible(false)} />
        </View>
      </Modal>

      <Modal visible={isBgColorPickerVisible} transparent={true}>
        <View style={styles.colorPickerContainer}>
          <ColorPicker
            onColorSelected={(color) => applyBgColor(color)}
            style={{ flex: 1 }}
          />
          <Button title="Close" onPress={() => setIsBgColorPickerVisible(false)} />
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

export default Addnote;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 60,
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
  },
  container: {
    padding: 20,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  noteInput: {
    fontSize: 16,
    paddingTop: 10,
    textAlignVertical: 'top',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageScrollContainer: {
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  fullscreenImageClose: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  colorPickerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
});
