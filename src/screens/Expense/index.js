import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import styles from './_styles'
import Chart from './components/Chart'
import Menu from '../../components/Menu'
import Color from '../../util/ColorConstant'

const data = [
  {
    id: 1,
    logo: "https://thumbs.dreamstime.com/b/eco-house-icon-vector-green-house-electric-plug-sign-electricity-green-energy-concept-graphic-design-logo-web-eco-219264086.jpg",
    name: "Home & Utilities",
    label: "Personal Savings",
    value: "3296,98"
  },
  {
    id: 2,
    logo: "https://cdn-icons-png.flaticon.com/512/5219/5219574.png",
    name: "Travel",
    label: "BofA Checkings",
    value: "3296,98"
  },
  {
    id: 3,
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969323.png",
    name: "Ride Sharing",
    label: "Robinhood Cash",
    value: "3296,98"
  },
  {
    id: 4,
    logo: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png",
    name: "Groceries",
    label: "Coinbase USD",
    value: "3296,98"
  },
  {
    id: 5,
    logo: "https://cdn-icons-png.flaticon.com/512/168/168558.png",
    name: "Drinks",
    label: "Coinbase USD",
    value: "3296,98"
  },
  {
    id: 6,
    logo: "https://cdn-icons-png.flaticon.com/512/1040/1040986.png",
    name: "Rent",
    label: "Coinbase USD",
    value: "3296,98"
  }
]

const ExpenseScreen = () => {
  const navigation = useNavigation()

  const RightSideComponent = () =>{
    return(
      <TouchableOpacity style={styles.button}>
        <Ionicons color={"black"} name="chevron-forward" size={20}/>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:"white"}}>
      <Chart/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top Spending Categories</Text>
      </View>
      {
        data.map(item => <Menu component={<RightSideComponent/>} logo={item.logo} name={item.name} value={item.value} label={item.label} key={item.id}/>)
      }
      <View style={styles.viewCategoriesContainer}>
        <Text style={{textAlign:"center",color: Color.SECONDARY_TEXT,fontSize:16}}>View All Categories</Text>
        <TouchableOpacity 
          onPress={ () => navigation.navigate("Expenses",{data:data})}
          style={styles.button}>
          <Ionicons color={"black"} name="chevron-forward" size={20}/>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default ExpenseScreen