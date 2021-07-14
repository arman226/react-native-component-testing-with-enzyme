import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

const SampleComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(prev => !prev);
  };

  return (
    <View testid="sample">
      <Text testid="text0">{isToggled ? 'I am active' : 'I am inactive'}</Text>
      <Button testid="button" title="Click Me" onPress={handleClick} />
    </View>
  );
};

export default SampleComponent;
