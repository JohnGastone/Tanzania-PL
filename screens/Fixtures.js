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
            <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center', marginBottom:1}}>
                <Button
                    title='Back'
                    color='#087A43'
                   
                />
            </TouchableOpacity>
        </View>
        {/* Fixtures */}
        <View style={styles.fixtures}>
            {/* Fixture Date */}
            <View>
                <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 12, color: '#000000'}}>15 March</Text>
            </View>
            {/* Fixture */}
            <View style={styles.fixtureItem}>
                <Text style={{paddingRight: 20, color:'#087d43', alignSelf: 'center'}}>Biashara United
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingHorizontal: 12, color: '#087A43'}}
                    />
                    <Text>Tanzania Prisons</Text>
                </Text>
                
            </View>
            {/* Fixture Date */}
            <View>
                <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 12, color: '#000000'}}>16 March</Text>
            </View>
            <View style={styles.fixtureItem}>
                <Text style={{marginBottom: 10, paddingRight:40, color:'#087d43', alignSelf: 'center'}}>Namungo
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingHorizontal: 12, color: '#087A43'}}
                    />
                    <Text>Azam</Text>
                </Text>

                {/* Fixture Date */}
                <View>
                    <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 3, color: '#000000'}}>19 March</Text>
                </View>
                
            </View>
            <View style={styles.fixtureItem}>
                <Text style={{paddingRight: 70, color:'#087d43', alignSelf: 'center'}}>Young Africans
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingRight: 20, color: '#087A43'}}
                    />
                    <Text>KMC </Text>
                </Text>
                
            </View>

            {/* Fixture Date */}
            <View>
                <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 3, color: '#000000'}}>27 March</Text>
            </View>
            <View style={styles.fixtureItem}>
                <Text style={{paddingRight: 50, color:'#087d43', alignSelf: 'center'}}>Polisi Tanzania
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingHorizontal: 12, color: '#087A43'}}
                    />
                    <Text>Simba Sc</Text>
                </Text>
                
            </View>

            {/* Fixture Date */}
            <View>
                    <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 3, color: '#000000'}}>1 April</Text>
                </View>
            <View style={styles.fixtureItem}>
                <Text style={{paddingRight: 23, color:'#087d43', alignSelf: 'center'}}>Polisi Tanzania
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingHorizontal: 12, color: '#087A43'}}
                    />
                    <Text>Ruvu Shooting</Text>
                </Text>
                
            </View>
        
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
    fixtures:{
        paddingTop: 1
    },
    fixtureItem:{
        paddingHorizontal: 28,
        marginBottom:10
    },
    buttonText:{
        
        
    },
   
});