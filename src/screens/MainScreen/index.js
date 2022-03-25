import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants'
import { BottomControls, ImageContainer, TopControls } from './components'
const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TopControls />


                <ImageContainer />
            </View>
            <View>
                <BottomControls />
            </View>
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'space-between'
    }
})