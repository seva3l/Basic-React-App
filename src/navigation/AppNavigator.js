import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpenseScreen from '../screens/Expense';
import HomeScreen from '../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Color from '../util/ColorConstant'
import CategoriesScreen from '../screens/Expense/components/CategoriesScreen';
import PortfolioScreen from '../screens/Portfolio';
import BankScreen from '../screens/Bank';
import MoreScreen from '../screens/More';
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MyTabs = () =>{
    return(
        <BottomTab.Navigator
            
        screenOptions={({ route }) => ({
            headerTitleAlign:'center',
            headerTintColor: Color.WHITE,
            headerStyle: {
                backgroundColor: Color.PRIMARY,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused? 'home': 'home-outline';
              } else if (route.name === 'Expense') {
                iconName = focused ? 'pie-chart' : 'pie-chart-outline';
              } else if (route.name === 'More'){
                iconName = focused ? 'ellipsis-horizontal-sharp' : 'ellipsis-horizontal-sharp'
              } else if(route.name === "Portfolio"){
                iconName = focused ? 'bar-chart' : 'bar-chart-outline'
              }else if(route.name === "Bank"){
                iconName = focused ? 'briefcase' : 'briefcase-outline'
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Color.PRIMARY,
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <BottomTab.Screen 
            name="Home" 
            component={HomeScreen}
            />
            <BottomTab.Screen name="Expense" component={ExpenseScreen}/>
            <BottomTab.Screen name="Portfolio" component={PortfolioScreen}/>
            <BottomTab.Screen name="Bank" component={BankScreen}/>
            <BottomTab.Screen name="More" component={MoreScreen}/>
        </BottomTab.Navigator>
    )
}

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Color.WHITE,
        headerStyle:{
          backgroundColor: Color.PRIMARY
        }
      }}
    >
        <Stack.Screen options={{headerShown:false}} name="Tabs" component={MyTabs}/>
        <Stack.Screen name="Expenses" component={CategoriesScreen}/>
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})