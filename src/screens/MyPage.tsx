import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type DetailsProps = {
  navigation: StackNavigationProp<any, 'Details'>; // 'Details'는 스택 네비게이터의 화면 이름
};

const MyPage: React.FC<DetailsProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go back to Main"
        onPress={() => navigation(-1)}
      />
    </View>
  );
}

export default MyPage;
