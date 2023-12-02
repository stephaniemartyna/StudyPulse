import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Calendar, Card, Text } from '@ui-kitten/components';
import eventExamples from '../data/event_examples.json'; // Import the events array

// Calendar page
function CalendarPage({ route }) {

  // currently broken/causing error
  const { newEvent } = route.params;

  const [events, setEvents] = React.useState(eventExamples);

  React.useEffect(() => {
    if (newEvent) {
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }
  }, [newEvent]);

  return (
    <ScrollView>
      <Calendar1 events={events}/>
    </ScrollView>
  );
}
export default CalendarPage;

// Calendar component
export const Calendar1 = ({ events }) => {

  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Calendar style={{ width: '100%' }}
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />
      <Card1 style={{ width: '100%' }}
        selectedDate={date.toLocaleDateString()}
        events={events}
      />
    </>
  );
};

// Card component
export const Card1 = ({ selectedDate, events }) => {
  
  // Popluate events array with eventExamples
  //const [events, setEvents] = React.useState(eventExamples);

  // Add new event to events array
  // React.useEffect(() => {
  //   if (newEvent) {
  //     setEvents(prevEvents => [...prevEvents, newEvent]);
  //   }
  // }, [newEvent]);

  const selectedEvent = events.find(item => item.date === selectedDate)?.name;
  const selectedText = events.find(item => item.date === selectedDate)?.text;

  return (
    <Card>
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
