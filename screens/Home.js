import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    FlatList,
    
}
from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import latest from '../assets/icons/data/latest';
import stars from '../assets/icons/data/stars'

{/* Function to render Latest news data */}
const renderLatestItem = ({item}) => 
    {
        return (
            <View style={[styles.LatestItemWrapper,
                {
                    backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                    marginLeft: item.id == 1 ? 20 : 0,
                }]}
            >
                <Image 
                    source = {item.image} 
                    style={styles.latestItemImage} 
                />
                <Text style={styles.latestItemTitle}> {item.title} </Text>
                <View 
                    style={[
                        styles.latestSelectWrapper,
                        {
                            backgroundColor: item.selected ? '#fffff' : '#f4cd6' ,
                        }
                        ]}>
                
                </View>

            </View>
        );
    };

{/* Function to render Star of the Week data */}
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
        <ScrollView>
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

                {/* Latest News */}
                <View style={styles.latestWrapper}>
                        <Text style={styles.latestTitle}>Latest News </Text>
                        <View style={styles.latestListWrapper}>
                            <FlatList
                                data={latest}
                                renderItem={renderLatestItem}
                                keyExtractor={item => item.id}
                                horizontal={ true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>

                {/* Star of the Week */}
                <View style={styles.starsWrapper}>
                        <Text style={styles.starsTitle}>Stars of the Week</Text>
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
        </ScrollView>
    );
}
 
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#48234E',
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
    latestWrapper:{
        marginTop: 10,
    },
    latestTitle:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    latestListWrapper:{
        paddingTop: 15,
        paddingBottom: 20,
    },
    LatestItemWrapper:{
        backgroundColor: '#f3d4d3',
        marginRight: 20,
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height:0,
        },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 0,
    },
    latestItemImage:{
        width: 210,
        height: 125,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10
    },
    latestItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
        color: '#000000'
    },
    latestSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,

    },
    starsWrapper:{
        marginTop: 5,
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
        backgroundColor: '#F3D4d3',
        marginRight: 20,
        borderRadius: 15,   
        shadowColor: '#000000',
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.0,
        shadowRadius: 15,
        elevation: 0,
    },
    starsItemImage:{
        width: 80,
        height: undefined,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10
    },
    starsItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
        color: '#000000'
    },
    starsSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,

    },
});