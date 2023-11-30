import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import examples from '../data/course_examples.json';
import moment from 'moment';

export default function Tasks() {
  const [currentDaySubjects, setCurrentDaySubjects] = useState([]);
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

  useEffect(() => {
    const formattedDayOfWeek = moment().format('dddd');
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
        {Array.isArray(currentDaySubjects) && currentDaySubjects.length > 0 ? (
          currentDaySubjects.map((subject, index) => (
            <View key={index}>
              <Text>Subject: {subject.subject}</Text>
              <Text>Instructor: {subject.instructor}</Text>
              <Text>Room: {subject.room}</Text>
              <Text>Day: {subject.day}</Text>
              <Text>Start Hour: {subject.startHour}</Text>
              <Text>End Hour: {subject.endHour}</Text>
              <Text>{'----'}</Text>
            </View>
          ))
        ) : (
          <Text>No subjects found for the current day</Text>
        )}
      </View>
    </View>
  );
}
