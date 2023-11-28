import React from 'react';
import { View } from 'react-native';
import { Calendar, Card, Text } from '@ui-kitten/components';

function CalendarPage() {
  // use state for selected date for info
  //const [date, setDate] = React.useState(null);

  return (
    <View>
      <Calendar1 />
    </View>
  );
}
export default CalendarPage;

// calendar
export const Calendar1 = () => {

  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Text category='h6'>
        Selected date:
        {' '}
        {date.toLocaleDateString()}
      </Text>

      <Calendar
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />

      <Card1 
        selectedDate={date.toLocaleDateString()}
      />
    </>
  );
};

// Card
export const Card1 = ({ selectedDate }) => {
  
  // use state for info
  const [info, setInfo] = React.useState([
    { date: '11/1/2023', text: 'text1' },
    { date: '11/2/2023', text: 'text2' },
    { date: '11/3/2023', text: 'text3' },
    { date: '11/11/2023', text: 'text11' },
  ]);

  // add info to selected date
  const addInfo = (date, text) => {
    setInfo([...info, { date, text }]);
  };

  // get info from selected date
  const selectedText = info.find(item => item.date === selectedDate)?.text;

  return (
    <Card>
      <Text>
        Selected date: {selectedDate}, Text: {selectedText || 'None'}
      </Text>
    </Card>
  );
};

//const testText = 'The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent';
