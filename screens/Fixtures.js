import React from 'react';
import 
{
    View,
    Text, 
    Button, 
    BackHandler,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
}
from 'react-native';

const FixturesScreen = ({navigation}) => {
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

        {/* Back Button */}
        <View>
            <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                <Button
                    title='Back'
                    color='#087A43'
                   
                />
            </TouchableOpacity>
        </View>
      
    </View>
    );
}

export default FixturesScreen;

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
        width: 70,
        height: 70,
        borderRadius: 30
    },
   
});