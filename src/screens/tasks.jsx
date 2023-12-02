import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import examples from '../data/course_examples.json';
import moment from 'moment';

// Component to display tasks for the current day
export default function Tasks() {
  // States to manage current day's tasks and information
  const [currentDaySubjects, setCurrentDaySubjects] = useState([]);
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');
  const [day, setDay] = React.useState();

  // Fetches and sets tasks for the current day on component mount
  useEffect(() => {
    // Get the formatted day of the week and currentTime using moment.js
    const formattedDayOfWeek = moment().format('dddd');
    setCurrentDayOfWeek(formattedDayOfWeek);

    const formattedDayNum = moment().format("LT");
    setDay(formattedDayNum);

    // Filters tasks from examples data based on the current day
    const filteredSubjects = examples.filter(
      subject => subject.day === formattedDayOfWeek 
    );
    setCurrentDaySubjects(filteredSubjects);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks for Today</Text>   
      {/* Title displaying the current date */}
      <Text style={styles.title2}>{day}</Text>   
      {/* Container to display tasks for the current day */}
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
          // Message displayed if no tasks are found for the current day
          <Text>No subjects found for the current day</Text>
        )}
      </View>
    </View>
  );
}

// Styles for the component
const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 45,
    fontFamily: 'Manrope',
    color: 'gray',
    alignItems: 'center',
  },
  title2: {
    fontSize: 35,
    fontFamily: 'Manrope',
    color: 'gray',
    alignItems: 'center',
    marginBottom: 15,
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
