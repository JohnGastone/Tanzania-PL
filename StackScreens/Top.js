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
    ScrollView,
    Pressable,
    
}
from 'react-native';

const Top = ({navigation}) => {
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
                                onPress={() => navigation.navigate('Statistics')}
                            >
                                <Text style={styles.backButtonText}>Back</Text>
                            </Pressable>
                                
                        </TouchableOpacity>
                </View>

                {/* Top Scorers*/}
                <View>
                    <Text style={styles.topScorerHeader}> Top Scorers</Text>
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Fiston Mayele </Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>16</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>George Mpole </Text>
                            <Image 
                                source={require('../assets/icons/Geita.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>16</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Reliant Lusajo</Text>
                            <Image 
                                source={require('../assets/icons/Namungo.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>10</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Rodgers Kola  </Text>
                            <Image 
                                source={require('../assets/icons/AzamFc.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}> 8</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Kibu Dennis    </Text>
                            <Image 
                                source={require('../assets/icons/Simba.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}> 8</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>S Ntibazokiza</Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>7</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                
                {/* Top Assist Providers*/}
                <View>
                    <Text style={styles.topAssistProviderHeader}> Top Assist Providers</Text>
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>S Ntibazokiza</Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>6</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Djuma Shaban</Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>5</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Tepsi Evans    </Text>
                            <Image 
                                source={require('../assets/icons/AzamFc.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>5</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>S Kapombe     </Text>
                            <Image 
                                source={require('../assets/icons/Simba.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>5</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>

                {/* Keepers with most Cleansheets*/}
                <View>
                    <Text style={styles.topAssistProviderHeader}> Goalkeepers with most cleansheets</Text>
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Djigui Diara </Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>17</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Aishi Manula</Text>
                            <Image 
                                source={require('../assets/icons/Simba.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}>14</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>A Mshery     </Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />      
                            <Text style={styles.goals}> 8</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>

                {/* Players with most Passes*/}
                <View>
                    <Text style={styles.topAssistProviderHeader}> Top Passers</Text>
                </View>
                <View style={styles.pass}>
                    <Text style={styles.passesComplete}>Complete Passes</Text>
                    <Text style={styles.passesAccurate}>Accurate Passes</Text>
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topPasser}>
                            <Text style={styles.topScorerName}>Yanic Bangala</Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.passTeamImage}
                            />
                            <Text style={styles.passes}>1032</Text>      
                            <Text style={styles.accurate}>     999</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topPasser}>
                            <Text style={styles.topScorerName}>Cleo Mkandala</Text>
                            <Image 
                                source={require('../assets/icons/Dodoma.png')}
                                style={styles.passTeamImage}
                            />
                            <Text style={styles.passes}> 1001</Text>      
                            <Text style={styles.accurate}>    989</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topPasser}>
                            <Text style={styles.topScorerName}>Khalid Aucho   </Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.passTeamImage}
                            />
                            <Text style={styles.passes}>  980</Text>      
                            <Text style={styles.accurate}>     901</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topPasser}>
                            <Text style={styles.topScorerName}>Sadio Kanoute</Text>
                            <Image 
                                source={require('../assets/icons/Simba.png')}
                                style={styles.passTeamImage}
                            />
                            <Text style={styles.passes}> 979</Text>      
                            <Text style={styles.accurate}> 878</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topPasser}>
                            <Text style={styles.topScorerName}>Kenny Muguna</Text>
                            <Image 
                                source={require('../assets/icons/AzamFc.png')}
                                style={styles.passTeamImage}
                            />
                            <Text style={styles.passes}>978</Text>      
                            <Text style={styles.accurate}> 912</Text>
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                
                {/* Players with most Tackles*/}
                <View>
                    <Text style={styles.topAssistProviderHeader}> Top Tacklers</Text>
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Henock Inonga</Text>
                            <Image 
                                source={require('../assets/icons/Simba.png')}
                                style={styles.teamImage}
                            />
                            <Text style={styles.passes}>            145</Text>      
                            
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>Victor Akpan  </Text>
                            <Image 
                                source={require('../assets/icons/Coastal.png')}
                                style={styles.teamImage}
                            />
                            <Text style={styles.goals}> 120</Text>      
                           
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>K Shomari       </Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />
                            <Text style={styles.passes}>             78</Text>      
                            
                        </Pressable>
                    </TouchableOpacity>           
                </View>
                <View >    
                    <TouchableOpacity>
                        <Pressable style={styles.topScorer}>
                            <Text style={styles.topScorerName}>K Shomari      </Text>
                            <Image 
                                source={require('../assets/icons/Yanga.png')}
                                style={styles.teamImage}
                            />
                            <Text style={styles.passes}>             78</Text>      
                            
                        </Pressable>
                    </TouchableOpacity>           
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

export default Top;

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
    topScorerHeader:{
        color: '#000',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    topScorer:{
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        width: 300,
        marginLeft: 20,
        height: 42,
        borderWidth: 0.2 
    },
    topScorerName:{
        color: '#000',
        marginRight: 150,
        marginLeft: 10
    },
    topPasser:{
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        width: 335,
        marginLeft: 20,
        height: 42,
        borderWidth: 0.2 
    },
    teamImage:{
        width: 25,
        height: 25,
        marginRight: 60,
        marginLeft: -90,
        marginBottom: -5,
        marginTop: -5,
    },
    passTeamImage:{
        width: 25,
        height: 25,
        marginRight: 60,
        marginLeft: -110,
        marginBottom: -5,
        marginTop: -5,
    },
    pass:{
        flexDirection: 'row'
    },
    goals:{
        color: '#000'
    },
    passes:{
        color: '#000',
        marginLeft: -35
    },
    accurate:{
        color: '#000',
        marginLeft: 39
    },
    topAssistProviderHeader:{
        color: '#000',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    passesComplete:{
        color: '#000',
        marginLeft: 200,
        fontSize: 11,
        
    },
    passesAccurate:{
        color: '#000',
        marginLeft: 20,
        fontSize: 11,
    },
    sponsorWrapper:{
        marginTop: 1,
        marginTop: 1000
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