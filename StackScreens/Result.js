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
    ScrollView,
    Pressable,
}
from 'react-native';

const Result = ({navigation}) => {
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
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                        <Pressable 
                            style={styles.backButton} 
                            onPress={() => navigation.navigate('Fixtures')}
                        >
                            <Text style={styles.backButtonText}>Back</Text>
                        </Pressable>
                            
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
                    <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 44 }}> Biashara United </Text>
                    <Button
                            title=' 2 - 1 '
                            disabled={false}
                            color = '#3AA78D'
                            style={{width: 28,height: 28, paddingHorizontal: 14, alignSelf: 'center', marginLeft: 10}}
                           
                    />
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 8}}>Tanzania Prisons</Text>
                    
                </View>
                <View>
                    <Image 
                        source={require('../assets/icons/Biashara.png')}
                        style={styles.teamImage}
                    />
                    
                    <Image 
                        source={require('../assets/icons/Prisons.png')}
                        style={styles.teamImage2}
                    />
                </View>

                <View>
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                        <Pressable 
                            style={styles.h2hButton}
                            
                        >
                        <Text style={styles.h2hText}> H2H </Text>
                        </Pressable>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.h2hData}>
                    <View style={styles.played}>
                        <Text style={styles.text1}>8</Text>
                        <Text style={styles.text2}>Played</Text>
                        <Text style={styles.text3}>8</Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                    <View style={styles.played}>
                        <Text style={styles.text1}>4</Text>
                        <Text style={styles.text2}>Wins</Text>
                        <Text style={styles.text3}>0</Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                    <View style={styles.played}>
                        <Text style={styles.text1}>4</Text>
                        <Text style={styles.text2}>Draws</Text>
                        <Text style={styles.text3}>4</Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                    <View style={styles.played}>
                        <Text style={styles.text1}>0</Text>
                        <Text style={styles.text2}>Lost</Text>
                        <Text style={styles.text3}>4</Text>
                    </View>

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

export default Result;

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
    backButton:{
        paddingLeft: 20,
        paddingRight: 20,
        width: 70,
        height: 35,
        borderRadius: 20,
        elevation: 5,
        marginTop: 19,
        backgroundColor: '#3AA78D',
    },
    backButtonText:{
        alignSelf: 'center',
        marginTop: 7,
    },
    fixtures:{
        paddingTop: 1
    },
    fixtureItem:{
        paddingHorizontal: 30,
        marginBottom:10,
        flexDirection: 'row',
    },
    teamImage:{
        width: 25,
        height: 25,
        marginRight: -8,
        marginLeft: 100,
        marginBottom: -5,
        marginTop: -5,
    },
    teamImage2:{
        width: 25,
        height: 25,
        marginRight: -8,
        marginLeft: 241,
        marginBottom: -5,
        marginTop: -20,
    },
    h2hButton:{
        paddingLeft: 20,
        paddingRight: 20,
        width: 70,
        height: 35,
        borderRadius: 20,
        elevation: 5,
        marginTop: -15,
        backgroundColor: '#3AA78D',
        marginLeft: 130
    },
    h2hText:{
        alignSelf: 'center',
        marginTop: 7,
    },
    h2hData:{
        marginLeft: -108,
        marginTop: -19
    },
    played:{
        flexDirection: 'row',
        alignSelf: 'center'
    },
    text1:{
        color: '#000',
        marginLeft: 109
    },
    text2:{
        color: '#000',
        marginLeft: 55
    },
    text3:{
        color: '#000',
        marginLeft: 40
    },
    sponsorWrapper:{
        marginTop: 100,

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