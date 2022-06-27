import React, {Component} from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView
}
from 'react-native';




const MoreScreen = ({navigation}) => {
    const { onPress} = navigation;
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
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.backButtonText}>Back</Text>
                            </Pressable>
                                
                        </TouchableOpacity>
                    </View>
                    {/* Sign In / Sign Up Buttons */}
                    <View style={styles.inUp}>
                        <TouchableOpacity>
                            <Pressable style={styles.button2} onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.text}>Sign In</Text>
                            </Pressable>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Pressable style={styles.button3} onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.text}>Create New Account</Text>
                            </Pressable> 
                        </TouchableOpacity> 
                    </View>              
                    
                    {/* Favorite Team Button */}
                    <View>
                        <View>
                            <Text style={styles.favoriteTeam}>Favorite Team</Text>
                            <Pressable style={styles.button} onPress={()=> navigation.navigate('Home')}>
                                <Text style={styles.text}>Namungo Fc</Text>
                            </Pressable>
                            <Pressable style={styles.button1} onPress={() => navigation.navigate('Home') }>
                                <Text style={styles.text}>Official Website</Text>
                            </Pressable>
                        </View>
                    {/* Clubs */}
                        <View>
                            <Text style={styles.favoriteTeam}>Clubs</Text>
                            <Pressable style={styles.button1} onPress={()=> navigation.navigate('Home')}>
                                <Text style={styles.text}>Clubs</Text>
                            </Pressable>
                        </View>
                    {/* Transfers */}
                        <View>
                            <Text style={styles.favoriteTeam}>Transfers</Text>
                            <Pressable style={styles.button1} onPress={()=>navigation.navigate('Transfers')}>
                                <Text style={styles.text}>Transfers</Text>
                            </Pressable>
                        </View>
                    {/* Referees */}
                        <View>
                            <Text style={styles.favoriteTeam}>Referees</Text>
                            <Pressable style={styles.button1} onPress={()=> navigation.navigate('Referee')}>
                                <Text style={styles.text}>Referees</Text>
                            </Pressable>
                        </View>

                    {/* About us */}
                        <View>
                            <Text style={styles.favoriteTeam}>About Us</Text>
                            <Pressable style={styles.button} onPress={()=> navigation.navigate('LigiKuu')}>
                                <Text style={styles.text}>NBC Premier League</Text>
                            </Pressable>
                            <View>
                                <Pressable style={styles.button1} onPress={()=> navigation.navigate('Home')}>
                                    <Text style={styles.text}>TPL Board</Text>
                                </Pressable>
                            </View>
                            <View>
                                <Pressable style={styles.button1} onPress={()=> navigation.navigate('Home')}>
                                    <Text style={styles.text}>Our History</Text>
                                </Pressable>
                            </View>
                           
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
        marginBottom: -20
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
    inUp:{
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#3AA78D',
        width: 320,
        marginLeft: 20,
        paddingLeft: 30,
        paddingRight: 30,
        height: 42,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    favoriteTeam:{
        fontSize: 20,
        lineHeight: 23,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginTop: 10,
        marginBottom: 2,
        padding: 10,
    },
    button1: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 1,
            backgroundColor: '#3AA78D',
            marginTop: 10,
            width: 320,
            marginLeft: 20,
            height: 42, 
    },
    button2:{          
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 1,
            backgroundColor: '#3AA78D',
            marginTop: 10,
            width: 110,
            marginLeft: 20,
            height: 42, 

    },
    button3:{
        paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 1,
            backgroundColor: '#3AA78D',
            marginTop: 10,
            width: 187,
            marginLeft: 20,
            height: 42, 


    },


});