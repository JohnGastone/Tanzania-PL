import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity
}
from 'react-native';

const MoreScreen = ({navigation}) => {
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

        <View>
            <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                <Button
                    title='Back'
                   
                />
            </TouchableOpacity>
        </View>
      
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
        borderRadius: 30,
    },
});