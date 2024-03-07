import { StyleSheet} from "react-native";

export default style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 40,
        color: '#2196f3',
      },
      image: {
          with: 40,
          height: 40,
      },
      input: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 100,
        marginBottom: 16,
        paddingHorizontal: 10,
        marginVertical: 10,
        padding: 10, 
        backgroundColor: '#ebf4fc', 
      },
      button: {
        backgroundColor: '#2196f3',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      },

      

      OnboardingScreen: {
        slideWrapper: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20
        },
        slide: {
        
        },
        slideImage: {
            height: '75%', 
            width, 
            resizeMode: 'cover', 
            paddingHorizontal: 10
        },
        subtitle: {
            color: COLORS.white,
            fontSize: 13,
            marginTop: 10,
            maxWidth: '70%',
            textAlign: 'center',
            lineHeight: 23
        },
        indicator: {
            height: 2.5,
            width: 10, 
            backgroundColor: 'grey',
            marginHorizontal: 3,
            borderRadius: 2
        },
        btn: {
            flex: 1,
            height: 50,
            borderRadius: 5,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
});