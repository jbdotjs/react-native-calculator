import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const TopSection = ({ selectedDigits }) => {
  // const regex = /÷|x|-|\+/g;
  // const [toDisplay, setToDisplay] = useState(selectedDigits);
  
  // useEffect(() => {
  //   let toSet = selectedDigits;
  //   const matches = selectedDigits.match(regex);
  //   matches?.map(match=>{
  //     toSet = toSet.concat(selectedDigits.split(match).join(match));
  //   })
  //   setToDisplay(toSet);
  // }, [selectedDigits])
  
  return (
    <View style={tailwind('h-1/2 flex pb-20 pl-10 pr-14 flex-col items-end justify-end rounded-2xl w-full')}>
      <Text style={tailwind('text-pink-400 font-bold text-4xl')}>{selectedDigits}</Text>
    </View>
  )
}

export default TopSection

const styles = StyleSheet.create({})
