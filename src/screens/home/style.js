import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    container: {
        marginBottom: 60,
        paddingHorizontal: 5
    },
    ImageHomeTop: {
        width: '100%',
        height: 150,
        borderRadius: 15,
        marginTop: 5
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
        borderColor: '#d3d3d369',
        borderWidth: 2,
        marginTop: 5,
        borderRadius: 5
    },
    TextInput: {
        flex: 1
    },
    inlineFoodMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        height: '10%'
    },
    FoodMenuItems: {
        height: 88,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        backgroundColor: 'darkorange',
    },
    textWhite: {
        color: 'lightgray',
        marginTop: 5
    },
    textGray: {
        color: 'gray',
        marginTop: 5
    },
    burgerImage: {
        width: '100%',
        height: 200
    },
    foodHomeContainer: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    foodHomeItem: {
        flexGrow: 1,
        flexBasis: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginVertical: 3,
        paddingBottom: 5,
        marginHorizontal: 3
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    priceContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    priceText: {
        color: 'darkorange', 
        fontWeight: 'bold', 
        fontSize: 15
    }
})

export default styles