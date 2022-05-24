import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet
}
from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>Home Screen</Text>
            <Button
                title='Click Me'
                onPress={() => alert ('Button Clicked')}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#48234E'
    },
});