import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import examples from '../data/course_examples.json';

export default function Tasks() {
  const [currentDaySubjects, setCurrentDaySubjects] = useState([]);
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long' };
    const formattedDayOfWeek = date.toLocaleDateString('en-US', options);
    setCurrentDayOfWeek(formattedDayOfWeek);

    const filteredSubjects = examples.filter(
      subject => subject.day === formattedDayOfWeek
    );
    setCurrentDaySubjects(filteredSubjects);
  }, []);

  return (
    <View>
      <Text>Subjects for the Current Day ({currentDayOfWeek})</Text>
      <View>
        {/* Display subjects for the current day */}
        {currentDaySubjects.map((subject, index) => (
          <View key={index}>
            <Text>Subject: {subject.subject}</Text>
            <Text>Instructor: {subject.instructor}</Text>
            <Text>Room: {subject.room}</Text>
            <Text>Day: {subject.day}</Text>
            <Text>Start Hour: {subject.startHour}</Text>
            <Text>End Hour: {subject.endHour}</Text>
            <Text>{'----'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

