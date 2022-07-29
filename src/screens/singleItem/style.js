import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ImageSingleProduct: {
        width: '100%',
        height: 280,
        borderRadius: 15,
        marginTop: 5
    },
    divider: {
        borderTopColor: 'lightgray',
        borderTopWidth: 8,
        width: 70,
        marginLeft: '45%'
    },
    buttonCheckout: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        backgroundColor: 'darkorange',
        width: 200
    },
    innerButton: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    productTitleDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 10
    },
    quantity: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nutriment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    descriptionContainer: {
        padding: 10
    },
    checkoutContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 5
    },
    productTitle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    productSubTitle: {
        fontSize: 15,
        color: '#b6b2b2'
    },
    number: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleGray: {
        color: '#b6b2b2',
        fontSize: 15
    },
    titleWeight: {
        fontWeight: 'bold',
        fontSize: 20
    },
    longTextGray: {
        color: '#b6b2b2',
    },
    readMore: {
        color: 'orange'
    },
    price: {
        color: 'darkorange',
        fontWeight: 'bold',
        fontSize: 25
    }
})

export default styles