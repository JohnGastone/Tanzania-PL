import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet
}
from 'react-native';

const StatsScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>Stats Screen</Text>
            <Button
                title='Click Me'
                onPress={() => alert ('Button Clicked')}
            />
        </View>
    );
}

export default StatsScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#48234E'
    },
});