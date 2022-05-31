import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList
}
from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import stars from '../assets/icons/data/stars';

const renderStarsItem = ({item}) => 
    {
        return (
            <View style={[styles.starsItemWrapper,
            {
                backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
            <Image 
            source = {item.image} 
            style={styles.starsItemImage} />
            <Text style={styles.starsItemTitle}> {item.title} </Text>
            <View 
            style={[
                styles.starsSelectWrapper,
                {
                    backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                }
                ]}>
               
            </View>

            </View>
        );
    };

const HomeScreen = ({navigation}) => {
    return(
        <View style={StyleSheet.container}>
            {/* Header */}
            <SafeAreaView>
                    <View style={styles.headersWrapper}>
                        <Image 
                        source={require('../assets/icons/NBC_PL.png')}
                        style={styles.profileImage}
                        />
                        <Feather name='menu' size={28} color={'fffff'}/>
                    </View>
            </SafeAreaView>

            {/* Star of the Week */}
            <View style={styles.starsWrapper}>
                    <Text style={styles.starsTitle}>Star of the Week</Text>
                    <View style={styles.starsListWrapper}>
                        <FlatList
                            data={stars}
                            renderItem={renderStarsItem}
                            keyExtractor={item => item.id}
                            horizontal={ true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

        </View>
    );
}
 
export default HomeScreen;

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
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    starsWrapper:{
        marginTop: 30,
    },
    starsTitle:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    starsListWrapper:{
        paddingTop: 15,
        paddingBottom: 20,

    },
    starsItemWrapper:{
        backgroundColor: '#F3D43',
        marginRight: 20,
        borderRadius: 20,   
        shadowColor: '#fffff',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    starsItemImage:{
        width: 50,
        height: 50,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode:'contain',
    },
    starsItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
        color: '#ffffff'
    },
    starsSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,

    },
});