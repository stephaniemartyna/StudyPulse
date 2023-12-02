import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';
//import { useNavigation } from '@react-navigation/native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import events from '../data/events_array'; // Import the events array


export default function AddEvent({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  //const [eventsArr, setEventsArr] = useState(events);
  
  const onInputChange = (newTitle, newDescription) => {
    console.log('Title:', newTitle);
    console.log('Description:', newDescription);
  };

  const saveEvent = async () => {
    onInputChange(title, description);

    // const newEvent = {
    //   name: title,
    //   date: date.toLocaleDateString(),
    //   text: description,
    // };

    // test event
    const newEvent = {
      name: "new event test",
      date: "12/15/2023",
      text: "test description",
    };

    navigation.navigate('Calendar', { newEvent });

    // try {
    //   const updatedEvents = [...eventsArr, newEvent];
    //   setEventsArr(updatedEvents); // Update eventsArr state with the new event
    //   navigation.navigate('Calendar', { title, date, description });
    // } catch (err) {
    //   console.error('Error saving event:', err);
    // }
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
