import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    },
    ImageSingleProduct: {
        width: '100%',
        height: 450,
        marginBottom: 10
    },
    divider: {
        borderTopColor: 'lightgray',
        borderTopWidth: 5,
        width: 70,
        marginLeft: '45%',
        marginBottom: 5
    },
    buttonOrder: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        backgroundColor: 'darkorange',
        width: '100%'
    },
    innerButton: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    customHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        position: 'absolute',
        top: 30
    },
    backIcon: {
        borderRadius: 7,
        shadowColor: 'gray',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 6,
        paddingTop: 10,
        paddingHorizontal: 13
    },
    headerText: {
        fontSize: 18,
        marginTop: 7,
        fontWeight: 'bold',
        color: '#fff'
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10
    },
    deliverSection: {
        flexDirection: 'row'
    },
    deliverPhone: {
        position: 'absolute',
        right: 5,
        flexDirection: 'row',
        top: 10
    },
    deliverName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:5,
        color: 'black',
        marginTop: 6
    },
    deliverAdress: {
        fontWeight: 'bold',
        color: '#b6b2b2'
    }, 
    iconContainer: {
        backgroundColor: 'darkorange',
        padding: 6,
        borderRadius: 50
    },
    onWayContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 10
    },
    dotContainer: {
        borderColor: '#b6b2b2',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        marginRight: 10
    },
    onWayTextBig: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    coloredText: {
        color: 'darkorange',
        marginLeft: 100
    },
    onWayTextSmall: {
        color: '#b6b2b2'
    }
})

export default styles