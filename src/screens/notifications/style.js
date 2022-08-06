import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screenTitle: {
        fontSize: 20,
        fontWeight: '700'
    },
    markRead: {
        color: 'blue'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
    marginTop: 15
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        backgroundColor: '#e8e6e6',
        padding: 10,
        marginHorizontal: 6
    },
    absolute: {
        position: 'absolute',
        bottom: 20,
        left: 15
    }
})

export default styles