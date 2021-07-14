import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

const SampleComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(prev => !prev);
  };

  return (
    <View>
      <Text>{isToggled ? 'I am active' : 'I am inactive'}</Text>
      <Button title="Click Me" onPress={handleClick} />
    </View>
  );
};

export default SampleComponent;
