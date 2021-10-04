import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // justifyContent: 'flex-end',
        // justifyContent: 'flex-start',
        // justifyContent: 'center',
        justifyContent: 'space-around',
        // alignItems: 'center',
        // alignItems: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    boxOne: {
        // flex: 1,
        backgroundColor: 'violet',
        padding: 10,
        fontWeight: 'bold',
    },
    boxTwo: {
        // flex: 1,
        backgroundColor: 'gold',
        padding: 20,
        fontWeight: 'bold',
    },
    boxThree: {
        // flex: 1,
        backgroundColor: 'coral',
        padding: 30,
        fontWeight: 'bold',
    },
    boxFour: {
        // flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
        fontWeight: 'bold',
    }
});