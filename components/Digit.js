import React, {useState, useEffect} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Digit = ({ paranCount, setParanCount, digit, selectedDigits, setSelectedDigits, textColor, bg, props }) => {

    const onPressIn = (e) => {
        if(digit==='( )'){
            const toConcat = paranCount%2===0 ? '(' : ')';
            setSelectedDigits(prev=>prev.concat(toConcat));
            setParanCount(prev=>prev+1);
            return;
        }
        if(digit==='<--') {
            setSelectedDigits(prev=>prev.slice(0,-1));
            return;
        }
        if(digit==='C'){
            setParanCount(prev=>0);
            setSelectedDigits(prev=>'');
            return;
        }
        if(digit==='+/-'){
            let toSet = selectedDigits;
            if(toSet[0]==='+') toSet = toSet.replace('+','-');
            else if(toSet[0]==='-') toSet = toSet.replace('-','+');
            else toSet = `-${selectedDigits}`
            setSelectedDigits(toSet);
            return;
        }
        if(digit==='='){
            try{
                const toEval = selectedDigits.replace(/x/g, '*').replace(/÷/g, '/');
                const result = eval(`${toEval}`);
                const resToPush = `${result}`.slice(0,11);
                setSelectedDigits(prev=>`${resToPush}`);
            } catch (err) {
                console.log(err)
                return;
            }
            return;
        }
        setSelectedDigits(prev=>prev+`${digit}`);
    };

    return (
        <View style={[
            tailwind(`mx-1 my-2 rounded-lg ${bg}`)
        ]}>
            <Pressable
                android_ripple={{ color: 'lightpink', borderless: true, radius: 100 }}
                onPressIn={onPressIn}
            >
                <Text style={[
                    { textAlignVertical: 'center' },
                    tailwind(`w-16 h-14 text-center text-4xl ${textColor}`)
                ]}>
                    {digit}
                </Text>
            </Pressable>
        </View>
    )
}

export default Digit

const styles = StyleSheet.create({

});