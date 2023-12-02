import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import examples from '../data/course_examples.json';
import moment from 'moment';

export default function Tasks() {
  const [currentDaySubjects, setCurrentDaySubjects] = useState([]);
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');
  const [event, setEvent] = React.useState();
  const [day, setDay] = React.useState();

  useEffect(() => {
    const formattedDayOfWeek = moment().format('dddd');
    setCurrentDayOfWeek(formattedDayOfWeek);

    const formattedDayNum = moment().format("Do");
    setDay(formattedDayNum);

    const filteredSubjects = examples.filter(
      subject => subject.day === formattedDayOfWeek
    );
    setCurrentDaySubjects(filteredSubjects);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{day}{currentDayOfWeek}</Text>
      <View style={styles.subjectsContainer}>
        {/* Display subjects for the current day */}
        {Array.isArray(currentDaySubjects) && currentDaySubjects.length > 0 ? (
          currentDaySubjects.map((subject, index) => (
            <View key={index} style={styles.subjectContainer}>
              <Text style={styles.subjectText}>Subject: {subject.subject}</Text>
              <Text style={styles.subjectText2}>Instructor: {subject.instructor}</Text>
              <Text style={styles.subjectText2}>Room: {subject.room}</Text>
              <Text style={styles.subjectText2}>Day: {subject.day}</Text>
              <Text style={styles.subjectText2}>Start Hour: {subject.startHour}</Text>
              <Text style={styles.subjectText2}>End Hour: {subject.endHour}</Text>
            </View>
          ))
        ) : (
          <Text>No subjects found for the current day</Text>
        )}
      </View>
      <Text style={styles.text}>Yippie</Text>
      <View>
        
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    fontFamily: 'Manrope',
    color: '#000000',
  },
  subjectsContainer: {
    marginTop: 15,
  },
  subjectContainer: {
    backgroundColor: '#2EA7FF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  subjectText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
  },
  subjectText2: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
};
