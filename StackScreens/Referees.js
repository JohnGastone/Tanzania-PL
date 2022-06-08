import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
const Referees = () => {
  return (
<View style={styles.container}>
<Text style={{color: 'black'}}>This the Referees screen</Text>
<Pressable
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
<Text>Go to SignIn screen</Text>
</Pressable>
</View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#09f',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
});
export default Referees;
