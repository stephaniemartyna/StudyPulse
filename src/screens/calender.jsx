import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Calendar, Card, Text } from '@ui-kitten/components';
import events from '../data/event_examples.json';

// Calendar page
function CalendarPage() {
  return (
    <ScrollView>
      <Calendar1 />
    </ScrollView>
  );
}
export default CalendarPage;

// Calendar component
export const Calendar1 = () => {

  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Calendar style={{ width: '100%' }}
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />
      <Card1 style={{ width: '100%' }}
        selectedDate={date.toLocaleDateString()}
      />
    </>
  );
};

// Card component
export const Card1 = ({ selectedDate }) => {
  
  // List of descriptions for each date
  const [info, setInfo] = React.useState(events);

  // Add info to selected date (currently not in use/might not be needed)
  const addInfo = (name, date, text) => {
    setInfo([...info, { name, date, text }]);
  };

  // Get info from selected date
  const selectedEvent = info.find(item => item.date === selectedDate)?.name;
  const selectedText = info.find(item => item.date === selectedDate)?.text;
  
  /* (Probably not needed)
  // Get day of the week
  const [month, day, year] = selectedDate.split('/');
  const dateObject = new Date(year, month - 1, day);
  
  // Convert numeric day to actual day
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = dateObject.getDay(); // Get day of the week
  const dayName = days[dayOfWeek]; // Convert numeric day to associated day name
  */

  return (
    <Card >
      <Text>
        {selectedEvent || 'No events planned for this day.'}
        {'\n\n'}
        {selectedText || 'Nothing planned for this day.'}
      </Text>
    </Card>
  );
};

// Stylesheet for centering the Calendar (currently not in use)
const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    width: '100%',
  },
});
