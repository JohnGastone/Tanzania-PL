import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    TextInput,
    TouchableOpacity,
    StatusBar,
    Pressable,
    ScrollView,
    Image,
 } from 'react-native';

 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather';
 import * as Animatable from 'react-native-animatable';
 import LinearGradient from 'react-native-linear-gradient';
 import {AuthContext} from '../components/context';
 

const SignIn = (navigation) => {

    const [data, setData] = React.useState({
        email: '',
           password: '',
           check_textInputChange: false,
           secureTextEntry: true,
    });

    const  { signIn }  = React.useContext(AuthContext);

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
        <View>
            <Text style={styles.textHeader}> Welcome! </Text>
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
                    />
                }

                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop: 15}}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {navigation.navigate('Home')}}
                />
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign,
                        {
                            color: '#fff',
                        }]}> Sign In</Text>
                    </LinearGradient>
                    <Pressable
                        onPress={() => navigation.navigate('Home')}
                        style={[styles.signIn, 
                            {
                            borderRadius: 10,
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15,
                        
                            }]}
                    >
                    
                    
                        <Text style={styles.textSign}> Sign Up </Text>
                    </Pressable>
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
      flexDirection: 'row',
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

    },
  textHeader: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: -170,
        marginTop: -60,
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
        color: 'black',
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
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },


});
export default SignIn;
