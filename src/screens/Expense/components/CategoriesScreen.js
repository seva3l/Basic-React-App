import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Category from './Category'
import Color from '../../../util/ColorConstant'

const CategoriesScreen = ({route,navigation}) => {
  const {data}  = route.params
  return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:"white"}}>
      <View style={{height:50,backgroundColor:"white",justifyContent:"center",marginTop:10}}>
        <Text style={{padding:10,fontSize:18,fontWeight:'600',color: Color.PRIMARY_TEXT}}>All Spending Categories</Text>
      </View>
      {
        data.map(item => <Category logo={item.logo} name={item.name} value={item.value} label={item.label} key={item.id}/>)
      }
    </View>
    </ScrollView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})