
import { StyleSheet } from "react-native";


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
        marginBottom: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      },
      footer:{ 
        display: 'flex', 
        flexDirection :'row', 
        justifyContent: "center"
      },
      text:{
        fontSize: 16, 
        fontWeight:"bold" 
      },
      clickable: { 
        color: '#2196f3', 
        fontWeight: 'bold', 
        fontSize: 16 
      },
});