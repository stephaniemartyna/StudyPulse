import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import TimetableGrid from '../components/TimetableGrid';
import examples from '../data/course_examples.json';

/*
 * Wishlist:
 *  Form page to CRUD subjects
 *  Have different colors for different subjects
 *  left+right swipe to change currentDay
 *  Use 12-hour time with am/pm and minutes instead of 24-hour time
 *  If a subject has multiple hours in a row, combine them into 1 block
 */

const Timetable = () => {
  // List of subjects. Starts with examples from .json
  const [subjectsList, setSubjectsList] = useState(examples);
  const [currentDay, setCurrentDay] = useState(3);

  // Select which day to view using key
  const daysofWeek = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };
  const goToNextDay = () => {
    setCurrentDay(prevDay => (prevDay === 7 ? 1 : prevDay + 1));
  };
  const goToPreviousDay = () => {
    setCurrentDay(prevDay => (prevDay === 1 ? 7 : prevDay - 1));
  };

  // Get subjects for currentDay
  const getSubjectsForCurrentDay = () => {
    return subjectsList.filter(
      subject => subject.day === daysofWeek[currentDay],
    );
  };

  // Add new subject to the list
  // const handleAddSubject = newSubject => {
  //   setSubjectsList(prevSubjects => [
  //     ...prevSubjects,
  //     {...newSubject, day: daysofWeek[currentDay]},
  //   ]);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="  <  " onPress={goToPreviousDay} />
        <Text style={styles.dayText}>{daysofWeek[currentDay]}</Text>
        <Button title="  >  " onPress={goToNextDay} />
      </View>

      <TimetableGrid
        daysOfWeek={daysofWeek}
        subjects={getSubjectsForCurrentDay()}
      />

      {/* <Button
        title="Add New Subject"
        onPress={() =>
          navigation.navigate('Add Subject Page', {
            onAddSubject: handleAddSubject,
          })
        }
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Timetable;
