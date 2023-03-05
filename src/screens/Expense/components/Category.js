import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../../util/ColorConstant'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Category = ({logo,name,label,value}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: logo}}
      />
      <View style={{marginLeft:10}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>${value} spent</Text>
      </View>
      <TouchableOpacity style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Ionicons name="chevron-forward" size={20}/>
      </TouchableOpacity>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:"white",
        marginBottom:1,
        height:100,
        borderRadius:2,
        padding:10
    },
    logo: {
        width: 55,
        height: 55,
        borderRadius:55
    },
    name:{
        textTransform:'uppercase',
        fontWeight:'500',
        color: Color.SECONDARY_TEXT,
        fontSize:12
    },
    label:{
        textTransform: 'capitalize',
        fontWeight:'600',
        color: Color.PRIMARY_TEXT,
        fontSize:15
    },
    value:{
        fontWeight:'600',
        color: Color.PRIMARY_TEXT,
        fontSize:14,
        textAlign:"right"
    }
})