import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet
}
from 'react-native';

const MoreScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text>More Screen</Text>
            <Button
                title='Click Me'
                onPress={() => alert ('Button Clicked')}
            />
        </View>
    );
}

export default MoreScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#48234E'
    },
});