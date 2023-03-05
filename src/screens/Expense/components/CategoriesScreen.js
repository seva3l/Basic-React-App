import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../../util/ColorConstant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Menu from '../../../components/Menu'

const CategoriesScreen = ({route,navigation}) => {
  const {data}  = route.params

  const RightSideComponent = () =>{
    return(
      <TouchableOpacity style={styles.button}>
        <Ionicons color={"black"} name="chevron-forward" size={20}/>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>All Spending Categories</Text>
      </View>
      {
        data.map(item => <Menu component={<RightSideComponent/>} logo={item.logo} name={item.name} value={item.value} label={item.label} key={item.id}/>)
      }
    </View>
    </ScrollView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Color.WHITE
  },
  titleContainer:{
    height:50,
    backgroundColor:"white",
    justifyContent:"center",
    marginTop:10
  },
  title:{
    padding:10,
    fontSize:18,
    fontWeight:'600',
    color: Color.PRIMARY_TEXT
  },
  button:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  }

})