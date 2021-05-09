import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Header from '../components/MyHeader'

const App = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <View style={styles.container}>
      <Header title='CALENDER'/>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        weekdays={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        months={[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]}
        previousTitle="Previous"
        nextTitle="Next"
        todayBackgroundColor="#915aad"
        selectedDayColor="#8e7ff4"
        selectedDayTextColor="#ffffff"
        textStyle={{
          fontFamily: 'Comic sans MS',
          color: '#000000',
          fontSize:"19"
        }}
        onDateChange={onDateChange}
      />
    <View style={{borderBottomColor:"black",borderBottomWidth:1}}/>
      <View style={styles.textStyle}>
        <Text style={styles.textStyle}>Selected start date:</Text>
        <Text style={styles.textStyle}>
          {selectedStartDate ? selectedStartDate.toString() : ''}
        </Text>
  
        <Text style={styles.textStyle}>Selected End date:</Text>
        <Text style={styles.textStyle}>
          {selectedEndDate ? selectedEndDate.toString() : ''}
        </Text>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: '#f9a7c5',
  
  },
  textStyle:{
    marginTop:10,
  },

});
