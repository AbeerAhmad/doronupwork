import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'
import { Button, Icon } from '../../../elements'

export const TopControls = () => {
    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <Button icon={<Icon style={{ marginRight: 5 }} />}>
                    Cancel
                </Button>

                <Button icon={<Icon style={styles.whiteIcon} />} mode='dark'>
                    Save
                </Button>

            </View>


            <View style={styles.topBar}>
                <View style={styles.cbWrapper}>
                    <TouchableOpacity style={styles.touchablecircle}>
                        <Icon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchablecircle}>
                        <Icon />
                    </TouchableOpacity>
                </View>
                <View style={styles.cbWrapper}>
                    <TouchableOpacity style={styles.touchablecircle}>
                        <Icon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchablecircle}>
                        <Icon />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({

    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    , container: {
        padding: 20,
        justifyContent: 'space-between',
        height: 200
    },
    touchablecircle: {
        backgroundColor: colors.secondary,
        height: 35,
        width: 35,
        borderRadius: 18, margin: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cbWrapper: {
        flexDirection: 'row'
    },
    whiteIcon: { marginRight: 5, color: colors.white }

})