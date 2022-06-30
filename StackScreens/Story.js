import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Pressable,
    StatusBar,
}
from 'react-native';


import ligikuu from '../assets/icons/data/ligikuu';

{/* Function to render Top scorers data */}
const renderLigiKuuItem = ({item}) => 
{
    return (
        <View style={[styles.scorersItemWrapper,
        {
            backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
            marginLeft: item.id == 1 ? 20 : 0,
        }]}>
        <Image 
            source = {item.image} 
            style={styles.scorersItemImage} 
        />
        <Text style={styles.scorersItemTitle}> {item.title} </Text>
        <View 
        style={[
            styles.scorersSelectWrapper,
            {
                backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
            }
            ]}>
           
        </View>

        </View>
    );
};



const Story = ({navigation}) => {
    return(
    <View style={StyleSheet.container}>
    <StatusBar backgroundColor='#009387' barStyle="light-content" />
    <ScrollView>
        
                {/* Header */}
                <SafeAreaView>
                        <View style={styles.headersWrapper}>
                            <Image 
                            source={require('../assets/icons/NBC_PL.png')}
                            style={styles.profileImage}
                            />
                            
                        </View>
                </SafeAreaView>

               
                {/* Back Button*/}
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

                 {/* This Season */}
                 <View style={styles.listWrapper}>
                    {/* Table */}
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                        <Pressable 
                            style={styles.tableButton} 
                            onPress={() => navigation.navigate('Table')}
                        >
                            <Text style={styles.backButtonText}>TPLB</Text>
                        </Pressable>                            
                    </TouchableOpacity>
                    {/* Records */}
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                        <Pressable 
                            style={styles.tableButton} 
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.backButtonText}>TFF</Text>
                        </Pressable>                            
                    </TouchableOpacity>
                    {/* fTPL */}
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                        <Pressable 
                            style={styles.tableButton} 
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.backButtonText}> CAF </Text>
                        </Pressable>                            
                    </TouchableOpacity>
                    {/* All-Time Stats */}
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center',}}>
                        <Pressable 
                            style={styles.tableButton} 
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.backButtonText1}> FIFA </Text>
                        </Pressable>                            
                    </TouchableOpacity>
                </View>                                 

                {/* Top Scorers */}
                <View style={styles.scorersWrapper}>
                        <Text style={styles.scorersTitle}>Ligi Kuu Bara</Text>
                        <View style={styles.scorersListWrapper}>
                            <FlatList
                                data={ligikuu}
                                renderItem={renderLigiKuuItem}
                                keyExtractor={item => item.id}
                                horizontal={ true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                </View>
                <View style={styles.waamuzi1}>
                    <Text style={{color: 'black', fontWeight: 'semi-bold', fontSize: 23}}>
                        Fahamu namna ligi kuu inavyoendeshwa
                    </Text>
                    <Text style={{color:  'black', marginTop: 10, justifyContent: 'center'}}>
                        Ligi Kuu Tanzania Bara hatufanyi kazi kwa kujitenga. Tunafanya kazi kwa bidii na kwa njia inayojenga na 
                        Vilabu vyetu Wanachama na mamlaka nyingine za kandanda ili kuboresha ubora wa soka, 
                        nchini Tanzania na duniani kote.
                    </Text>

                    <Text style={{color: 'black', fontWeight: 'semi-bold', fontSize: 20, marginTop: 10}}>
                        Vilabu Wanachama wa Ligi Kuu
                    </Text>

                    <Text style={{color: 'black', marginTop: 10}}>
                        Ligi Kuu ya NBC ni kampuni ya kibinafsi inayomilikiwa kikamilifu na Bodi ya ligi kuu Tanzania 
                        kwa kushirikiana na Vilabu vyake 16 Wanachama wanaounda Ligi wakati wowote.
                    </Text>

                    <Text style={{color: 'black', marginTop: 3}}>
                        Kila klabu inajitegemea, inafanya kazi ndani ya sheria za soka, 
                        kama inavyofafanuliwa na Bodi ya Ligi, TFF, CAF na FIFA, na pia kuwa 
                        chini ya sheria za Jamhuri ya Muungano wa Tanzania na Africa.
                    </Text>

                    <Text style={{color: 'black', marginTop: 3}}>
                        Kila moja kati ya vilabu 16 ni mwanachama muhimu katika Ligi Kuu. Mashauriano 
                        ndio kiini cha Ligi Kuu na mikutano mikuu ya Wanachama ndio jukwaa kuu la 
                        kufanya maamuzi kwa ajili ya sera za Ligi Kuu na hufanyika mara kwa mara wakati wa msimu.
                    </Text>

                    <Text style={{color: 'black', marginTop: 9}}>
                        Vilabu vina fursa ya kupendekeza sheria mpya au marekebisho katika mkutano wa vilabu. 
                        Kila Klabu Mwanachama ina haki ya kupata kura moja na mabadiliko yote ya kanuni na 
                        mikataba mikuu inayohusu ligi kuu inahitaji uungwaji mkono wa angalau kura ya theluthi mbili, 
                        au <Text style={{color: 'blue', fontWeight: 'bold'}}>vilabu  11</Text>, ili kuafikiwa.
                    </Text>

                   

                    <Text style={{color: 'black', marginTop: 8}}>
                        Kitabu cha Kanuni za Ligi Kuu, kilichomo ndani ya Kitabu cha Mwongozo (Pakua: Kitabu cha Mwongozo
                        wa Ligi Kuu; PDF 21.6MB), kinatumika kama mkataba kati ya Ligi, Vilabu Wanachama na nyingine, 
                        kufafanua muundo na uendeshaji wa ligi kuu.
                    </Text>
                    
                    <Text style={{color:'black', marginTop: 9}}>
                        Ukiukaji wowote mkubwa wa Kitabu cha Kanuni husababisha mahakama huru ya watu watatu kukaa kusikiliza
                        kesi hiyo, kuthibitisha hatia na kuweka adhabu, ambayo inaweza kuanzia faini hadi kukatwa pointi na, 
                        katika hali mbaya zaidi, kufukuzwa kwenye shindano (hii haijawahi kutokea. kilichotokea katika historia 
                        ya Ligi Kuu).
                    </Text>
                    
                    <Text style={{color: 'black', fontWeight: 'semi-bold', fontSize: 20, marginTop: 10}}>
                        Wafanyakazi wa Ligi Kuu Tanzania
                    </Text>

                    <Text style={{color:'black', marginTop: 9}}>
                        Ofisi kuu za Bodi ya Ligi Kuu Tanzania zipo pembezoni mwa jiji la Dar es Salaam. Bodi hiyo ina wafanyakazi 
                        takribani 52 wanaotekeleza majukumu mbalimbali ikiwa ni pamoja na soka, maendeleo ya kocha, jamii, maendeleo 
                        ya vijana, ulinzi, utangazaji, biashara, mawasiliano, dijitali, fedha, sheria, masoko na sera.
                        
                    </Text>
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
                                        marginTop: 10,
                                        
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
        </ScrollView>   
    </View>
    );
}

export default Story;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43927F',
        headerShown: false,
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
        marginBottom: -20
    },
    scorersWrapper:{
        marginTop: 1,
    },
    scorersTitle:{
        paddingTop: 10,
        paddingBottom:1,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    scorersListWrapper:{
        paddingTop: 10,
        paddingBottom: 20,

    },
    scorersItemWrapper:{
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
    scorersItemImage:{
        width: 290,
        height: undefined,
        marginTop: -1,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10,
        marginRight: 12,
        marginLeft: -5
    },
    scorersItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 13,
        color: '#000000'
    },
    scorersSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,

    },
    waamuzi1:{
        marginTop: -70,
        marginLeft: 23,        
    },
    backButton:{
        paddingLeft: 20,
        paddingRight: 20,
        width: 70,
        height: 30,
        borderRadius: 13,
        elevation: 5,
        marginTop: 19,
        backgroundColor: '#3AA78D',
        marginBottom: -20
    },
    backButtonText:{
        alignSelf: 'center',
        marginTop: 7,
        alignContent: 'center',
    },
    listWrapper:{
        flexDirection: 'row',
        marginTop: -20, 
    },
    tableButton:{
        paddingLeft: 20,
        paddingRight: 20,
        width: 80,
        height: 32,
        borderRadius: 20,
        elevation: 5,
        marginTop: 19,
        backgroundColor: '#9793CF',
    },
    backButtonText1:{
        alignSelf: 'center',
        marginTop: 7,
        alignItems: 'center',
        width: 80,
        marginLeft: 34
    },

    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#7E7880',
        width: 110,
        marginLeft: 20,
        paddingLeft: 30,
        paddingRight: 30,
        height: 38,
        marginTop: -45,
        marginBottom: 43
      },
    assistWrapper: {
        marginTop: -35
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
        marginBottom: 10,
    },
    sponsorsLine: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: 0.5,
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
        marginTop: 7,
        fontSize: 20,
    },
    seasonText: {
        color: '#000000',
        marginLeft: 20,
        fontSize: 20

    }
});