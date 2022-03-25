import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants'
import { Button } from '../../../elements'
import { Icon } from '../../../elements'
const actions = ['Crop', 'Remove BG', "To front", 'Delete']
export const BottomControls = () => {
    return (
        <View style={styles.container}>

            <View style={styles.aiWrapper}>

                {
                    actions.map((item, i) => {
                        return <View key={i} style={styles.actions} >
                            <Icon style={styles.aicons} />
                            <Text>
                                {item}
                            </Text>
                        </View>

                    })
                }

            </View>
            <View style={styles.abWrapper}>
                <Button icon={<Icon style={{ marginRight: 10 }} />} style={styles.actionButton}>
                    Add Text
                </Button>
                <Button icon={<Icon style={{ marginRight: 10 }} />} style={styles.actionButton}>
                    Add Image
                </Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.secondary,
    },
    abWrapper: {
        flexDirection: 'row',
        justifyContent: 'center', marginTop: 20, marginBottom: 5
    },
    actionButton: {
        margin: 5,
        paddingVertical: 15
    },
    aiWrapper: {
        flexDirection: 'row',
        paddingBottom: 15,
        borderBottomColor: "rgba(0,0,0,0.2)", borderBottomWidth: 0.5,

    },
    aicons: {
        marginVertical: 4
    },
    actions: { flex: 1, padding: 10, borderRightColor: "rgba(0,0,0,0.2)", borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }
})