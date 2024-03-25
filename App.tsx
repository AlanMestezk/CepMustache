import { api }          from './src/services/api';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, Modal, Keyboard, Image } from 'react-native';
import { GlobalStyles } from './src/styles/GlobalStyles';
import { useEffect, useState } from 'react';
import { ModalApp } from './src/modal';

export default function App() {

  const [cep,         setCep] = useState<string>('')
  const [resApi,   setResApi] = useState<any | null>(null)

  const buscar = async ()=>{


    setCep('')

    if(cep === ''){

      alert('DIGITE UM CEP VÁLIDO')
      setCep('')

      return
    }

    try {

      const response: string | any = await api.get(`/${cep}/json`)

      Keyboard.dismiss()//fechar teclado

      setResApi(response.data)
      
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        alert('CEP não encontrado, digite um CEP válido')
      } else {
        console.log(`Não foi possível retornar os dados da API: ${error}`)
      }
    }

    
  }

  return (


    <View style={GlobalStyles.container}>

      <View style={GlobalStyles.header}>

        <Text style={GlobalStyles.txtTitle}>CEP</Text>

        <Image
          source={require('./src/assets/CMI.png')}
          style={GlobalStyles.img}
        />

        <Text style={GlobalStyles.txtTitle}>Mustache</Text>

      </View>

      <View style={GlobalStyles.viewInputText}>

        <Text style={GlobalStyles.text}>Busque o cep desejado</Text>

        <TextInput
          style={GlobalStyles.input}
          placeholder='Ex: 08855122'
          value={cep}
          onChangeText={(cepDig)=> setCep(cepDig)}
          keyboardType='numeric'
        />

      </View>

      <View style={GlobalStyles.viewButtons}>

          <TouchableOpacity 
            style={GlobalStyles.button}
            onPress={buscar}
          >  
            <Text style={GlobalStyles.txtButton}>Buscar</Text>
          </TouchableOpacity>


      </View>


      <View style={GlobalStyles.result}>

          {
            resApi && 
            <>
              <Text style={GlobalStyles.textResult}>CEP: {resApi ? resApi.cep : ''}</Text>
              <Text style={GlobalStyles.textResult}>Estado UF: {resApi ? resApi.uf : ''}</Text>
              <Text style={GlobalStyles.textResult}>Cidade: {resApi ? resApi.localidade : ''}</Text>
              <Text style={GlobalStyles.textResult}>Bairro: {resApi ? resApi.bairro : ''}</Text>
              <Text style={GlobalStyles.textResult}>Rua: {resApi ? resApi.logradouro : ''}</Text>
              <Text style={GlobalStyles.textResult}>Complemento: {resApi ? resApi.complemento : ''}</Text>
            </>
          }


      </View>

      
    </View>


  );
}

