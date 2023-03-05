import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-gifted-charts';
const data = [
    { value: 20, color: '#F44336' },
    { value: 80, color: '#4CAF50' },
  ];

export default function Chart() {
    const pieData = [
        {value: 25, color: '#ff8e9b', text: '25% ',legend:'25% Rent'},
        {value: 19, color: '#219ff6', text: '19% ', legend: '19% Restaturants'},
        {value: 30, color: '#9ed764', text: '30% ', legend: '30% Drinks'},
        {value: 10, color: '#ffd38c', text: '10% ', legend: '10% Uber'},
        {value: 18, color: '#ff8711', text: '18% ', legend: '18% Groceries'},
      ];
      return (
        <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"white",marginTop:10}}>
          <PieChart
            donut
            showText
            textColor="white"
            innerRadius={70}
            // showTextBackground
            textBackgroundColor="white"
            textBackgroundRadius={22}
            labelsPosition={"outward"}
            data={pieData}
            focusOnPress
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 20,marginBottom:5 }}>
          {pieData.map((slice, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 10, height: 10, backgroundColor: slice.color, marginRight: 5 }} />
              <Text style={{fontSize:8}}>{slice.legend}</Text>
            </View>
          ))}
        </View>
        </View>
      );
    };