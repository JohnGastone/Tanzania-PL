import React, {useEffect} from 'react';
import { StyleSheet, Platform, View, ActivityIndicator,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import SignIn from './StackScreens/SignIn';
import SignUp from './StackScreens/SignUp';
import {AuthContext} from './components/context';
import StackNavigator from './navigation/StackNavigators';



const App = () =>{
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    
    const authContext = React.useMemo(() => 
    ({
        SignIn: () => {
          setUserToken('fgh');
          setIsLoading(false);
        },
        SignOut: () => {
          setUserToken(null);
          setIsLoading(false);            
        },
        SignUp: () => {
          setUserToken('fgh');
          setIsLoading(false);
        },

    }));
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    if (isLoading) {
        return (
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
    );
    }
  return(
    <AuthContext.Provider value={authContext} >
      <NavigationContainer style={styles.container}> 
        {userToken === null ? (<Tabs />) 
        : <StackNavigator/>
        }
        
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create
({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#48234E"
  },

});

export default App;