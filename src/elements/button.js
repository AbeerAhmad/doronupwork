import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'

export const Button = ({ mode = "light", style, icon, children, ...props }) => {
    return (
        <TouchableOpacity style={[{ backgroundColor: mode == "dark" ? colors.black : colors.white }, styles.container, style]}  >
            {
                icon ? icon : null
            }
            <Text style={[{ color: mode == "dark" ? colors.white : colors.black }, styles.text]}>
                {children}
            </Text>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        flexDirection: 'row'


    },
    text: {
        fontSize: 17,
        fontWeight: "400"
    }
})