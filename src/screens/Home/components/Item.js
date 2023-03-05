import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Color from '../../../util/ColorConstant'

const Item = ({logo,name,label,value}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: logo}}
      />
      <View style={{marginLeft:10}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={{flex:1}}>
        <Text style={styles.value}>${value}</Text>
      </View>
    </View>
  )
}

export default Item

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