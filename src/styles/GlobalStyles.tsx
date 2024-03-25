import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        header:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40
        },
        txtTitle:{
            fontSize: 40,
            fontWeight: 'bold',
            
        },
        img:{
            width: 100,
            height: 120
        },
        viewInputText:{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        text:{
            margin: 25,
            fontSize: 25,
            fontWeight: 'bold',
            color: '#168dee'
        },
        input:{
            backgroundColor: 'aliceblue',
            borderBottomWidth: 3,
            borderColor: '#168dee',
            borderRadius: 13,
            width: '80%',
            height: 50,
            textAlign: 'center',
            padding: 10,
            fontSize: 22,
            color: '#168dee',
            fontWeight: 'bold'
        },
        viewButtons:{
            flexDirection: 'row',
            alignItems:'center',
            marginTop: 40,
            justifyContent: 'space-around',
            width: '100%'
        },
        button:{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            borderRadius: 15,
            backgroundColor: '#2a9210',
        },
        txtButton:{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
        },
        result: {
            marginTop: 70,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'white', // Adicionei um fundo branco para garantir que os textos sejam visíveis
        },
        textResult: {
            fontSize: 20,
            fontFamily: 'Roboto', // Substitua 'Roboto' pela fonte desejada
            color: 'black',
            marginBottom: 5,
            fontWeight: 'bold'
        }
    }
)