import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15
    },
    left: {
        position: 'absolute',
        right: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderRadius: 16
    },
    BGBlue: {
        backgroundColor: '#6900ff'
    },
    BGOrange: {
        backgroundColor: '#ff5e00'
    },
    bottom: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        width: '100%'
    }
})

export default styles