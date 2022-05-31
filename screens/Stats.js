import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
}
from 'react-native';

const StatsScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
        {/* Header */}
        <SafeAreaView>
                <View style={styles.headersWrapper}>
                    <Image 
                    source={require('../assets/icons/NBC_PL.png')}
                    style={styles.profileImage}
                    />
                    
                </View>
        </SafeAreaView>

        {/* Star of the Week */}
      
    </View>
    );
}

export default StatsScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43927F'
    },
    headersWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
        
    },
    profileImage:{
        width: 50,
        height: 50,
        borderRadius: 30,
    },
});