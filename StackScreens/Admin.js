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
                <View style={{marginLeft: 20, marginTop: -90}}>
                <Text style={{color:  'black', marginTop: -570, justifyContent: 'center'}}>
                        Ligi Kuu Tanzania Bara hatufanyi kazi kwa kujitenga. Tunafanya kazi kwa bidii na kwa njia inayojenga na 
                        Vilabu vyetu Wanachama na mamlaka nyingine za kandanda ili kuboresha ubora wa soka, 
                        nchini Tanzania na duniani kote.
                </Text>
                <Text style={{color:  'black', marginTop: -370, justifyContent: 'center'}}>
                        Ligi Kuu Tanzania Bara hatufanyi kazi kwa kujitenga. Tunafanya kazi kwa bidii na kwa njia inayojenga na 
                        Vilabu vyetu Wanachama na mamlaka nyingine za kandanda ili kuboresha ubora wa soka, 
                        nchini Tanzania na duniani kote.
                </Text>
                <Text style={{color:  'black', marginTop: -570, justifyContent: 'center'}}>
                        Ligi Kuu Tanzania Bara hatufanyi kazi kwa kujitenga. Tunafanya kazi kwa bidii na kwa njia inayojenga na 
                        Vilabu vyetu Wanachama na mamlaka nyingine za kandanda ili kuboresha ubora wa soka, 
                        nchini Tanzania na duniani kote.
                </Text>
                <Text style={{color:  'black', marginTop: -570, justifyContent: 'center'}}>
                        Ligi Kuu Tanzania Bara hatufanyi kazi kwa kujitenga. Tunafanya kazi kwa bidii na kwa njia inayojenga na 
                        Vilabu vyetu Wanachama na mamlaka nyingine za kandanda ili kuboresha ubora wa soka, 
                        nchini Tanzania na duniani kote.
                </Text>
                <Text style={{color:  'black', marginTop: -570, justifyContent: 'center'}}>
                        Ligi Kuu Tanzania Bara hatufanyi kazi kwa kujitenga. Tunafanya kazi kwa bidii na kwa njia inayojenga na 
                        Vilabu vyetu Wanachama na mamlaka nyingine za kandanda ili kuboresha ubora wa soka, 
                        nchini Tanzania na duniani kote.
                </Text>
                <Text style={{color:  'black', marginTop: -570, justifyContent: 'center'}}>
                        Ligi Kuu Tanzania Bara hatufanyi kazi kwa kujitenga. Tunafanya kazi kwa bidii na kwa njia inayojenga na 
                        Vilabu vyetu Wanachama na mamlaka nyingine za kandanda ili kuboresha ubora wa soka, 
                        nchini Tanzania na duniani kote.
                </Text>
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
  headerTitle:{

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
  
});
export default Admin;
