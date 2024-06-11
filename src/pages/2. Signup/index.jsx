import { View, Image, TouchableOpacity, Text, TextInput } from "react-native"; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação do React Native
import { estilo } from './style'; // Importando estilos do arquivo style

export default function Signup() {
  const navigation = useNavigation(); // Hook de navegação

  return (
    <View style={estilo.all}>
      {/* Cabeçalho com o logo */}
      <View style={estilo.header}>
        <Image
          source={require('../../../assets/Logo.png')}
          style={estilo.logo}
        />
      </View>

      {/* Corpo com o formulário de registro */}
      <View style={estilo.body}>
        {/* Título da página de registro */}
        <View style={estilo.registration_title}>
          <Text style={{ color: '#fff', width: '75.65%' }}>SIGN-UP</Text>
        </View>

        {/* Inputs de registro */}
        <View style={estilo.setInputs}>
          <TextInput
            placeholder="EMAIL"
            style={estilo.input}
          />
          <TextInput
            placeholder="USUARIO"
            style={estilo.input}
          />
          <TextInput
            placeholder="SENHA"
            style={estilo.input}
            secureTextEntry={true}
          />

          {/* Botão de registro */}
          <TouchableOpacity style={estilo.button}>
            <Text>SIGN-UP</Text>
          </TouchableOpacity>
        </View>

        {/* Navegação para a página de login */}
        <View style={estilo.goConnect}>
          <Text
            style={{ color: '#fff', width: '75.65%' }}
            onPress={() => navigation.navigate('Login')}>
            JÁ TEM CONTA? CONECTE-SE
          </Text>
        </View>
      </View>

      {/* Rodapé com o botão de voltar */}
      <View style={estilo.footer}>
        <Text
          onPress={() => navigation.navigate('Login_Signup')}
          style={estilo.back}>
          VOLTAR
        </Text>
      </View>
    </View>
  );
}