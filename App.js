import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [isEnable, setIsEnable] = useState(true);
  const [text, setText] = useState('Press the Switch!');

  const toggleSwitch = ()=>{
    if (isEnable){
      setText('Abierto')
    } else{
      setText('Cerrado')
    }
    setIsEnable(previousState => !previousState)
  }

  return (
    <View style ={styles.container}>
      <Text style = {{fontsize: 24, fontweight:'bold',marginHorizontal:150}}>{text}</Text>

      <Switch
      trackColor={{false:'grey',true:'light green'}}
      thumbColor={isEnable ? '#f4f3f43':'#f4f3f4'}
      ios_bacgroundcolor='grey'
      onValueChange={toggleSwitch}
      value={isEnable}

      />
    <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
