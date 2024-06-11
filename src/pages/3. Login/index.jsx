import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação do React Native
import { estilo } from "./style"; // Importando estilos do arquivo style

export default function Login() {
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

      {/* Corpo com o formulário de login */}
      <View style={estilo.body}>
        {/* Título da página de login */}
        <View style={estilo.loginText}>
          <Text style={{ color: '#fff', width: '75.65%' }}>LOGIN</Text>
        </View>

        {/* Inputs de login */}
        <View style={estilo.setInputs}>
          <TextInput
            placeholder="USUARIO"
            style={estilo.input}
          />
          <TextInput
            placeholder="SENHA"
            style={estilo.input}
            secureTextEntry={true}
          />

          {/* Botão de login */}
          <TouchableOpacity
            style={estilo.button}
            onPress={() => navigation.navigate('Filmes')}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* Navegação para a página de signup */}
        <View style={estilo.goCreate}>
          <Text
            style={{ color: '#fff', width: '75.65%' }}
            onPress={() => navigation.navigate('Signup')}>
            NÃO TEM CONTA? CRIE
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