
import { StyleSheet } from "react-native";


export default style = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        height: 45,
        width: 45,
    
    },
    titlesWrapper: {
        marginLeft: 8,
    
    },
    title: {
        fontSize: 15,
    },
    subTitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#A54A881',
    },
    rightWrapper: {
        alignItems: 'flex-end'
    },
    card: {
        width: Dimensions.get('window').width-20,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 5
      },
});