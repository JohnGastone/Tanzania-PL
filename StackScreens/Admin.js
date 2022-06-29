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

const Admin = (navigation) => {

    
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

                {/* Admin Header */}
                <View style={styles.headerTitle}>
                    <Text style={styles.textHeader}> Welcome Admin!  </Text>
                </View>
                <View>
                <Text style={styles.text1}>
                        Maafisa wa mechi wanawajibika kukusanya taarifa zote muhimu kuhusiana na michezo yote inayochezwa katika msimu husika. 
                        Hii ni pamoja na taarifa za timu zilizoshiriki mchezo husika, wachezaji, muda na tarifa zote muhimu zitazosaidia kutengenza Ripoti
                        ya mchezo husika.
                </Text>
                </View>

                {/* New user button */}            
                <View style={styles.inUp}>
                        <TouchableOpacity>
                            <Pressable style={styles.button2} onPress={() => navigation.navigate('ExportPDF')}>
                                <Text style={styles.text}>Create Match Report</Text>
                            </Pressable>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Pressable style={styles.button3} onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.text}>Add New Official</Text>
                            </Pressable> 
                        </TouchableOpacity> 
                </View>
                
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
      paddingBottom: 700,
  },
  text1:{
    color:  'black', 
    marginTop: -659, 
    justifyContent: 'center',
    marginLeft: 15
  },
  textHeader: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: -150,
    marginTop: -700,
  },
  profileImage:{
    width: 70,
    height: 70,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 40,
  },
  inUp:{
    flexDirection: 'row'
  },
  button2:{          
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 1,
    backgroundColor: '#3AA78D',
    marginTop: -570,
    width: 149,
    marginLeft: 20,
    height: 42, 

},
button3:{
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 1,
    backgroundColor: '#3AA78D',
    marginTop: -570,
    width: 149,
    marginLeft: 20,
    height: 42, 


},

  
});
export default Admin;
