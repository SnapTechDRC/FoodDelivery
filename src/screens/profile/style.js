import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    imagesProfile: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    topSection: {
        flexDirection: 'row'
    },
    names: {
        marginTop: 10,
        marginLeft: 26
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 18
    },
    name: {
        fontSize: 22,
        fontWeight: '500',
        color: '#000'
    },
    role: {
        fontSize: 14,
        color: '#b6b2b2',
        fontWeight: '500',
        marginTop: 8
    },
    statusContainer: {
        marginTop: 35
    },
    statusTitle: {
        color: '#b6b2b2',
        fontSize: 14
    },
    statusBG: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderRadius: 40,
        marginRight: 20,
        marginLeft: 3
    },
    statusFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 18
    },
    statusText: {
        color: '#e4dfdf',
        fontSize: 18,
        fontWeight: '400'
    },
    inputGroup: {
        marginTop: 20
    },
    input: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingLeft: 30
    },
    Joined: {
        marginTop: 50,
        marginBottom: 7
    }
})

export default styles