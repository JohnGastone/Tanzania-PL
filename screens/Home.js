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
import staOfTheWeek from '../assets/icons/data/starOfTheWeek';

const renderStarOfTheWeekItem = ({item}) => 
    {
        return (
            <View style={[styles.starOfTheWeekItemWrapper,
            {
                backgroundColor: item.selected ? purple : white ,
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
            <Image 
            source = {item.image} 
            style={styles.starOfTheWeekItemImage} />
            <Text style={styles.starOfTheWeekItemTitle}> {item.title} </Text>
            <View 
            style={[
                styles.starOfTheWeekSelectWrapper,
                {
                    backgroundColor: item.selected ? purple : white ,
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
            <View style={styles.starOfTheWeekWrapper}>
                    <Text style={styles.starOfTheWeekTitle}>Star of the Week</Text>
                    <View style={styles.starOfTheWeekListWrapper}>
                        <FlatList
                        data={starOfTheWeek}
                        renderItem={renderStarOfTheWeekItem}
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
    starOfTheWeekWrapper:{
        marginTop: 30,
    },
    starOfTheWeekTitle:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#fffff',
    },
    starOfTheWeekListWrapper:{
        paddingTop: 15,
        paddingBottom: 20,

    },
    starOfTheWeekItemWrapper:{
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
    starOfTheWeekItemImage:{
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    starOfTheWeekItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
        color: '#fffff'
    },
    starOfTheWeekSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,

    },
});