import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {Icon, Datepicker} from '@ui-kitten/components';

export default function AddEvent({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const CalendarIcon = props => <Icon {...props} name="calendar" />;

  const saveEvent = () => {
    navigation.navigate('Calendar', {title, description});
  };

  return (
    <View>
      <TextInput
        placeholder="Event title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        placeholder="Event description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <Datepicker
        label="Label"
        caption="Caption"
        placeholder="Pick Date"
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={CalendarIcon}
      />
      <Button title="Save" onPress={saveEvent} />
    </View>
  );
}
