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

const TableScreen = ({navigation}) => {
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
            
             {/* Fixtures */}
            <View style={styles.fixtures}>
                {/* Table Header */}
                <View style={styles.headerItem}>
                    <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 25 }}> # </Text>                
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> Team </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 35}}> P </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 2}}> W </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 2}}> D </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 2}}> L </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 2}}> G </Text>                    
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 2}}> Pts </Text>

                    
                </View>               
                {/* Fixture */}
                <View style={styles.fixtureItem}>
                    <View style={styles.cafCL}>
                        <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 4,  }}> 1. </Text>   
                        <Image 
                            source={require('../assets/icons/Yanga.png')}
                            style={styles.teamImage}
                        /> 
                                
                            <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Yanga </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> 27 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 20 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 7 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 0 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 45:7 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -4}}> 67 </Text> 
                    </View>                              
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View> 
                {/* Fixture */}
                    
                    <View style={styles.fixtureItem}>
                       <View style={styles.cafCL}> 
                           <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 4 }}> 2. </Text>                 
                            <Image 
                                source={require('../assets/icons/Simba.png')}
                                style={styles.teamImage}
                            /> 
                         
                            <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Simba </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> 26 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 15 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 9 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 2 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 36:12 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 54 </Text>
                        </View>
                    </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>
                {/* Fixture */} 
                <View style={styles.fixtureItem}>
                    <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 19 }}> 3. </Text>        
                        <Image 
                            source={require('../assets/icons/AzamFc.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Azam </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 14}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 11 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 7 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 9 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 34:27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 40 </Text>               
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                {/* Fixture */}
                <View style={styles.fixtureItem}>
                <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 19 }}> 4. </Text>                 
                        <Image 
                            source={require('../assets/icons/Geita.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Geita Gold </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -12}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 10 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 9 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 8 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 28:25 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 39 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 19 }}> 5. </Text>                 
                        <Image 
                            source={require('../assets/icons/Namungo.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Namungo </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 9 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 10 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 8 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 37:30 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 37 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 19 }}> 6. </Text>                 
                        <Image 
                            source={require('../assets/icons/Polisi.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Polisi Tz </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -4}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 8 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 12 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 7 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 21:20 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 36 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 19 }}> 7. </Text>                 
                        <Image 
                            source={require('../assets/icons/Kagera.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Kagera  </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -3}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 8</Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 10 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 9 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -5}}> 18:24 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 34 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 19 }}> 8. </Text>                 
                        <Image 
                            source={require('../assets/icons/Coastal.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 14}}> Coastal  </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -11}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 9 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 7 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 11 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -6}}> 20:29 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 34 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 19 }}> 9. </Text>                 
                        <Image 
                            source={require('../assets/icons/KMC.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> KMC </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> 26 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 7 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 11 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 8 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -5}}> 29:29 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 32 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 15 }}> 10. </Text>                 
                        <Image 
                            source={require('../assets/icons/Mbeya_City.png')}
                            style={styles.teamImage}
                        />   
                 <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Mbeya C </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -11}}> 27 </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 7 </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 11 </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 9 </Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}>22:24</Text>
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 32 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 15 }}> 11. </Text>                 
                        <Image 
                            source={require('../assets/icons/Mtibwa.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Mtibwa </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 7 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 10 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 10 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 23:27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 31 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                 <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: 15 }}> 12. </Text>                 
                        <Image 
                            source={require('../assets/icons/Dodoma.png')}
                            style={styles.teamImage}
                        />   
                    <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Dodoma </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -12}}> 27 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 8 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 7}}> 7 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 12 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 23:24 </Text>
                        <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 31 </Text>                          
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                    <View style={styles.relegationPlayOffs}>
                        <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: -1 }}> 13. </Text>                 
                                <Image 
                                    source={require('../assets/icons/Ruvu.png')}
                                    style={styles.teamImage}
                                />   
                            <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 11}}> Ruvu </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 27 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 6 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 10 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 11 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 35:37 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 28 </Text>                          
                    </View>
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                 <View style={styles.fixtureItem}>
                    <View style={styles.relegationPlayOffs}>
                        <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: -1 }}> 14. </Text>                 
                                <Image 
                                    source={require('../assets/icons/Prisons.png')}
                                    style={styles.teamImage}
                                />   
                            <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Prisons </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -11}}> 27 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 6 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 8 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 13 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -3}}> 20:32 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 26 </Text>                          
                    </View>
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                <View style={styles.fixtureItem}>
                    <View style={styles.relegation}>
                        <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: -1 }}> 15. </Text>                 
                                <Image 
                                    source={require('../assets/icons/Biashara.png')}
                                    style={styles.teamImage}
                                />   
                            <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Biashara </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -21}}> 27 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 4 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 13 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 5}}> 10 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 21:29 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 25 </Text>                          
                    </View>
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                 {/* Fixture */}
                <View style={styles.fixtureItem}>
                    <View style={styles.relegation}>
                        <Text style={{paddingRight: 26, color:'#5C1919', alignSelf: 'center', marginRight: -25, marginLeft: -1 }}> 16. </Text>                 
                                <Image 
                                    source={require('../assets/icons/Mbeya_Kwanza.png')}
                                    style={styles.teamImage}
                                />   
                            <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 10}}> Mbeya K </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -21}}> 27 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -2}}> 5 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 1}}> 9 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: 11}}> 13 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -7}}> 20:33 </Text>
                                <Text style={{paddingRight: 20, color:'#5C1919', alignSelf: 'center', marginLeft: -9}}> 24 </Text>                          
                    </View>
                </View>
                <View>
                    <Text style={styles.sponsorsLine}></Text>
                </View>

                {/* Table Elaboration */}
                <View style={styles.tableElaboration}>
                    <View style={styles.elaborationItem}>
                    <Image 
                        source={require('../assets/icons/ellipse.png')}
                        style={styles.ellipse1}
                    />
                    <Text style={styles.elaborationText}> CAF Champions League Qualification - Preliminary stage</Text>
                    </View>
                    <View style={styles.elaborationItem}>
                    <Image 
                        source={require('../assets/icons/ellipse.png')}
                        style={styles.ellipse2}
                    />
                    <Text style={styles.elaborationText1}> Relegation to Championship Play-Offs</Text>
                    </View>
                    <View style={styles.elaborationItem}>
                    <Image 
                        source={require('../assets/icons/ellipse.png')}
                        style={styles.ellipse3}
                    />
                    <Text style={styles.elaborationText1}> Relegation to Championship</Text>
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

export default TableScreen;

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
    teamImage:{
        width: 20,
        height: 20,
        marginRight: -8,
        marginLeft: 3,
        marginBottom: -5,
        marginTop: -5,
    },
    fixtures: { 
        paddingTop: -10,
    },
    fixtureItem:{
        paddingHorizontal: 20,
        marginBottom:6,
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -5,
    },
    cafCL: {
        paddingHorizontal: 20,
        marginBottom:-6,
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9893CF',
        borderRadius: 10,
        elevation: 8,
        marginLeft: -5,
        paddingRight: -12,
        
    },
    relegationPlayOffs: {
        paddingHorizontal: 20,
        marginBottom:-6,
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFC5C5',
        borderRadius: 10,
        elevation: 8,
        marginLeft: -5,
        paddingRight: -12,       
    },
    relegation: {
         paddingHorizontal: 20,
        marginBottom:-6,
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D1C3C3',
        borderRadius: 10,
        elevation: 8,
        marginLeft: -5,
        paddingRight: -12, 
    },
    headerItem:{
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#3AA28D',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        height: 30,
        paddingRight: 20,
        marginLeft: 12,
    },
    tableElaboration:{
        flexDirection: 'column',
    },
    elaborationItem:{
        flexDirection: 'row',
        marginTop: -4,
    },
    elaborationText:{
        paddingLeft: 10,
        fontSize: 13,
        color: '#000',
        marginTop: 20,
    },
    elaborationText1:{
        paddingLeft: 10,
        fontSize: 13,
        color: '#000',
        marginTop: 14,
    },
    ellipse1:{
        tintColor: '#9893CF',
        width: 25,
        marginLeft: 20,
        marginTop: 15,
    },
    ellipse2:{
        tintColor: '#EFC5C5',
        width: 25,
        marginLeft: 20,
        marginTop: 10,
    },
    ellipse3:{
        tintColor: '#D1C3C3',
        width: 25,
        marginLeft: 20,
        marginTop: 10,
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
        backgroundColor: '#fff',
        padding:20,
        width: 320,
        marginLeft:1,
        marginRight: 15,
        borderRadius: 35,   
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