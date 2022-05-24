import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet
}
from 'react-native';

const ResultsScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            <Text style={{color:'#00000'}}>Results Screen</Text>
            <Button
                title='Click Me'
                onPress={() => alert ('Button Clicked')}
            />
        </View>
    );
}

export default ResultsScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43927F'
    },
});