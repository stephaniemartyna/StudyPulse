import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';

// Component for adding an event with title, description, and date/time
export default function AddEvent({ navigation }) {
  // States to manage input fields and date
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // Function to handle input changes in title and description
  const onInputChange = (newTitle, newDescription) => {
    console.log('Title:', newTitle);
    console.log('Description:', newDescription);
  };

  // Function to save the event and navigate to the Calendar page
  const saveEvent = async () => {
    onInputChange(title, description);

    const newEvent = {
      name: title,
      date: date.toLocaleDateString(),
      text: description,
    };

    // Navigate to Calendar page and pass newEvent as a parameter
    navigation.navigate('Calendar', { newEvent });
  };

  return (
    <View style={styles.view}>
      {/* Text input for the event name */}
      <Text style={styles.inputText}>Name of Event:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      {/* Text input for the event description */}
      <Text style={styles.inputText}>Event Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      {/* Button to choose date and time */}
      <Pressable style={styles.button} onPress={() => setOpen(true)}>
        <Text style={styles.buttonText}>Choose Date and Time</Text>
      </Pressable>

      {/* Date picker */}
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

      {/* Button to save the event */}
      <Pressable style={styles.button} onPress={saveEvent}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

// Styles for the component
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
