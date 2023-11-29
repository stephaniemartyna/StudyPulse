import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const TimetableGrid = ({subjects}) => {
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <ScrollView vertical>
      <View style={styles.container}>
        <View style={styles.timeColumn}>
          {/* Loop through hours to make and fill cells */}
          {hours.map(hour => (
            <View key={hour} style={styles.timeCell}>
              <Text style={styles.cellText}>{`${hour}:00`}</Text>
            </View>
          ))}
        </View>

        <View style={styles.subjectColumn}>
          {/* Loop hours to create cells */}
          {hours.map(hour => {
            // Find if there's a subject in the range for each hour
            const matchingSubject = subjects.find(
              subject => subject.startHour <= hour && subject.endHour > hour,
            );

            // Return with subject if matchingSubject found for that hour
            // Else return ''
            // Only apply style if matchingSubject
            return (
              <View
                style={[styles.subjectCell, matchingSubject && styles.subject]}
                key={hour}>
                <Text style={styles.cellText}>
                  {matchingSubject
                    ? `${matchingSubject.subject} with ${matchingSubject.instructor}\n ${matchingSubject.room} from ${matchingSubject.startHour}-${matchingSubject.endHour}`
                    : ''}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  timeColumn: {
    width: 80,
  },
  timeCell: {
    height: 60,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  subjectColumn: {
    flex: 1,
  },
  subjectCell: {
    width: '100%',
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderWidth: 1,
    borderColor: 'gray',
  },
  subject: {
    backgroundColor: '#00BFFF',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  cellText: {
    fontSize: 16,
  },
});
export default TimetableGrid;
