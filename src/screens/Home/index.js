import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Chart from './components/Chart'
import Menu  from '../../components/Menu'
import styles from './_styles'

const data = [
  {
    id: 1,
    logo: "https://theme.zdassets.com/theme_assets/586236/49e4904c4910a8ebf63b67d41f9b98b6b0933275.png",
    name: "Wealthfront",
    label: "Personal Savings",
    value: "9,2875"
  },
  {
    id: 2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQle7oXGrGg4_1oCsAk7n6-Qx7-L-sI7vArBg&usqp=CAU",
    name: "Bank of America",
    label: "BofA Checkings",
    value: "12,030"
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Robinhood_Logo.png",
    name: "Robinhood",
    label: "Robinhood Cash",
    value: "7,123"
  },
  {
    id: 4,
    logo: "https://infosec-jobs.com/media/company/logo/23/02/A9yYenz3_400x400.png",
    name: "Coinbse Pro",
    label: "Coinbase USD",
    value: "15,712"
  }
]

const HomeScreen = () => {

  const RightSideComponent = ({value}) =>{
      return( 
      <View style={{flex:1}}>
        <Text style={styles.value}>${value}</Text>
      </View>
    )
  }
  return (
    <ScrollView>
    <View style={{flex:1}}>
      <Chart/>
      {
        data.map(item => <Menu logo={item.logo} name={item.name} label={item.label} value={item.value} key={item.id} component={<RightSideComponent value={item.value}/>}/>)
      }
    </View>
    </ScrollView>
  )
}

export default HomeScreen
