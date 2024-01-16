import React, {Fragment, useCallback, useRef}  from 'react';
import {TouchableOpacity, Text, View, ViewProps} from 'react-native';
import { Calendar } from 'react-native-calendars';

//https://velog.io/@horang-e/react-native-calendar-%EC%97%90-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%BD%82%EA%B8%B0

const Main: React.FC = () => {
  const markedDates = {
    '2024-01-17': {
      selected: true,
      marked: true,
    },
    '2024-01-18': {
      marked: true,
    },
    '2024-01-19': {
      marked: true,
    },
  };

  return (
    <View>
      <Calendar
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#eee',
          todayTextColor: '#009688',
        }}
        markedDates={markedDates}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        enableSwipeMonths={true}
        monthFormat={'M월'}
      />
      <View>
        <Text>더클라임 사당</Text>
        <Text style={{backgroundColor:'pink',  width: 46, height: 46, borderRadius: 50,}}/>
        <Text>X11</Text>
        <Text style={{backgroundColor:'blue',  width: 46, height: 46, borderRadius: 50,}}/>
        <Text>X4</Text>
      </View>
    </View>
  );
}

export default Main;
