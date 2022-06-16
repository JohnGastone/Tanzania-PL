import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    StatusBar,
    
}
from 'react-native';
import latest from '../assets/icons/data/latest';
import stars from '../assets/icons/data/stars';
import campaigns from '../assets/icons/data/campaigns';
import sponsor from '../assets/icons/data/sponsor';

    {/* Function to render Latest news data */}
    const renderLatestItem = ({item}) => 
    {
        return (
            <View style={[styles.LatestItemWrapper,
                {
                    backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                    marginLeft: item.id == 1 ? 20 : 0,
                }]}
            >
                <Image 
                    source = {item.image} 
                    style={styles.latestItemImage} 
                />
                <Text style={styles.latestItemTitle}> {item.title} </Text>
                <View 
                    style={[
                        styles.latestSelectWrapper,
                        {
                            backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                        }
                        ]}>
                
                </View>

            </View>
        );
    };

    {/* Function to render Star of the Week data */}
    const renderStarsItem = ({item}) => 
    {
        return (
            <View style={[styles.starsItemWrapper,
            {
                backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
            <Image 
            source = {item.image} 
            style={styles.starsItemImage} />
            <Text style={styles.starsItemTitle}> {item.title} </Text>
            <View 
            style={[
                styles.starsSelectWrapper,
                {
                    backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                }
                ]}>
               
            </View>

            </View>
        );
    };

    {/* Function to render Campaigns data */}
    const renderCampaignsItem = ({item}) => 
    {
        return (
            <View style={[styles.campaignsItemWrapper,
            {
                backgroundColor: item.selected ? '#ffffff' : '#f4cd6' ,
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
            <Image 
            source = {item.image} 
            style={styles.campaignsItemImage} />
            <Text style={styles.campaignsItemTitle}> {item.title} </Text>
            <View 
            style={[
                styles.campaignsSelectWrapper,
                {
                    backgroundColor: item.selected ? '#ffffff' : '#f4cd6d' ,
                }
                ]}>
            
            </View>

            </View>
        );
    };

    {/* Function to render Sponsor's data */}
const renderSponsorItem = ({item}) => 
{
    return (
        <View style={[styles.sponsorItemWrapper,
        {
            backgroundColor: item.selected ? '#ffffff' : '#f4cd6' ,
            marginLeft: item.id == 1 ? 20 : 0,
        }]}>
        <Image 
        source = {item.image} 
        style={styles.sponsorItemImage} />
        <Text style={styles.sponsorItemTitle}> {item.title} </Text>
        <View 
        style={[
            styles.sponsorSelectWrapper,
            {
                backgroundColor: item.selected ? '#ffffff' : '#f4cd6d' ,
            }
            ]}>
        
        </View>

        </View>
    );
};


    const HomeScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View style={StyleSheet.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                {/* Header */}
                <SafeAreaView>
                        <View style={styles.headersWrapper}>
                            <Image 
                            source={require('../assets/icons/NBC_PL.png')}
                            style={styles.profileImage}
                            />
                            
                        </View>
                </SafeAreaView>

                {/* Latest News */}
                    
                <View style={styles.latestWrapper}>
                        <Text style={styles.latestTitle}>Habari za hivi karibuni</Text>
                        
                        <View style={styles.latestListWrapper}>
                            <FlatList
                                data={latest}
                                renderItem={renderLatestItem}
                                keyExtractor={item => item.id}
                                horizontal={ true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        
                    </View>

                {/* Star of the Week */}
                <View style={styles.starsWrapper}>
                        <Text style={styles.starsTitle}>Nyota wa Wiki</Text>
                        <View style={styles.starsListWrapper}>
                            <FlatList
                                data={stars}
                                renderItem={renderStarsItem}
                                keyExtractor={item => item.id}
                                horizontal={ true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                </View>

                 {/* Campaigns */}
                <View style={styles.campaignsWrapper}>
                        <Text style={styles.campaignsTitle}>Kampeni</Text>
                        <View style={styles.campaignsListWrapper}>
                            <FlatList
                                data={campaigns}
                                renderItem={renderCampaignsItem}
                                keyExtractor={item => item.id}
                                horizontal={ true}
                                showsHorizontalScrollIndicator={false}
                            />
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
        </ScrollView>
    );
}
 
export default HomeScreen;

const styles = StyleSheet.create
({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1BEE7', 
    },
    headersWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
        headerShown: false,
        
    },
    profileImage:{
        width: 70,
        height: 70,
        borderRadius: 30,
    },
    latestWrapper:{
        marginTop: 10,
    },
    latestTitle:{
        marginTop: 10,
        marginBottom:1,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    latestListWrapper:{
        paddingTop: 10,
        paddingBottom:1,
    },
    LatestItemWrapper:{
        backgroundColor: '#f3d4d3',
        marginRight: 20,
        borderRadius: 15,
        shadowColor: '#000000',
        padding: 0.45,
        shadowOffset: {
            width: 0,
            height:0,
        },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 0,
    },
    latestItemImage:{
        width: 130,
        height: undefined,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10
    },
    latestItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
        color: '#000000'
    },
    latestSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,

    },
    starsWrapper:{
        marginTop: 1,
    },
    starsTitle:{
        paddingTop: 10,
        paddingBottom:1,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    starsListWrapper:{
        paddingTop: 10,
        paddingBottom: 20,

    },
    starsItemWrapper:{
        backgroundColor: '#F3D4d3',
        marginRight: 20,
        marginTop: 1,
        borderRadius: 15,   
        shadowColor: '#000000',
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.0,
        shadowRadius: 15,
        elevation: 0,
    },
    starsItemImage:{
        width: 130,
        height: undefined,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10
    },
    starsItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
        color: '#000000',
        marginLeft: 20
    },
    starsSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,

    },
    campaignsWrapper:{
        marginTop: 1,
    },
    campaignsTitle:{
        paddingTop: 1,
        paddingBottom: 1,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    campaignsListWrapper:{
        paddingTop: 10,
        paddingBottom: 20,
    },
    campaignsItemWrapper:{
        backgroundColor: '#ffffff',
        padding:20,
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
    campaignsItemImage:{
        width: 75,
        height: undefined,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10,
    },
    campaignsItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 5,
        color: '#000000',
    },
    campaignsSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,
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
        marginLeft: 10,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: -30,
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