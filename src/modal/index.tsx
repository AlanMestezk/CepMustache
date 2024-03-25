import { View, Text } from "react-native"

interface ModalProps{

    dataApi:{
        cep        : string
        logradouro : string
        complemento: string
        bairro     : string,
        localidade : string,
        uf         : string,
        ddd        : string
    }
}

export const ModalApp: React.FC<ModalProps> = ({dataApi})=>{

    return(

        <View>
            
            <Text>Cep: {dataApi.cep}</Text>
            <Text>Estado UF: {dataApi.uf}</Text>
            <Text>Cidade: {dataApi.localidade}</Text>
            <Text>Bairro: {dataApi.bairro}</Text>
            <Text>Logradouro: {dataApi.logradouro}</Text>
            <Text>Complemento: {dataApi.complemento}</Text>
            <Text>DDD: {dataApi.ddd}</Text>

        </View>
    )
}