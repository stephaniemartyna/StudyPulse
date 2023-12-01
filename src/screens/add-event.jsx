import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Event from '../data/event_examples.json';
import RNFS from 'react-native-fs';

export default function AddEvent({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onInputChange = (newTitle, newDescription) => {
    console.log('Title:', newTitle);
    console.log('Description:', newDescription);
  };

  const saveEvent = async () => {
    onInputChange(title, description);

    const newEvent = {
      name: title,
      date: date.toLocaleDateString(),
      text: description,
    };

    const updatedEvents = [...Event, newEvent];

    const path = RNFS.DocumentDirectoryPath + '../data/event_examples.json';

    try {
      // Read the file
      const data = await RNFS.readFile(path);

      // Parse the file content to a JavaScript object
      const events = JSON.parse(data);

      // Add the new object
      events.push({ title, date, description });

      // Convert the updated object to a JSON string
      const json = JSON.stringify(events);

      // Write the updated JSON string to the file
      await RNFS.writeFile(path, json, 'utf8');

      navigation.navigate('Calendar', { title, date, description });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.inputText}>Name of Event:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.inputText}>Event Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Pressable style={styles.button} onPress={() => setOpen(true)}>
        <Text style={styles.buttonText}>Choose Date and Time</Text>
      </Pressable>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <Pressable style={styles.button} onPress={saveEvent}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  inputText: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#2EA7FF',
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2EA7FF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
