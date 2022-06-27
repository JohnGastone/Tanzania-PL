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
    Pressable
    
}
from 'react-native';
import latest from '../assets/icons/data/latest';
import stars from '../assets/icons/data/stars';
import campaigns from '../assets/icons/data/campaigns';
import sponsor from '../assets/icons/data/sponsor';
import transfers from '../assets/icons/data/transfers';

    {/* Function to render Latest news data */}
    const renderTransfersItem = ({item}) => 
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
            style={styles.sponsorItemImage} 
        />
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


    const Transfers = ({navigation}) => {
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

                 {/* Back Button */}
                 <View>
                        <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                            <Pressable 
                                style={styles.backButton} 
                                onPress={() => navigation.navigate('More')}
                            >
                                <Text style={styles.backButtonText}>Back</Text>
                            </Pressable>
                                
                        </TouchableOpacity>
                    </View>

                {/* Latest Transfers */}
                    
                <View style={styles.latestWrapper}>
                        <Text style={styles.latestTitle}>Taarifa za usajili za hivi karibuni</Text>
                        
                        <View style={styles.latestListWrapper}>
                           
                            <FlatList
                                data={transfers}
                                renderItem={renderTransfersItem}
                                keyExtractor={item => item.id}
                                horizontal={ false}
                                showsHorizontalScrollIndicator={false}
                                style={{marginLeft: -200}}
                            />
                        </View>
                        {/* Transfer 1 */}
                        <View>
                            <Text style={styles.transfer1}>Mshambuliaji <Text style={{color: 'black', fontWeight: 'bold'}}>Moses Phiri</Text> sasa rasmi mali ya Simba baada ya kukamilisha 
                            usajili wake kutoka klabu ya Zanaco Fc ya Zambia kwa dau linalokadiriwa kufikia Milioni 300.                            
                            </Text>

                            <TouchableOpacity>
                            <Pressable style={styles.button1} onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.text}>Soma zaidi</Text>
                            </Pressable>
                        </TouchableOpacity>                                                       
                        </View>

                        {/* Transfer 2 */}
                        <View>
                            <Text style={styles.transfer2}>Mabingwa wapya wa ligi kuu NBC, Yanga Sc wameonyesha nia ya kumtaka
                            mshambuliaji wa kimataifa wa Burkina Faso, <Text style={{color: 'black', fontWeight: 'bold'}}>Stephen Aziz-ki</Text> anayekipiga katika klabu ya ASEC Mimosas ya Ivory Coast.
                            </Text>

                             <TouchableOpacity>
                            <Pressable style={styles.button2} onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.text}>Soma zaidi</Text>
                            </Pressable>
                        </TouchableOpacity>                                                        
                        </View>

                        {/* Transfer 3 */}
                        <View>
                            <Text style={styles.transfer3}>Klabu ya Simba ipo mbioni kufanya uhamisho wa kiungo wa
                            kimataifa kutoka Nigeria anayekipiga kunako klabu ya Coastal Union <Text style={{color: 'black', fontWeight: 'bold'}}>Victor Akpan</Text> katika siku chache 
                            zijazo. 
                            </Text>

                             <TouchableOpacity>
                            <Pressable style={styles.button2} onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.text}>Soma zaidi</Text>
                            </Pressable>
                        </TouchableOpacity>                                                        
                        </View>

                        {/* Transfer 4 */}
                        <View>
                            <Text style={styles.transfer4}>Matajiri wa Chamazi Azam Fc wapo kwenye hatua za mwisho kukamilisha
                            usajili wa kiungo <Text style={{color: 'black', fontWeight: 'bold'}}>Cleofas Mkandala</Text> kutoka
                            klabu ya Dodoma Jiji katika siku za karibuni.
                            </Text>

                             <TouchableOpacity>
                            <Pressable style={styles.button2} onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.text}>Soma zaidi</Text>
                            </Pressable>
                        </TouchableOpacity>                                                        
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
 
export default Transfers;

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
    latestWrapper:{
        marginTop: 10,
        flexDirection: 'row',
        
    },
    latestTitle:{
        marginTop: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
        marginLeft: 10
    },
    latestListWrapper:{
        paddingTop: 10,
        paddingBottom:1,
        flexDirection: 'column',
        marginLeft: -69
    },
    LatestItemWrapper:{
        backgroundColor: '#f3d4d3',
        marginRight: 20,
        borderRadius: 15,
        shadowColor: '#000000',
        padding: 0.45,
        marginTop: 20,                     
    },
    latestItemImage:{
        width: 130,
        height: undefined,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 40,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10,
        marginLeft: -4,
        paddingHorizontal: 20,
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
        flexDirection: 'column'

    },
   
    transfer1:{
        alignItems: 'center',
        color: '#000',
        marginLeft: -50,
        marginTop: 55,
        letterSpacing: 0.45,
        width: 190,        
    },
    transfer2:{
        alignItems: 'center',
        color: '#000',
        marginLeft: -204,
        marginTop: 300,
        width: 190
    },
    transfer3:{
        alignItems: 'center',
        color: '#000',
        marginLeft: -204,
        marginTop: 540,
        width: 190
    },
    transfer4:{
        alignItems: 'center',
        color: '#000',
        marginLeft: -204,
        marginTop: 783,
        width: 190
    },
    button1:{          
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 1,
        backgroundColor: '#7E7880',
        marginTop: 10,
        width: 130,
        marginLeft: -15,
        height: 40, 
    },
    button2:{          
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 1,
        backgroundColor: '#7E7880',
        marginTop: 10,
        width: 130,
        marginLeft: -170,
        height: 40, 

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
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