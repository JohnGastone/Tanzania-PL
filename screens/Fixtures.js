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
    ScrollView
}
from 'react-native';

const FixturesScreen = ({navigation}) => {
    return(
    <ScrollView>
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
                        color='#087A76'
                    
                    />
                </TouchableOpacity>
            </View>
            {/* Fixtures */}
            <View style={styles.fixtures}>
                {/* Fixture Date */}
                <View>
                    <Text style={{paddingRight: 10,alignSelf: 'center', marginBottom: 12, color: '#000000'}}>15 March</Text>
                </View>
                {/* Fixture */}
                <View style={styles.fixtureItem}>
                    <Text style={{paddingRight: 24, color:'#5C1919', alignSelf: 'center', marginRight: -14, marginLeft: 46, paddingHorizontal: -24 }}> Biashara United </Text>
                    <Button
                            title='16:00'
                            disabled={true}
                            style={{width: 28,height: 28, paddingHorizontal: 14, color: '#087A43', alignSelf: 'center', marginLeft: 10}}
                    />
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}>Tanzania Prisons</Text>
                    
                </View>
                <View>
                            <Text style={styles.sponsorsLine}></Text>
                        </View>
                {/* Fixture Date */}
                <View>
                    <Text style={{paddingRight: 10,alignSelf: 'center', marginBottom: 12, color: '#000000', paddingTop: 13}}>16 March</Text>
                </View>
                <View style={styles.fixtureItem}>
                    <Text style={{paddingRight: 24, color:'#5C1919', alignSelf: 'center', marginRight: -14, marginLeft: 46, paddingHorizontal: 29 }}>Namungo</Text>
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingHorizontal: 12, color: '#087A43'}}
                    />
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}>Azam</Text>
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture Date */}
                 <View>
                    <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 3, color: '#000000', paddingTop: 13}}>19 March</Text>
                </View>
                    
                <View style={styles.fixtureItem}>
                    <Text style={{paddingRight: 24, color:'#5C1919', alignSelf: 'center', marginRight: -14, marginLeft: 46 }}>Young Africans</Text>                               
                    <Button
                            title='19:00'
                            disabled={true}
                            style={{width: 28,height: 28, paddingRight: 20, color: '#087A43'}}
                    />
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}>KMC </Text>
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                {/* Fixture Date */}
                <View>
                    <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 3, color: '#000000', paddingTop: 13}}>27 March</Text>
                </View>
                <View style={styles.fixtureItem}>
                    <Text style={{paddingRight: 24, color:'#5C1919', alignSelf: 'center', marginRight: -14, marginLeft: 46 }}>Polisi Tanzania </Text>
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingHorizontal: 12, color: '#087A43'}}
                    />
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}>Simba Sc</Text>               
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                {/* Fixture Date */}
                <View>
                        <Text style={{paddingRight: 16,alignSelf: 'center', marginBottom: 3, color: '#000000', paddingTop: 13}}>1 April</Text>
                    </View>
                <View style={styles.fixtureItem}>
                    <Text style={{paddingRight: 24, color:'#5C1919', alignSelf: 'center', marginRight: -14, marginLeft: 46 }}>Polisi Tanzania </Text>
                    <Button
                        title='16:00'
                        disabled={true}
                        style={{width: 28,height: 28, paddingHorizontal: 12, color: '#087A43'}}
                    />    
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}>Ruvu Shooting</Text>
                    
                    
                </View>

                {/* Sponsors */}
                <View style={styles.sponsorWrapper}>
                     <Text style={styles.sponsorTitle}></Text>
                        <View style={styles.sponsorListWrapper}>                           
                                <Image
                                    source={require ('../assets/icons/AZAM.png') }
                                    style={{
                                        width: 120, 
                                        height: 34, 
                                        padding: 4,
                                        marginVertical: 10,
                                        alignSelf: 'center',
                                        marginRight: 25,

                                    }}
                        
                                />
                                <Image
                                    source={require ('../assets/icons/NBC.png') }
                                    style={{
                                        width: 62,
                                        height: 44,
                                        padding: 1,
                                        alignSelf: 'center',
                                        marginRight: 42,
                                    }}
                        
                                />
                                 <Image
                                    source={require ('../assets/icons/TBC.png') }
                                    style={{
                                        width: 70,
                                        height: 54, 
                                        padding: 4,
                                        marginVertical: 18,                                       
                                        padding: 1,
                                        alignSelf: 'center',
                                        marginTop: 16,
                                        
                                    }}
                        
                                />                                                                                                                           
                        </View>
                        <View>
                            <Text style={styles.sponsorsLine}></Text>
                        </View>
                         
                        {/* TPLB Social Media Reach */}
                        <View style={styles.socialMedia}>
                            <Image 
                                source={require('../assets/icons/icons8-twitter-30.png')}
                                style={{
                                    paddingLeft: 12,
                                    paddingRight: 20,
                                    marginRight: 8,
                                }}
                            />
                            <Image 
                                source={require('../assets/icons/icons8-facebook-30.png')}
                                style={{
                                    paddingLeft: 12,
                                    paddingRight: 20,
                                    marginRight: 8,
                                }}
                            />
                            <Image 
                                source={require('../assets/icons/icons8-instagram-30.png')}
                                style={{
                                    paddingLeft: 12,
                                    paddingRight: 20,
                                    marginRight: 8,
                                }}
                            />
                            <Image 
                                source={require('../assets/icons/icons8-tiktok-30.png')}
                                style={{
                                    paddingLeft: 12,
                                    paddingRight: 20,
                                }}
                            />
                            <Text style={styles.tplBoard}> tplboard </Text>
                        </View>

                        {/* TPL Youtube and Website */}
                        <View style={styles.youtubeWebsite}>
                            <Text style={styles.ligiKuu}>www.ligikuu.co.tz</Text>
                            <Image 
                                source={require('../assets/icons/icons8-youtube-48.png')}
                                style={{
                                    paddingLeft: 34,
                                    marginLeft: 18,
                                    marginTop: -6,
                                    marginRight: -8,
                                }}
                            />
                            <Text style={styles.tplBoard}>LIGI KUU TV</Text>
                        </View>
                </View> 
                <View>
                    <Text style={styles.tplBoard}></Text>
                </View>
                <View>
                    <Text style={styles.tplBoard}></Text>
                </View>
                <View>
                    <Text style={styles.tplBoard}></Text>
                </View>
                <View>
                    <Text style={styles.tplBoard}></Text>
                </View> 

        
        </View>
     </View>
     </ScrollView>
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
        paddingHorizontal: 30,
        marginBottom:10,
        flexDirection: 'row',
    },
    buttonText:{
        
        
    },
    sponsorWrapper:{
        marginTop: 1,
    },
    sponsorTitle:{
        paddingTop: 1,
        paddingBottom: 1,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    sponsorListWrapper:{
        paddingTop: 10,
        paddingBottom: -20,
        flexDirection: 'row',
        marginHorizontal: 20,
    
    },
    sponsorItemWrapper:{
        backgroundColor: '#ffffff',
        padding:20,
        width: 320,
        marginLeft:1,
        marginRight: 15,
        borderRadius: 15,   
        shadowColor: '#000000',
        shadowOffset:{
            width: 16,
            height: 0,
        },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 0,
    },
    sponsorItemImage:{
        width: 75,
        height: undefined,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10,
    },
    sponsorItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 5,
        color: '#000000',
    },
    sponsorSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,
    },
    sponsorsLine: {
        flex: 1,
        marginLeft: 20,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: -5,
        width: 320,
    },
    socialMedia: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 70,
    },
    tplBoard: {
        color: '#000000',
        paddingLeft: 10,
        marginTop: 7,
    },
    youtubeWebsite: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 70,
    },
    ligiKuu: {
        color: '#000000',
        marginTop: 4,
        fontSize: 20,
        marginLeft: -26,
    },


   
});