import { View, TouchableOpacity, Text } from "react-native"; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação do React Native
import * as Animatable from 'react-native-animatable'; // Biblioteca de Animações
import { estilo } from './style'; // Importando estilos do arquivo style

export default function Login_Signup() {
  const navigation = useNavigation(); // Hook de navegação

  return (
    <View style={estilo.all}>
      {/* Cabeçalho com o logo animado */}
      <View style={estilo.header}>
        <Animatable.Image
          animation='zoomInUp'
          source={require('../../../assets/Logo.png')}
          style={estilo.logo}
        />
      </View>

      {/* Corpo com botões de navegação */}
      <View style={estilo.body}>
        <TouchableOpacity
          style={estilo.ButtonDefault}
          onPress={() => navigation.navigate('Signup')}>
          <Text>BEM VINDO AO CINEPHONE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilo.ButtonDefault}
          onPress={() => navigation.navigate('Login')}>
          <Text>JÁ TEM CONTA? CONECTE-SE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
import { View, TouchableOpacity, Text } from "react-native"; // Importando Componentes do React Native
import { useNavigation } from '@react-navigation/native'; // Navegação do React Native
import * as Animatable from 'react-native-animatable'; // Biblioteca de Animações
import { estilo } from './style'; // Importando estilos do arquivo style

export default function Login_Signup() {
  const navigation = useNavigation(); // Hook de navegação

  return (
    <View style={estilo.all}>
      {/* Cabeçalho com o logo animado */}
      <View style={estilo.header}>
        <Animatable.Image
          animation='zoomInUp'
          source={require('../../../assets/Logo.png')}
          style={estilo.logo}
        />
      </View>

      {/* Corpo com botões de navegação */}
      <View style={estilo.body}>
        <TouchableOpacity
          style={estilo.ButtonDefault}
          onPress={() => navigation.navigate('Signup')}>
          <Text>BEM VINDO AO CINEPHONE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilo.ButtonDefault}
          onPress={() => navigation.navigate('Login')}>
          <Text>JÁ TEM CONTA? CONECTE-SE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}