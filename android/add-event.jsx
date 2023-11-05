import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function AddEvent({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const saveEvent = () => {
    navigation.navigate('Calendar', {title, description, date});
  };

  return (
    <View style={styles.view}>
      <Text style={styles.inputText}>Name of Event:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChange={text => setTitle(text)}
      />

      <Text style={styles.inputText}>Event Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Pressable style={styles.button} onPress={() => setOpen(true)}>
        <Text style={styles.buttonText}>Choose Date and Time</Text>
      </Pressable>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
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
