import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Tasks() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const newEvent = {
      title: 'Example Event',
      description: 'Description of the event',
      date: new Date(),
    };

    setEvents(prevEvents => [...prevEvents, newEvent]);
  }, []);

  const sortByDate = () => {
    const sortedEvents = [...events].sort((a, b) => a.date - b.date);
    setEvents(sortedEvents);
  };

  useEffect(() => {
    sortByDate();
  }, [events]);

  // Filter events for the current day
  const currentDayEvents = events.filter(event => {
    const currentDate = new Date();
    return (
      event.date.getDate() === currentDate.getDate() &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    );
  });

  return (
    <View>
      <Text>Tasks Page</Text>
      <View>
        {/* Display events for the current day */}
        {currentDayEvents.map((event, index) => (
          <View key={index}>
            <Text>{event.title}</Text>
            <Text>{event.description}</Text>
            <Text>{event.date.toString()}</Text>
            <Text>----</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
