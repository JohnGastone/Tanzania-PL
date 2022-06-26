import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Image,
    Pressable
 } from 'react-native';

 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather';
 import * as Animatable from 'react-native-animatable';
 import LinearGradient from 'react-native-linear-gradient';
 

const SignUp = (navigation) => {

    const [data, setData] = React.useState({
        email: '',
           password: '',
           check_textInputChange: false,
           secureTextEntry: true,
    });

    const textInputChange = (val) => {{
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else { 
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    }}

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

  return (
    <ScrollView>
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <View style={styles.headersWrapper}>
            
            <Image 
            source={require('../assets/icons/NBC_PL.png')}
            style={styles.profileImage}
            />
        </View>
        <View style={styles.headersWrapper}>
            <Text style={styles.textHeader}> Register!  </Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footersWrapper}
        >
            <Text style={styles.textFooter}> Email </Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o" 
                    size={20} 
                    color="#05375a" 
                />
                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange({val})}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
                </Animatable.View>
                : null}
            </View>
            <Text style={styles.textFooter}> Password </Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20} 
                    color="#05375a"
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none" 
                    onChangeText={(val) => handlePasswordChange({val})}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ? 
                <Feather 
                    name="eye-off"
                    color="grey"
                    size={20}
                />
                :
                <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                />}

                </TouchableOpacity>
            </View>
            <Text style={styles.textFooter}>Confirm Password </Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20} 
                    color="#05375a"
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none" 
                    onChangeText={(val) => handlePasswordChange({val})}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ? 
                <Feather 
                    name="eye-off"
                    color="grey"
                    size={20}
                />
                :
                <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                />}

                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign,
                        {
                            color: '#fff',
                        }]}> Sign Up</Text>
                    </LinearGradient>
                    <LinearGradient 
                       colors={['#08d4c4', '#01ab9d']}
                       style={styles.signUp} 
                    >
                    <Pressable
                        onPress={() => navigation.navigate('SignUp')}
                        style={[styles.signIn, 
                            {
                            borderRadius: 10,
                            borderColor: '#009387',
                            borderWidth: 0,
                            marginTop: 2,                      
                            }]}
                    >                                        
                    <Text style={styles.textSign}> Sign In </Text>
                    </Pressable>
                    </LinearGradient>
                    </View>
        </Animatable.View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#009387',
    justifyContent: 'center',
  },
  headersWrapper: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
  },
  profileImage:{
    width: 70,
    height: 70,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 40,
},
  footersWrapper: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '100%',
        marginTop: -30

    },
  textHeader: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: -170,
      marginTop: -70,
      marginBottom: 10,
  },
  textFooter: {
        color: '#3AA78D',
        fontSize: 18,
  },
  action:{
      flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginBottom: 20,
  },
    textInput: {
        flex: 1,
        marginTop: -13,
        paddingLeft: 10,
        color: '#000',
    },
  button: {
    alignItems: 'center',
    marginTop: -8,
    color: '#009387',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUp:{
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },


});
export default SignUp;
